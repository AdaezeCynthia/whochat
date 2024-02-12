import React, { useEffect } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const Chatbox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello there",
      name: "Ada",
    },
    {
      id: 2,
      text: "Hi",
      name: "Eze",
    },
  ];

  useEffect(() => {
    const q = query(

      collection(db, "messages")
      );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
         messages.push({ ...doc.data(), id: doc.id });
        console.log(doc.data());
      });
      console.log(messages)
    });
    return
  }, []);
  return (
    <div className="pb-44 pt-20 containerWrap ">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Chatbox;
