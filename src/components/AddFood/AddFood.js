import React from 'react';
import toast from 'react-hot-toast';

const AddFood = () => {

    const handleAddFood = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const details = form.details.value;

        const food = {
            title,
            price,
            details,
            image
        }
        
        fetch('http://localhost:5000/foodservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Food added Successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
        }
    return (

        <form onSubmit={handleAddFood} className='w-full ms-8'>
            <div class="form-control mb-6">
                <label className="label">
                    <span className="label-text">Food Name</span>
                </label>
                <input type="text" name='title' placeholder="" className="input input-bordered input-info w-full " required />
            </div>
            <div class="form-control mb-6">
                <label className="label">
                    <span className="label-text">Image URL</span>
                </label>
                <input type="text" name="image" placeholder="" className="input input-bordered input-info w-full " required />
            </div>
            <div class="form-control mb-6">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" name='price' placeholder="" className="input input-bordered input-info w-full " required />
            </div>
            <div class="form-control mb-6">
                <label className="label">
                    <span className="label-text">Details</span>
                </label>
                <textarea name='details' className="textarea textarea-success" placeholder=""></textarea>
            </div >
            <button  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Food</button>
        </form>


    );
};

export default AddFood;