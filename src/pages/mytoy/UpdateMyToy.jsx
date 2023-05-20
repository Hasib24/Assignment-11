import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToy = () => {
    
    const toy = useLoaderData()
    const { name, sellerName, email, url, category, price, rating, quantity, description } = toy[0]
    

    return (
        <form className=' my-10' onSubmit={(e)=>hadleAddToy(e)}>
        <div className='border rounded-md shadow-xl container mx-auto w-2/3 p-10'>

            <div className='md:flex md:justify-between md:gap-2'>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="text" name="name" id="name" placeholder='Toy Name' defaultValue={name} />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="url" name="url" id="url" placeholder='Photo url of toy' defaultValue={url}/>
            </div>
            <div className='md:flex md:justify-between md:gap-2'>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="text" name="sellerName" id="sellerName" defaultValue={sellerName} disabled />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="email" name="email" id="email" defaultValue={email}  disabled/>
            </div>
            <div className=''>
                <h3 className=''>Additional Information</h3>
                <select className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' name="category" id="category" disabled>
                    <option value="sports-car">sports car</option>
                    <option value="regular-car">regular car</option>
                </select>
            </div>
            <div className='md:flex md:justify-between'>
                <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='price' id='price' placeholder='Price' defaultValue={price} />
                <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='rating' id='rating' placeholder='Rating' defaultValue={rating}/>
                <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='quantity' id='quantity' placeholder='Quantity' defaultValue={quantity} />

            </div>
            <div>
                <textarea className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' name="description" id="des" placeholder='Descrition' defaultValue={description} ></textarea>
            </div>
            <div>
                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" value="UPDATE TOY" />
            </div>
        </div>

    </form>
    );
};

export default UpdateMyToy;