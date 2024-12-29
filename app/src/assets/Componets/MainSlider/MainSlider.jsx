import React from 'react'
import Sliderimg from '../../../assets/slider.png'
import Slider1 from '../../../assets/slider1.png'
import Slider2 from '../../../assets/slider2.png'
import Slider3 from '../../../assets/slider3.png'
import Slider4 from '../../../assets/slider4.png'
import Slider from "react-slick";

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div className="row mx-auto items-center justify-center  ">
        <div className="w-1/4">

        <Slider {...settings}>
      <img  className='h-[300px]'  src={Sliderimg} alt="" />
      <img  className='h-[300px]'    src={Slider1} alt="" />
      <img src={Slider4}  className='h-[200px]' alt="" />
    </Slider>
        </div>
        <div className="w-1/4">
        <img className='h-[200px]' src={Slider2} alt="" />
        <img className='h-[200px]'  src={Slider3} alt="" />
        </div>
    </div>
  )
}
