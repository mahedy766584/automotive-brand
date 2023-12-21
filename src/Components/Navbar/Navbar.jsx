import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="Automotive Brand" />
                <h1>Brand</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "" : ""
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "" : ""
                            }
                        >
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signIn"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "" : ""
                            }
                        >
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;