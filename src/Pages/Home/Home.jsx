import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import Banner from "../../Components/Navbar/Banner/Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-6 mb-6">
                <div className="text-center py-4">
                    <h1 className="text-4xl font-montserrat font-semibold">Our Category</h1>
                </div>
                <BrandLogo />
            </div>
        </div>
    );
};

export default Home;