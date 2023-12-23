/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Navbar";

const Banner = () => {
    return (
        <div className="relative h-screen">
            <div className="h-screen">
                <div className="carousel w-full relative h-screen">
                    <div id="item1"
                        style={{
                            backgroundImage: `url(https://i.ibb.co/kDzTQBK/pexels-eduardo-valdes-18375386.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay"
                        }}
                        className="carousel-item w-full flex justify-center items-center">

                        <div className="flex space-y-2 flex-col items-center text-center justify-center">
                            <h1 className="font-goldman text-9xl text-red-700">Toyota</h1>
                            <h1 className="text-4xl text-gray-300 font-semibold font-montserrat w-[900px]">Driving Innovation, Inspiring Tomorrow: Toyota Cars - Your Journey Starts Here.</h1>
                        </div>
                    </div>
                    <div id="item2"
                        style={{
                            backgroundImage: `url(https://i.ibb.co/YXhBDH4/pexels-maria-geller-2127037.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay"
                        }}
                        className="carousel-item w-full flex justify-center items-center">

                        <div className="flex space-y-2 flex-col items-center text-center justify-center">
                            <h1 className="font-goldman text-9xl text-red-700">Ford</h1>
                            <h1 className="text-4xl text-gray-300 font-semibold font-montserrat w-[900px]">Ford Accelerating Dreams, Redefining Journeys.</h1>
                        </div>
                    </div>
                    <div id="item3"
                        style={{
                            backgroundImage: `url(https://i.ibb.co/ykqsS3f/cq5dam-resized-img-1680-large-time1687171609318.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay"
                        }}
                        className="carousel-item w-full flex justify-center items-center">

                        <div className="flex space-y-2 flex-col items-center text-center justify-center">
                            <h1 className="font-goldman text-9xl text-red-700">BMW</h1>
                            <h1 className="text-4xl text-gray-300 font-semibold font-montserrat w-[900px]">BMW: Beyond the Drive, Elevating Every Journey.</h1>
                        </div>
                    </div>
                    <div id="item4"
                        style={{
                            backgroundImage: `url(https://i.ibb.co/R4DgczH/pexels-mike-bird-120049.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay"
                        }}
                        className="carousel-item w-full flex justify-center items-center">
                        <div className="flex space-y-2 flex-col items-center text-center justify-center">
                            <h1 className="font-goldman text-9xl text-red-700">Mercedes-Benz</h1>
                            <h1 className="text-4xl text-gray-300 font-semibold font-montserrat w-[900px]">Mercedes-Benz: The Best or Nothing – Elevating Luxury, Redefining Performance.</h1>
                        </div>
                    </div>
                    <div id="item5"
                        style={{
                            backgroundImage: `url(https://i.ibb.co/DzJWzrW/pexels-justus-menke-5213531.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay"
                        }}
                        className="carousel-item w-full flex justify-center items-center">

                        <div className="flex space-y-2 flex-col items-center text-center justify-center">
                            <h1 className="font-goldman text-9xl text-red-700">Tesla</h1>
                            <h1 className="text-4xl text-gray-300 font-semibold font-montserrat w-[900px]">Tesla: Accelerating the World's Transition to Sustainable Energy.</h1>
                        </div>
                    </div>
                    <div id="item6"
                        style={{
                            backgroundImage: `url(https://i.ibb.co/R7dF2gJ/pexels-mike-bird-12476514.jpg), linear-gradient(to top, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90))`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay"
                        }}
                        className="carousel-item w-full flex justify-center items-center">

                        <div className="flex space-y-2 flex-col items-center text-center justify-center">
                            <h1 className="font-goldman text-9xl text-red-700">Honda</h1>
                            <h1 className="text-4xl text-gray-300 font-semibold font-montserrat w-[900px]">Honda: Innovate. Drive. Thrive. Reliable, efficient, eco-friendly journeys await.</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-3 absolute bottom-0">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                    <a href="#item6" className="btn btn-xs">6</a>
                </div>
            </div>
            <div className="absolute top-0 w-full">
                <Navbar />
            </div>
        </div>
    );
};

export default Banner;