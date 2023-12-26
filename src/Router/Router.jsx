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
import UpdateProduct from "../Components/Update/UpdateProduct";
import BMWCart from "../Components/BrandsCarts/ToyotaCarts/BMWCart/BMWCart";

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
                element: <MyCart/>,
                loader: () => fetch('http://localhost:5001/addToCart')
            },
            {
                path: "/signUp",
                element: <SignUp/>
            },
            {
                path: "/signIn",
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
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct/>,
                loader: ({params}) => fetch(`http://localhost:5001/addToCart/${params.id}`)
            },
            {
                path: "/bmw",
                element: <BMWCart/>,
                loader: () => fetch('http://localhost:5001/toyota')
            }
        ]
    }
])

export default myCreatedRouter;