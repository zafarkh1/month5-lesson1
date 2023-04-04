import React, { useState, useEffect } from "react";
import axios from "axios";

import example from "../../images/example.jpg";
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

import "./explore.scss";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: {
        q: "game of thr",
        limit: "10",
        image_size: "rm166.5",
        tconst: "tt0944947",
        qtype: "tv",
        s: "simple",
      },
      headers: {
        "X-RapidAPI-Key": "99d533121bmsh65cf63590a42244p1722a9jsnc9ab7abec56f",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.d);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="explore">
      <h2>Movies</h2>
      <ul className="">
        {movies.map((movie) => (
          <li className="wrapper">
            <img
              key={movie.id}
              src={
                movie.i && movie.i.imageUrl
                  ? movie.i.imageUrl
                  : example
              }
              alt=""
            />
            <div className="text">
              <p className="name" key={movie.id}>
                {movie.l.split("").slice(0,30).join("")}
              </p>
              <div className="d-flex justify-content-between">
                <p>
                  <span className="xira">Produced</span>
                  <br />
                  <span className="fw-bold" key={movie.id}>
                    {movie.y ? movie.y : 2023}
                  </span>
                </p>
                <p>
                  <span className="xira">Rank</span> <br />
                  <span className="fw-bold" key={movie.id}>
                    {movie.rank}
                  </span>
                </p>
              </div>
              <p className="star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </p>
            </div>
          </li>
        ))}
        {/* {movies.map((movie) => (
          <div className="container">
            <li key={movie.id}>{movie.l}</li>
            <li key={movie.id}>{movie.rank}</li>
          </div>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
//img, name, year, rank
