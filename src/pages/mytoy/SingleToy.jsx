import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';


const SingleToy = ({toy}) => {
    const { _id, name, price, category} = toy
    

    const handleUpdate = (_id) =>{
        console.log(_id);
    }
    const handleDelete=(_id) =>{
        console.log(_id);
    }

    return (
            <tr className="bg-white border-b hover:bg-gray-50 ">
                {/* name  */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                    {name}
                </th>
                {/* price  */}
                <td className="px-6 py-4">
                    ${price}
                </td>
                {/* category  */}
                <td className="px-6 py-4">
                    {category}
                </td>
                {/* action  */}
                <td className="px-6 py-4" colSpan={2}>
                    <button onClick={()=>handleUpdate(_id)} className='active:text-gray-400'>
                        <HiPencilAlt className='inline'></HiPencilAlt>Update
                    </button>
                </td>
                <td>
                    <button onClick={()=>handleDelete(_id)} className='active:text-gray-400'>
                        <AiOutlineDelete className='inline'></AiOutlineDelete> Delete
                    </button>
                </td>
                
            </tr>
    );
};

export default SingleToy;