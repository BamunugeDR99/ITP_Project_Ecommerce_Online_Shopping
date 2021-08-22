import axios from "axios";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import ReactSession from "react-client-session";

import { CircleLoader } from "react-spinners";

export default function Login(props) {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  // let[token,setToken] = useState("");
  let [student, setStudent] = useState("");

  //let decodeToken;
  function sendData(e) {
    e.preventDefault();

    const loginCredentials = {
      name,
      age,
    };

    // console.log(name + " "+ age);

    axios
      .post("http://localhost:8070/student/login", loginCredentials)
      .then((res) => {
        //alert("Student Updated");

        //  ReactSession.set("StudentName",res.data.name);
        /// let count = 0;
        //while(count == 0){ hello yoooo!

        // setToken(res.data.);
        //console.log(token);
        //console.log(res.data.studentsss);

        setStudent(res.data.studentsss);

        //console.log(res.data.studentsss.name);

        localStorage.setItem("userID", res.data.studentsss.name);

        // sessionStorage.setItem('userID',"sss");

        // props.history.push("/Home");

        // try{
        //let g = token;
        //decodeToken = jwt_decode(g);
        //count += 1;
        //console.log(decodeToken.id);
        //  }catch(err){
        // break;

        // }

        console.log("a");
        //}

        console.log(student.name);

        document.getElementById("txt").innerHTML = "Your are Logged In!";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <br></br>
      <h1 id="txt"></h1>
      <form onSubmit={sendData}>
        <label>Username : </label>
        <input
          type="text"
          id="username"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          required
        ></input>
        <button type="submit">Login</button>
      </form>

      <br></br>
      <br></br>
      <CircleLoader size={90} color="blue" loading={false}></CircleLoader>
    </div>
  );
}
