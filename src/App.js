import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./components/firebase";
import { useEffect, useState } from "react";

import Main from "./components/main/Main";
import Explore from './components/explore/Explore'
import Notification from './components/notification/Notification'
import Messages from './components/message/Message'
import List from './components/list/List'
import More from './components/more/More'
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./components/auth/signup/Signup";
import Login from "./components/auth/login/Login";
import Bookmarks from "./components/bookmarks/Bookmarks";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./components/footer/Searching";

function App() {
  const [user, setUser] = useState(null);
  const unsubscribe = auth.onAuthStateChanged((user) => {
		if(user) {
			setUser(user)
		} else {
			setUser(null)
		}
		return unsubscribe
	});

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifacion" element={<Notification />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/list" element={<List />} />
          <Route path="/more" element={<More />} />
					<Route path='/search' element={<Search/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
