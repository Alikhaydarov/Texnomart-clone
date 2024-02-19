import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import "./LoginCard.css";
function LoginCard({LoginClose}) {
    function CloseLog () {
      LoginClose(false);
    }
return (
    <div className="login-container">
      <div className="login-card">
        <span >< BiX onClick={CloseLog} className="Icon" /></span>
        <h3>Kirish yoki ro'yxatdan o'tish</h3>
        <fieldset>
            <legend>Telefon</legend>
        <input value={ "+998"} type="text" />
        </fieldset>
        <br />
        <button className="Logbtn1">Kodni olish</button>
        <br />
        <button className="Logbtn2">Login orqali kirish</button>
      </div>
    </div>
  );
}

export default LoginCard;