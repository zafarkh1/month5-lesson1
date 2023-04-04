import React from "react";
import { useState } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

import logo from '../../../images/twitter-logo-4 1.png'

import '../signup/signup.scss'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong password try again");
      } else {
        setError(error);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2>Log in to Twitter</h2>
      {error}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <button type="submit" onClick={toggleShowPassword} className="show">
          {showPassword ? "Hide" : "Show Password"}
        </button>
      </form>
      <div className="forgot">
        <Link>Forgot Password</Link>
      </div>
      <div className="signLink">
        <Link to="/signup">Sign up to Twitter</Link>
      </div>
    </div>
  );
};

export default Login;
