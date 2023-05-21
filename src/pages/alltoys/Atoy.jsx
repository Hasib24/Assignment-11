import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';


const Atoy = ({toy}) => {
    const navigate = useNavigate()
    const handleDetailes=(id)=>{
        navigate(`/viewdetails/${id}`)
    }


const { _id, name, url, price, category, sellerName, quantity} = toy
    
    return (
            <tr className="bg-white border-b hover:bg-gray-50 ">
                {/* name  */}
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                    {sellerName}
                </th>
                {/* price  */}
                <td className="px-6 py-4">
                    {name}
                </td>
                {/* category  */}
                <td className="px-6 py-4">
                    {category}
                </td>
                {/* price  */}
                <td className="px-6 py-4">
                    $ {price}
                </td>
                {/* quantity  */}
                <td className="px-6 py-4">
                    {quantity}
                </td>
                {/* action  */}
                <td className="px-6 py-4" colSpan={2}>
                    <button onClick={()=>handleDetailes(_id)} className='active:text-gray-400'>
                        <CgDetailsMore className='inline'></CgDetailsMore> View details
                    </button>
                </td>
                
                
            </tr>

    );
};

export default Atoy;