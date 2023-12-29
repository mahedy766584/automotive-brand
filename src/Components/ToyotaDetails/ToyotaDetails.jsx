/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import Navbar from "../Navbar/Navbar";

const ToyotaDetails = () => {

    const toyotaLoaded = useLoaderData();
    

    const [star, setStar] = useState();

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    const newData = {name: toyotaLoaded.name, brandName: toyotaLoaded.brandName, photo: toyotaLoaded.photo, rating: toyotaLoaded.rating, description: toyotaLoaded.description, price: toyotaLoaded.price, type: toyotaLoaded.type}

    const handleAddToCart = () => {

        fetch('http://localhost:5001/addToCart', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    // console.log(product)/

    return (
        <div>

            <div className="bg-[#000C21]">
                <Navbar />
            </div>

            <div className="px-6 ">
                <div className="flex py-10 px-6 mt-5 flex-col gap-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <div className="max-w-screen-lg mt-4">
                        <img className="object-cover w-full rounded-t-lg md:h-auto  md:rounded-none md:rounded-s-lg" src={toyotaLoaded.photo} alt={toyotaLoaded.brandName} />
                    </div>
                    <div className="space-y-5">
                        <div className="font-poppins">
                            <h5 className="mb-2 text-4xl font-semibold font-goldman tracking-tight text-gray-900 dark:text-black">{toyotaLoaded.name}</h5>
                            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-black">{toyotaLoaded.brandName}</h5>
                            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">{toyotaLoaded.type}</h5>
                            <p className="text-gray-700 font-poppins font-medium">{toyotaLoaded.description}</p>
                        </div>
                        <div className="flex justify-between font-poppins">
                            <div className="flex items-center gap-1">
                                <ReactStars
                                    onChange={onChange}
                                    value={toyotaLoaded.rating}
                                    edit={true}
                                    activeColors={["orange"]}
                                />
                                <div>
                                    <button className="btn btn-sm">{toyotaLoaded.rating}</button>
                                </div>
                            </div>
                            <h5 className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-black">{toyotaLoaded.price}</h5>
                        </div>
                        <div className="flex  gap-10 mt-3 items-center">
                            <button className="uppercase text-xs font-semibold font-poppins bg-red-600 text-white px-6 py-2 rounded">Buy Now</button>
                            <button onClick={handleAddToCart} 
                                className="uppercase text-xs font-semibold font-poppins border-2 border-red-600 text-red-600 px-6 py-2 rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyotaDetails;