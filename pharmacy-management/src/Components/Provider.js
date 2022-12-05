import React, { Children } from 'react';
import Context from './Context';


const LoginProvider = ({children}) => {
    const[token, setToken] = useStorage('token')

    return(
        <Context.Provider value = {{token, setToken}}>
            {children}
        </Context.Provider>
    )

}

export default LoginProvider;