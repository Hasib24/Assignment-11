import React, { useContext, useState } from 'react';
import SingleToy from './SingleToy';
import { useEffect } from 'react';
import { AuthContex } from '../../providers/AuthContextProvider';
import useTitle from '../../hooks/useTitle';


const MyToys = () => {
    useTitle('My Toys')
    const {user, toys, setToys, loader} = useContext(AuthContex)

    if(loader){
        return <div>Loading...</div>
    }else{
        useEffect(()=>{
            fetch(`http://localhost:5000/mytoys/${user.email}`)
            .then(res=>res.json())
            .then(data => setToys(data))
        },[])

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
    }
    

};

export default MyToys;