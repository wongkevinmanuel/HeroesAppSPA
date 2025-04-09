import { types } from "../types/types";


interface inititialState {
    logged: boolean,
    user: { id: string; name: string } | null;
}

interface action {
    type: string,
    payload: {
      id: string,
      name: string
    }| null
  }

//No llamar funciones externas desde el reducer, ya que se ejecuta en un hilo diferente
// y no se puede acceder a las variables de entorno, ni a los hooks de react
export const authReducer = (state : inititialState , action: action) => {
    switch (action.type){
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            }
        case types.logout:
            return {
                ...state,
                logged: false,
                user: null,
            }
        default:
            return state;
    }
}

/*
 switch (action.type) {
        case 'login':
        return {
            ...state,
            status: 'authenticated',
            user: action.payload,
        };
        case 'logout':
        return {
            ...state,
            status: 'not-authenticated',
            user: null,
        };
        case 'checking':
        return {
            ...state,
            status: 'checking',
        };
        default:
        return state;
    }
*/