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
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
