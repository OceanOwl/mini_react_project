import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../Services/movieService";
import {Movie} from "./Movie";
import css from './Movies.module.css'

const Movies = () => {

    const [movies, setMovies] = useState({page:null, results:[]});

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        movieService.getAll(page)
            .then(({data:{page,results}})=>setMovies({page,results}))
    }, [page])

    console.log(movies);

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    };

    return (
        <div>
            <div className={css.Movies}>
                {movies.results.map(movie=><Movie key={movie.id} movie={movie}/>)}
            </div>
        <div>
            <button disabled={movies.page===1} onClick={prevHandler}>Previous Page</button>
            <button disabled={movies.page===500} onClick={nextHandler}>Next Page</button>
        </div>
        </div>

    );
};

export {Movies};