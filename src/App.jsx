import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Card from './components/card/Card';
import User from './components/user/User';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  const info = [
    { imgSrc: "src/assets/img/wiz.jpg", name: "Mago Ozzy" },
    { imgSrc: "src/assets/img/porscheOrange.jpg", name: "Fast&Furious96" },
    { imgSrc: "src/assets/img/greenbook.jpg", name: "Greenbook00" },
    { imgSrc: "src/assets/img/coffe.jpg", name: "LoveCofféPage" },
    { imgSrc: "src/assets/img/firstMac.jpg", name: "MacPower86" },
    { imgSrc: "src/assets/img/bookpint.jpg", name: "Bobby Book" }
  ];

  return (
    <>
      {/* Menu NavBar */}
      <Navbar onLoginClick={toggleLogin} />  

      {/* Login Menu condizionale */}
      {isLoginVisible && <Login />}

      {/* Cover Of User */}
      <div className="cover">
        {/* Background covers */}
      </div>

      <div className='container'>
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-around">
            {/* Cards */}
            {info.map((item, index) => (
              <Card key={index} imgSrc={item.imgSrc} name={item.name} />
            ))}
            {/* <User info={info[0]}></User> */}
          </div>
        </div>
      </div>

      
    </>
  );
}

export default App;


