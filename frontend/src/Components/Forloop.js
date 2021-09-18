import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// import "../CSS/yourreviews.css";
import p2 from "../images/p3.jpg";

export default function Forloop(props) {
  

let numbers = [1,2,3,4,5];
let items = [];
for(const i of numbers){
    items.push(<div
        class="card"
        style={{
          width: "20%",
          margin: "50px",
          borderRadius: "15px",
          marginTop: "30px",
          height: "290px",
        }}
      >
        <div class="card-body">
          {/* <img
            src={`../images/${reviewss.customerImage}`}
            style={{ width: "80%", alignItems: "center" }}
          /> */}
          {/* <img src =  */}
          {/* <h5 class="card-title">{reviewss.customerName}</h5> */}
          <div style={{ color: "#f9d71c", textAlign: "center" }}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <br />
          {/* <p style={{ textAlign: "center", fontSize: "16px" }}>
            {reviewss.Review}
          </p> */}
        </div>
      </div>)
}

  return <div>
      {items}
  </div>;
}
