import {
    Input,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Select from 'react-select'

const ViewBiodata = () => {

    const { user } = useContext(AuthContext)

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ]
    const heightOptions = [
        { value: 142, label: '142 cm' },
        { value: 143, label: '143 cm' },
        { value: 144, label: '144 cm' },
        { value: 145, label: '145 cm' },
        { value: 146, label: '146 cm' },
        { value: 147, label: '147 cm' },
        { value: 148, label: '148 cm' },
        { value: 149, label: '149 cm' },
        { value: 150, label: '150 cm' },
        { value: 151, label: '151 cm' },
        { value: 152, label: '152 cm' },
        { value: 153, label: '153 cm' },
        { value: 154, label: '154 cm' },
        { value: 155, label: '155 cm' },
        { value: 156, label: '156 cm' },
        { value: 157, label: '157 cm' },
        { value: 158, label: '158 cm' },
        { value: 159, label: '159 cm' },
        { value: 160, label: '160 cm' },
        { value: 161, label: '161 cm' },
        { value: 162, label: '162 cm' },
        { value: 163, label: '163 cm' },
        { value: 164, label: '164 cm' },
        { value: 165, label: '165 cm' },
        { value: 166, label: '166 cm' },
        { value: 167, label: '167 cm' },
        { value: 168, label: '168 cm' },
        { value: 169, label: '169 cm' },
        { value: 170, label: '170 cm' },
        { value: 171, label: '171 cm' },
        { value: 172, label: '172 cm' },
        { value: 173, label: '173 cm' },
        { value: 174, label: '174 cm' },
        { value: 175, label: '175 cm' },
        { value: 176, label: '176 cm' },
        { value: 177, label: '177 cm' },
        { value: 178, label: '178 cm' },
        { value: 179, label: '179 cm' },
        { value: 180, label: '180 cm' },
        { value: 181, label: '181 cm' },
        { value: 182, label: '182 cm' }
    ]
    const weightOptions = [
        { value: 45, label: "45 kg" },
        { value: 46, label: "46 kg" },
        { value: 47, label: "47 kg" },
        { value: 48, label: "48 kg" },
        { value: 49, label: "49 kg" },
        { value: 50, label: "50 kg" },
        { value: 51, label: "51 kg" },
        { value: 52, label: "52 kg" },
        { value: 53, label: "53 kg" },
        { value: 54, label: "54 kg" },
        { value: 55, label: "55 kg" },
        { value: 56, label: "56 kg" },
        { value: 57, label: "57 kg" },
        { value: 58, label: "58 kg" },
        { value: 59, label: "59 kg" },
        { value: 60, label: "60 kg" },
        { value: 61, label: "61 kg" },
        { value: 62, label: "62 kg" },
        { value: 63, label: "63 kg" },
        { value: 64, label: "64 kg" },
        { value: 65, label: "65 kg" },
        { value: 66, label: "66 kg" },
        { value: 67, label: "67 kg" },
        { value: 68, label: "68 kg" },
        { value: 69, label: "69 kg" },
        { value: 70, label: "70 kg" },
        { value: 71, label: "71 kg" },
        { value: 72, label: "72 kg" },
        { value: 73, label: "73 kg" },
        { value: 74, label: "74 kg" },
        { value: 75, label: "75 kg" },
        { value: 76, label: "76 kg" },
        { value: 77, label: "77 kg" },
        { value: 78, label: "78 kg" },
        { value: 79, label: "79 kg" },
        { value: 80, label: "80 kg" },
        { value: 81, label: "81 kg" },
        { value: 82, label: "82 kg" },
        { value: 83, label: "83 kg" },
        { value: 84, label: "84 kg" },
        { value: 85, label: "85 kg" },
        { value: 86, label: "86 kg" },
        { value: 87, label: "87 kg" },
        { value: 88, label: "88 kg" },
        { value: 89, label: "89 kg" },
        { value: 90, label: "90 kg" }
    ]
    const occupationOptions = [
        { value: "accountant", label: "Accountant" },
        { value: "actor_actress", label: "Actor/Actress" },
        { value: "architect", label: "Architect" },
        { value: "artist", label: "Artist" },
        { value: "banking_professional", label: "Banking Professional" },
        { value: "business_analyst", label: "Business Analyst" },
        { value: "chef", label: "Chef" },
        { value: "civil_engineer", label: "Civil Engineer" },
        { value: "computer_programmer", label: "Computer Programmer" },
        { value: "consultant", label: "Consultant" },
        { value: "doctor", label: "Doctor" },
        { value: "education_professional", label: "Education Professional" },
        { value: "electrical_engineer", label: "Electrical Engineer" },
        { value: "event_planner", label: "Event Planner" },
        { value: "fashion_designer", label: "Fashion Designer" },
        { value: "financial_analyst", label: "Financial Analyst" },
        { value: "graphic_designer", label: "Graphic Designer" },
        { value: "hr_professional", label: "Human Resources Professional" },
        { value: "interior_designer", label: "Interior Designer" },
        { value: "journalist", label: "Journalist" },
        { value: "lawyer", label: "Lawyer" },
        { value: "marketing_professional", label: "Marketing Professional" },
        { value: "nurse", label: "Nurse" },
        { value: "photographer", label: "Photographer" },
        { value: "physical_therapist", label: "Physical Therapist" },
        { value: "pilot", label: "Pilot" },
        { value: "police_officer", label: "Police Officer" },
        { value: "real_estate_agent", label: "Real Estate Agent" },
        { value: "research_scientist", label: "Research Scientist" },
        { value: "software_engineer", label: "Software Engineer" },
        { value: "teacher", label: "Teacher" },
        { value: "travel_consultant", label: "Travel Consultant" },
        { value: "veterinarian", label: "Veterinarian" },
        { value: "web_developer", label: "Web Developer" },
        { value: "writer_editor", label: "Writer/Editor" }
    ]
    const raceOptions = [
        { value: "bengali", label: "Bengali" },
        { value: "chakma", label: "Chakma" },
        { value: "rohingya", label: "Rohingya" },
        { value: "marmas", label: "Marmas" },
        { value: "garo", label: "Garo" },
        { value: "santal", label: "Santal" },
        { value: "bawm", label: "Bawm" },
        { value: "other", label: "Other" }
    ]
    const divisionOptions = [
        { "value": "dhaka", "label": "Dhaka" },
        { "value": "chattagram", "label": "Chattogram" },
        { "value": "rangpur", "label": "Rangpur" },
        { "value": "barisal", "label": "Barisal" },
        { "value": "khulna", "label": "Khulna" },
        { "value": "maymansign", "label": "Maymansign" },
        { "value": "sylhet", "label": "Sylhet" }
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
                        value={user.gender}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        type="text"
                        disabled
                        name="name"
                        size="lg"
                        value={user.displayName}
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
                        value={user.photoURL}
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
                        value={user.birthDate}
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
                        value={user.height}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Weight (kg)
                    </Typography>
                    <Select
                        options={weightOptions}
                        isDisabled={true}
                        name="weight"
                        size="lg"
                        value={user.weight}
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
                        value={user.age}
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
                        value={user.occupation}
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
                        value={user.race}
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
                        value={user.fatherName}
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
                        value={user.motherName}
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
                        value={user.permanentDivision}
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
                        value={user.presentDivision}
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
                        value={user.partnerAge}
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
                        value={user.partnerHeight}
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
                        value={user.partnerWeight}
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
                        value={user.phoneNumber}
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