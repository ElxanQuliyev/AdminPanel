import React, { useEffect, useRef, useState } from "react";
import {Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/autoplay';
import apiConfig from "../../api/apiConfig";
import "./hero-slider.scss";
import Modal, { ModalContent } from "../modal/Modal";
import { Link } from "react-router-dom";
function HeroSlider() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const getMovieList = () => {
      fetch(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`)
        .then((m) => m.json())
        .then((m) => setMovies(m));
        
    };
    getMovieList();
  },[]);

  return (
    <>
      <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{delay:3000}}
      slidesPerView={1} spaceBetween={0} >
        {movies.length !== 0 ? (
          movies.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HeroSlideItem movie={movie} />
            </SwiperSlide>
          ))
        ) : (
          <p>loading</p>
        )}
      </Swiper>
      { movies.length!==0? movies.results.map((item,i)=>(<TrailerModal key={i} item={item} />)) : ""}
    </>
 );
}

const HeroSlideItem =  ({movie}) => {
  const setMovieActive = async ()=>{
    const modal=document.querySelector(`#modal_${movie.id}`)
    const videoLink=`${apiConfig.baseUrl}movie/${movie.id}/videos?api_key=${apiConfig.apiKey}`;
    const videoResult =await (await fetch(videoLink)).json();
    console.log(videoResult)
    if(videoResult.results.length>0){
      const videoSrc='https://www.youtube.com/embed/'+videoResult.results[0].key;
      modal.querySelector('.modal-content > iframe').setAttribute("src",videoSrc);
    }else{
      modal.querySelector('.modal-content').innerHTML="No Trailer"
    }
    modal.classList.toggle('active');
  }
  return (
    <div
      className="slider-item"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`,
      }}>
        <div className="slider-content">
            <h4>{movie.original_title}</h4>
            <div className="slider-button">
                <button onClick={setMovieActive}>Watch Trailer</button>
                  <Link to={`/movie/${movie.id}`}>
                    Detail
                  </Link>
            </div>
        </div>
    </div>
  );
};
const TrailerModal=(props)=>{
  const iframeRef=useRef(null);
  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${props.item.id}`}>
      <ModalContent onClose={onClose} >
        <iframe ref={iframeRef} src="" width="100%" height="500px" title="trailer"></iframe>
      </ModalContent>
    </Modal>
    )
}

export default HeroSlider;
