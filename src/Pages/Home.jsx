import Banner from "./Banner";
import BiodataCounter from "./BiodataCounter";
import SixPremiumCards from "./SixPremiumCards";
import SuccessStories from "./SuccessStories";
import WorkFlow from "./WorkFlow";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SixPremiumCards></SixPremiumCards>
            <WorkFlow></WorkFlow>
            <BiodataCounter></BiodataCounter>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;