// import React, { createContext, useContext } from 'react';

// import { NavLink, useNavigate } from 'react-router-dom';
// import CounterContextProvider, { CounterContext } from '../../../Context/CounterContext';
// import { UserContext } from '../../../Context/userContext';
// import logo from '../../../assets/logo.svg'
// import { CartContext } from '../../../Context/CartContext';



// export default function Navbar() {
//    let {numOfItem} = useContext(CartContext)
//   let Navigate = useNavigate()
//   let {UserLogin , setUserLogin} = useContext(UserContext)
//   const { count } = useContext(CounterContext)
// function logout (){
//   localStorage.removeItem('userToken')
//   setUserLogin(null)
//  Navigate('/Login')
// }
//   return (
//     <>
//       <nav className="bg-slate-200 fixed top-0 right-0 left-0 flex flex-col lg:flex-row justify-between mx-4 z-20">
//         <div>
//           <img src={logo} alt="Logo" className="w-15" />
        
          
//         </div>
//         <ul className="flex flex-col lg:flex-row items-center">
//           {UserLogin !== null ? <>
//             <li className="mx-3">
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li className="mx-3 relative">
//             <NavLink to="/Cart">Cart <span class="bg-pink-100 absolute top-[-10px] end-[-25px] text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{numOfItem}</span> </NavLink>
//           </li>
//           <li className="mx-3">
//             <NavLink to="/Wishlist">Wishlist</NavLink>
//           </li>
//           <li className="mx-3">
//             <NavLink to="/Products">Products</NavLink>
//           </li>
//           <li className="mx-3">
//             <NavLink to="/Categories">Categories</NavLink>
//           </li>
//           <li className="mx-3">
//             <NavLink to="/brands">Brands</NavLink>
//           </li>
//           </> : null}
         
//         </ul>
//         <ul className="flex flex-col lg:flex-row items-center">
//           {UserLogin == null ? <>
//             <li className="mx-3">
//             <NavLink to="/login">Login</NavLink>
//           </li>
          
//           <li className="mx-3">
//             <NavLink to="/register">Register</NavLink>
//           </li>
//           </> : <li className="mx-3">
//           <NavLink onClick={logout} to="/logout">Logout</NavLink>
//         </li>}
          
          
//         </ul>
        
//       </nav>
//     </>
//   );
// }
// import React, { useState, useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { CounterContext } from '../../../Context/CounterContext';
// import { UserContext } from '../../../Context/userContext';
// import { CartContext } from '../../../Context/CartContext';
// import logo from '../../../assets/logo.svg';

// export default function Navbar() {
//   let { numOfItem } = useContext(CartContext);
//   let Navigate = useNavigate();
//   let { UserLogin, setUserLogin } = useContext(UserContext);
//   const { count } = useContext(CounterContext);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function logout() {
//     localStorage.removeItem('userToken');
//     setUserLogin(null);
//     Navigate('/Login');
//   }

//   return (
//     <>
//       <nav className="bg-slate-200 fixed top-0 right-0 left-0 flex flex-col lg:flex-row justify-between mx-4 z-20">
//         <div>
//           <img src={logo} alt="Logo" className="w-15" />
//         </div>

       
//         <div className="lg:flex lg:items-center lg:flex-row hidden justify-between">

//           <ul className="flex flex-col lg:flex-row items-center mr-[300px]">
//             {UserLogin !== null ? (
//               <>
//                 <li className="mx-3">
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li className="mx-3 relative">
//                   <NavLink to="/Cart">
//                     Cart{' '}
//                     <span className="bg-pink-100 absolute top-[-10px] end-[-25px] text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
//                       {numOfItem}
//                     </span>
//                   </NavLink>
//                 </li>
//                 <li className="mx-3">
//                   <NavLink to="/Wishlist">Wishlist</NavLink>
//                 </li>
//                 <li className="mx-3">
//                   <NavLink to="/Products">Products</NavLink>
//                 </li>
//                 <li className="mx-3">
//                   <NavLink to="/Categories">Categories</NavLink>
//                 </li>
//                 <li className="mx-3">
//                   <NavLink to="/brands">Brands</NavLink>
//                 </li>
//               </>
//             ) : null}
//           </ul>

//           <ul className="flex flex-col lg:flex-row items-center">
//             {UserLogin == null ? (
//               <>
//                 <li className="mx-3">
//                   <NavLink to="/login">Login</NavLink>
//                 </li>

//                 <li className="mx-3">
//                   <NavLink to="/register">Register</NavLink>
//                 </li>
//               </>
//             ) : (
//               <li className="mx-3">
//                 <NavLink onClick={logout} to="/logout">
//                   Logout
//                 </NavLink>
//               </li>
//             )}
//           </ul>
//         </div>

      
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-2xl"
//           >
//             &#9776; 
//           </button>
//         </div>
//       </nav>

      
//       {isMenuOpen && (
//         <div className="lg:hidden bg-slate-200 p-5 flex justify-between">
//           <ul className="flex flex-col items-center">
//             {UserLogin !== null ? (
//               <>
//                 <li className="my-2">
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li className="my-2">
//                   <NavLink to="/Cart">
//                     Cart{' '}
//                     <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
//                       {numOfItem}
//                     </span>
//                   </NavLink>
//                 </li>
//                 <li className="my-2">
//                   <NavLink to="/Wishlist">Wishlist</NavLink>
//                 </li>
//                 <li className="my-2">
//                   <NavLink to="/Products">Products</NavLink>
//                 </li>
//                 <li className="my-2">
//                   <NavLink to="/Categories">Categories</NavLink>
//                 </li>
//                 <li className="my-2">
//                   <NavLink to="/brands">Brands</NavLink>
//                 </li>
//               </>
//             ) : null}

//             {UserLogin == null ? (
//               <>
//                 <li className="my-2">
//                   <NavLink to="/login">Login</NavLink>
//                 </li>

//                 <li className="my-2">
//                   <NavLink to="/register">Register</NavLink>
//                 </li>
//               </>
//             ) : (
//               <li className="my-2">
//                 <NavLink onClick={logout} to="/logout">
//                   Logout
//                 </NavLink>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }
import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../../Context/CounterContext';
import { UserContext } from '../../../Context/userContext';
import { CartContext } from '../../../Context/CartContext';
import logo from '../../../assets/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';



export default function Navbar() {
  let { numOfItem } = useContext(CartContext);
  let Navigate = useNavigate();
  let { UserLogin, setUserLogin } = useContext(UserContext);
  const { count } = useContext(CounterContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logout() {
    localStorage.removeItem('userToken');
    setUserLogin(null);
    Navigate('/Login');
  }

  return (
    <>
      <nav className="bg-slate-200 fixed top-0 right-0 left-0 flex flex-col lg:flex-row justify-between mx-4 z-20">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-15" />
        </div>

        {/* Links for Large Screens */}
        <div className="lg:flex lg:items-center lg:flex-row hidden justify-between">
          <ul className="flex flex-col lg:flex-row items-center mr-[300px]">
            {UserLogin !== null ? (
              <>
                <li className="mx-3">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="mx-3 ">
                  <NavLink to="/Cart">
                    Cart{' '}
                  
                  </NavLink>
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
                 <div className='mx-12 relative'> <CgShoppingCart size={30} /><span className="bg-pink-100 absolute top-[-2px] end-[-20px] text-green-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-950 dark:text-pink-300">
                      {numOfItem}
                    </span></div>
                 
              </>
            ) : null}
          </ul>

          <ul className="flex flex-col lg:flex-row items-center">
            {UserLogin == null ? (
              <>
                <li className="mx-3">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="mx-3">
                  <NavLink to="/register">Register</NavLink>
                </li>
                
              </>
            ) : (
              <li className="mx-3">
                <NavLink onClick={logout} to="/logout">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl ml-auto"
          >
            &#9776;
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-200 p-5 flex justify-between">
          <ul className="flex flex-col items-center">
            {UserLogin !== null ? (
              <>
                <li className="my-2">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="my-2">
                  <NavLink to="/Cart">
                    Cart{' '}
                    <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                      {numOfItem}
                    </span>
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink to="/Wishlist">Wishlist</NavLink>
                </li>
                <li className="my-2">
                  <NavLink to="/Products">Products</NavLink>
                </li>
                <li className="my-2">
                  <NavLink to="/Categories">Categories</NavLink>
                </li>
                <li className="my-2">
                  <NavLink to="/brands">Brands</NavLink>
                </li>
              </>
            ) : null}

            {UserLogin == null ? (
              <>
                <li className="my-2">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="my-2">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            ) : (
              <li className="my-2">
                
                <NavLink onClick={logout} to="/logout">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
