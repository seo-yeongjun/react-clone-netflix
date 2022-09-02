import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "../../api/axios";

const DetailPage = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchMovie(movieId)
    }, [movieId])

    const fetchMovie = async (movieId) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`)
        setMovie(response.data);
    }

    if (!movie) return (<div>...loading</div>)

    return (
        <section>
            <img
                className="modal__poster-img"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="poster"
            />
        </section>
    );
};

export default DetailPage;
