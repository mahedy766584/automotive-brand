import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="flex justify-around items-center h-[80px]  py-4 mt-3 font-lato bg-[#000C21]  text-white ">
            <Link to={'/'}>
                <div className="flex items-center">
                    <img src={logo} className="w-[130px]" alt="Automotive Brand" />
                    <h1 className="font-goldman text-3xl font-semibold text-red-600">Brand</h1>
                </div>
            </Link>
            <div>
                <ul className="flex items-center gap-10 text-lg font-poppins">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signIn"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="font-poppins text-lg">
                <button className="bg-red-600 px-10 py-2 rounded-sm">Sign out</button>
            </div>
        </div>
    );
};

export default Navbar;

//navbar bg color code: #000C21;