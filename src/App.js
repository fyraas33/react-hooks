import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { useState } from "react";

import Data from "./components/Data";

import { Route, Routes } from "react-router";
import  Navbar  from "./components/Navbar";
import Home from "./components/Home";



function App() {
  const [text, settext] = useState("");
  const [movies, setMovies] = useState(Data);
  const [rate, setRate] = useState(0);
  return (
    <div className="App"> 
     <Navbar settext={settext} movies={movies} setMovies={setMovies} setRate={setRate}/>
      <header className="App-header">
  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<MovieList rate={rate} settext={settext} text={text} movies={movies} setRate={setRate}/>} />
        </Routes>
        <Filter setMovies={setMovies} movies={movies} />
      </header>
      <div className="footer">
        <h4>  © Powered By FIRAMOVIES. </h4>
      </div>

    </div>

  );
}

export default App;
