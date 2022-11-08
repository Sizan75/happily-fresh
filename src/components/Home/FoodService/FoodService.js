import React, { useEffect, useState } from 'react';
import FoodServiceCart from './FoodServiceCart';

const FoodService = () => {
    const [foods,setFoods]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/foodservice')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            
                {
                    foods.map(food=> <FoodServiceCart
                        key={food._id}
                        food={food}
                    ></FoodServiceCart>)
                }
            
        </div>
        </div>
    );
};

export default FoodService;