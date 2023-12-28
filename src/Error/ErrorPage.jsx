import notFoundPage from "../../src/assets/notFoundPage.png"
import Navbar from "../Components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex items-center justify-center">
                <img src={notFoundPage} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;