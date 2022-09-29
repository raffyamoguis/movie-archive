import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import MovieCard from './MovieCard';

const MOVIETYPE = [
    "TRENDING",
    "LATESTMOVIES",
    "LATESTTVSHOW",
    "COMINGSOON"
]

const TrendingMoviesApiURL = 'https://myflixer-video-api.cyclic.app/trending-movies';
const LatestMoviesApiURL = 'https://myflixer-video-api.cyclic.app/latest-movies';
const LatestTvShowApiURL = 'https://myflixer-video-api.cyclic.app/latest-tv';

const MovieContainer = ({ title, movietype }) => {

    const [moviesdata, setMoviesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (movietype.toUpperCase() === MOVIETYPE[0]) {
                fetchMoviesData(TrendingMoviesApiURL);
            } else if (movietype.toUpperCase() === MOVIETYPE[1]) {
                fetchMoviesData(LatestMoviesApiURL);
            } else if (movietype.toUpperCase() === MOVIETYPE[2]) {
                fetchMoviesData(LatestTvShowApiURL);
            }
        }

        fetchData();
    }, [movietype]); // <-- we didn't pass a value. what do you think will happen?

    const fetchMoviesData = (apiurl) => {
        try {
            axios.get(apiurl)
                .then(function (response) {
                    setMoviesData(response.data);
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3 className='mt-5 headline'>{title}</h3>

            <Row xs={3} md={6} lg={8} className="g-2">
                {/* Loop Area */}
                {moviesdata.map((moviedata) => {
                    return (
                        <Col className='mt-4'>
                            <MovieCard
                                imgsrc={moviedata.poster}
                                moviename={moviedata.name}
                                movieyear={moviedata.year}
                                movieduration={moviedata.duration}
                                type={moviedata.type} />
                        </Col>
                    )
                })}

            </Row>

        </>
    )
}

export default MovieContainer