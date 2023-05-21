import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleBtn = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const {setUser, googleSignIn} = useContext(AuthContex)
    const handleClick = () =>{
        googleSignIn()
        .then(result =>{
            setUser(result.user)
            navigate(from, {replace: true})
        
        })
        .catch(error => console.log(error.message))
        
    }
    return (
        <button onClick={handleClick} className=' border border-blue-600 duration-700 text-slate-800 active:bg-blue-500  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200'>{children}</button>
    );
};

export default GoogleBtn;