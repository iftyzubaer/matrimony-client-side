import { Typography } from "@material-tailwind/react";

export default function FooterWithLogo() {
    return (
        <footer className="">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <img src="https://i.ibb.co/XsnWyyL/image.png" alt="logo-ct" className="w-20" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="/about"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="/contact"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="mb-4 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 Eternal Matches
            </Typography>
        </footer>
    );
}