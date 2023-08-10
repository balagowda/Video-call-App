import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="main"></div>
      <div className="navbar">
        <ul className="nav-elements">
          <li className="nav-item">
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link-item">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="link-item">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
