import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import "./movie-detail.scss";
function MovieDetail() {
  const { id } = useParams("id");
  const loc=useLocation();
  const pathName=loc.pathname.split("/")[1]
  const [singleMovie, setsingleMovie] = useState(null);
  useEffect(() => {
    fetch(`${apiConfig.baseUrl}${pathName}/${id}?api_key=${apiConfig.apiKey}`)
      .then((m) => m.json())
      .then((m) => setsingleMovie(m));
  },[]);
  console.log(singleMovie);


  return (
    <section className="movie-detail my-5">
      {singleMovie !== null ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="poster-img">
                <img
                  className="img-fluid"
                  src={apiConfig.originalImage(singleMovie.poster_path)}
                  alt=""
                />
                <span className="rating">{singleMovie.vote_average}</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="movie-content">
                <h3>{singleMovie.original_title}</h3>
                <p>{singleMovie.overview}</p>
                <ul className="ul-genres">
                    {singleMovie.genres.map(g=>(
                        <li key={g.id}>{g.name}</li>
                        )
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}

      <div className="container">
          <div className="trailer">
          <div className="row">
              <div className="col-lg-6">
                <div className="trailer-content">

                </div>
              </div>
          </div>
          </div>
      </div>
    </section>
  );
}

export default MovieDetail;
