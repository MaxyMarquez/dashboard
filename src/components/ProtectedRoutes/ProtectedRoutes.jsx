import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const token = sessionStorage.getItem("token");

    // return token ? children : <Navigate to="/login" />
    return children

}

export default ProtectedRoutes