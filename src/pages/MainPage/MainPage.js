import React from 'react';
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import request from "../../api/request";

const MainPage = () => {
    return (
        <div className="App">
            <Banner></Banner>
            <Row title="NETFLIX ORIGINAL" id="no" fetchURL={request.fetchNowPlaying} isLargeRow></Row>
            <Row title="Trending Now" id="tn" fetchURL={request.fetchTrending}></Row>
            <Row title="Top Rated" id="tr" fetchURL={request.fetchTopRated}></Row>
            <Row title="Comedy" id="c" fetchURL={request.fetchComedyMovies}></Row>
        </div>
    );
};

export default MainPage;
