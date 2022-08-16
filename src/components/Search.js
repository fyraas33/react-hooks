
import "./Movie.css";

const Search = ({ settext}) => {
   
  
    return (


<div className="search-container">
     
         <input  type="text"
          placeholder="Type movie name " onChange={(e) => settext(e.target.value)} />
    
      </div>
    )

}
export default Search;