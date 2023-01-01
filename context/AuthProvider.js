import React, { createContext } from 'react';
import useLogged from '../hook/useLogged';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const authInfo = useLogged();
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

