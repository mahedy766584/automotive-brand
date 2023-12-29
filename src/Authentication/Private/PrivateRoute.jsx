/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation()

    if (isLoading) {
        return <div className="flex items-center justify-center h-[80vh]">
            <PropagateLoader color="#36d7b7" />
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to={'/signIn'}>

        </Navigate>
    );
};

export default PrivateRoute;