import logo from "../../assets/logo.png"
const Footer = () => {
    return (
        <div>


            <footer className=" bg-[#000C21] dark:bg-gray-900">
                <div className="w-full   py-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between px-20">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-16" alt="Automotive Brand" />
                            <span  className="font-goldman self-center text-5xl font-semibold text-red-600 dark:text-white">Brand</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Automotive Brand™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;