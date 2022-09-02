import React, {useEffect, useState} from 'react';
import axios from "../api/axios";
import request from "../api/request";
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])
    const [isExist, setIsExist] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const req = await axios.get(request.fetchNowPlaying);
        const movieId = req.data.results[Math.floor(Math.random() * req.data.results.length)].id;
        const {data: movieDetail} = await axios.get(`/movie/${movieId}`, {params: {append_to_response: "videos"}});
        setMovie(movieDetail);
        if (movieDetail.videos.results.length > 0) setIsExist(true)
    }
    const substringDescription = (str, n) => {
        if (str?.length > n) return str.substring(0, 200) + "..."; else return str;
    }
    if (isPlaying) {
        return (<div className="flex justify-center items-center flex-col w-full h-screen">
            <div className="w-full h-full">
                <iframe title="play"
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                        width="640" height="360" allow="autoplay; fullscreen" className="-z-10 w-full h-full border-0 after:content-none after:absolute after:top-0"></iframe>
            </div>
        </div>)
    } else {
        return (<header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
        }}>
            <div className="banner-contents">
                <h1>{movie.title || movie.name || movie.original_name}</h1>
                <div className="banner-buttons">
                    <button className={`${isExist ? 'banner-button play' : 'hidden'}`}
                            onClick={() => setIsPlaying(true)}>Play
                    </button>
                    <button className="banner-button info">More Info</button>
                </div>
                <h1 className="banner-description">{substringDescription(movie.overview, 200)}</h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>);
    }
};

export default Banner;
