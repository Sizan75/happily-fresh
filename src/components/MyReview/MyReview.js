import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {
    const [reviews, setReviews]= useState([])
    const {user}=useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])
    return (
        <div>
            <h1>{reviews.length}</h1>
        </div>
    );
};

export default MyReview;