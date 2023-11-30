import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FavouriteBiodata = () => {

    const biodatas = useLoaderData()
    const { user } = useContext(AuthContext)
    const userMail = user.email

    const favouriteBiodatas = biodatas.filter((biodata) => biodata.user_mail == userMail)

    const handleCancelRequest = (id) => {
        fetch(`http://localhost:5000/favourites/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast("Deleted Successfully");
                }
            })
    }

    return (
        <div className="mx-6 md:mx-32 lg:mx-40 my-16">
            <h2 className="text-5xl font-bold text-center my-4">My Favourite Biodatas</h2>
            <div>
                <div className="min-w-full">
                    <table className="table table-lg text-center">
                        <thead>
                            <tr>
                                <th className="p-3">Name</th>
                                <th className="p-3">Biodata Id</th>
                                <th className="p-3">Permanent Address</th>
                                <th className="p-3">Occupation</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                favouriteBiodatas.map(favouriteBiodatas =>
                                    <tr key={favouriteBiodatas._id}>
                                        <td className="p-2">{favouriteBiodatas.name}</td>
                                        <td className="p-2">{favouriteBiodatas.user_id}</td>
                                        <td className="p-2">{favouriteBiodatas.permanentDivision}</td>
                                        <td className="p-2">{favouriteBiodatas.occupation}</td>
                                        <td className="p-2"><Button onClick={() => handleCancelRequest(favouriteBiodatas._id)}>Delete</Button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FavouriteBiodata;