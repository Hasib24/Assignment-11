import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import { Ring } from 'react-awesome-spinners'

const PrivateRoutes = ({ children }) => {
    const {user, loader} = useContext(AuthContex)
    if(loader){
        return <div className='h-[50vh] flex justify-center items-center'><Ring/></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;