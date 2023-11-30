import { useLoaderData } from "react-router-dom";
import BiodataCard from "./BiodataCard";

const BiodatasPage = () => {

    const biodatas = useLoaderData()

    return (
        <div>
            <div className='flex flex-col md:flex-row my-6 gap-6'>
                <div>
                    <h3 className='text-3xl mb-5'>Filter</h3>
                </div>
                <div className='flex-1'>
                    <div className="grid  lg:grid-cols-2 gap-6">
                        {
                            biodatas.map(biodatas => <BiodataCard key={biodatas._id} biodatas={biodatas}></BiodataCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodatasPage;