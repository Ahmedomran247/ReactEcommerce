import React, { useContext, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserContext } from '../../../Context/userContext';


export default function Register() {
  let {setUserLogin} = useContext(UserContext)
  
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

   let Navigate = useNavigate()
  let user = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
  };

  let validate = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Minimum is 3').max(9, 'Maximum is 9'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][a-z0-9]{5,8}$/, 'Invalid password'),
    rePassword: Yup.string()
      .required('RePassword is required')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(/^01[0125][0-9]{8}$/, 'Invalid phone number'),
  });


async function submitForm(val) {
  try {
    setloading(true); 

    const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, val);

    localStorage.setItem('userToken', response.data.token);
      setUserLogin = ( response.data.token)
    Navigate('/login');
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
      <div className="my-[75px]">
        

        <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
       
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          
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

          
          <div className="mb-5">
            <label
              htmlFor="rePassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
              type="password"
              id="rePassword"
              name="rePassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.rePassword && formik.touched.rePassword && (
              <p className="text-red-500 text-sm">{formik.errors.rePassword}</p>
            )}
          </div>

         
          <div className="my-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="text"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}
          </div>
          {error ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {error}
            </div>: null}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           {loading ? <i class="fa-solid fa-spinner fa-spin px-1"></i> : "Register Now"}
           
          </button>
        </form>
      </div>
    </>
  );
}
