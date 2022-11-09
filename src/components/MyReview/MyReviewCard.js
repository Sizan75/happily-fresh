import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviewCard = ({rev,handleDelete}) => {
    const {review,userEmail,userPhotoURL,foodId,foodName,_id}= rev
    const {user}=useContext(AuthContext)



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
         <br/>Review: {review}
        </td>
        <td>
        <button className="btn btn-active btn-accent">Update</button>
        </td>
        
      </tr>
      
    );
};

export default MyReviewCard;