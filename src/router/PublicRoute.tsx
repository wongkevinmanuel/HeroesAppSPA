import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
    children: React.ReactNode
}
export const PublicRoute = ({children}: PublicRouteProps) => {
    const {authState} = useContext(AuthContext);
  
    
    //si no esta autenticado 
    return (!authState.logged) 
    ? children
    : <Navigate to='/marvel' />;
}
