import React from "react";

import { RiSearchLine } from "react-icons/ri";
import { FaCog } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import userPhoto1 from "../../images/footer-user-1.png";
import userPhoto2 from "../../images/footer-user-2.png";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="input">
        <span>
          <RiSearchLine />
        </span>
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="trends">
        <div className="heading d-flex justify-content-between align-items-center">
          <h3>Trends for you</h3>
          <FaCog size="20px" />
        </div>
        <div className="revolution d-flex justify-content-between align-items-center mt-2">
          <div className="text">
            <span>Trending in Germany</span>
            <h4>Revolution</h4>
            <span>50.4K Tweets</span>
          </div>
          <div>
            <BsThreeDots size="20px" />
          </div>
        </div>
        <div className="revolution d-flex justify-content-between align-items-center mt-2">
          <div className="text">
            <span>Trending in Germany</span>
            <h4>Revolution</h4>
            <span>50.4K Tweets</span>
          </div>
          <div>
            <BsThreeDots size="20px" />
          </div>
        </div>
        <a href="#" className="showmore">
          Show more
        </a>
      </div>
      <div className="like">
        <h2>You might like</h2>
        <div className="user d-flex justify-content-between align-items-center">
          <img src={userPhoto1} />
          <p>
            <span className="fw-bold">Mushtariy</span> <br />
            <span>@Mushtar565266</span>
          </p>
          <button>Follow</button>
        </div>
        <div className="user d-flex justify-content-between align-items-center">
          <img src={userPhoto2} />
          <p>
            <span className="fw-bold">Shuhratbek</span> <br />
            <span>@mrshukhrat</span>
          </p>
          <button>Follow</button>
        </div>
        <a href="#" className="showmore">
          Show more
        </a>
      </div>
      <div className="links">
        <p>
          Terms of Service{" "}
          <span className="text-decoration-underline">Privacy Policy</span>
          <span>Cookie Policy</span> <br />
          Imprint
          <span>Ads Info</span>
          <span>More ···</span>
          <span>© 2021 Twitter, Inc.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
