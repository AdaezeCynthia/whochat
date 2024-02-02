import React, { useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate ();
 const{currentUser, signInWithGoogle} = UserAuth ();
 console.log (currentUser)





 

const handleLogin = async () => {
  try {
     await signInWithGoogle();
  } catch(error){
    console.log(error)
  }
}



useEffect(() => {
if(currentUser){
  navigate ("/chat")
}
},[currentUser]);





  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there👋 </h1>
          <p className="py-6">
          social media mavericks! 📱✨ Get ready to dive into a world of endless memes, epic stories, 
          and all things share-worthy. Let's make your feed the envy of the digital universe! 🚀
          </p>
          <button onClick={handleLogin} className="btn btn-active btn-neutral">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
