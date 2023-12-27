/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import ReactStars from "react-stars";
import { useState } from "react";

const FordCart = () => {

    const fordLoaded = useLoaderData();
    const [star, setStar] = useState();
    // const [notFound, setNotFound] = useState(false);
    console.log(fordLoaded)

    const fordFilter = fordLoaded.filter(ford => ford.brand === "ford");
    console.log(fordFilter)

    if(fordFilter.length === 0){
        console.log('Page not found')
    }

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-4 mt-5">
                {
                    fordFilter.length === 0 ? <div><p>Page Not Found</p></div> : fordFilter.map(fordMap => <div key={fordMap._id}>
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-7">
                            <div className="h-56 relative">
                                <img className="rounded-t-lg p-3" src={fordMap.photo} alt={fordMap.name} />
                            </div>
                            <div className="px-5 relative">
                                <h5 className="mb-2 text-3xl font-goldman font-bold tracking-tight text-gray-900 dark:text-white">{fordMap.name}</h5>
                                {/* <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{toyotaMap.brandName}</h5> */}
                                <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{fordMap.brandName}</h5>
                                <h5 className="mb-2 text-xl font-poppins font-medium tracking-tight text-gray-900 dark:text-white uppercase">{fordMap.brand}</h5>
                                <h5 className="mb-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">{fordMap.type}</h5>
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <ReactStars
                                            onChange={onChange}
                                            value={fordMap.rating}
                                            edit={true}
                                            activeColors={["orange"]}
                                        />
                                        <button className="btn btn-sm">{fordMap.rating}</button>
                                    </div>
                                    <h5 className="mb-2 text-xl font-poppins font-medium tracking-tight text-gray-900 dark:text-white">{fordMap.price}</h5>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-10 py-4">
                                <Link to={`/toyotaDetails/${fordMap._id}`}>
                                    <button className="bg-red-600 rounded-sm px-6 py-2 uppercase text-white font-poppins text-sm font-medium">Details</button>
                                </Link>
                                <Link to={`/updateProduct/${fordMap._id}`}>
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

export default FordCart;