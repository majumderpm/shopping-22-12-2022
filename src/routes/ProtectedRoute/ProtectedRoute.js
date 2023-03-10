import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ProtectedRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    let location = useLocation();

    if(loading){
        return <h1 className='text-5xl'>loading...</h1>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default ProtectedRoute;