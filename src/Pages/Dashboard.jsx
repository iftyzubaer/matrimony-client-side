import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, Outlet } from 'react-router-dom';
import React from "react";
import {
    Drawer,
} from "@material-tailwind/react";

const Dashboard = () => {

    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => toast('user logged out successfully'))
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row my-6'>
                <div>
                    <h3 className='text-3xl mb-5'>{user.displayName}</h3>
                    <React.Fragment>
                        <Button onClick={openDrawer}>Open Drawer</Button>
                        <Drawer open={open} onClose={closeDrawer} className="p-4">
                            <div className='flex flex-col gap-3'>
                                <Link to={"/dashboard/editBiodata"}><Button>Edit Biodata</Button></Link>
                                <Link to={"/dashboard/viewBiodata"}><Button>View Biodata</Button></Link>
                                <Link to={"/dashboard/contactRequest"}><Button>My Contact Request</Button></Link>
                                <Link to={"/dashboard/favoritesBiodata"}><Button>Favorites Biodata</Button></Link>
                                <Link><Button onClick={handleLogOut}>Log Out</Button></Link>
                            </div>
                        </Drawer>
                    </React.Fragment>
                </div>
                <div className='flex-1'>
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