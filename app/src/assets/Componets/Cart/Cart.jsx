import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'
import Payment from '../Payment/Payment';


export default function Cart() {
  let {allproduct , totalPrcie , numOfItem , updateCartItems , DeleteItem } = useContext(CartContext)

  console.log("allproduct:", allproduct);
  console.log("totalPrcie:", totalPrcie);
  console.log("numOfItem:", numOfItem);

  useEffect(() => {
    console.log("Cart updated", allproduct, numOfItem, totalPrcie);
  }, [allproduct, numOfItem, totalPrcie]);
  



  return (
    <>

 <div className="continer mx-auto my-12 max-w-[80%] bg-gray-200"> 
  <div className="flex justify-between mx-5 ">
  <h2 className=' text-4xl font-bold  my-7 '>Cart Shop</h2>
 <Link to={'/Payment'} ><button className="btn bg-blue-500 my-7  ">check out </button></Link>

  </div>


<div className=" text-center py-3 flex justify-between mx-5 "> 
  <h3 className='text-2xl'>Number of Cart itmes :<span className='text-green-500'>  {numOfItem}</span></h3>
  
  <h3 className='text-2xl'>Total price :<span className='text-green-500'>  {totalPrcie} EGP</span></h3>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-16 py-3">
        <span className="sr-only">Image</span>
      </th>
      <th scope="col" className="px-6 py-3">
        Product
      </th>
      <th scope="col" className="px-6 py-3">
        Qty
      </th>
      <th scope="col" className="px-6 py-3">
        Price
      </th>
      <th scope="col" className="px-6 py-3">
        Action
      </th>
    </tr>
  </thead>
  <tbody>

  {allproduct && allproduct.length > 0 ? (
allproduct.map((prod) => (
  <tr key={prod._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="p-4">
      <img src={prod.product.imageCover || "/docs/images/products/apple-watch.png"} className="w-16 md:w-32 max-w-full max-h-full" alt={prod.title || "Product"} />
    </td>
    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      {prod.product.title|| "Product Name"} 
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center">
        <button onClick={()=>{updateCartItems(prod.product._id , prod.count -1)}}
          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <span className="sr-only">Decrease Quantity</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
          </svg>
        </button>
        <div>
          <input
            type="number"
            id={`product_${prod._id}`} 
            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={prod.count || 1}
            required
          />
        </div>
        <button onClick={()=>{updateCartItems(prod.product._id , prod.count +1)}}
          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <span className="sr-only">Increase Quantity</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
    </td>
    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      {prod.price  || 0} EGP
    </td>
    <td className="px-6 py-4">
      <button onClick={()=>{DeleteItem(prod.product._id , )}}  className="font-medium text-red-600 dark:text-red-500 hover:underline">
        Remove
      </button>
    </td>
  </tr>
))
) : (
<tr>
  <td colSpan="5" className="text-center py-4">
    No products in the cart.
  </td>
</tr>
)}

    


  </tbody>
  
</table>


</div>
  
  </div>    






    </>
  )
  
  
}
