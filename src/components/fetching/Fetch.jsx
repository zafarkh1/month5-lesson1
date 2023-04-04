import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

import threeDots from "../../images/threedots.png";
import comment from "../../images/comment.png";
import retweet from "../../images/retweet.png";
import like from "../../images/like.png";
import share from "../../images/share.png";
import stats from "../../images/statistics.png";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data.map((users) => (
    <>
		<hr />
      <div className="fetchedData d-flex justify-content-between">
        <div className="data d-flex gap-3">
          <img src={users.imageUrl} className="portfolio" />
          <div className="data-text">
            <p className="mb-0">
              <span className="fw-bold me-2 mb-3 fs-4">{users.newsSite}</span>
              <span>{moment(users.publishedAt).fromNow()}</span>{" "}
            </p>
            <p className="text">{users.summary}</p>
            <ul className="d-flex justify-content-between m-0 mt-2 ps-0">
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
  ));
};

export default Fetch;
