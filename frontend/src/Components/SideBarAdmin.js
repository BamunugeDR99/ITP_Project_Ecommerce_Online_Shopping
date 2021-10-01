import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function SideBarAdmin(props) {



  
  return (
    <div>
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
          {" "}
          <Link to="#" className="nav_logo" disabled>
            <i className="bx bx-layer nav_logo-icon"></i>
            <span className="nav_logo-name">MANAGEMENTS</span>{" "}
          </Link>
          <div className="nav_list">
            {" "}
            <Link to="/Admin/Items" className="nav_link active">
              <i className="bx bx-grid-alt nav_icon"></i>{" "}
              <span className="nav_name" >ITEMS</span>{" "}
            </Link>
            <Link to="/addItem" className="nav_link">
              {" "}
              <i className="bx bx-user nav_icon"></i>{" "}
              <span className="nav_name" >REVIEWS</span>{" "}
            </Link>{" "}
            <Link to="#" className="nav_link">
              {" "}
              <i className="bx bx-message-square-detail nav_icon"></i>{" "}
              <span className="nav_name" >TRANSACTIONS</span>{" "}
            </Link>{" "}
            <Link to="#" className="nav_link">
              {" "}
              <i className="bx bx-bookmark nav_icon"></i>{" "}
              <span className="nav_name" >ORDERS</span>{" "}
            </Link>{" "}
            <Link to="#" className="nav_link">
              {" "}
              <i className="bx bx-folder nav_icon"></i>{" "}
              <span className="nav_name"  >DELIVERIES</span>{" "}
            </Link>{" "}
          </div>
        </div>{" "}
        <Link onClick = {()=> {

              localStorage.removeItem("AdminID");
              props.history.push("/AdminLogin");

        }} className="nav_link">
          {" "}
          <i className="bx bx-log-out nav_icon"></i>{" "}
          <span className="nav_name">SIGNOUT</span>{" "}
        </Link>
      </nav>
    </div>
  </div>
  );
}
