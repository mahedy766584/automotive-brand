/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ReactStars from "react-stars";
import { useState } from "react";

const MyCart = () => {

    const addToLoaded = useLoaderData()
    console.log(addToLoaded)
    const [addCart, setAddCart] = useState(addToLoaded)

    const [star, setStar] = useState();

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    const handleDelete = (_id) =>{
        console.log('Delete', _id)

        fetch(`http://localhost:5001/addToCart/${_id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                const remaining = addCart.filter(carts => carts._id !== _id)
                setAddCart(remaining)
            }
        })
    }


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="py-6">
                {
                    addCart.map(cart => 
                    <div key={cart._id} className="">
                        <div className="px-6 ">
                            <div className="flex py-10 px-6 mt-5 flex-col gap-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                                <div className="w-1/2 mt-4">
                                    <img className="object-cover w-full rounded-t-lg md:h-auto  md:rounded-none md:rounded-s-lg" src={cart.photo} alt={cart.brandName} />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-poppins">
                                        <h5 className="mb-2 text-4xl font-semibold font-goldman tracking-tight text-gray-900 dark:text-black">{cart.name}</h5>
                                        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-black">{cart.brandName}</h5>
                                        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">{cart.type}</h5>
                                        <p className="text-gray-700 lg:w-[500px] font-poppins font-medium">{cart.description}</p>
                                        {/* <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{cart.price}</h5> */}
                                    </div>
                                    <div className="flex justify-between font-poppins">
                                        <div className="flex items-center gap-1">
                                            <ReactStars
                                                onChange={onChange}
                                                value={cart.rating}
                                                edit={true}
                                                activeColors={["orange"]}
                                            />
                                            <div>
                                                <button className="btn btn-sm">{cart.rating}</button>
                                            </div>
                                        </div>
                                        <h5 className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-black">{cart.price}</h5>
                                    </div>
                                    <div className="flex  gap-10 mt-3 items-center">
                                        <button onClick={()=>handleDelete(cart._id)}
                                        className="uppercase text-xs font-semibold font-poppins bg-red-600 text-white px-6 py-2 rounded">Delete</button>
                                        <Link to={`/updateProduct/${cart._id}`}>
                                            <button
                                                className="uppercase text-xs font-semibold font-poppins border-2 border-red-600 text-red-600 px-6 py-2 rounded">Update</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;