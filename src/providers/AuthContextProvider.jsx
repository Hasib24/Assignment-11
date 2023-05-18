import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getAuth } from "firebase/auth";
import { app } from '../../firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const AuthContex = createContext(null)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const userInfo ={
        user,
        setUser,
        googleSignIn
    }

    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContextProvider;