import React from "react";

import "./bookmarks.scss";

import cage from "../../images/bookmarks.png";

const Bookmarks = () => {
  return (
    <div className="bookmarks">
      <h4>Bookmarks</h4>
      <span>@zafar_khatamov</span>
      <div className="center">
        <div className="cage-img">
          <img src={cage} alt="" />
        </div>
        <h2>Save Tweets for later</h2>
        <p>Don’t let the good ones fly away! Bookmark </p>
        <p>Tweets to easily find them again in the future.</p>
      </div>
    </div>
  );
};

export default Bookmarks;
