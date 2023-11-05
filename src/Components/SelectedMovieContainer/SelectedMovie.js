import React from 'react';
import {useParams} from "react-router-dom";

const SelectedMovie = () => {

    const params = useParams();
    console.log(params);


    return (
        <div>
            SelectedMovie
        </div>
    );
};

export {SelectedMovie};