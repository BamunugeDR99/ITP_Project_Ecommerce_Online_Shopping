import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import '../Js/sidebar_script.js'
// import '../Css/Side_bar_styles.css';


export default function Side_bar_Customer(props) {

  function Logout(){
    localStorage.removeItem("CustomerID");
    props.history.push("/CustomerLogin");
  }
  
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
            <Link to="/Customer/Home" className="nav_link active">
                <i className="bx bx-home nav_icon"></i>{" "}
                <span className="nav_name">HOME</span>{" "}
              </Link>
              {" "}
              <Link to="/Customer/MyProfile" className="nav_link ">
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">MY PROFILE</span>{" "}
              </Link>
              {" "}
              <Link to="/Customer/Mywishlist" className="nav_link ">
                <i className="bx bx-store nav_icon"></i>{" "}
                <span className="nav_name">MY WISHLIST</span>{" "}
              </Link>
              <Link to="/Customer/MyWallet" className="nav_link">
                {" "}
                <i className="bx bx-credit-card nav_icon"></i>{" "}
                <span className="nav_name">MY WALLET</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-history nav_icon"></i>{" "}
                <span className="nav_name">PURCHASE HISTORY</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-cart nav_icon"></i>{" "}
                <span className="nav_name">SHOPPING CART</span>{" "}
              </Link>{" "}
              <Link to="/Customer/MyReviews" className="nav_link">
                {" "}
                <i className="bx bx-heart nav_icon"></i>{" "}
                <span className="nav_name">MY REVIEWS</span>{" "}
              </Link>{" "}
              <Link to="/Customer/ContactUs" className="nav_link">
                {" "}
                <i className="bx bx-message nav_icon"></i>{" "}
                <span className="nav_name">CONTACT US</span>{" "}
              </Link>
              
            
            </div>
          </div>{" "}
          <Link onClick={() => Logout()} className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">LOGOUT</span>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
}
