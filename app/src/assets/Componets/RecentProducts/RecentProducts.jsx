
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

import toast, { Toaster } from 'react-hot-toast';
export default function RecentProducts() {
  let { addToCart } = useContext(CartContext);

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

  const [recentproducts, setrecentproducts] = useState([]);

  async function getRecentProducts() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      setrecentproducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getRecentProducts();
  }, []);

  return (
    <div className="row">
      {recentproducts.map((product) => (
        <div key={product.id} className="w-1/6 px-5">
          <Link to={`/ProductDeatils/${product.id}/${product.category.name}`}>
            <div className="shadow-md p-3">
              <img src={product.imageCover} alt={product.title} />
              <span className="text-gray-500 text-xl">
                {product.category.name}
              </span>
              <h4>{product.title.split(" ").slice(0, 2).join(" ")}</h4>
              <div className="row justify-between">
                <span>{product.price} EGP</span>
                <span>
                  <i className="fa-solid fa-star text-yellow-400"></i>{" "}
                  {product.ratingsAverage}
                </span>
              </div>
            </div>
          </Link>
          <button
            onClick={() => {
              addProductsToCart(product.id);
            }}
            className="btn bg-green-500 w-full my-12"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
