import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h2 className="text-7xl">404 Page not Found</h2>
            <p className="text-2xl pt-5">Recheck the address you want to access!</p>
            <Button><Link to="/" className="btn mt-6">Back to Home</Link></Button>
        </div>
    );
};

export default ErrorPage;