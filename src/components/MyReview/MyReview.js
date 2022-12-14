import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    useSetTitle('my review')
    const [myreviews, setMyReviews]= useState([])
    const {user}=useContext(AuthContext)
    const {email}=user
    useEffect(() => {
        fetch(`https://happily-fresh-server.vercel.app/myreviews?userEmail=${email}`)
            .then(res => res.json())
            .then(data =>
                {   console.log(data)
                     setMyReviews(data)
                })
    }, [email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`https://happily-fresh-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Review deleted successfully')
                    const remaining = myreviews.filter(rev => rev._id !== id);
                    setMyReviews(remaining);
                    
                }
            })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://happily-fresh-server.vercel.app/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = myreviews.filter(rev => rev._id !== id);
                const approving = myreviews.find(rev => rev._id === id);
                approving.status = 'Approved'

                const newReviews = [approving, ...remaining];
                setMyReviews(newReviews);
            }
        })
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
                handleStatusUpdate={handleStatusUpdate}
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