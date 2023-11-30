import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BiodataDetails = () => {

    const biodatas = useLoaderData()
    console.log(biodatas);

    const [biodata, setBiodata] = useState({})
    const { _id } = useParams()

    useEffect(() => {
        const findBiodata = biodatas.find(biodata => biodata._id == _id)
        setBiodata(findBiodata)
    }, [_id, biodatas])

    console.log(biodata);

    return (
        <div className="mx-6 md:mx-32 lg:mx-40 my-16">
            {/* <img className="m-auto" src={biodata.photoURL} alt="" />
            <h2 className="text-4xl font-bold py-6">{biodata.name}</h2>
            <p className="font-semibold pt-4 text-lg">Quantity: {biodata.quantity}</p>
            <p className="font-semibold pt-4 text-lg">Expiry Date: {biodata.expiryDate}</p> */}
        </div>
    );
};

export default BiodataDetails;