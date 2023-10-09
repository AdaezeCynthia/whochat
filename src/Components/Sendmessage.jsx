import { useState } from "react";

const Sendmessage = () => {
  const [value, setValue] = useState("");

  const handleSm = (e) => {
    e.preventDefault();
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
          onChange={(e) => setValue(e.target.value)}
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
