import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { useState } from "react";
  
import Data from "./components/Data";
import ReactStars from "react-rating-stars-component";
import Search from "./components/Search";



function App() {
  const [text, settext] = useState("");
  const [movies, setMovies] = useState(Data);
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="haut">
        <Search settext={settext}/>
        
        
          <ReactStars
            count={5}
            onChange={(value)=>setRate(value)}
            size={34}
            activeColor="#ffd700"
          />
          
        </div>
        
        <MovieList rate={rate} text={text} movies={movies} />
        <Filter  setMovies={setMovies} movies={movies} />
      </header>
      
      
      <div className="footer">
        <h4>  © Powered By FIRAMOVIES. </h4>
      </div>
    </div>
    
  );
}

export default App;
