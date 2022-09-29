import React from 'react'
import { Card, Badge } from 'react-bootstrap';

const MovieCard = ({ imgsrc, moviename, movieyear, movieduration, type }) => {
    return (
        <Card className="moviecard__" style={{ width: '12rem' }}>
            <Card.Img src={imgsrc} alt="Movie Poster" />
            <h6 className='headline mt-2 ms-2'>{moviename}</h6>
            <div className='movieinfo__ secondary ms-2'>
                <span className='me-2'><small>{movieyear}</small></span>
                <span className='me-2'><small>{movieduration}</small></span>
                <span className='me-2'><small><Badge className='badge__'>{type}</Badge></small></span>
            </div>
        </Card>
    )
}

export default MovieCard