
const OurSummary = () => {
    return (
        <div>

            <div className="text-center px-6">
                <h1 className="text-5xl font-montserrat font-semibold my-4"><span className="text-red-600">Our</span> Summary</h1>
                <div>
                    <p className="text-xl font-poppins text-gray-800 lg:w-[950px] py-4 mx-auto">
                        Honda, a Japanese automaker, offers a diverse lineup, including the reliable Accord and sporty Civic sedans, the practical CR-V and Pilot SUVs, family-friendly Odyssey minivan, and the efficient Fit subcompact. Mercedes-Benz, a German luxury brand, features opulent sedans like the S-Class, versatile models like the E-Class and C-Class, and sophisticated SUVs like the GLC and GLE, emphasizing cutting-edge technology and luxurious craftsmanship</p>
                </div>
            </div>

            <div className=" w-full grid grid-cols-2 px-10 gap-0.5">
                <div  className=" hidden lg:flex relative w-full">
                    <div className="w-full h-[350px]">
                        <img src="https://t4.ftcdn.net/jpg/02/89/80/45/240_F_289804593_teboDpNudJbCoHqbNWPqLRSmBoHKUThE.jpg" className="w-full h-[350px]" />
                    </div>
                </div>
                <div  className=" hidden lg:flex relative w-full">
                    <div className="w-full h-[350px]">
                        <img src="https://t3.ftcdn.net/jpg/06/40/03/30/240_F_640033028_hTfHyXRDGjMX8Uf5hyQTcTuJHEkZqVa7.jpg" className="w-full h-[350px]" />
                    </div>
                </div>
                <div  className=" hidden lg:flex w-full">
                    <div className="w-full h-[350px]">
                        <img src="https://t4.ftcdn.net/jpg/06/01/52/55/240_F_601525558_ORsqpNeNk7yIKDXGsiwnj4yV9hQ2UTjp.jpg" className="w-full h-[350px]" />
                    </div>
                </div>
                <div className=" hidden lg:flex relative w-full">
                    <div className="w-full h-[350px]">
                        <img src="https://t3.ftcdn.net/jpg/06/44/08/92/240_F_644089248_iphTZE3Cbq4izqw7NYWHzmkisSjklIZL.jpg" className="w-full h-[350px]" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurSummary;