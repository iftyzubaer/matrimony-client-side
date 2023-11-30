import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
            .then( () => {
                toast("Logged In Successfully!");
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    toast("email doesn't match")
                }
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then( () => {
                toast("Logged In Successfully!");
                navigate('/')
            })
    }

    return (
        <div className="hero px-4 py-20 md:px-24">
            <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Step into the world of love and connections. Your journey on Eternal Matches continues here. Login to your account and open the door to a realm where meaningful relationships flourish. Whether you&apos;re here to find your forever love or to rekindle a connection, your next chapter starts with a simple login. Embrace the possibilities and let the search for your eternal match begin.</p>
                </div>

                <Card color="transparent" shadow={false}>
                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
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
                        <input type="submit" value={"Login"} className="mt-6 bg-black text-white p-3 w-full rounded-lg hover:bg-gray-800" />
                        <Button onClick={handleGoogleSignIn} className="mt-6" fullWidth>Google</Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            New Here?{" "}
                            <Link to={"/register"} className="font-medium text-gray-900">
                                Register Now
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;