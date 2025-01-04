
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../Context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const [isOnline , setisOnline] = useState(false)
    let Navigate = useNavigate()
    const { cartID , allproduct ,setallproduct , setnumOfItem  , settotalPrcie} = useContext(CartContext);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        console.log("Token in Payment Component:", token);
        if (!token) {
            console.warn("Token not found. Redirecting to login...");
            window.location.href = '/login'; // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن التوكن موجودًا
        }
    }, []);

     function dedectPayment(values){
if(isOnline == true){
    payOnline(values)
}else{
    cashOrder(values)
}
     }
    async function cashOrder(values) {
        try {
            const token = localStorage.getItem('userToken');
            if (!token) {
                console.error("Token is missing. Cannot proceed.");
                return;
            }

            const { data } = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/orders/${cartID}`,
                { shippingAddress: values },
                {
                    headers: {
                        Token: token,
                    },
                }
            );
            if(data.status == 'success'){
                toast.success('Order placed successfully')
                setallproduct(null)
                setnumOfItem(null)
                settotalPrcie(null)
                Navigate ('/cart')
            }
            

            console.log("Order Response:", data);
            
            console.log("cartID:", cartID);

        } catch (error) {
            console.error("Error placing order:", error.response?.data || error.message);
            alert("Failed to place the order. Please try again.");
        }
    }
    async function payOnline(values) {
        try {
            const token = localStorage.getItem('userToken');
            if (!token) {
                console.error("Token is missing. Cannot proceed.");
                return;
            }

            const { data } = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:5173`,
                { shippingAddress: values },
                {
                    headers: {
                        Token: token,
                    },
                }
            );
            if(data.status == 'success'){
                window.open(data.session.url)
                toast.success('Order placed successfully')
                setallproduct(null)
                setnumOfItem(null)
                settotalPrcie(null)
                Navigate ('/cart')
            }
            

            console.log("Order Response:", data);
            
            console.log("cartID:", cartID);

        } catch (error) {
            console.error("Error placing order:", error.response?.data || error.message);
            alert("Failed to place the order. Please try again.");
        }
    }
    
    const formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: dedectPayment
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto py-10">
                
                <div className="relative z-0 w-full my-5 group">
                    <input
                        value={formik.values.details}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        name="details"
                        id="details"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="details"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your details
                    </label>
                </div>

                
                <div className="relative z-0 w-full my-5 group">
                    <input
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        name="phone"
                        id="phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your phone
                    </label>
                </div>

                
                <div className="relative z-0 w-full my-5 group">
                    <input
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        name="city"
                        id="city"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="city"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your city
                    </label>
                </div>

                
                <button
                    type="submit"
                    onClick={()=>(setisOnline(false))}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Pay Cash
                </button>
                <button
                    type="submit"
                    onClick={()=>(setisOnline(true))}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Pay Online
                </button>
            </form>
        </>
    );
}
