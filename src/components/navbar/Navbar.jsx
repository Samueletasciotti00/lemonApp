import React from "react"
import "./navbar.modules.css"

function NavBar() {
  return (
    
    // Navbar
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-between align-items-center p-3">

          {/* Simbolo */}
          <div className="simbol">
            <i class="fa-solid fa-square-full" style={{fontSize: '25px',boxShadow: '-4px 4px 4px 0 black'}}></i>
          </div>

          {/* Titol */}
          <div className="titol">
            <h1><i class="fa-solid fa-lemon"></i>AppLemon</h1>
          </div>

          {/* Login */}
          <div className="login">
            <button>Login</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NavBar;
