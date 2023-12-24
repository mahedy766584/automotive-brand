import { useLoaderData } from "react-router-dom";

const ToyotaDetails = () => {

    const toyotaLoaded = useLoaderData();
    console.log(toyotaLoaded)

    return (
        <div>

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-3/5">
                    <img className="object-cover w-full rounded-t-lg md:h-auto  md:rounded-none md:rounded-s-lg" src={toyotaLoaded.photo} alt="" />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                
                </div>
            </a>

        </div>
    );
};

export default ToyotaDetails;