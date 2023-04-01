import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out fields");
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
		setShowPassword(!showPassword)
	}

  return (
    <div>
      <h1>Login</h1>
      {error}
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
				<button onClick={toggleShowPassword}>{showPassword ? "Hide" : "Show Password"}</button>
      </form>
      <span>Do not have an acoount?</span>
      <Link to="/register">Register</Link>
      <span>Forgot password</span>
      <Link to="/forgot">Forgot password</Link>
    </div>
  );
};

export default Login;
