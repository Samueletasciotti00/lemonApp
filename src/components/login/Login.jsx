import React from "react";
import "./login.modules.css";

function Login() {
  return (
    <div id="login">
      <div className="opacity"></div>
      <div className="enter input-lemon">
        <h3><i className="fa-solid fa-lemon"></i> Lemon Login</h3>
        <div><label htmlFor="email">Mail </label></div>
        <input type="mail" className="input-lemon" placeholder="@user" />
        <div><label htmlFor="password">Password </label></div>
        <input type="password" className="input-lemon" placeholder="Password" />
        <div id="buttons">
          <button>Login</button>
          <button>Registrati</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
