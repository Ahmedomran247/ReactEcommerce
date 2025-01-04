import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";


export default function RecentProducts() {

    const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };
  
  const { addToCart } = useContext(CartContext);
  const [recentproducts, setRecentProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // تعريف حالة isLoading

  async function getRecentProducts() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      setRecentProducts(data.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to load products.");
    } finally {
      setIsLoading(false); 
    }
  }

  async function addProductsToCart(id) {
    console.log("Product ID:", id);
    try {
      let { data } = await addToCart(id);
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Something went wrong!");
    }
  }

  useEffect(() => {
    getRecentProducts();
  }, []);

  return (
    <>
      <Toaster /> 
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row flex flex-wrap gap-5 justify-center container  relative">
          {recentproducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/5 px-5 shadow group hover:shadow-xl hover:shadow-blue-500 transition-all duration-300 rounded-lg overflow-hidden">
              <Link to={`/ProductDeatils/${product.id}/${product.category.name}`}>
                <div className="shadow-md p-3 ">
                  <img src={product.imageCover} alt={product.title} />
                  <span className="text-gray-500 text-xl">
                    {product.category.name}
                  </span>
                  <h4>{product.title.split(" ").slice(0, 2).join(" ")}</h4>
                  <div className="row justify-between">
                    <span>{product.price} EGP</span>
                    <span className={`cursor-pointer text-3xl ${isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-700 transform hover:scale-125`}
                       onClick={toggleHeart} >
                    <i class="fa-solid fa-heart"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-yellow-400"></i>{" "}
                      {product.ratingsAverage}
                    </span>
                    
                  </div>
                </div>
              </Link>
              <button
                onClick={() => {
                  addProductsToCart(product._id);
                }}
                className="btn bg-green-500 w-full py-5"
              >
                Add to Cart
              </button>
            </div>
           
          ))}
        </div>
 

      )}
    </>
  );
}


