
const BMWSlider = () => {
    return (
        <div>
            <div className="carousel w-[83vw] mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/05/16/16/05/240_F_516160504_l9npGR0GU73lM4LBD47FKoJ6lsehWM9o.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://t3.ftcdn.net/jpg/03/68/49/30/240_F_368493092_YYcOrBIK68IcRJ6BYm46sE5SCclXoXxD.jpg" className="w-full h-[350px] object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://t4.ftcdn.net/jpg/04/87/89/77/240_F_487897747_SuxICoXfD1f0pZ5rJeE8Y9rbr5HQRenu.jpg" className="w-full h-[350px] object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMWSlider;