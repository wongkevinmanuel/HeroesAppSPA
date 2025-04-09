import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom';

import { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {
  const {authState } = useContext(AuthContext);
  const { pathname , search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  //Verificar si usuario esta logueado
    return ( authState.logged )
    ? children
    : <Navigate to="/login" />;

}
