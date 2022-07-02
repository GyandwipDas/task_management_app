import "./App.css";
import About from "./components/about/about";
import UserHome from "./components/userHomepage/userHome";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Homepage from "./components/homepage/homepage";
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
