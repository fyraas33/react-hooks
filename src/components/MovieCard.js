import React from "react";
import "./Movie.css";
import Rate from "./Rate";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="film">
        <img src={movie.poster} alt={movie.title} />
        <div className="description">
          <h2>{movie.title}</h2> <br />
          <p>
            <b style={{ color: "rgba(255,40,40,0.87)" }}>Description:</b>{" "}
            {movie.description}
          </p>{" "}
          <br />
          <br />
          <div className="watching">
            <div className="">
              <Rate rating={movie.rate} />
            </div>
            <a href={movie.url} target="_blank" rel="noreferrer">
              <button>Watch the Movie</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
