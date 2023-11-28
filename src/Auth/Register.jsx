import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast("The password is less than 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast("The password don't have a capital letter")
            return
        }
        else if (!/[!@#$%^&*()_+{}/[\]:;<>,.?~\\-]/.test(password)) {
            toast("The password don't have a special character")
            return
        }

        createUser(email, password)
            .then( () => {
                toast("Account Created Successfully!");
                navigate('/')
            })
    }

    return (
        <div className="hero px-4 py-20 md:px-24">
            <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Ready to embark on a journey towards eternal love? Your adventure begins here at EternalMatches! By creating an account, you&apos;re opening the door to a world where genuine connections and lifelong companionships are waiting to be discovered.</p>
                </div>

                <Card color="transparent" shadow={false}>
                    <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                type="text"
                                name="name"
                                required
                                size="lg"
                                placeholder="Full Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                type="email"
                                name="email"
                                required
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                name="password"
                                required
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Photo
                            </Typography>
                            <Input
                                type="url"
                                name="photoURL"
                                required
                                size="lg"
                                placeholder="Photo Link"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the Terms and Conditions
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already has account??{" "}
                            <Link to={"/login"} className="font-medium text-gray-900">
                                Login Now
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;