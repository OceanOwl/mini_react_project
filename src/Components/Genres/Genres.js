import React, {useEffect, useState} from 'react';

import css from './Genres.module.css'
import {genresService} from "../../Services/genresService";

const Genres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        genresService.getAll().then(({data})=>setGenres(data))
    },[])
    console.log(genres.genres);
    // const array = genres.genres
    // console.log(array);


    return (
        <div className={css.Genres}>
            {genres.genres &&
                genres.genres.map(genre=><div className={css.singleGenre} key={genre.id}>{genre.name}</div>)}
        </div>
    );
};

export {Genres};