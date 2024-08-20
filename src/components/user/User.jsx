import React from "react";
import './user.css';
import Card from "../card/Card";
import App from "../../App";

function user({ info }) {
    
    return(

        // Singola card per Utente
        <Card imgSrc={info.imgSrc} name={info.name}></Card>
    )
}

export default user;