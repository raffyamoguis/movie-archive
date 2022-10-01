import React from 'react'
import MovieContainer from './MovieContainer';

const Home = () => {
    return (
        <>
            <MovieContainer title='Explore' movietype='TRENDING' />
            <MovieContainer title='Latest Movies' movietype='LATESTMOVIES' />
            <MovieContainer title='Latest TV Shows' movietype='LATESTTVSHOW' />
        </>
    )
}

export default Home