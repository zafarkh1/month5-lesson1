import React from "react";
import { useState } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

import logo from "../../../images/twitter-logo-4 1.png";

import "./signup.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match");
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(password, email);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="signup">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2>Create an account</h2>
      {error}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <div className="email">
          <Link to="">Use email</Link>
        </div> */}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Signup;
