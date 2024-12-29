import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CatogorySlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
      };
     const [categoriesproduct , setcategoriesproduct] = useState([])
      async function getCategrosproduct() {
        try {
          let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
          setcategoriesproduct(data.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    
      useEffect(() => {
        getCategrosproduct();
      }, []);
  return (
    <Slider {...settings}>
      {categoriesproduct.map((prod)=>
    <div>
        <img src={prod.image} className='h-[200px] my-5' alt="" />
        <h4>{prod.name}</h4>
    </div>
    )}
    </Slider>
  )
}
