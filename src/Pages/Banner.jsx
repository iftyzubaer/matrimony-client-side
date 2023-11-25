import { Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <div className="text-center text-neutral-content min-h-screen bg-cover rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/KqX1sW6/image.png)' }}>
            <div className="bg-white bg-opacity-75">
                <div className="max-w-lg m-auto h-screen pt-20 md:pt-36 lg:pt-48">
                    <h1 className="mb-5 text-5xl font-bold">Eternal Matches: Where Forever Begins</h1>
                    <p className="mb-5">Unlock the door to everlasting love at Eternal Matches. Dive into a world where meaningful connections thrive. Begin your journey towards a lifetime of happiness and discover your perfect match. Your eternal love story starts here.</p>
                    <Button className="btn btn-primary">Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;