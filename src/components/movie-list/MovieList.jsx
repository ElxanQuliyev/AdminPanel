import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import MovieCard from "../movie-card/MovieCard";
import "./movie-list.scss";
function MovieList({ category }) {
  const [movies, setMovies] = useState([]);
  const {keyword}=useParams();
  useEffect(() => {
    const getList = async () => {
      let response = null;
      if(keyword===undefined){
      switch (category) {
        case "movie":
          response = await (
            await fetch(
              `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`
            )
          ).json();
          break;
        default:
          response = await (
            await fetch(
              `${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}`
            )
          ).json();
          break;
      }
    }
    else{
      const params={
        query:keyword
      }
   response = await (
        await fetch(
          `${apiConfig.baseUrl}search/${category}?api_key=${apiConfig.apiKey}&query=${params.query}`
        )).json();
    }
      setMovies(response.results);
    };

    getList();
  }, [keyword,category]);
  return (
    <>
      <MovieSearch category={category} keyword={keyword} />
      <div className="movie-grid my-4">
        <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) =>( 
            <div key={movie.id} className="col-lg-3 my-3">
            <MovieCard  movie={movie} type={category} />
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
      </div>
    </>
  );
}

const MovieSearch = (props) => {
  const history=useNavigate();
  console.log(history)
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
  const goToSearch=useCallback(
    ()=>{
      if(keyword.trim().length>0){
        history(`/search/${props.category}/${keyword}`)
      }
    }, 
    [keyword, props.category, history]
  )
  
  useEffect(() => {
    const enterEvent = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            goToSearch();
        }
    }
    document.addEventListener('keyup', enterEvent);
    return () => {
        document.removeEventListener('keyup', enterEvent);
    };
}, [keyword, goToSearch]);
  return (
    <div className="movie-search">
      <input placeholder="search..." onChange={(e)=>setKeyword(e.target.value)} />
      <button onClick={goToSearch}>Search</button>
    </div>
  );
};

export default MovieList;
