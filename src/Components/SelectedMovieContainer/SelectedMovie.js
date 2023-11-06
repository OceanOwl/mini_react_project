import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../../Services/movieService";

const SelectedMovie = ({movie}) => {

    const {id} = useParams();

    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        movieService.getById(id).then(({data}) => setSelectedMovie(data))
    }, [])

    console.log(selectedMovie);

    return (

        <div>
            {selectedMovie &&
                <div>
                    <div>{selectedMovie.id}</div>
                    <div>
                        <img src={"https://image.tmdb.org/t/p/w300" + selectedMovie.poster_path} alt={"img"}/>
                    <div>{selectedMovie.title}</div>

                    </div>

                </div>

            }
        </div>
    );
};


export {SelectedMovie};