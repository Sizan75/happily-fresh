import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const [myreviews, setMyReviews]= useState([])
    const {user}=useContext(AuthContext)
    const {email}=user
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?userEmail=${email}`)
            .then(res => res.json())
            .then(data =>
                {   console.log(data)
                     setMyReviews(data)
                })
    }, [email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = myreviews.filter(rev => rev._id !== id);
                    setMyReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
           {myreviews.length !== 0 ? 
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          Delete
        </th>
        <th>User</th>
        <th>Review</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
                myreviews.map(rev=> <MyReviewCard 
                key={rev._id}
                rev={rev}
                handleDelete={handleDelete}
                ></MyReviewCard>)
            
            }
    </tbody> 
  </table>
            </div>
            : 
            <p className='text-4xl flex justify-center items-center font-bold'>No reviews were added</p>
           }
        </div>
    );
};

export default MyReview;