import React, { useContext } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { AuthContex } from '../../providers/AuthContextProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const SingleToy = ({toy}) => {
    const navigate = useNavigate();
    const { toys, setToys } = useContext(AuthContex)
    const { _id, name, price, category} = toy

    const handleUpdate = (_id) =>{
        
        navigate(`/update/${_id}`);
        
    }
    const handleDelete=(_id) =>{
        //starting with sweet alart
        swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this toy!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/mytoys/${_id}`,{ method: 'DELETE' })
                    .then(res => res.json())
                    .then(data =>{

                        if(data.deletedCount){
                            const remainingToys = toys.filter(toy=> toy._id!==_id)
                            setToys(remainingToys);

                            swal("Poof! Your toy has been deleted!", { icon: "success",});
                        }
                    })
                }else{
                    swal("Your imaginary toy is safe!");
                }
      });


        
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