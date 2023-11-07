import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Rating} from "@mui/material";

import {movieService} from "../../Services/movieService";
import {urls} from "../../Constants";

const SelectedMovie = () => {

     const {id} = useParams();


     const [selectedMovie, setSelectedMovie] = useState({});

     useEffect(() => {
         movieService.getById(id).then(({data}) => setSelectedMovie(data))
     }, [])

     console.log(selectedMovie);

    const {poster_path, overview, title, vote_average, genres} = selectedMovie

     const movieImage = `${urls.movieImage}` + poster_path
     console.log(movieImage);

    return (

        <div>
            {selectedMovie &&
                <div>
                    <div>{id}</div>
                    <div>
                        <img src={movieImage} alt={"img"}/>
                        <span>{overview}</span>
                        <div>{title}
                            {/*<Rating name="customized-10"*/}
                            {/*        defaultValue={vote_average}*/}
                            {/*        precision={0.1}*/}
                            {/*        max={10}/>*/}
                        </div>
                        <div>{genres&&
                            genres.map(genre=><div key={genre.id}>{genre.name}</div>)}
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};


export {SelectedMovie};