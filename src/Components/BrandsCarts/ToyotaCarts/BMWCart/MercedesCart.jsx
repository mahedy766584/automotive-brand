/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import ReactStars from "react-stars";
import { useState } from "react";

const MercedesCart = () => {

    const mercedesLoaded = useLoaderData();
    const [star, setStar] = useState()
    console.log(mercedesLoaded)

    const mercedesFilter = mercedesLoaded.filter(mercedes => mercedes.brand === "mercedes")
    console.log(mercedesFilter)

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-4 mt-5">
                {
                    mercedesFilter?.map(mercedesMap => <div key={mercedesMap._id}>
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-56 relative">
                                <img className="rounded-t-lg p-3" src={mercedesMap.photo} alt={mercedesMap.name} />
                            </div>
                            <div className="px-5 relative">
                                <h5 className="mb-2 text-3xl font-goldman font-bold tracking-tight text-gray-900 dark:text-white">{mercedesMap.name}</h5>
                                {/* <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{toyotaMap.brandName}</h5> */}
                                <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{mercedesMap.brandName}</h5>
                                <h5 className="mb-2 text-xl font-poppins font-medium tracking-tight text-gray-900 dark:text-white uppercase">{mercedesMap.brand}</h5>
                                <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{mercedesMap.type}</h5>
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <ReactStars
                                            onChange={onChange}
                                            value={mercedesMap.rating}
                                            edit={true}
                                            activeColors={["orange"]}
                                        />
                                        <button className="btn btn-sm">{mercedesMap.rating}</button>
                                    </div>
                                    <h5 className="mb-2 text-xl font-poppins font-medium tracking-tight text-gray-900 dark:text-white">{mercedesMap.price}</h5>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-10 py-4">
                                <Link to={`/toyotaDetails/${mercedesMap._id}`}>
                                    <button className="bg-red-600 rounded-sm px-6 py-2 uppercase text-white font-poppins text-sm font-medium">Details</button>
                                </Link>
                                <Link to={`/updateProduct/${mercedesMap._id}`}>
                                    <button
                                        className="border border-red-600 text-red-600 rounded-sm px-6 py-2 uppercase font-poppins text-xm font-medium">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MercedesCart;