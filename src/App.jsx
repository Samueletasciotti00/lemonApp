import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <>
      {/* Menu NavBar */}
      <Navbar onLoginClick={toggleLogin} />  

      {/* Login Menu condizionale */}
      {isLoginVisible && <Login />}
    </>
  );
}

export default App;

