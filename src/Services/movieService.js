import {axiosService} from "./axiosService";
import {urls} from "../Constants";

const movieService = {
    getAll:(page=1)=>axiosService.get(urls.movies, {params:{page}}),
    getById:(id)=>axiosService.get(urls.movie.byId(id))
}

export {
    movieService
}