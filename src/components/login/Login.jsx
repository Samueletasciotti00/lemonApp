import React from "react"
import "./login.modules.css"

function Login() {
    return (

        // Container
        <div id="login">

            {/* Opacità */}
            <div className="opacity">

            </div>

            {/* Conenitore del login */}
            <div className="enter input-lemon">
                
                {/* Titolo */}
                <h3><i class="fa-solid fa-lemon"></i> Lemon Login</h3>

                {/* Label input mail / password */}
                <div><label htmlFor="email">Mail </label></div>
                <input type="mail" className="input-lemon" placeholder="@user"/>

                <div><label htmlFor="password">Password </label></div>
                <input type="password" className="input-lemon"placeholder="Password"/>
            </div>
        </div>
    );
}

export default Login;