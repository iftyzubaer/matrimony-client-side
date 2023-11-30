
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";

const BiodataDetails = () => {

    const biodatas = useLoaderData()
    const { _id } = useParams()
    const { user } = useContext(AuthContext)

    const findBiodata = biodatas && biodatas.find(biodata => biodata._id == _id)

    const favUser = { user_mail: user.email, ...findBiodata }

    const handleAddToFavourites = () => {
        fetch('http://localhost:5000/favourites', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Added to Favourites Successfully")
            })
    }

    return (
        <div className="mx-6 md:mx-32 lg:mx-40 my-16">
            <img className="m-auto" src={findBiodata.photoURL} alt="" />
            <h2 className="text-4xl font-bold py-6">{findBiodata.name}</h2>
            <p className="font-semibold pt-4 text-lg">Gender: {findBiodata.gender}</p>
            <p className="font-semibold pt-4 text-lg">Birth Date: {findBiodata.birthDate}</p>
            <p className="font-semibold pt-4 text-lg">Height: {findBiodata.height}</p>
            <p className="font-semibold pt-4 text-lg">Weight: {findBiodata.weight}</p>
            <p className="font-semibold pt-4 text-lg">Age: {findBiodata.age}</p>
            <p className="font-semibold pt-4 text-lg">Occupation: {findBiodata.occupation}</p>
            <p className="font-semibold pt-4 text-lg">Race: {findBiodata.race}</p>
            <p className="font-semibold pt-4 text-lg">Father&apos;s Name: {findBiodata.fatherName}</p>
            <p className="font-semibold pt-4 text-lg">Mother&apos;s Name: {findBiodata.motherName}</p>
            <p className="font-semibold pt-4 text-lg">Permanent Division: {findBiodata.permanentDivision}</p>
            <p className="font-semibold pt-4 text-lg">Present Division: {findBiodata.presentDivision}</p>
            <p className="font-semibold pt-4 text-lg">Partner&apos;s Age: {findBiodata.partnerAge}</p>
            <p className="font-semibold pt-4 text-lg">Partner&apos;s Height: {findBiodata.partnerHeight}</p>
            <p className="font-semibold pt-4 text-lg">Partner&apos;s Weight: {findBiodata.partnerWeight}</p>
            {/* <p className="font-semibold pt-4 text-lg">Email: {findBiodata.email}</p>
            <p className="font-semibold pt-4 text-lg">Phone Number: {findBiodata.phoneNumber}</p> */}

            <Button onClick={handleAddToFavourites}>Add to Favourites</Button>
            <ToastContainer />
        </div>
    );
};

export default BiodataDetails;