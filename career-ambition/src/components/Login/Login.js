import React, { useState } from "react";
import './login.scss'
import { FormLogin } from "./FormLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth} from "../../firebase/firebase-config"


export default function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleLogin = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate("dashboard");
            console.log("ya entre")
          })
          .catch(() => {
            setError('Invalid email or password, please try again. ');
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
            <FormLogin handleLogin={handleLogin} />
            </div>
            
                {error && <h5 className="error" >{error}</h5>}
            
        </div>
        
    )
}