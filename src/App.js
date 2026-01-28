import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
