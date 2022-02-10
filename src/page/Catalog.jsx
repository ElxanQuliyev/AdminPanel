import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/movie-list/MovieList";

function Catalog() {
    const {category}=useParams();
  return (
    <>
      <div className="page-header">
        <h1>{category=== "movie" ? "Movies" : "Tv Shows"}</h1>
      </div>
      <section className="">
          <div className="container">
              <MovieList category={category}/>
          </div>
      </section>
    </>
  );
}

export default Catalog;
