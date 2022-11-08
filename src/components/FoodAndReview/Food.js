import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Food = () => {
    const food= useLoaderData()
    const {image,_id,title,price,details}=food

    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
           <img src={image} className='h-64' alt="food" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <h2 className='font-semibold text-xl'>Price: ${price}</h2>
                <div className="card-actions ">
                    <Link to={`/foodservice/${_id}`}><button className="btn btn-primary w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Food;