import React from "react";

import { Link } from "react-router-dom";

import twitter from "../../images/twitter-logo-4 1.png";
import { GiHouse } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdBookmarks } from "react-icons/md";
import { FiList, FiUser } from "react-icons/fi";
import { IoMdMore } from "react-icons/io";

import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={twitter} alt="" />
      <p>
        <div>
          <GiHouse size={25} />
        </div>
        <span>
          <Link to="/">Home</Link>
        </span>
      </p>
      <p>
        <div>
          <FaHashtag size={25} />
        </div>
        <span>
          <Link to="Explore">Explore</Link>
        </span>
      </p>
      <p>
        <div>
          <MdNotifications size={25} />
        </div>
        <span>
          <Link to="notifacion">Notifications</Link>
        </span>
      </p>
      <p>
        <div>
          <FiMessageSquare size={25} />
        </div>
        <span>
          <Link to="messages">Messages</Link>
        </span>
      </p>
      <p>
        <div>
          <MdBookmarks size={25} />
        </div>
        <span>
          <Link to="/bookmarks">Bookmarks</Link>
        </span>
      </p>
      <p>
        <div>
          <FiList size={25} />
        </div>
        <span>
          <Link to='/list'>Lists</Link>
        </span>
      </p>
      <p>
        <div>
          <FiUser size={25} />
        </div>
        <span>
          <Link to="/profile">Profile</Link>
        </span>
      </p>
      <p>
        <div>
          <IoMdMore size={25} />
        </div>
        <span>
          <Link to="/more">More</Link>
        </span>
      </p>
      <button>Tweet</button>
    </div>
  );
};

export default Navbar;