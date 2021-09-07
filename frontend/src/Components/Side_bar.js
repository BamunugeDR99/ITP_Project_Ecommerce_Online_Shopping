import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
// import '../Css/Side_bar_styles.css';


export default function Side_bar(props) {
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
            <Link to="#" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">BBBootstrap</span>{" "}
            </Link>
            <div className="nav_list">
              {" "}
              <Link to="/allItems" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>{" "}
                <span className="nav_name">MY ITEMS</span>{" "}
              </Link>
              <Link to="/addItem" className="nav_link">
                {" "}
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">ADD ITEM</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">Messages</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-bookmark nav_icon"></i>{" "}
                <span className="nav_name">Bookmark</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-folder nav_icon"></i>{" "}
                <span className="nav_name">Files</span>{" "}
              </Link>{" "}
              <Link to="#" className="nav_link">
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">Stats</span>{" "}
              </Link>{" "}
            </div>
          </div>{" "}
          <Link to="#" className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SignOut</span>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
}
