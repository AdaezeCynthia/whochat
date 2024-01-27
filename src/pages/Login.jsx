import React from "react";
import { UserAuth } from "../Context/AuthContext";

const Login = () => {
 const{currentUser} =UserAuth ();
 console.log(currentUser, signinWithGoogle)

const handleLogin = async () => {
  try{
     await signinWithGoogle();
  } catch(error){
    console.log(error)
  }
}


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there👋 </h1>
          <p className="py-6">
          social media mavericks! 📱✨ Get ready to dive into a world of endless memes, epic stories, 
          and all things share-worthy. Let's make your feed the envy of the digital universe! 🚀
          </p>
          <button onClick={handleLogin} className="btn btn-active btn-neutral">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
