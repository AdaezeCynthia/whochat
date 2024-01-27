import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [currentUser, setCurentUser] =useState(null);
//sign in with google 


const siginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}





    const value ={
        currentUser,
        setCurentUser,
        siginWithGoogle
    }



    return(
        <AuthContext.Provider value={value }>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext);
}