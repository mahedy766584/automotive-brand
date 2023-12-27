/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import Navbar from "../../../Navbar/Navbar";

const BMWCart = () => {

    const bmwLoaded = useLoaderData();
    const [star, setStar] = useState()

    const bmwFilter = bmwLoaded.filter(bmwCar => bmwCar.brand === "bmw")
    console.log(bmwFilter)

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-4 mt-5">
                {
                    bmwFilter.map(bmwMap => <div key={bmwMap._id}>
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-56">
                                <img className="rounded-t-lg p-3" src={bmwMap.photo} alt={bmwMap.name} />
                            </div>
                            <div className="px-5">
                                <h5 className="mb-2 text-3xl font-goldman font-bold tracking-tight text-gray-900 dark:text-white">{bmwMap.name}</h5>
                                {/* <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{toyotaMap.brandName}</h5> */}
                                <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{bmwMap.brandName}</h5>
                                <h5 className="mb-2 text-xl font-poppins font-medium tracking-tight text-gray-900 dark:text-white uppercase">{bmwMap.brand}</h5>
                                <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{bmwMap.type}</h5>
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <ReactStars
                                            onChange={onChange}
                                            value={bmwMap.rating}
                                            edit={true}
                                            activeColors={["orange"]}
                                        />
                                        <button className="btn btn-sm">{bmwMap.rating}</button>
                                    </div>
                                    <h5 className="mb-2 text-xl font-poppins font-medium tracking-tight text-gray-900 dark:text-white">{bmwMap.price}</h5>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-10 py-4">
                                <Link to={`/toyotaDetails/${bmwMap._id}`}>
                                    <button className="bg-red-600 rounded-sm px-6 py-2 uppercase text-white font-poppins text-sm font-medium">Details</button>
                                </Link>
                                <button className="border border-red-600 text-red-600 rounded-sm px-6 py-2 uppercase font-poppins text-xm font-medium">Update</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default BMWCart;