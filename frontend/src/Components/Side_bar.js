import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
// import '../Css/Side_bar_styles.css';

export default function Side_bar(props) {
  const [render, setrender] = useState(false);
  useEffect(() => {
    function reRender() {
      setrender(true);
    }

    reRender();
    // displayStudentdetails();
  });


  function Logout(){
    localStorage.removeItem("SellerID");
    props.history.push("/SellerLogin");
  }
  
  return (
    <div className="HeadSideBar">
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
              <Link to="/Seller/Home" className="nav_link">
                <i className="bx bx-box nav_icon"></i>{" "}
                <span className="nav_name">MY ITEMS</span>{" "}
              </Link>
              {" "}
              <Link to="/Seller/MyProfile" className="nav_link">
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">MY PROFILE</span>{" "}
              </Link>
              {" "}
              <Link to="/allItems" className="nav_link">
                <i className="bx bx-store nav_icon"></i>{" "}
                <span className="nav_name">MY SHOP </span>{" "}
              </Link>
              <Link to="/Seller/AddItem" className="nav_link">
                {" "}
                <i className="bx bx-plus nav_icon"></i>{" "}
                <span className="nav_name">ADD ITEM</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-package nav_icon"></i>{" "}
                <span className="nav_name">CREATE PACKAGE</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-heart nav_icon"></i>{" "}
                <span className="nav_name">REVIEWS</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">REPORTS</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-message nav_icon"></i>{" "}
                <span className="nav_name">CONTACT</span>{" "}
              </Link>{" "}
            </div>
          </div>{" "}
          <Link  onClick={() => Logout()}  className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SIGNOUT</span>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
}
