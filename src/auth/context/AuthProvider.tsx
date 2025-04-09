import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer';
import { types } from '../types/types';


//AuthProvider expone la informacion del authcontext
//AuthProvider utiliza el authcontext, para proveer 
// la informacion a los componentes hijos
const inititialState = {
    logged: false,
    user: { id: '', name: '' },
}

interface AuthProviderProps {
  children: React.ReactNode
}

const initialArg = ()=>{
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  //si user existe, es true  == !!user
  return {
    logged: !!user,
    user: user || { id: '', name: '' },
  } 
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  
  const [authState, dispatch ] = useReducer(authReducer,inititialState,initialArg);
  
  //Establecer las acciones que se pueden realizar en el authcontext
  //
  const login = (name: string = '') =>{
    const user = {
      id: '123',
      name: name
    };

    const action = {
      type: types.login,
      payload: user,
    }
    
    //Guardar el usuario en el localstorage
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout,
      payload: null,
    }

    dispatch(action);
  }

  //Simpre limitar el llamado al dispatch a las acciones que se pueden realizar
  // en el authcontext, para evitar problemas de seguridad
  // solo exponer las funciones de login y logout y authState del user
  // y no el dispatch directamente
    return (
    <AuthContext.Provider value={{
        authState,
        //Metodos
        login: login,
        logout: logout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
