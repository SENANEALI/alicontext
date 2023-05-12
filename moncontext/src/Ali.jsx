import React from "react";
import {Routes, Route}from 'react-router-dom';
import { UserProvider } from "./context/User";
import Home from './components/Home';


function App() {

  return (
    <UserProvider>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </UserProvider>
  );
}

export default App;
