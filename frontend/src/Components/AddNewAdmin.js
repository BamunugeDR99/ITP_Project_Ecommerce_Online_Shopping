import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export default function AddNewAdmin(props) {

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    let password;

    function sendData(e){
        e.preventDefault();

        password = makeid(20);

        const newAdmin = {
            firstName,
            lastName,
            username,
            password,
            email
        }
        

        console.log(newAdmin);

        axios
        .post("http://localhost:8070/Admin/addAdmin", newAdmin)
        .then(() => {
          //alert("Student Added");
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New admin has been Created',
            showConfirmButton: false,
            timer: 1500
          })
          props.history.push("/Admin/Admins");

         
        })
        .catch((err) => {
            setErrorMsg(err.response.data.error);
        });

    }

    function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }


      function usernameGenerator(firstName) {
        var result = firstName;
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < 5; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }

  return (
    <div>
      <br />
      <h2>Create an Account to Admin</h2>
      <br />
      <div className="d-flex justify-content-center">
         
        <div class="card shadow p-3 mb-5 bg-white rounded" style={{ width: "600px" }}>
          <div class="card-body">
          <h4 style = {{textAlign : "center", color : "red"}}>{errorMsg}</h4>
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
                    setUserName(usernameGenerator(firstName))
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
                  placeholder="Enter username" value = {username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                 <small id="emailHelp" class="form-text text-muted">
                 These is a Suggestion for username
                </small>
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
