// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Slider from "react-slick";

// export default function CatogorySlider() {
//   const [isLoading, setIsLoading] = useState(true);
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 6,
//         slidesToScroll: 2,
//         responsive[
//           {
//             breakpoint: 768, // الشاشات المتوسطة
//             settings: {
//               slidesToShow: 3,  // 3 منتجات تظهر في الشاشات المتوسطة
//             },
//         ]
//       };
//      const [categoriesproduct , setcategoriesproduct] = useState([])
//       async function getCategrosproduct() {
//         try {
//           let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
//           setcategoriesproduct(data.data);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         }
//       }
    
//       useEffect(() => {
//         getCategrosproduct();
//       }, []);
//   return (
   
//     <Slider {...settings}>
//     {categoriesproduct.map((prod) => (
//       <div className="w-full  p-2">
//         <img src={prod.image} className="h-[150px] my-5 w-full object-cover" alt="" />
//         <h4 className="text-center">{prod.name}</h4>
//       </div>
//     ))}
//   </Slider>
  
  
//   )
// }

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loader from '../Loader/Loader'; 

export default function CategorySlider() {
  const [categoriesproduct, setCategoriesProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 6,  
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 6,  
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,  
        },
      },
      {
        breakpoint: 580, 
        settings: {
          slidesToShow: 2,  
        },
      },
    ],
  };

  async function getCategoriesProduct() {
    try {
      const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
      const data = await response.json();
      setCategoriesProduct(data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategoriesProduct();
  }, []);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <div className="mx-auto my-10">
      <Slider {...settings}>
        {categoriesproduct.map((prod) => (
          <div key={prod.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
            <img src={prod.image} className="h-[150px] my-5 w-full " alt={prod.name} />
            <h4 className="text-center">{prod.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}
