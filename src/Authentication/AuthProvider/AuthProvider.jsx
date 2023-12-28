import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import aut from "../Firebase/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(aut, email, password)
    }

    const logIn = (email, password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(aut, email, password)
    }

    const autInfo = {
        user,
        isLoading,
        createUser,
        logIn,
    }

    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;