import React, { useContext } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    MenuItem,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Bars2Icon,
    HomeIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// nav list component
const navListItems = [
    {
        label: "Home",
        icon: HomeIcon,
        navLinked: "",
    },
    {
        label: "Biodatas",
        icon: UserCircleIcon,
        navLinked: "biodatas"
    },
    {
        label: "About Us",
        icon: CubeTransparentIcon,
        navLinked: "about"
    },
    {
        label: "Contact Us",
        icon: CodeBracketSquareIcon,
        navLinked: "contact"
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

            {navListItems.map(({ navLinked, label, icon }) => (
                <Link
                    key={label}
                    as="a"
                    variant="small"
                    to={`/${navLinked}`}
                    color="gray"
                    className="font-medium text-blue-gray-500 nav-link"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Link>
            ))}
        </ul>
    );
}

export default function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const { user } = useContext(AuthContext)

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex md:gap-4">
                    <img className="w-10" src="https://i.ibb.co/XsnWyyL/image.png" alt="" />
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Eternal Matches
                    </Typography>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>

                {
                    user ?
                        <Link to={"/dashboard/viewBiodata"}><Button>Dashboard</Button></Link> :
                        <NavLink to={"/login"}>
                            <Button size="sm" variant="text">
                                <span>Log In</span>
                            </Button>
                        </NavLink>
                }


            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
            </Collapse>
        </Navbar>
    );
}