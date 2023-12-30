
const FordSlider = () => {
    return (
        <div>
            <div className="carousel w-[83vw] mx-auto lg:flex hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://t3.ftcdn.net/jpg/05/25/02/50/240_F_525025009_JD0vFw8mQhKnOmQfa4bRbhkzccQl0juZ.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/00/08/80/51/240_F_8805167_PmKn8K20MX2iUfDDmHF16O2SgyD4ERjU.jpg" className="w-full h-[350px] object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/05/10/08/49/240_F_510084915_GDEBGSnjGOwXX74QZf9cCvg17WOW4HQo.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FordSlider;