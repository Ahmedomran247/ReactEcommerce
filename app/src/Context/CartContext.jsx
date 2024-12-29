
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {

    const [totalPrcie , settotalPrcie] = useState(0)
    const [cartID , setcartID] = useState(0)
    const [allproduct , setallproduct] = useState(null)
    const [numOfItem , setnumOfItem] = useState(0)
  const headers = {
    token: localStorage.getItem('userToken'),
  };

  function addToCart(id) {
   return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: id },
        { headers }
      )
      .then((response) => {
        
        settotalPrcie(response.data.data.totalCartPrice)
        setnumOfItem(response.data.numOfItem)
        setallproduct(response.data.data.products)
        setcartID(response.data.cartID )
        
        return response
      })
      .catch((error) => {
        console.error(error);
        return error
      });
  }

   function getCartItems(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
      headers
    }).then((response)=>{
      settotalPrcie(response.data.data.totalCartPrice)
      setnumOfItem(response.data.numOfItem);
      setallproduct(response.data.data.products);
      setcartID(response.data.cartID)
    }
      
       )
    
    
    .catch((error)=> console.log(error))
   }

    useEffect(()=>{
      getCartItems()
    })
  return (
    <CartContext.Provider value={{ addToCart , getCartItems , allproduct , totalPrcie ,  numOfItem}}>
      {props.children}
    </CartContext.Provider>
  );
}
