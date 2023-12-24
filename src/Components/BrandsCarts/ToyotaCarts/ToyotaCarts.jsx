/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import ReactStars from 'react-rating-star-with-type'
import { useState } from "react";

const ToyotaCarts = () => {

    const toyotaLoaded = useLoaderData();
    console.log(toyotaLoaded)

    const [star, setStar] = useState();

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <div>

            <div className="bg-[#000C21]">
                <Navbar />
            </div>

            <div className="grid mt-6 grid-cols-3 max-w-screen-xl  mx-auto gap-4">
                {
                    toyotaLoaded?.map((toyota, idx) => <div key={idx} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="h-56 relative py-2">
                            <img className="rounded-t-lg w-full" src={toyota.photo} alt="" />
                        </div>
                        <div className="p-5">
                            <div>
                                <div className="font-poppins">
                                    <h5 className="mb-2 text-2xl font-semibold font-goldman tracking-tight text-gray-900 dark:text-white">{toyota.name}</h5>
                                    <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{toyota.brandName}</h5>
                                    <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{toyota.type}</h5>
                                </div>
                                <div className="flex justify-between font-poppins">
                                    <div className="flex items-center gap-1">
                                        <ReactStars
                                            onChange={onChange}
                                            value={toyota.rating}
                                            edit={true}
                                            activeColors={["orange"]}
                                        />
                                        <div>
                                            <button className="btn btn-sm">{toyota.rating}</button>
                                        </div>
                                    </div>
                                    <h5 className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-white">{toyota.price}</h5>
                                </div>
                                <div className="flex justify-center gap-10 mt-3 items-center">
                                    <Link to={`/toyotaDetails/${toyota._id}`}>
                                        <button className="uppercase text-xs font-semibold font-poppins bg-red-600 text-white px-6 py-2 rounded">Details</button>
                                    </Link>
                                    <button className="uppercase text-xs font-semibold font-poppins border-2 border-red-600 text-red-600 px-6 py-2 rounded">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ToyotaCarts;