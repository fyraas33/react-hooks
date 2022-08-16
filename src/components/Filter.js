import React, { useState } from "react";
import "./Movie.css";


const Filter = ({ settext, movies, setMovies }) => {
  const [show, setShow] = useState(false);
  const [newmovie, setnewmovie] = useState({
    title: "",
    posterURL: "",
    description: "",
    url: "",
  });

  return (
    <div className="field">
      <div className="AddFilm">
        <button className="button" onClick={() => setShow(!show)}>
          Add a new movie
        </button>
        {show ? (
          <div>
            <div id="form" class="topBefore">
              <div className="info">
              
              <input
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Poster"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, poster: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="URL"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, url: e.target.value })
                }
              />
              <input
                className="number"
                type="number"
                min={0}
                max={5}
                placeholder="Rate"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, rate: e.target.value })
                }
              />
</div>

             
              <textarea
                className="textArea"
                id="message"
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, description: e.target.value })
                }
              ></textarea>


              <br />
              <button
                id="submit"
                onClick={() => {setMovies([...movies, newmovie]);setShow(false)}}
              >
                Add the movie
              </button>
            </div>
          </div>
        ) : null}
      </div>
      
    </div>
  );
};

export default Filter;