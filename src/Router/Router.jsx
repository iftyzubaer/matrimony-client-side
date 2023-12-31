import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home"
import Login from "../Auth/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Register from "../Auth/Register";
import EditBiodata from "../Pages/EditBiodata";
import ViewBiodata from "../Pages/ViewBiodata";
import BiodatasPage from "../Pages/BiodatasPage";
import BiodataDetails from "../Pages/BiodataDetails";
import FavouriteBiodata from "../Pages/favouriteBiodata";
import Chekout from "../Pages/Chekout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: "/dashboard/editBiodata",
                        element: <PrivateRoute><EditBiodata></EditBiodata></PrivateRoute>
                    },
                    {
                        path: "/dashboard/viewBiodata",
                        element: <PrivateRoute><ViewBiodata></ViewBiodata></PrivateRoute>
                    },
                    {
                        path: "/dashboard/favoritesBiodata",
                        element: <PrivateRoute><FavouriteBiodata></FavouriteBiodata></PrivateRoute>,
                        loader: () => fetch('http://localhost:5000/favourites')
                    }
                ]
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/biodatas",
                element: <BiodatasPage></BiodatasPage>,
                loader: () => fetch('http://localhost:5000/biodatas')
            },
            {
                path: "/biodata/:_id",
                element: <BiodataDetails></BiodataDetails>,
                loader: () => fetch('http://localhost:5000/biodatas')
            },
            {
                path: "/checkout",
                element: <Chekout></Chekout>
            }
        ]
    }
])

export default Router;