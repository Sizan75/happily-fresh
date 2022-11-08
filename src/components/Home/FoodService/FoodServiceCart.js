import React from 'react';
import { Link } from 'react-router-dom';

const FoodServiceCart = ({food}) => {
    const {image,title,price,details,_id}=food
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
               <img src={image} alt="food" />
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

export default FoodServiceCart;