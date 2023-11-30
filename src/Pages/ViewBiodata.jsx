import {
    Input,
    Typography,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Select from 'react-select'

const ViewBiodata = () => {

    const { user } = useContext(AuthContext)
    const [userBiodatas, setUserBiodatas] = useState({})
    const [loading, setLoading] = useState(true)

    const email = user.email

    useEffect(() => {
        fetch('http://localhost:5000/biodatas')
            .then(response => response.json())
            .then(data => {
                setUserBiodatas(data)
                setLoading(false)
            })
    }, [email])

    if (loading) {
        return <p>Loading...</p>
    }

    const userBiodata = userBiodatas && userBiodatas.find(user1 => user1.email === email)

    const genderOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
    ]
    const heightOptions = [
        { value: '142 cm', label: '142 cm' },
        { value: '143 cm', label: '143 cm' },
        { value: '144 cm', label: '144 cm' },
        { value: '145 cm', label: '145 cm' },
        { value: '146 cm', label: '146 cm' },
        { value: '147 cm', label: '147 cm' },
        { value: '148 cm', label: '148 cm' },
        { value: '149 cm', label: '149 cm' },
        { value: '150 cm', label: '150 cm' },
        { value: '151 cm', label: '151 cm' },
        { value: '152 cm', label: '152 cm' },
        { value: '153 cm', label: '153 cm' },
        { value: '154 cm', label: '154 cm' },
        { value: '155 cm', label: '155 cm' },
        { value: '156 cm', label: '156 cm' },
        { value: '157 cm', label: '157 cm' },
        { value: '158 cm', label: '158 cm' },
        { value: '159 cm', label: '159 cm' },
        { value: '160 cm', label: '160 cm' },
        { value: '161 cm', label: '161 cm' },
        { value: '162 cm', label: '162 cm' },
        { value: '163 cm', label: '163 cm' },
        { value: '164 cm', label: '164 cm' },
        { value: '165 cm', label: '165 cm' },
        { value: '166 cm', label: '166 cm' },
        { value: '167 cm', label: '167 cm' },
        { value: '168 cm', label: '168 cm' },
        { value: '169 cm', label: '169 cm' },
        { value: '170 cm', label: '170 cm' },
        { value: '171 cm', label: '171 cm' },
        { value: '172 cm', label: '172 cm' },
        { value: '173 cm', label: '173 cm' },
        { value: '174 cm', label: '174 cm' },
        { value: '175 cm', label: '175 cm' },
        { value: '176 cm', label: '176 cm' },
        { value: '177 cm', label: '177 cm' },
        { value: '178 cm', label: '178 cm' },
        { value: '179 cm', label: '179 cm' },
        { value: '180 cm', label: '180 cm' },
        { value: '181 cm', label: '181 cm' },
        { value: '182 cm', label: '182 cm' }
    ]
    const weightOptions = [
        { value: "45 kg", label: "45 kg" },
        { value: "46 kg", label: "46 kg" },
        { value: "47 kg", label: "47 kg" },
        { value: "48 kg", label: "48 kg" },
        { value: "49 kg", label: "49 kg" },
        { value: "50 kg", label: "50 kg" },
        { value: "51 kg", label: "51 kg" },
        { value: "52 kg", label: "52 kg" },
        { value: "53 kg", label: "53 kg" },
        { value: "54 kg", label: "54 kg" },
        { value: "55 kg", label: "55 kg" },
        { value: "56 kg", label: "56 kg" },
        { value: "57 kg", label: "57 kg" },
        { value: "58 kg", label: "58 kg" },
        { value: "59 kg", label: "59 kg" },
        { value: "60 kg", label: "60 kg" },
        { value: "61 kg", label: "61 kg" },
        { value: "62 kg", label: "62 kg" },
        { value: "63 kg", label: "63 kg" },
        { value: "64 kg", label: "64 kg" },
        { value: "65 kg", label: "65 kg" },
        { value: "66 kg", label: "66 kg" },
        { value: "67 kg", label: "67 kg" },
        { value: "68 kg", label: "68 kg" },
        { value: "69 kg", label: "69 kg" },
        { value: "70 kg", label: "70 kg" },
        { value: "71 kg", label: "71 kg" },
        { value: "72 kg", label: "72 kg" },
        { value: "73 kg", label: "73 kg" },
        { value: "74 kg", label: "74 kg" },
        { value: "75 kg", label: "75 kg" },
        { value: "76 kg", label: "76 kg" },
        { value: "77 kg", label: "77 kg" },
        { value: "78 kg", label: "78 kg" },
        { value: "79 kg", label: "79 kg" },
        { value: "80 kg", label: "80 kg" },
        { value: "81 kg", label: "81 kg" },
        { value: "82 kg", label: "82 kg" },
        { value: "83 kg", label: "83 kg" },
        { value: "84 kg", label: "84 kg" },
        { value: "85 kg", label: "85 kg" },
        { value: "86 kg", label: "86 kg" },
        { value: "87 kg", label: "87 kg" },
        { value: "88 kg", label: "88 kg" },
        { value: "89 kg", label: "89 kg" },
        { value: "90 kg", label: "90 kg" }
    ]
    const occupationOptions = [
        { value: "Accountant", label: "Accountant" },
        { value: "Actor/Actress", label: "Actor/Actress" },
        { value: "Architect", label: "Architect" },
        { value: "Artist", label: "Artist" },
        { value: "Banking Professional", label: "Banking Professional" },
        { value: "Business Analyst", label: "Business Analyst" },
        { value: "Chef", label: "Chef" },
        { value: "Civil Engineer", label: "Civil Engineer" },
        { value: "Computer Programmer", label: "Computer Programmer" },
        { value: "Consultant", label: "Consultant" },
        { value: "Doctor", label: "Doctor" },
        { value: "Education Professional", label: "Education Professional" },
        { value: "Electrical Engineer", label: "Electrical Engineer" },
        { value: "Event Planner", label: "Event Planner" },
        { value: "Fashion Designer", label: "Fashion Designer" },
        { value: "Financial Analyst", label: "Financial Analyst" },
        { value: "Graphic Designer", label: "Graphic Designer" },
        { value: "Human Resources Professional", label: "Human Resources Professional" },
        { value: "Interior Designer", label: "Interior Designer" },
        { value: "Journalist", label: "Journalist" },
        { value: "Lawyer", label: "Lawyer" },
        { value: "Marketing Professional", label: "Marketing Professional" },
        { value: "Nurse", label: "Nurse" },
        { value: "Photographer", label: "Photographer" },
        { value: "Physical Therapist", label: "Physical Therapist" },
        { value: "Pilot", label: "Pilot" },
        { value: "Police Officer", label: "Police Officer" },
        { value: "Real Estate Agent", label: "Real Estate Agent" },
        { value: "Research Scientist", label: "Research Scientist" },
        { value: "Software Engineer", label: "Software Engineer" },
        { value: "Teacher", label: "Teacher" },
        { value: "Travel Consultant", label: "Travel Consultant" },
        { value: "Veterinarian", label: "Veterinarian" },
        { value: "Web Developer", label: "Web Developer" },
        { value: "Writer/Editor", label: "Writer/Editor" }
    ]
    const raceOptions = [
        { value: "Bengali", label: "Bengali" },
        { value: "Chakma", label: "Chakma" },
        { value: "Rohingya", label: "Rohingya" },
        { value: "Marmas", label: "Marmas" },
        { value: "Garo", label: "Garo" },
        { value: "Santal", label: "Santal" },
        { value: "Bawm", label: "Bawm" },
        { value: "Other", label: "Other" }
    ]
    const divisionOptions = [
        { "value": "Dhaka", "label": "Dhaka" },
        { "value": "Chattogram", "label": "Chattogram" },
        { "value": "Rangpur", "label": "Rangpur" },
        { "value": "Barisal", "label": "Barisal" },
        { "value": "Khulna", "label": "Khulna" },
        { "value": "Maymansign", "label": "Maymansign" },
        { "value": "Sylhet", "label": "Sylhet" }
    ]

    return (
        <div className="ml-5">
            <form className="mt-8 mb-2 max-w-80 m-auto sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Gender
                    </Typography>
                    <Select
                        options={genderOptions}
                        isDisabled={true}
                        name="gender"
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        placeholder={userBiodata.gender}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        type="text"
                        disabled
                        name="name"
                        size="lg"
                        value={userBiodata.name}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Photo
                    </Typography>
                    <Input
                        type="url"
                        name="photoURL"
                        value={userBiodata.photoURL}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Date of Birth
                    </Typography>
                    <Input
                        type="date"
                        name="birthDate"
                        value={userBiodata.birthDate}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Height
                    </Typography>
                    <Select
                        options={heightOptions}
                        isDisabled={true}
                        name="height"
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        placeholder={userBiodata.height}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Weight (kg)
                    </Typography>
                    <Select
                        options={weightOptions}
                        isDisabled={true}
                        name="weight"
                        size="lg"
                        placeholder={userBiodata.weight}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Age
                    </Typography>
                    <Input
                        type="number"
                        name="age"
                        value={userBiodata.age}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Occupation
                    </Typography>
                    <Select
                        options={occupationOptions}
                        isDisabled={true}
                        name="occupation"
                        size="lg"
                        placeholder={userBiodata.occupation}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Race
                    </Typography>
                    <Select
                        options={raceOptions}
                        isDisabled={true}
                        name="race"
                        size="lg"
                        placeholder={userBiodata.race}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Father&apos;s name
                    </Typography>
                    <Input
                        type="text"
                        name="fatherName"
                        value={userBiodata.fatherName}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Mother&apos;s name
                    </Typography>
                    <Input
                        type="text"
                        name="motherName"
                        value={userBiodata.motherName}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Permanent Division
                    </Typography>
                    <Select
                        options={divisionOptions}
                        isDisabled={true}
                        name="permanentDivision"
                        size="lg"
                        placeholder={userBiodata.permanentDivision}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Present Division
                    </Typography>
                    <Select
                        options={divisionOptions}
                        isDisabled={true}
                        name="presentDivision"
                        size="lg"
                        placeholder={userBiodata.presentDivision}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Expected Partner&apos;s Age
                    </Typography>
                    <Input
                        type="number"
                        name="partnerAge"
                        value={userBiodata.partnerAge}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Expected Partner&apos;s Height
                    </Typography>
                    <Select
                        options={heightOptions}
                        isDisabled={true}
                        name="partnerHeight"
                        size="lg"
                        placeholder={userBiodata.partnerHeight}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Expected Partner&apos;s Weight (kg)
                    </Typography>
                    <Select
                        options={weightOptions}
                        isDisabled={true}
                        name="partnerWeight"
                        size="lg"
                        placeholder={userBiodata.partnerWeight}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Contact Email
                    </Typography>
                    <Input
                        type="email"
                        name="email"
                        value={user.email}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Mobile Number
                    </Typography>
                    <Input
                        type="number"
                        name="phoneNumber"
                        value={userBiodata.phoneNumber}
                        disabled
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default ViewBiodata;