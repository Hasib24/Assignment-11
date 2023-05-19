import React from 'react';
import SingleToy from './SingleToy';
import { useLoaderData } from 'react-router-dom';


const MyToys = ({toy}) => {
    
    const toys = useLoaderData()
    return (
        <section>
            <div className="container mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            
                            <th scope="col" className="px-6 py-3 "  colSpan='2'>
                                Update
                            </th>
                            <th scope='col'>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map(toy=><SingleToy toy={toy} key={toy._id}></SingleToy>)} 
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default MyToys;