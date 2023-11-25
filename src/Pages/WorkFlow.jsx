import React from "react";
import { Stepper, Step, CardHeader, Typography } from "@material-tailwind/react";

const WorkFlow = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div className="w-full py-4 px-8">
            <h2 className="text-3xl my-6 font-bold text-center">Discover, Connect, Love: Your Steps on Eternal Matches</h2>
            <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 m-0 place-items-center">
                <div className="w-full px-20 pt-4 pb-8">
                    <Stepper
                        activeStep={activeStep}
                        lineClassName="bg-white/50"
                        activeLineClassName="bg-white"
                    >
                        <Step
                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                            activeClassName="ring-0 !bg-white text-white"
                            completedClassName="!bg-white text-white"
                            onClick={() => setActiveStep(0)}
                        >
                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                <Typography variant="h6" color="inherit">Create a Profile</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                            activeClassName="ring-0 !bg-white text-white"
                            completedClassName="!bg-white text-white"
                            onClick={() => setActiveStep(1)}
                        >
                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                <Typography variant="h6" color="inherit">Browse Biodata</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                            activeClassName="ring-0 !bg-white text-white"
                            completedClassName="!bg-white text-white"
                            onClick={() => setActiveStep(2)}
                        >
                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                <Typography variant="h6" color="inherit">Preferences and Selection</Typography>
                            </div>
                        </Step>
                        <Step
                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                            activeClassName="ring-0 !bg-white text-white"
                            completedClassName="!bg-white text-white"
                            onClick={() => setActiveStep(3)}
                        >
                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                <Typography variant="h6" color="inherit">Communicate</Typography>
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </CardHeader>
        </div>
    );
};

export default WorkFlow;