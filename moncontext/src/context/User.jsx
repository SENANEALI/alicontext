import {createContext, useState}from 'react';

const UserContext = createContext();

function UserProvider({children}){

    const [user, setUser] = useState({isLogged:true, alias: 'Khyn'});

    return(
        <UserContext.Provider value = {{user}}>
            {children}
        </UserContext.Provider>
    )
};

export {UserProvider, UserContext };