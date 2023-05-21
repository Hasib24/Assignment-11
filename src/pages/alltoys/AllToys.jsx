import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Atoy from './Atoy';

const AllToys = () => {
    const alltoys = useLoaderData()
   
    return (
        <section>
        <div className="container mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Seller
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Toy Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sub-category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        
                        <th scope="col" className="px-6 py-3 "  colSpan='2'>
                            Action
                        </th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {alltoys.map(toy=><Atoy toy={toy} key={toy._id}></Atoy>)} 
                </tbody>
            </table>
        </div>

    </section>
    );
};

export default AllToys;