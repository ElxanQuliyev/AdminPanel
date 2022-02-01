import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import apiConfig from "../../api/apiConfig";
import "./movie-grid.scss";
import { Link } from "react-router-dom";
function MovieGrid({ type }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      switch (type) {
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
      setMovies(response.results);
    };
    getList();
  }, []);
  return (
    <>
      {movies.length > 0 ? (
        <section className="movie-lists">
          <div className="container">
            <h3>{type === "movie" ? "Popular Movies" : "Popular Tv Shows"}</h3>

            <Swiper
              loop={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={4}
              spaceBetween={20}
            >
              {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <div className="movie-item">
                    <Link to={`/movie/${movie.id}/${type}`}>
                      <img
                        className="img-fluid"
                        src={`${apiConfig.originalImage(movie.poster_path)}`}
                        alt=""
                      />
                      <h6 className="my-3">
                        {type === "movie"
                          ? movie.original_title
                          : movie.original_name}
                      </h6>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default MovieGrid;
