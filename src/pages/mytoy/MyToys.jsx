import React from 'react';
import SingleToy from './SingleToy';


const MyToys = () => {
    return (
        <section>
            <div class="container mx-auto my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            
                            <th scope="col" class="px-6 py-3 "  colSpan='2'>
                                Update
                            </th>
                            <th scope='col'>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <SingleToy></SingleToy>
                        <SingleToy></SingleToy>
                        <SingleToy></SingleToy>
                        <SingleToy></SingleToy>
                        <SingleToy></SingleToy>
                        <SingleToy></SingleToy>
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default MyToys;