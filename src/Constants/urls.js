const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie'

const urls = {
    movies: '/discover/movie',
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    movieImage: 'https://image.tmdb.org/t/p/w300',
    genres:`${baseURL}/genre/movie/list`


}


export {
    baseURL,
    urls,
}