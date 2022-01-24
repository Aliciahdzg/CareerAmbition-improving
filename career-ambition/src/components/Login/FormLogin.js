import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export const FormLogin = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPass(e.target.value);
  return (
    <>
      <form className="p-form">
            <p > &#9993;Email:</p>
            <input className="input-login" type="text" pattern=".+@improving\.com" size="30" onChange={handleEmail} />
            <p>	&#128477; Password:</p>
            <input 
            className="input-login" 
            type="password" size="6" 
            pattern="[0-9]{6}" 
            required onChange={handlePassword}
            />
      </form>
      <button className="login-btn" onClick={() => { handleLogin(email, pass) ;}}>
            <span>Get in</span>
            <div className="liquid"></div>
      </button> 
    </>
  );
};