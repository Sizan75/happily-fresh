import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from '../../../assets/banner image/ss.jpg'
import slider2 from '../../../assets/banner image/fooddelivery.jpg'
import slider3 from '../../../assets/banner image/still_2x.webp'
const Slider = () => {
    
    return (
        <div className="carousel w-3/4 h-1/2 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} alt=' ' className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4  ">
    <h1 className='text-sky-800 font-bold text-5xl'>
        Repid Delivery <br/>
        Inside Dhaka <br/>
        City
    </h1>
     </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className=" "><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide2" className=" "><FaArrowRight></FaArrowRight></a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} alt='' className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4  ">
    <h1 className='text-sky-800 font-bold text-5xl'>
        Repid Delivery <br/>
        Inside Dhaka <br/>
        City
    </h1>
     </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className=" "><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide3" className=" "><FaArrowRight></FaArrowRight></a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} alt='' className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4  ">
    <h1 className='text-sky-800 font-bold text-5xl'>
        Repid Delivery <br/>
        Inside Dhaka <br/>
        City
    </h1>
     </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className=""><FaArrowLeft></FaArrowLeft></a> 
            <a href="#slide1" className=""><FaArrowRight></FaArrowRight></a>
          </div>
        </div> 
        
      </div>
    );
};

export default Slider;