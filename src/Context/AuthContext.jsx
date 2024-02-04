 import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import {auth} from  "../Firebase";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [currentUser, setCurentUser] =useState(null);
    
    const [loading, setLoading] =useState(true);
//sign in with google 


const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}

  //sign out
  const logout = () => signOut(auth);



    const value = {
        currentUser,
        setCurentUser,
        signInWithGoogle,
        logout
    }

  






   

    //set current user 
    useEffect (() => {
             const unsubscribe =onAuthStateChanged(auth, (user) =>{
                setCurentUser(user); 
                setLoading (false);
             });
             return unsubscribe; 
    }, []);


    return(
        <AuthContext.Provider value={value }>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext);
}