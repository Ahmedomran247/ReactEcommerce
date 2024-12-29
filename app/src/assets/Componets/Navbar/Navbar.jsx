import React, { createContext, useContext } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import CounterContextProvider, { CounterContext } from '../../../Context/CounterContext';
import { UserContext } from '../../../Context/userContext';
import logo from '../../../assets/logo.svg'



export default function Navbar() {
  
  let Navigate = useNavigate()
  let {UserLogin , setUserLogin} = useContext(UserContext)
  const { count } = useContext(CounterContext)
function logout (){
  localStorage.removeItem('userToken')
  setUserLogin(null)
 Navigate('/Login')
}
  return (
    <>
      <nav className="bg-slate-200 fixed top-0 right-0 left-0 flex flex-col lg:flex-row justify-between mx-4 z-20">
        <div>
          <img src={logo} alt="Logo" className="w-15" />
        
          
        </div>
        <ul className="flex flex-col lg:flex-row items-center">
          {UserLogin !== null ? <>
            <li className="mx-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/Cart">Cart</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/Wishlist">Wishlist</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/Categories">Categories</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/brands">Brands</NavLink>
          </li>
          </> : null}
         
        </ul>
        <ul className="flex flex-col lg:flex-row items-center">
          {UserLogin == null ? <>
            <li className="mx-3">
            <NavLink to="/login">Login</NavLink>
          </li>
          
          <li className="mx-3">
            <NavLink to="/register">Register</NavLink>
          </li>
          </> : <li className="mx-3">
          <NavLink onClick={logout} to="/logout">Logout</NavLink>
        </li>}
          
          
        </ul>
        
      </nav>
    </>
  );
}
