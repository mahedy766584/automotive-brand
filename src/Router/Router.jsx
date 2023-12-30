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
import HondaCar from "../Components/BrandsCarts/ToyotaCarts/BMWCart/HondaCar";
import MercedesCart from "../Components/BrandsCarts/ToyotaCarts/BMWCart/MercedesCart";
import TeslaCart from "../Components/BrandsCarts/ToyotaCarts/BMWCart/TeslaCart";
import FordCart from "../Components/BrandsCarts/ToyotaCarts/BMWCart/FordCart";
import PrivateRoute from "../Authentication/Private/PrivateRoute";

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
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart/></PrivateRoute>,
                loader: () => fetch('https://automotive-brand-server.vercel.app/myCart')
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
                loader: () => fetch('https://automotive-brand-server.vercel.app/brandCart')
            },
            {
                path: "/toyotaDetails/:id",
                element: <PrivateRoute><ToyotaDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://automotive-brand-server.vercel.app/brandCart/${params.id}`)
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
                loader: ({params}) => fetch(`https://automotive-brand-server.vercel.app/brandCart/${params.id}`)
            },
            {
                path: "/bmw",
                element: <BMWCart/>,
                loader: () => fetch('https://automotive-brand-server.vercel.app/brandCart')
            },
            {
                path: "/honda",
                element: <HondaCar/>,
                loader: () => fetch('https://automotive-brand-server.vercel.app/brandCart')
            },
            {
                path: "/mercedes",
                element: <MercedesCart/>,
                loader: () => fetch('https://automotive-brand-server.vercel.app/brandCart')
            },
            {
                path: "/tesla",
                element: <TeslaCart/>,
                loader: () => fetch('https://automotive-brand-server.vercel.app/brandCart')
            },
            {
                path: "/ford",
                element: <FordCart/>,
                loader: () => fetch('https://automotive-brand-server.vercel.app/brandCart')
            }
        ]
    }
])

export default myCreatedRouter;