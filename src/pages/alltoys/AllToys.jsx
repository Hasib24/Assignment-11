import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Atoy from './Atoy';

const AllToys = () => {
    const alltoys = useLoaderData()
    console.log(alltoys);
    return (
        <section className='md:grid md:grid-cols-3'>
            {alltoys.map(atoy =><Atoy atoy={atoy} key={atoy._id}></Atoy>)}
        </section>
    );
};

export default AllToys;