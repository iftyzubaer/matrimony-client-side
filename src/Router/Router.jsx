import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home"

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default Router;