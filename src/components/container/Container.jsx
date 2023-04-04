import React from "react";
import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
import Footer from "../footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./container.scss";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Container;
