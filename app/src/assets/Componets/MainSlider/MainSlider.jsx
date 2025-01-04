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
    
    <div className="mx-auto flex flex-wrap justify-center items-center space-y-4 lg:space-y-0">
  
  <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <Slider {...settings}>
      <img className="h-[200px] w-full " src={Sliderimg} alt="" />
      <img className="h-[200px] w-full " src={Slider1} alt="" />
      <img className="h-[200px] w-full " src={Slider4} alt="" />
    </Slider>
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
    <img className="h-[150px] w-full " src={Slider2} alt="" />
    <img className="h-[150px] w-full " src={Slider3} alt="" />
  </div>
</div>

  )
}
