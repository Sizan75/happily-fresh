import React, { useEffect, useState } from 'react';
import AllFoodCart from './AllFoodCart';

const FoodServices = () => {
const [allfood, setAllfood]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/foodservices')
        .then(res=>res.json())
        .then(data=>setAllfood(data))
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            
            {
                allfood.map(food=> <AllFoodCart
                key={food._id}
                food={food}
                ></AllFoodCart> )
            }
        
    </div>
        </div>
    );
};

export default FoodServices;