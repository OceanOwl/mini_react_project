import {useContext} from "react";

import {Context} from "../hoc";

const useMovie = () => {
    const [movie, setMovie] = useContext(Context);
    return {
        movie,
        setMovie
    }
}

export {
    useMovie
}