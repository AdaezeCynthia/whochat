import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";

const Sendmessage = () => {
  const [value, setValue] = useState("");
   const {currentUser} = UserAuth();
  const handleSm = async  (e) => {
    e.preventDefault();
    if(value.trim() === ""){
      alert('Enter message!');
      return;
    }

    try{
          const{ uid, displayName, photoURL}= currentUser;
          await addDoc(collection(db,'messages'),{
            text: value ,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
          })
    } catch (error){
      console.log(error);
    }
    setValue("");
    console.log(value);
  };

  return (
    <div
      className="bg-gray-200 fixed bottom-0 w-full 
    py-10 shadow-lg"
    >
      <form onSubmit={handleSm} className="px-2 placeholder:containerWrap flex">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100
            rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white 
            rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Sendmessage;
