import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function AddNewAdmin(props) {

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");

    function sendData(e){
        e.preventDefault();
        

    }
  return (
    <div>
      <br />
      <h2>Create an Account to Admin</h2>
      <br />
      <div className="d-flex justify-content-center">
        <div class="card shadow p-3 mb-5 bg-white rounded" style={{ width: "600px" }}>
          <div class="card-body">
            <form onSubmit = {sendData}>
              <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter first name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">
                  Password will be auto generated.
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
