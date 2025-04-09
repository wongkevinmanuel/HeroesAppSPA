import React, { useState } from 'react'


//Refactoria el formulario esta pagina:
//https://stackoverflow.com/questions/66692085/better-way-of-handling-form-data-via-react-usestate
export const useForm = (initialForm :{ [x:string]: string } ) => {

    const [ formState, setFormState ] = useState(initialForm);

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormState(
            prevState => ({...prevState, [name]: value})
        )
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}

/*
const [ formState, setFormState ] = useState(initialForm);

    const onInputChange = (target) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        }) 
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };

*/