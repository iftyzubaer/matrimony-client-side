import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default Dashboard;

Dashboard.propTypes = {
    user: PropTypes.array,
}