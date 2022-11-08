import React, {  useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Food = () => {
    const food = useLoaderData()
    const { image, _id, title, price, details } = food
    const {user}= useContext(AuthContext)
    console.log(user)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6 mt-5' >
            <div className="card card-compact w-96 bg-base-100  shadow-xl  mb-5">
                <img src={image} className='h-64' alt="food" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <h2 className='font-semibold text-xl'>Price: ${price}</h2>
                </div> 
            </div>
            <div>
                    <h1 className='text-semibold text-3xl'>Reviews of {title}</h1>

                </div>
        </div>
    );
};

export default Food;
