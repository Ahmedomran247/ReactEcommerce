
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import { CartContext } from '../../../Context/CartContext';
import Loader from '../Loader/Loader';

export default function ProductDeatils() {
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState({});
  const [relatedproducts, setRelatedProducts] = useState([]);
  let { id, category } = useParams();

  async function addProductsToCart(id) {
    try {
      const { data } = await addToCart(id);
      if (data.status === 'success') {
        toast.success(data.message || "Product added to cart!");
      } else {
        toast.error(data.message || "Failed to add product to cart.");
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error("Something went wrong!");
    }
  }

  async function getProductDetails() {
    try {
      let response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setProductDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
      toast.error("Failed to load product details!");
    }
  }

  async function getRelatedProducts() {
    try {
      let response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      let allProducts = response.data.data;
      let filteredProducts = allProducts.filter((product) => product.category.name === category);
      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching related products:', error);
      toast.error("Failed to load related products!");
    }
  }

  useEffect(() => {
    getProductDetails();
    getRelatedProducts();
  }, [id, category]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


return (
  <>
    
     <div className="row my-12">
    <div className="w-1/4 p-2">
      <Slider {...settings}>
        {productDetails?.images?.map((src, index) => (
          <img key={index} src={src} className="w-full" alt={productDetails?.title || 'Product'} />
        ))}
      </Slider>
    </div>

    <div className="w-3/4 items-center">
      <div className="p-5 my-5">
        <h4 className="text-2xl my-3">{productDetails?.title}</h4>
        <p className="text-xl text-gray-500 my-5">{productDetails?.description}</p>
        <span className="font-bold">{productDetails?.category?.name}</span>
        <div className="row justify-between">
          <span>{productDetails?.price} EGP</span>
          <span>
            <i className="fa-solid fa-star text-yellow-400"></i> {productDetails?.ratingsAverage}
          </span>
        </div>
        <button
          onClick={() => addProductsToCart(productDetails.id)}
          className="btn bg-green-500 w-full my-12"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div> 
     

  <div className="row">
    {relatedproducts.map((product) => (
      <div key={product.id} className="w-1/6 px-5">
        <Link to={`/ProductDeatils/${product.id}/${product.category.name}`}>
          <div className="shadow-md p-3">
            <img src={product.imageCover} alt={product.title} />
            <span className="text-gray-500 text-xl">{product.category.name}</span>
            <h4>{product.title.split(' ').slice(0, 2).join(' ')}</h4>
            <div className="row justify-between">
              <span>{product.price} EGP</span>
              <span>
                <i className="fa-solid fa-star text-yellow-400"></i> {product.ratingsAverage}
              </span>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div> 
    
  </>
);
}