import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => toast('user logged out successfully'))
    }

    return (
        <div>
            <div className='flex my-6'>
                <div>
                    <h3 className='text-3xl mb-5'>{user.displayName}</h3>
                    <div className='flex flex-col gap-3 pr-5 border-r-2 border-black'>
                        <Link to={"/dashboard/editBiodata"}><Button>Edit Biodata</Button></Link>
                        <Link to={"/dashboard/viewBiodata"}><Button>View Biodata</Button></Link>
                        <Link to={"/dashboard/contactRequest"}><Button>My Contact Request</Button></Link>
                        <Link to={"/dashboard/favoritesBiodata"}><Button>Favorites Biodata</Button></Link>
                        <Button onClick={handleLogOut}>Log Out</Button>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;

Dashboard.propTypes = {
    user: PropTypes.array,
}