import Login from "./pages/Login";
import Navbar from "./Components/Navbar";
import Chatroom from "./pages/Chatroom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path = '/chat' element = { <Chatroom/>}/>
      </Routes>
     
     

    </div>
  );
}

export default App;
