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

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
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
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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
            }
        ]
    }
])

export default Router;