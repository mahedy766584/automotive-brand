import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/Authprovider";
import { useThemes } from "../../Hooks/UseThemes";
import { FaRegMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";





const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
    const { changeTheme, mode } = useThemes();
    const [open, setOpen] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 1, path: '/addProduct', name: 'Add Product' },
        { id: 1, path: '/myCart', name: 'My Cart' },
        { id: 1, path: '/signIn', name: 'Sign In' },
    ]


    return (
        <div className="flex justify-between lg:px-16 items-center h-[100px] font-lato bg-[#000C21]  text-white ">
            <Link to={'/'}>
                <div className="flex items-center">
                    <img src={logo} className="w-[130px]" alt="Automotive Brand" />
                    <h1 className="font-goldman text-3xl font-semibold text-red-600">Brand</h1>
                </div>
            </Link>
            <div className="hidden lg:flex">
                <ul className="flex items-center gap-10 text-lg font-poppins">
                    <li className="flex items-center gap-1">
                        <IoMdHome />
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
                    <li className="flex items-center gap-1">
                        <IoCartOutline />
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
            <div onClick={() => setOpen(!open)} className="text-4xl lg:hidden ml-24">
                {
                    open === true ? <MdOutlineClose /> : <FaBars />
                }
            </div>
            <div>
                <ul className={`absolute w-full bg-white bg-opacity text-black left-0 text-center space-y-3 py-4 text-lg font-semibold lg:hidden duration-1000 z-[111] ${open ? "top-24 " : "-top-[360px]"}`}>
                    <div className="font-poppins text-lg text-center flex justify-center items-center">
                        <div className="flex items-center gap-1">
                            <img className="w-[50px] rounded-[100%]" src={user?.photoURL} alt="" />
                            <details className="dropdown">
                                <summary className="m-1 px-8 py-2 rounded-md cursor-pointer bg-red-600 text-white">Profile</summary>
                                <ul className="p-2 lg:mt-7 shadow menu bg-[#000C21] dropdown-content z-[1]  rounded-box  -ml-24">
                                    <li className="py-2 text-white border-b text-2xl"><a><button onClick={changeTheme}>{mode === "dark" ? <FaRegMoon /> : <IoMdSunny />}</button></a></li>
                                    <li className="border-b py-2 text-white"><a onClick={handleLogOut}>{user ? "Sign Out" : <Link to={'/signIn'}>Sign In</Link>}</a></li>
                                    <li className="border-b py-2 text-white"><a>Name: {user?.displayName}</a></li>
                                    <li className="py-2 text-white"><a>Email: {user?.email}</a></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    {
                        routes?.map((route, idx) => <div key={idx}>
                            <NavLink
                                to={route.path}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                {route.name}
                            </NavLink>
                        </div>)
                    }
                </ul>
            </div>
            <div className="font-poppins text-lg hidden lg:flex">
                <div className="flex items-center gap-1">
                    <img className="w-[50px] rounded-[100%]" src={user?.photoURL} alt="" />
                    <details className="dropdown">
                        <summary className="m-1 px-8 py-2 rounded-md cursor-pointer bg-red-600 ">Profile</summary>
                        <ul className="p-2 mt-7 shadow menu bg-[#000C21] dropdown-content z-[1]  rounded-box  -ml-24">
                            <li className="py-2 border-b text-2xl"><a><button onClick={changeTheme}>{mode === "dark" ? <FaRegMoon /> : <IoMdSunny />}</button></a></li>
                            <li className="border-b py-2"><a onClick={handleLogOut}>{user ? "Sign Out" : <Link to={'/signIn'}>Sign In</Link>}</a></li>
                            <li className="border-b py-2"><a>Name: {user?.displayName}</a></li>
                            <li className="py-2"><a>Email: {user?.email}</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//navbar bg color code: #000C21;
//<img className="w-[50px] rounded-[100%]" src={user?.photoURL} alt="" />