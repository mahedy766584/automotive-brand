import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignUp from "../Authentication/SignUp/SignUp";
import SignIn from "../Authentication/SignIn/SignIn";
import ToyotaCarts from "../Components/BrandsCarts/ToyotaCarts/ToyotaCarts";
import ToyotaDetails from "../Components/ToyotaDetails/ToyotaDetails";

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
                element: <ToyotaCarts/>,
                loader: () => fetch('http://localhost:5001/toyota')
            },
            {
                path: "/toyotaDetails/:id",
                element: <ToyotaDetails/>,
                loader: ({params}) => fetch(`http://localhost:5001/toyota/${params.id}`)
            }
        ]
    }
])

export default myCreatedRouter;