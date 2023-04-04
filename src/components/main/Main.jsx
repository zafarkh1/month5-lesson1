import React from "react";
import { useState } from "react";
import Fetch from "../fetching/Fetch";
import moment from "moment/moment";

import { GrGallery } from "react-icons/gr";
import { AiOutlineFileGif } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { BiSmile } from "react-icons/bi";
import { GrSchedulePlay } from "react-icons/gr";

import titleImg from "../../images/mainTitle.png";
import user1 from "../../images/main-user-1.png";
import threeDots from "../../images/threedots.png";
import user2 from "../../images/main-user2.png";
import comment from "../../images/comment.png";
import retweet from "../../images/retweet.png";
import like from "../../images/like.png";
import share from "../../images/share.png";
import stats from "../../images/statistics.png";
import shashlik from "../../images/ырфырдшл.png";
import user3 from "../../images/user3.png";
import zafar from '../../images/zafar.jpg'

import "./main.scss";

const Main = (props) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div className="main">
      <div className="title d-flex justify-content-between">
        <h2>Home</h2>
        <img src={titleImg} alt="" />
      </div>
      <hr />
      <div>
        <div className="personal d-flex justify-content-between">
          <div className="input d-flex gap-4">
            <img src={zafar} alt="" className="user" />
            <div className="d-flex flex-column">
              <input
                type="text"
                placeholder="What’s happening"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              />
              <div className="icons fs-4 d-flex gap-4">
                <GrGallery />
                <AiOutlineFileGif />
                <ImStatsBars />
                <BiSmile />
                <GrSchedulePlay />
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => setTweets([...tweets, tweet])}>Tweet</button>
          </div>
        </div>
        <div>
          {tweets.map((tweet) => (
            <>
              <hr />
              <div className="fetchedData d-flex justify-content-between">
                <div className="data d-flex gap-3">
                  <img src={zafar} className="user" />
                  <div className="data-text">
                    <p className="mb-0">
                      <span className="fw-bold me-2 mb-0 fs-4">Zafar</span>
                      <span>@zafarkh · 1m ago</span>
                    </p>
                    <p className="text" key={tweet}>
                      {tweet}
                    </p>
                    <ul className="d-flex justify-content-between m-0 ps-0">
                      <li>
                        <img src={comment} />
                        10
                      </li>
                      <li>
                        <img src={retweet} />1
                      </li>
                      <li>
                        <img src={like} />8
                      </li>
                      <li>
                        <img src={share} />
                      </li>
                      <li>
                        <img src={stats} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img src={threeDots} alt="" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Fetch />
      <hr />
      <div className="fetchedData d-flex justify-content-between">
        <div className="data d-flex gap-3">
          <img src={user2} className="user" />
          <div className="data-text">
            <p className="mb-0">
              <span className="fw-bold me-2 mb-0 fs-4">Designsta</span>
              <span>@inner · 25m</span>
            </p>
            <p className="text">
              Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
              zerikmadinglarmi?
            </p>
            <ul className="d-flex justify-content-between m-0 ps-0">
              <li>
                <img src={comment} />
                10
              </li>
              <li>
                <img src={retweet} />1
              </li>
              <li>
                <img src={like} />8
              </li>
              <li>
                <img src={share} />
              </li>
              <li>
                <img src={stats} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={threeDots} alt="" />
        </div>
      </div>
      <hr />
      <div className="fetchedData d-flex justify-content-between">
        <div className="data d-flex gap-3">
          <img src={user3} className="user" />
          <div className="data-text">
            <p className="mb-0">
              <span className="fw-bold me-2 mb-0 fs-4">Designsta</span>
              <span>@inner · 25m</span>
            </p>
            <p className="text">
              Обетда..... <br /> Кечиринглар <br /> <br />
              <img src={shashlik} className="shashlik" />
            </p>

            <ul className="d-flex justify-content-between m-0 ps-0">
              <li>
                <img src={comment} />
                10
              </li>
              <li>
                <img src={retweet} />1
              </li>
              <li>
                <img src={like} />8
              </li>
              <li>
                <img src={share} />
              </li>
              <li>
                <img src={stats} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={threeDots} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Main;
