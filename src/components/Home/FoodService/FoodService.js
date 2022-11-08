import React, { useEffect, useState } from 'react';

const FoodService = () => {
    const [food,setFood]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/foodservice')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default FoodService;