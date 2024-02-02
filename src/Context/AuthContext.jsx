import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import {auth} from  "../Firebase";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [currentUser, setCurentUser] =useState(null);
//sign in with google 


const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}





    const value = {
        currentUser,
        setCurentUser,
        signInWithGoogle
    }
   

    //set current user 
    useEffect (() => {
             const unsubscribe =onAuthStateChanged(auth, (user) =>{
                setCurentUser(user); 
             });
             return unsubscribe; 
    }, []);


    return(
        <AuthContext.Provider value={value }>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext);
}