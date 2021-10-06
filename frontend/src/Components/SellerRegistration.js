import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "../Css/sellerregistration.css";
import { NavLink } from "react-router-dom";

export default function SellerRegistration(props) {
  let [ownername, setownername] = useState("");
  let [mobile, setmobile] = useState("");
  let [companyname, setcompanyname] = useState("");
  let [address, setaddress] = useState("");
  let [year, setyear] = useState("");
  let [email, setemail] = useState("");
  let [description, setdescription] = useState("");
  let logo = "";
  let logo2 = "";
  let logo3 = "";
  let [errorMsg, setErrorMsg] = useState("");
  let flag1 = 0;

  //validate year

  function validatereg() {
    const yearValue = document.getElementById("year").value;
    const phoneNumber = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const checkbox = document.getElementById("policy");

    const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (isNaN(yearValue)) {
      flag1 = 0;

      Swal.fire("Enter only numeric value to Established Year!");
    } else if (yearValue.length < 4) {
      flag1 = 0;
      Swal.fire(
        "Established Year must be 4 digit! Entered value is less than 4!!"
      );
    } else if (yearValue.length > 4) {
      flag1 = 0;
      Swal.fire(
        "Established Year must be 4 digit! Entered value is greater than 4!!"
      );
    } else if (isNaN(phoneNumber)) {
      flag1 = 0;
      Swal.fire("Enter only numeric value to Contact Number!");
    } else if (phoneNumber.length < 10) {
      flag1 = 0;
      Swal.fire(
        "Contact Number must be 10 digit! Your Number is less than 10!"
      );
    } else if (phoneNumber.length > 10) {
      flag1 = 0;
      Swal.fire(
        "Contact Number must be 10 digit! Your Number is greater than 10!"
      );
    } else if (phoneNumber.charAt(0) != 0) {
      flag1 = 0;
      Swal.fire("Contact Number must start with 0!");
    } else if (!email.match(EmailAdd)) {
      flag1 = 0;
      Swal.fire("You have entered an invalid email address!");
    } else if (!checkbox.checked) {
      flag1 = 0;
      Swal.fire("You Should Agree To Our Terms & Conditions!!");
    } else {
      flag1 = 1;
    }
  }

  function sendData(e) {
    e.preventDefault();

    validatereg();

    logo2 = document.getElementById("logo").value;
    logo3 = logo2.substring(12);

    const newseller = {
      ownername,
      mobile,
      companyname,
      address,
      year,
      email,
      description,
      logo: logo3,
    };

    console.log(newseller);
    if (flag1 == 1) {
      axios
        .post("http://localhost:8070/seller/add", newseller)
        .then(() => {
          Swal.fire(
            "Success!",
            "Request Sent Successfully! We will get back to you soon. Make sure to check your email.",
            "success"
          );

          props.history.push("/SellerLogin");

          setErrorMsg("");
        })
        .catch((err) => {
          //console.log(err.response.data);
          //alert(err.response.data.error);
          //Swal.fire('Email Already Exists!!')
          setErrorMsg(err.response.data.error);
        });
    }
  }

  return (
    <div class="sellerregistration">
      <div>
        {/* <img src = {require('../images/sellerheader22.jpg').default} class="img-fluid" alt="Responsive image"/> */}
        <div>
          <center>
            <h1>Start Your Business</h1>
          </center>
        </div>
        <h4 style={{ color: "red", textAlign: "center" }}>{errorMsg}</h4> <br />
        <form
          class="form-detail"
          align="center"
          method="post"
          onSubmit={sendData}
        >
          <div
            class="card container"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div class="card-body" id="sellerReq">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="ownername"
                    id="ownername"
                    class="form-control"
                    placeholder="Owner's Name"
                    required
                    onChange={(e) => {
                      setownername(e.target.value);
                    }}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    class="form-control"
                    placeholder="Contact Number"
                    required
                    onChange={(e) => {
                      setmobile(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <br />
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    class="form-control"
                    placeholder="Company Name"
                    required
                    onChange={(e) => {
                      setcompanyname(e.target.value);
                    }}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="form-control"
                    placeholder="Physical Address"
                    required
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                  />
                </div>
              </div>

              <br />
              <br />
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="year"
                    id="year"
                    class="form-control"
                    placeholder="Established Year"
                    required
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>
              </div>

              <br />
              <br />
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="description"
                      id="description"
                      rows="5"
                      placeholder="Description"
                      required
                      onChange={(e) => {
                        setdescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div class="col">
                  <div className="card container-size">
                    <br />
                    <div className="card-container">
                      <label style={{ textAlign: "left" }}>Company logo</label>
                      <br />
                      <div className="card-container">
                        <input
                          type="file"
                          name="logo"
                          id="logo"
                          class="form-control-file"
                          placeholder="Allowed types: png/jpg/jpeg"
                          accept="image/*"
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <h6 style={{ textAlign: "right" }}>
                      Allowed types : png/jpg/jpeg
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div class="float-right">
              <div class="form-check">
                <br />
                <br />
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="policy"
                  name="policy"
                  value="true"
                />

                <label class="form-check-label" for="defaultCheck1">
                  <b> I agree to the Terms of service </b>
                </label>
              </div>

              <button
                type="reset"
                class="btn btn-success"
                onClick={() => {
                  setErrorMsg("");
                }}
              >
                Reset
              </button>
              <span> </span>
              <button
                type="submit"
                class="btn btn-primary"
                id="btn1"
                name="btn1"
                value="submit"
              >
                Request
              </button>
              <br />
              <br />
            </div>
          </div>

          <div class="float-left">
            {" "}
            <br />
            <br />
            <b>Already have an account ? </b>
            <Link to="/SellerLogin">Sign in!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
