import React, {useContext}from 'react';
import {UserContext}from '../context/User';

function Home(){

    const {user} = useContext(UserContext);

    console.log(user)

    return(
        <p>salut {user.isLogged && user.alias}</p>
    );


}

export default Home;