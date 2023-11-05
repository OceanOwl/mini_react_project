import React, {useEffect, useState} from 'react';

import {movieService} from "../../Services/movieService";

const SelectedMovie = () => {


    const [selectedMovie,setSelectedMovie] = useState(null);

    useEffect((id)=>{
        movieService.getById(id).then(({data})=>setSelectedMovie(data))
    },[])
    console.log(selectedMovie);

    return (
        <div>
            SelectedMovie
        </div>
    );
};

export {SelectedMovie};