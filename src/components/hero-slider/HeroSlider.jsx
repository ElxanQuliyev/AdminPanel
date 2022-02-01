import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import apiConfig from "../../api/apiConfig";
import "./hero-slider.scss";
function HeroSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieList = () => {
      fetch(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`)
        .then((m) => m.json())
        .then((m) => setMovies(m));
    };
    getMovieList();
  }, []);
  console.log(movies.results);
  return (
    <Swiper slidesPerView={1} spaceBetween={0}>
      {movies.length !== 0 ? (
        movies.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <HeroSlideItem info={movie} />
          </SwiperSlide>
        ))
      ) : (
        <p>loading</p>
      )}
    </Swiper>
  );
}

const HeroSlideItem = ({info}) => {
  return (
    <div
      className="slider-item"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(info.backdrop_path)})`,
      }}
    >
    </div>
  );
};

export default HeroSlider;
