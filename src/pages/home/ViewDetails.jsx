import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const toy = useLoaderData()
    

    const { _id, name, url, price, category, sellerName, email, quantity,rating, description} = toy[0]
    
    return (
        <section className='container mx-auto'>
            <h1 className='text-5xl text-center font-bold'>Detailes</h1>
            <div className='m-10 md:grid md:grid-cols-2 md:gap-3'>
                <div><img className='rounded-lg' src={url} alt="Photo of a toy car" /></div>
                <div>
                    <h1>{category}</h1>
                    <h1>Rating : {rating}</h1>
                    <h1>Total : {quantity} pices</h1>
                    <h1 className='text-2xl font-semibold'>Price : ${price}</h1>
                    <h1 className='text-4xl font-bold my-5'>{name}</h1>
                    <h1 className='my-5'>{description}</h1>
                    <h1 className='text-slate-500'>Seller : {sellerName}</h1>
                    <h1 className='text-slate-500'>Email : {email}</h1>
                    

                </div>
            </div>
        </section>
    );
};

export default ViewDetails;