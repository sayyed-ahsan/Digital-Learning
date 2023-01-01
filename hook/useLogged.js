import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const useLogged = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [loggedToken, setLoggedToken] = useState({});

    useEffect(() => {
        // Perform localStorage action
        const dl_token = localStorage.getItem('dl-token');
        setLoggedToken({ dl_token});
      }, [])


    useEffect(() => {
        const token = loggedToken.dl_token;
        if (token) {
            const decodedToken = jwt_decode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('dl-token');
            } else {
                setUser(decodedToken);
            }
        }
        setLoading(false);
    }, [loggedToken]);

    return {
        user,
        setUser,
        loading,
        setLoading,
        loggedToken,
        setLoggedToken
    }
}

export default useLogged;