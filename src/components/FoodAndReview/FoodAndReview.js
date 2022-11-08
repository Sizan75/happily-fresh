import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
const Food = () => {
    const food = useLoaderData()
    const { image, _id, title, price, details } = food
    const { user } = useContext(AuthContext)
    const {email,photoURL}=user
 
const handleAddReview =event =>{
    event.preventDefault()
    const form=event.target;
    const review= form.review.value;

    const userReview={
        review: review,
        userEmail:email,
        userPhotoURL:photoURL,
        foodId:_id
    }
    console.log(userReview)
    fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

}

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
                <h1 className='font-semibold text-3xl'>Reviews of {title}</h1>
                <div>
                    <div>
                        {
                            user?.email ?
                                <div>
                                    <div className='flex mb-2'>
                                        {user?.photoURL ?
                                            <img className="mask mask-circle w-24 " src={user.photoURL} alt="" />
                                            :
                                            <FaUser></FaUser>
                                        }
                                        <h2 className='font-semibold text-2xl'>{user?.email}</h2>
                                    </div>
                                    <form onSubmit={handleAddReview} className='mb-4'>
                                        <textarea name='review' className="textarea textarea-info w-3/4" placeholder="You can give a review of the food here."></textarea>
                                        
                                          <button className="btn btn-primary w-1/2 ">Post</button>
                                        
                                    </form>
                                </div>
                                :
                                <p>
                                    Please Login to add a review.
                                </p>
                        }
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
