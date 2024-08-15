import React from "react";
import "./navbar.modules.css";

function NavBar({ onLoginClick }) {  // Riceve la funzione di toggle come prop

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-between align-items-center p-3">
          {/* Simbolo */}
          <div className="simbol">
            <i className="fa-solid fa-square-full" style={{fontSize: '25px',boxShadow: '-4px 4px 4px 0 black'}}></i>
          </div>

          {/* Titolo */}
          <div className="titol">
            <h1><i className="fa-solid fa-lemon"></i>AppLemon</h1>
          </div>

          {/* Login */}
          <div className="login">
            <button onClick={onLoginClick}>Login</button> {/* Usa la funzione passata come prop */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
