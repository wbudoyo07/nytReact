import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className = "navbar-brand" to = "">
    NYT-React
    </Link>
    <div>
        <ul className = "navbar-nav">
            <li className = "navbar-item">
                <Link to = "/" className = {
                    window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }>
                Search Article
                </Link>
            </li>
            <li className = "navbar-nav">
                <Link to = "/saved" className = {
                    window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }>
                Saved Article
                </Link>
            </li>
        </ul>
    </div>
</nav>
);

export default Navbar;