import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function DateTest(props) {

 const [a,setA] = useState("");

  return (
    <div className="container">
        <button onClick={() => {
             let max = new Date().toISOString().split("T")[0];
             setA(max);
        }}>d</button>
        <h1>{a}</h1>
     </div>
  );
}


