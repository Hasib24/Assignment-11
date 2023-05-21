import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const toy = useLoaderData()
    console.log(toy);
    
    return (
        <div>
            view details
        </div>
    );
};

export default ViewDetails;