import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="mx-auto max-w-screen-xl p-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;