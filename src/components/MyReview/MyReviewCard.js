import React, {  useState } from 'react';
import toast  from 'react-hot-toast';
import { FaTimesCircle } from 'react-icons/fa';


const MyReviewCard = ({rev,handleDelete}) => {
    const {review,userEmail,userPhotoURL,foodName,_id}= rev
    

    const [newrev, setNewRev] = useState(rev);

    const handleUpdateUser = event =>{
        event.preventDefault();
        
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newrev)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('review updated successfully')
                console.log(data);
            }
            
        })
    }

    const handleInputAreaChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const updaterev = {...rev}
        updaterev[field] = value;
        setNewRev(updaterev);
    }

    return (
       
             <tr>
        <th>
          <button onClick={() => handleDelete(_id)}><FaTimesCircle></FaTimesCircle></button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={userPhotoURL} alt="User" />
              </div>
            </div>
            <div>
              <div className="font-bold">{userEmail}</div>
             
            </div>
          </div>
        </td>
        <td>
        <h3 className="text-lg ">Food:{foodName}</h3>
         <br/>Review:
         <br/>
         <textarea  onChange={handleInputAreaChange} defaultValue={review} name='review' className="textarea textarea-info w-3/4" placeholder="You can give a review of the food here."></textarea>
          
        </td>
        <td>
        <button onClick={handleUpdateUser} className="btn btn-active btn-accent">Update</button>
        </td>
        
      </tr>
      
    );
};

export default MyReviewCard;