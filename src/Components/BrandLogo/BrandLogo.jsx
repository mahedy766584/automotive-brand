import toyota from "../../assets/brandLogo/toyota.png"
import bmw from "../../assets/brandLogo/bmw.png"
import honda from "../../assets/brandLogo/honda.png"
import mercedes from "../../assets/brandLogo/Mercedes-Benz.png"
import tesla from "../../assets/brandLogo/tesla.png"
import ford from "../../assets/brandLogo/ford.png"
import { Link } from "react-router-dom"

const BrandLogo = () => {



    return (
        <div>


            <div className="grid lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
                <Link to={'/toyotaCarts'}>
                    <div
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[230px] h-[200px]" src={toyota} alt="TOYOTA" />
                        <div className="text-center">
                            <h5 className="mb-2 text-[#000C21] text-4xl font-bold tracking-tight dark:text-white font-goldman ">TOYOTA</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/bmw'}>
                    <div 
                        className="  border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[230px] h-[200px]" src={bmw} alt="BMW" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#000C21] dark:text-white font-goldman">BMW</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/honda'}>
                    <div 
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[230px] h-[200px]" src={honda} alt="HONDA" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#000C21] dark:text-white font-goldman">HONDA</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/mercedes'}>
                    <div 
                        className="  border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[230px] h-[200px]" src={mercedes} alt="MERCEDES" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#000C21] dark:text-white font-goldman">MERCEDES</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/tesla'}>
                    <div 
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[230px] h-[200px]" src={tesla} alt="TESLA" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#000C21] dark:text-white font-goldman">TESLA</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/ford'}>
                    <div 
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[230px] h-[200px]" src={ford} alt="FORD" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#000C21] dark:text-white font-goldman">FORD</h5>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default BrandLogo;