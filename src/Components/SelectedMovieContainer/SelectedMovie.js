import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../../Services/movieService";

const SelectedMovie = () => {

    const {id} = useParams();

    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        movieService.getById(id).then(({data}) => setSelectedMovie(data))
    }, [])

    console.log(selectedMovie);

    return (

        <div>
            {selectedMovie &&
                <div>{selectedMovie.id}</div>
            }
        </div>
    );
};


export {SelectedMovie};