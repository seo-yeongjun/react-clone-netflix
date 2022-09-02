import React, {useEffect, useState} from 'react';
import axios from '../api/axios'
import './Row.css'
import MovieModal from "./Modal/MovieModal";
import {Swiper, SwiperSlide} from "swiper/react";

const Row = ({title, isLargeRow, id, fetchURL}) => {
    const [movie, setMovie] = useState([])
    const [modal, setModal] = useState(false)
    const [movieSelected, setMovieSelected] = useState([])
    useEffect(() => {
        fetchMovie()
    }, [fetchURL]);

    const fetchMovie = async () => {
        const request = await axios.get(fetchURL)
        setMovie(request.data.results);
        return request;
    }

    const handleClick = (movie) => {
        setModal(true)
        setMovieSelected(movie)
    }

    return (
        <section className="row">
            <h2>{title}</h2>
            <div className="slider">
                <div className="slider-left" onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                }}><span className="arrow">{"<"}</span></div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div id={id} className="posters">
                            {movie.map(movie => (
                                <img key={movie.id} className={`poster ${isLargeRow && 'poster-large'}`}
                                     src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                     loading="lazy" onClick={() => handleClick(movie)}
                                     alt={movie.name}/>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-right" onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}><span className="arrow">{">"}</span></div>
            </div>
            {modal && (
                <MovieModal movie={movieSelected} setModal={setModal}></MovieModal>
            )}
        </section>
    );
};

export default Row;
