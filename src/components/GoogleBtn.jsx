import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';

const GoogleBtn = ({children}) => {
    const {setUser, googleSignIn} = useContext(AuthContex)
    const handleClick = () =>{
        googleSignIn()
        .then(result => setUser(result.user))
        .catch(error => console.log(error.message))
        
    }
    return (
        <button onClick={handleClick} className='border'>{children}</button>
    );
};

export default GoogleBtn;