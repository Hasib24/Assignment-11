import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToy = () => {
    
    const toy = useLoaderData()
    const { name, sellerName, email, url, category, price, rating, quantity, description } = toy[0]
    

    return (
        <form className='border' onSubmit={(e)=>hadleAddToy(e)}>
        <div className='border container mx-auto w-2/3 p-10'>

            <div className='md:flex md:justify-between'>
                <input className='outline-none border rounded-md' type="text" name="name" id="name" placeholder='Toy Name' />
                <input className='outline-none border rounded-md my-3' type="url" name="url" id="url" placeholder='Photo url of toy' />
            </div>
            <div className='md:flex md:justify-between'>
                <input className='outline-none border rounded-md my-3' type="text" name="sellerName" id="sellerName" defaultValue={sellerName} />
                <input className='outline-none border rounded-md my-3' type="email" name="email" id="email" defaultValue={email} disabled />
            </div>
            <div>
                <h3>Additional Information</h3>
                <select name="category" id="category">
                    <option value="sports-car">sports car</option>
                    <option value="regular-car">regular car</option>
                </select>
            </div>
            <div className='md:flex md:justify-between'>
                <input className='outline-none border rounded-md my-3' type="number" name='price' id='price' placeholder='Price' />
                <input className='outline-none border rounded-md my-3' type="number" name='rating' id='rating' placeholder='Rating' />
                <input className='outline-none border rounded-md my-3' type="number" name='quantity' id='quantity' placeholder='Quantity' />

            </div>
            <div>
                <textarea className='w-full border' name="description" id="des" ></textarea>
            </div>
            <div>
                <input type="submit" value="ADD TOY" />
            </div>
        </div>

    </form>
    );
};

export default UpdateMyToy;