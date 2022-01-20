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
            //navigate("dashboard");
            console.log("ya entre")
            // ...
          })
          .catch(() => {
            setError('Contraseña y/o correo inválidos, vuelve a intentar');
            setTimeout(() => setError(''), 2500);
    
          });
      };


    return(
        <div>
            <div>
                <img src="https://i.ibb.co/7k4WzpX/improving-logo-color.png" alt="logo" />
            </div>
            <div className="formLogin">
                <form>
                    <h3>Login</h3>
                    <p>Name:</p>
                    <input type="text" />
                <p>Email:</p>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <p>Password:</p>
                    <input type="password" onChange={(e) => { setPass(e.target.value) }}/>
                <p><button onClick={() => { handleLogin(email, pass) }}>Get in</button> </p>
                <div>
                {error && <p className="error" >{error}</p>}
                </div>
                </form>
            </div>
        </div>
        
    )
}