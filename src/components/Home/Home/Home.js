import React from 'react';
import FoodService from '../FoodService/FoodService';
import Pricing from '../Pricing/Pricing';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <FoodService></FoodService>
          <Pricing></Pricing>  
        </div>
    );
};

export default Home;