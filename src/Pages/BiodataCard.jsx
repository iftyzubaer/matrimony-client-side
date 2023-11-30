import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const BiodataCard = ({ biodatas }) => {
    return (
        <div>
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={biodatas.photoURL}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {biodatas.name}
                    </Typography>
                    <Typography>
                        <p><span className='font-bold'>Biodata Id: </span>{biodatas.user_id}</p>
                        <p><span className='font-bold'>Biodata Type: </span>{biodatas.gender}</p>
                        <p><span className='font-bold'>Permanent Division: </span>{biodatas.permanentDivision}</p>
                        <p><span className='font-bold'>Age: </span>{biodatas.age}</p>
                        <p><span className='font-bold'>Occupation: </span>{biodatas.occupation}</p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>View Profile</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BiodataCard;

BiodataCard.propTypes = {
    biodatas: PropTypes.object,
}