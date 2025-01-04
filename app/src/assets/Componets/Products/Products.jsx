import { useEffect, useState } from "react";
import Loader from '../Loader/Loader'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";


export default function Products() {
  let [product , setProduct]=useState([])

  
  
  async function getProducts(){
    let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    console.log(data.data);
    setProduct(data.data)
    
  }
  
  
  
      useEffect(()=>{
        getProducts()
      } , [])
      return (
        <>
          {product.length > 0 ? (
            <div className="py-10 flex flex-wrap gap-6 justify-center">
              {product.map((prod) => {
                return (
                  <div
                    key={prod.id}
                    className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-5 shadow group hover:shadow-xl hover:shadow-blue-500 transition-all duration-300 rounded-lg overflow-hidden"
                  >
                    <div className="product px-6 py-10 group">
                      <Link to={`/productDetails/${prod.id}/${prod.category.name}`}>
                        <img
                          src={prod.imageCover}
                          className="w-full h-[200px] object-cover"
                          alt=""
                        />
                        <span className="text-green-700 font-light">{prod.category.name}</span>
                        <h3 className="text-xl font-normal">
                          {prod.title.split(' ').slice(0, 2).join(' ')}
                        </h3>
                        <div className="flex justify-between">
                          <span>{prod.price} EGP</span>
                          <span>
                            15 <i className="fas fa-star text-yellow-300"></i>
                          </span>
                        </div>
                      </Link>
                      <button
                onClick={() => {
                  addProductsToCart(product._id);
                }}
                className="btn bg-green-500 w-full "
              >
                Add to Cart
              </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Loader />
          )}
        </>
      );
    }

