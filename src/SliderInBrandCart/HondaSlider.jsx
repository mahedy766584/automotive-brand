
const HondaSlider = () => {
    return (
        <div>
            <div className="carousel w-[83vw] mx-auto lg:flex hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://t3.ftcdn.net/jpg/04/65/30/36/240_F_465303637_ZCDjM6EXd9LI3fbDkersAV7gJtJiIoGb.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/04/17/17/03/240_F_417170331_V6lQgkIpAGsyeFpn6arWa8ZkalNrU5wp.jpg" className="w-full h-[350px] object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/05/21/87/81/240_F_521878182_LTpdnei88t7Znq3qy5iov4QvatI94kqw.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HondaSlider;