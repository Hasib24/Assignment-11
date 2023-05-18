import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const {user, loader} = useContext(AuthContex)
    if(loader){
        return <div>loading...</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;