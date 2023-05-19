import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToy = () => {
    
    const toy = useLoaderData()
    console.log(toy);

    return (
        <div>
            update
        </div>
    );
};

export default UpdateMyToy;