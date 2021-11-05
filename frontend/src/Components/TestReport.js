import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

export default function TestReport(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function sendData(e) {
    e.preventDefault();
    //   alert("a")
    let objarr = [];
    let obj = {
      name : "Dulan",
      age : "20",
      address : "Homagama",
      phone : "074663",
    };
    objarr.push(obj);
    let obj2 = {
      name : "sonal",
      age : "20",
      address : "athurugiriya",
      phone : "074663",
    };

    objarr.push(obj2);

      let num = ["2","4"];

    console.log(objarr);
    axios
      .post("https://tech-scope-online.herokuapp.com/student/create-pdf", objarr)
      .then(() =>
        axios.get("https://tech-scope-online.herokuapp.com/student/fetch-pdf", {
          responseType: "blob",
          // A BLOB is a binary large object that can hold a variable amount of data. important
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "StudentReport.pdf");
                          //your file name 
      });
  }
  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name : </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Age : </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Address : </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number : </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

// export default AddStudent;
