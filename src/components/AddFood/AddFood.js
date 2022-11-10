import React from 'react';
import toast from 'react-hot-toast';
import useSetTitle from '../../hooks/useSetTitle';

const AddFood = () => {
    useSetTitle('addfood')
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
        
        fetch('https://happily-fresh-server.vercel.app/foodservices', {
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
                    <span className="label-text text-lg">Food Name</span>
                </label>
                <input type="text" name='title' placeholder="" className="input input-bordered input-info w-full " required />
            </div>
            <div class="form-control mb-6">
                <label className="label">
                    <span className="label-text text-lg">Image URL</span>
                </label>
                <input type="text" name="image" placeholder="" className="input input-bordered input-info w-full " required />
            </div>
            <div class="form-control mb-6">
                <label className="label text-lg">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" step="0.01" name='price' placeholder="" className="input input-bordered input-info w-full " required />
            </div>
            <div class="form-control mb-6">
                <label className="label text-lg">
                    <span className="label-text">Details</span>
                </label>
                <textarea name='details' className="textarea textarea-success" placeholder=""></textarea>
            </div>
            <div className='flex justify-center mb-5'>
            <button  className=" text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add Food</button>
            </div>
        </form>


    );
};

export default AddFood;