import React, { createContext } from 'react';


export const AuthContex = createContext(null)

const AuthContextProvider = ({ children }) => {

    const userInfo ={
        user: "hasib"
    }

    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContextProvider;