const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie'

const urls = {
    movies:'/discover/movie',
    movie:{
        byId:(id)=>`${movie}/${id}`
    },


}


export {
    baseURL,
    urls
}