import React, { useContext } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { AuthContex } from '../../providers/AuthContextProvider';


const SingleToy = ({toy}) => {
    const { toys, setToys } = useContext(AuthContex)
    const { _id, name, price, category} = toy
    
    // deletedCount 

    const handleUpdate = (_id) =>{
        console.log(_id);
    }
    const handleDelete=(_id) =>{
        fetch(`http://localhost:5000/mytoys/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                const remainingToys = toys.filter(toy=> toy._id!==_id)
                setToys(remainingToys);
            }
        })
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