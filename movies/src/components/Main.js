import { useState, useEffect } from "react";
import axios from "axios";
import MovieDetails from "./MovieDetails";


const api ="https://www.omdbapi.com/?";

const apiKey ="apikey=e0999cd8";

const Main = () => {

    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [selectedId, setSelectedId] = useState(null)
    
    const [showDetails, setShowDetails] = useState(false);

    const openDetails = () => {
        setShowDetails(true)
    }

    const closeDetail = () => {
        setShowDetails(false);
        setMovieDetails();
    }

    const getMovie = () => {
        axios
        .get(api + apiKey + `&s=${title}` + "&type=movie") 
        .then( (res) => {
            if (res) {
                setMovies(res.data.Search)
            }
        });
    };

    const handleRequest = (e) => {
        e.preventDefault();
        getMovie();
    };

    const getMovieDetails = (e, imdbID) => {
        e.preventDefault()

        axios.get(api + apiKey + `&i=${imdbID}`)
        .then( (res) => {
            if (res){
                setMovieDetails(res.data)
            }
        })
    }

    return (
        <div>
          <form>
            <div className='searchBar'>
              <label htmlFor='name'></label>
              <input
                type='text'
                name='title'
                placeholder='movie title'
                onChange={(e) => setTitle(e.target.value)}
              />
              <button type='submit' onClick={(e) => handleRequest(e)}>
                Search
              </button>
            </div>
          </form>
    
          {movies ? 
          <div className="movies">
            {movies.map(movie => (
              <div key={movie.imdbID} className="movie">
                <img src={movie.Poster} alt=""/>
                <div className="movie-title">
                  <p>{movie.Title}</p>
                </div>
                <button className="movie-detailsBtn"
                 onClick={ e => getMovieDetails (e, movie.imdbID)}>Details</button>
                 {movieDetails && (selectedId===movie.imdbID) && showDetails ? 
                    <MovieDetails/> : 
              <div className="modal display-none"></div>
            }
              </div>))}
          </div> 
          : null}
        </div>
      );
};

export default Main;