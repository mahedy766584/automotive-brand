import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import Banner from "../../Components/Navbar/Banner/Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <div className="mt-6 mb-6">
                <BrandLogo/>
            </div>
        </div>
    );
};

export default Home;