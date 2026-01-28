import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SafeCity</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admindashboard">Admin Dashboard</Link></li>
        <li><Link to="/userdashboard">User Dashboard</Link></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="btn login"> User Login</Link>
        <Link to="/signup" className="btn signup">Admin Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
