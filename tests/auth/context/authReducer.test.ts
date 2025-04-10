import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';


describe('Pruebas en AuthReducer',()=>{
    
    test('debe de retornar el estado por defecto', () => {
        const action =  { type: '', payload: null };

        const state = authReducer({ logged: false, user: null }, action);
        //console.log(state);
        //expect(state).toBe(state);
        //{ logged: false, user: null }
        expect(state).toEqual({logged: false, user: null});
    });

    test('debe de (login) llamar el login autenticar y establecer el usuario ', () => {
        const actionLogin = {
            type: types.login,
            payload: {
                name: 'Juan',
                id:'1234'
            }
        }

        const state = authReducer({ logged: false, user:null }, actionLogin);
        //console.log(state);
        expect(state ).toEqual({
                logged: true,
                user: actionLogin.payload
        });
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {logged: true, user:{id:'1234', name:'Juan'}};

        const action = {
            type: types.logout,
            payload: null
        };
        const newState = authReducer( state, action);
        console.log(state);
        console.log(newState)

        expect(newState).toEqual({
            logged: false,
            user: null
        });
    });
    
})