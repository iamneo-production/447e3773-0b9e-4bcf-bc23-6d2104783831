import React from 'react';
import { Link } from 'react-router-dom';
import "../css/nav.css";

function Navbar({user}) {
    return(
        <nav className="navbar">
      <div className="logo">
        <Link to="/">Shopping App</Link>
      </div>
      <ul className="nav-links">
        {(user == null || JSON.stringify(user) === '{}') ? (
            <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li></>) : (
            <>
        <li>
          Hello {user.name}
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li></>
        )}

          <div>
            <Link to="/products">Products</Link>
          </div>
        
      </ul>
    </nav>
    );
}

export default Navbar;