import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {SingleMoviePage, MoviesPage, GenresPage,SearchPage} from "./Pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <SingleMoviePage/>},
            {path:'genres', element:<GenresPage/>},
            {path:'search', element:<SearchPage/>}
        ]
    }
]);

export {
    router
}