import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignUp from "../Authentication/SignUp/SignUp";
import SignIn from "../Authentication/SignIn/SignIn";
import ToyotaCarts from "../Components/BrandsCarts/ToyotaCarts/ToyotaCarts";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/addProduct",
                element: <AddProduct/>
            },
            {
                path: "/myCart",
                element: <MyCart/>
            },
            {
                path: "/signUp",
                element: <SignUp/>
            },
            {
                path: "/sigIn",
                element: <SignIn/>
            },
            {
                path: "/toyotaCarts",
                element: <ToyotaCarts/>
            }
        ]
    }
])

export default myCreatedRouter;