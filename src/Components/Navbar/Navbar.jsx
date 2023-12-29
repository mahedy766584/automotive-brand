import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/Authprovider";
import { useThemes } from "../../Hooks/UseThemes";
import { FaRegMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";



const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
    const { changeTheme, mode } = useThemes();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="flex justify-around items-center h-[100px] font-lato bg-[#000C21]  text-white ">
            <Link to={'/'}>
                <div className="flex items-center">
                    <img src={logo} className="w-[130px]" alt="Automotive Brand" />
                    <h1 className="font-goldman text-3xl font-semibold text-red-600">Brand</h1>
                </div>
            </Link>
            <div>
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
            <div className="font-poppins text-lg">
                <div className="flex items-center gap-1">
                    <img className="w-[50px] rounded-[100%]" src={user?.photoURL} alt="" />
                    <details className="dropdown">
                        <summary className="m-1 px-8 py-2 rounded-md cursor-pointer bg-red-600 ">Profile</summary>
                        <ul className="p-2 mt-7 shadow menu bg-[#000C21] dropdown-content z-[1]  rounded-box  -ml-24">
                            <li className="py-2 border-b text-2xl"><a><button onClick={changeTheme}>{mode === "dark"? <FaRegMoon/> : <IoMdSunny/>}</button></a></li>
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