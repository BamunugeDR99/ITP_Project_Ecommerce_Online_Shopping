import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
// import '../Css/Side_bar_styles.css';


export default function Side_bar_Customer(props) {
  return (
    <div className = "Apple">
      <header className="header" id="header">
        <div className="header_toggle">
          {" "}
          <i className="bx bx-menu" id="header-toggle"></i>{" "}
        </div>
        {/* <!-- <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div> --> */}
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
          
            <div className="nav_list">
              {" "}
              <Link to="/allItems" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>{" "}
                <span className="nav_name">MY WISHLIST</span>{" "}
              </Link>
              <Link to="/addItem" className="nav_link">
                {" "}
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">MY WALLET</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">PURCHASE HISTORY</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-bookmark nav_icon"></i>{" "}
                <span className="nav_name">SHOPPING CART</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-bookmark nav_icon"></i>{" "}
                <span className="nav_name">CONTACT US</span>{" "}
              </Link>{" "}
              
            
            </div>
          </div>{" "}
          <Link to="#" className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">LogOut</span>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
}
