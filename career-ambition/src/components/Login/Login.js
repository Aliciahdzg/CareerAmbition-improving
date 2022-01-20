import React, { useState,useEffect } from "react";
import './login.scss'
import { signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth} from "../../firebase/firebase-config"


export default function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate("dashboard");
          } else {
            navigate("/");
          }
        });
      }, []);

    const handleLogin = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate("dashboard");
            console.log("ya entre")
          })
          .catch(() => {
            setError('Contraseña y/o correo inválidos, vuelve a intentar');
            setTimeout(() => setError(''), 3000);
    
          });
      };


    return(
        <div className="bodyLogin">
            <div>
                <img className="logo-img" src="https://i.ibb.co/7k4WzpX/improving-logo-color.png" alt="logo" />
            </div>
            <div className="formLogin">
            <h3 className="title-login">Login</h3>
                <form className="p-form">
                  
                    <p > &#9993;Email:</p>
                    <input className="input-login" type="text" pattern=".+@improving\.com" size="30" onChange={(e) => { setEmail(e.target.value) }} />
                    <p>	&#128477; Password:</p>
                    <input className="input-login" type="password" size="6" pattern="[0-9]{6}"
          required onChange={(e) => { setPass(e.target.value) }}/>

                    <button className="login-btn" onClick={() => { handleLogin(email, pass) }}>
                     <span>Get in</span>
                     <div className="liquid"></div>
                    </button> 
                </form>
            </div>
            
                {error && <h5 className="error" >{error}</h5>}
            
        </div>
        
    )
}