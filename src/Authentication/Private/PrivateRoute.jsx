/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to={'/signIn'}>

        </Navigate>
    );
};

export default PrivateRoute;