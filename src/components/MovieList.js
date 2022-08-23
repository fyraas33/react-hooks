import React from "react";
import MovieCard from "./MovieCard";
import ReactStars from "react-rating-stars-component";
import Search from "./Search";

const MovieList = ({ text, rate ,setMovies, setRate, settext, movies }) => {
  return (
    <div>
          <Search settext={settext} />
                    <ReactStars    count={5}
                        onChange={(value) => setRate(value)}
                        size={34}
                        activeColor="#ffd700"
                    />    
          
      <div>
        {movies
          ?.filter((el) => (rate === 0 ? el : el.rate === rate && el ))
          .filter((el) => el.title.toUpperCase().includes(text.toUpperCase()))
          .map((data, i) => (
            <MovieCard key={i} movie={data} />
          ))}
      
      </div>
    </div>
  );
};

export default MovieList;
