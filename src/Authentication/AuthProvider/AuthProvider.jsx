/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import aut from "../Firebase/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(aut, email, password)
    }

    const logIn = (email, password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(aut, email, password)
    }

    const googleLogin = () =>{
        setIsLoading(true)
        return signInWithPopup(aut, googleProvider)
    }

    const logOut = () =>{
        setIsLoading(true)
        return signOut(aut)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(aut, currentUser => {
            console.log('on auth change', currentUser)
            setUser(currentUser)
            setIsLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const autInfo = {
        user,
        isLoading,
        createUser,
        logIn,
        googleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;