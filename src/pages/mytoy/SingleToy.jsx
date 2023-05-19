import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';


const SingleToy = () => {
    return (
            <tr class="bg-white border-b hover:bg-gray-50 ">
                {/* name  */}
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                    Apple MacBook Pro 17"
                </th>
                {/* price  */}
                <td class="px-6 py-4">
                    $500
                </td>
                {/* category  */}
                <td class="px-6 py-4">
                    Laptop
                </td>
                {/* action  */}
                <td class="px-6 py-4" colSpan={2}>
                    <HiPencilAlt className='inline'></HiPencilAlt>Update
                </td>
                <td>
                    <AiOutlineDelete className='inline'></AiOutlineDelete> Delete
                </td>
                
            </tr>
    );
};

export default SingleToy;