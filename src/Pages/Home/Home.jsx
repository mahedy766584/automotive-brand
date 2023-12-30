import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Navbar/Banner/Banner";
import OurSummary from "../../Components/OurSummary/OurSummary";

const Home = () => {

    return (
        <div className="dark:bg-black">
            <div>
                <Banner />
            </div>
            <div className="mt-6 ">
                <div className="text-center mt-8">
                    <h1 className="text-4xl font-montserrat font-semibold dark:text-white">Our Category</h1>
                </div>
                <div className="mt-4">
                    <BrandLogo />
                </div>
            </div>

            <div className="mt-10 mb-10">
                <OurSummary/>
            </div>

            <div className="mt-10">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;