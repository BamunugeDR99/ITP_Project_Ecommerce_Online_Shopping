import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/Home" style = {{color : "blue"}}>Home</a> */}
                <Link to="/Home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
                <Link to="/add" className="nav-link">
                  Add Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
