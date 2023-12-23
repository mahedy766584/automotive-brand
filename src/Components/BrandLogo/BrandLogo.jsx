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
                    <div style={{
                        backgroundImage: `url(https://i.ibb.co/7yxS7W6/pexels-sebastian-pichard-13911165.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundBlendMode: "overlay"
                    }}
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[270px] h-[240px]" src={toyota} alt="TOYOTA" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight dark:text-white font-goldman text-white">TOYOTA</h5>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div style={{
                        backgroundImage: `url(https://i.ibb.co/ykqsS3f/cq5dam-resized-img-1680-large-time1687171609318.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundBlendMode: "overlay"
                    }}
                        className="  border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[270px] h-[240px]" src={bmw} alt="BMW" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white font-goldman">BMW</h5>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div style={{
                        backgroundImage: `url(https://i.ibb.co/R7dF2gJ/pexels-mike-bird-12476514.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundBlendMode: "overlay"
                    }}
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[270px] h-[240px]" src={honda} alt="HONDA" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white font-goldman">HONDA</h5>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div style={{
                        backgroundImage: `url(https://i.ibb.co/DzJWzrW/pexels-justus-menke-5213531.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundBlendMode: "overlay"
                    }}
                        className="  border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[270px] h-[240px]" src={mercedes} alt="MERCEDES" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white font-goldman">MERCEDES</h5>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div style={{
                        backgroundImage: `url(https://i.ibb.co/gvSDzDm/pexels-sebastian-pichard-10664484.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundBlendMode: "overlay"
                    }}
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[270px] h-[240px]" src={tesla} alt="TESLA" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white font-goldman">TESLA</h5>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div style={{
                        backgroundImage: `url(https://i.ibb.co/YXhBDH4/pexels-maria-geller-2127037.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundBlendMode: "overlay"
                    }}
                        className=" border border-gray-200 rounded-lg shadow p-3 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                        <img className="rounded-lg w-[270px] h-[240px]" src={ford} alt="FORD" />
                        <div className="text-center">
                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white font-goldman">FORD</h5>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default BrandLogo;