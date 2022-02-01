import React from "react";

import HeroSlider from "../components/hero-slider/HeroSlider";
import MovieGrid from "../components/movie-grid/MovieGrid";

function Home() {
  return (
    <div>
      <HeroSlider />
      <MovieGrid type="movie" />
      <MovieGrid type="tv" />
    </div>
  );
}

export default Home;
