import React from "react";
import { Link, useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";

function MovieCard({ movie, type }) {
  return (
    <div className="movie-item">
      <Link to={`/${type}/${movie.id}/`}>
        <img
          className="img-fluid"
          src={`${apiConfig.originalImage(movie.poster_path)}`}
          alt=""
        />
        <h6 className="my-3">
          {type === "movie" ? movie.original_title : movie.original_name}
        </h6>
      </Link>
    </div>
  );
}

export default MovieCard;
