import React from 'react';

import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";
import {useMovie} from "../../hooks/useMovie";

const Movie = ({movie}) => {
    const {id, title, poster_path} = movie

    const navigate = useNavigate();
    const {setMovie} = useMovie();


    const toSelectedMovie = () => {
        setMovie(movie)
        console.log(movie);
        // navigate(`/movie/${movie.id}`)
    };

    return (
        <div className={css.Movie} onClick={toSelectedMovie}>
            <div className={'secondDiv'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="img"/>
                <div>{title}</div>
            </div>
        </div>
    );
};

export {Movie};