import react from "react";
import './login.css';
import { Link } from "react-router-dom";



export const Login=()=>{


    return(
        <div className="loginfull">
        <div class="login-box">
    <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Logo" class="logo"/>
    <h2>Welcome to ElectroLogin</h2>
    <form>
      <div class="input-box">
        <input type="text" required />
        <span>Username</span>
      </div>
      <div class="input-box">
        <input type="password" required />
        <span>Password</span>
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="footer">
      Don't have an account? <Link to='/Signup'>Sign up</Link>
    </div>
  </div>
  </div>
    )
}