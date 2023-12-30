
const TeslaSlider = () => {
    return (
        <div>
            <div className="carousel w-[83vw] mx-auto lg:flex hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://t3.ftcdn.net/jpg/04/16/60/42/240_F_416604272_16Iwj76U6ryfTnBLyL2HBAmCR1E66TCy.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/05/19/31/55/240_F_519315592_UsB8h3gxkHpfbjhfL3QSe8c3zZRznS1F.jpg" className="w-full h-[350px] object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/06/40/72/41/240_F_640724184_cQ18LzZyzwQaLrjeQY5SOGwDNzC4QfZR.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeslaSlider;