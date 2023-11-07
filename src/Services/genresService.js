import {axiosService} from "./axiosService";
import {urls} from "../Constants";

const genresService = {
    getAll:()=>axiosService.get(urls.genres)
}

export {
    genresService
}