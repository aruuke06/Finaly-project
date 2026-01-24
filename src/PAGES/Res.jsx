import React from "react";
import "../STYLES/res.css";
import { FaApple } from "react-icons/fa6";
import { AiFillGooglePlusCircle } from "react-icons/ai";

export default function Res() {
  return (
    <div className="login-container">
      <div className="login-box">

       

        <h2 className="title">Login to your account</h2>
        <p className="subtitle">Welcome back! Enter your details to log in to your account</p>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your Password" />
        </div>

        <div className="remember-row">
          <div className="remember-left">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember login</label>
          </div>
          <a href="#" className="forgot">Forget Password?</a>
        </div>

        <button className="login-btn">Login</button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <button className="social-btn apple">
          <FaApple />
          Sign in with Apple
        </button>

        <button className="social-btn google">
          <AiFillGooglePlusCircle />
          Sign in with Google
        </button>

        <p className="bottom-text">
          New here? <a href="#">Create account</a>
        </p>

      </div>
    </div>
  );
}
