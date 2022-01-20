import './login.scss'
export default function Login() {

    return(
        <div>
            <div>
                <img src="https://i.ibb.co/7k4WzpX/improving-logo-color.png" alt="logo" />
            </div>
            <div className="formLogin">
                <form >
                <h3>Login</h3>
                <p>Name:</p>
                    <input type="text" />
                <p>Email:</p>
                    <input type="text" />
                <p>Password:</p>
                    <input type="text" />
                <p><button type="submit">Get in</button> </p>
            
                </form>
            </div>
        </div>

    )
}