import React from 'react';

const Result = ({movies, navigate}) => {

    return (
        movies.map((result) => {
            if (result.backdrop_path != null)
                return (
                    <div className="result" key={result.id}>
                        <div
                            onClick={() => navigate(`/${result.id}`)}
                            className="result__column-poster"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                                alt="result"
                                className="result__poster"
                            />
                        </div>
                        <span className="text-white">{result.title || result.name}</span>
                    </div>
                )
        }));

};

export default Result;
