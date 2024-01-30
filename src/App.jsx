import Login from "./pages/Login";
import Navbar from "./Components/Navbar";
import Chatroom from "./pages/Chatroom";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoutes>
              <Chatroom />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
