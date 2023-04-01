import "./App.css";
import { auth } from "./components/firebase";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Forgot from "./components/forgot/Forgot";

function App() {

	const [user, setUser] = useState(null)
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if(user) {
				setUser(user)
			} else {
				setUser(null)
			}
		})
		return unsubscribe
	})


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/about" element={user ? <About/> : <Navigate to='/login'/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
