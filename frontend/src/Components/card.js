import React, { useState } from "react";
import axios from "axios";


export default function AddpaymentMethod(props) {

  let [cowner, setcowner] = useState("");
  let [cnumber, setcnumber] = useState("");
  let [edate, setedate] = useState("");

  function sendData(e) {
    // alert("d0");
    e.preventDefault();

    const newpaymentdetails = {
      cowner,
      cnumber,
      edate,
    }

    // const newStudent2 = {
    //   name : "s",
    //   age : 23,
    //   gender : "34",
    // }
    console.log(newpaymentdetails);
    //document.write("newStudent");
    axios.post("http://localhost:8070/paymentdetails/add", newpaymentdetails).then(() => {
      alert("paymentdetails Added");
      setcowner(" ");
      setcnumber(" ");
      setedate(" ");
      // props.history.push("/Home");
      // document.getElementById("txt").innerHTML = "paymentdetails Added Successfully!";

    }).catch((err) => {
      alert(err)
    });

  }