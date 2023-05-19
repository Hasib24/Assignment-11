import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Atoy from './Atoy';

const AllToys = () => {
    const alltoys = useLoaderData()
    console.log(alltoys);
    return (
        <section className='md:grid md:grid-cols-3 container mx-auto'>
            {alltoys.map(atoy =><Atoy atoy={atoy} key={atoy._id}></Atoy>)}
        </section>
    );
};

export default AllToys;