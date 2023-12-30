const ToyotaSlider = () => {
    return (
        <div>
            <div className="carousel w-[83vw] mx-auto lg:flex hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://global.toyota/pages/news/images/2022/04/12/1330/20220412_01_kv_w1920.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://global.toyota/pages/models/images/20191018/kv/hilux_w1920_01.jpg" className="w-full h-[350px] object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://global.toyota/pages/models/images/crown/crown_kv_w1920_01.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyotaSlider;