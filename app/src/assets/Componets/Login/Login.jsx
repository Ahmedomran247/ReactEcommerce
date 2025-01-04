import React, { useContext, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../../Context/CartContext';
import { UserContext } from '../../../Context/userContext';
import FontAwesome from 'react-fontawesome';



export default function Login() {
  let { getCartItems } = useContext(CartContext);
   let {setUserLogin} = useContext(UserContext)
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

   let Navigate = useNavigate()
  let user = {
    email: '',
    password: '',
  };

  let validate = Yup.object().shape({
    
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][a-z0-9]{5,8}$/, 'Invalid password'),
  });

async function submitForm(val) {
  try {
    setloading(true); 

    const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, val);

    localStorage.setItem('userToken', response.data.token);

    setUserLogin(response.data.token);
    getCartItems()
    Navigate('/');
  } catch (error) {
    seterror(error.response?.data?.message || "An error occurred");
  } finally {
    setloading(false);
  }
}

  let formik = useFormik({
    initialValues: user,
    onSubmit: submitForm,
    validationSchema: validate,
  });

  return (
    <>
      <div className="my-[100px]">
        

        <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
         
          
          
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {error ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {error}
            </div>: null}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           {loading ? <i class="fa-solid fa-spinner"></i> : "Log in"}
           
          </button>
        </form>
      </div>
    </>
  );
}
