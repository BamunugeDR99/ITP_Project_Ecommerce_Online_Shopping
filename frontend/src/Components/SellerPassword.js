import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

import "../Css/sellerpassword.css";

export default function SellerPassword(props) {

  const [passwordShown, setPasswordShown] = useState(false);
  const [NpasswordShown, setNPasswordShown] = useState(false);
  const [CNpasswordShown, setCNPasswordShown] = useState(false);


  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);

  };

  const toggleNPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setNPasswordShown(!NpasswordShown);
  };

  const toggleCNPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setCNPasswordShown(!CNpasswordShown);
  };

  const [orgSeller, setorgSellers] = useState([]);
  // const [loads,setLoad] = useState(false);
  // const [data,setData] = useState();
  const [password, setPassword] = useState("");

  let flag = 0;
  let objectID = "";
  let newwPassword = "";

  useEffect(() => {
    function getorgSellers() {
      // const orgSellerid = "613a2b0fb31f783accd94447";
      objectID = localStorage.getItem("SellerID");
      axios.get("https://tech-scope-online.herokuapp.com/orgSeller/get/" + objectID).then((res) => {
        setorgSellers(res.data);
        console.log(res.data);
        setPassword(res.data.password);


      }).catch((err) => {
        alert(err);
      })
    }

    getorgSellers();

  });

  function changePswd() {

    let psw = document.getElementById("current_password").value;

    if (psw !== "") {

      psw = password;
      flag = 1;



      let nCpsw = document.getElementById("new_password").value;
      let nCopsw = document.getElementById("confirm_new_password").value;

      const npsw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

      const isMatch = (psw === password);


      if (!isMatch) {
        flag = 0;
        Swal.fire('Invalid Current Password!')

      } else {

        if (nCpsw.length < 8) {
          flag = 0;
          Swal.fire('Password must be contain minimum 8 charcters!')


        } else if (!nCpsw.match(npsw)) {

          flag = 0;
          Swal.fire('"Password must contain at least one lowercase letter, one uppercase letter, one numeric digit"!')


        } else if (nCpsw !== nCopsw) {
          flag = 0;
          Swal.fire('Password Mismatch!!')


        } else {

        setPassword(nCpsw);
        newwPassword = nCpsw;

          flag = 1;

        }


          
      }     
    }



    }





    function update(id) {
      console.log(id);
      props.history.push("/update/" + id);
    };


    function ChangePassword() {
      // alert("d0");
      // e.preventDefault();

      changePswd();


      
      if (flag === 1) {

        const changepsw = {

          password : newwPassword,


        }

        console.log(changepsw);

        //	objectID = props.match.params.id;
        axios.put("https://tech-scope-online.herokuapp.com/orgSeller/ChangePwd/" + objectID, changepsw).then(() => {


          alert("Password Updated Successfully!");

        }).catch((err) => {

          alert(err)
        })
      }

    }


    return (

      <div className="sellerpass">
        <div className="height-100 bg-light">
          <br />



          <div class="container">
            <div class="main-body">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <br></br>
                        <img
                          src={'/Images/' + orgSeller.logo}
                          alt="Admin"
                          class="rounded-circle p-1 bg-black"
                          width="175"
                        />
                        <br></br>
                      </div>

                      <div className="card border border-dark rounded ">
                        <br />
                        <div className="card-body">
                          <ul class="list-group list-group-flush">
                            <div class="shop">
                              <h4 class="mb-0" style={{ textAlign: "left" }}>{orgSeller.companyname}</h4>
                            </div>
                            <br></br>

                            <div class="shop">
                              <h6 class="mb-0" style={{ textAlign: "left" }} >{orgSeller.mobile}</h6>
                            </div>
                            <br></br>

                            <div class="shop">
                              <h6 class="mb-0" style={{ textAlign: "left" }}>{orgSeller.email}</h6>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br>
                            <div class="mt-3">
                              <button class="btn btn-danger btn-block button-shape">
                                REQUEST DELETE
                              </button>
                            </div>
                          </ul>
                          <br /></div></div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="card">
                        <div class="card-body" id="sellerB">

                          <br />
                          <div className="row">
                            <div class="form-group">
                              <h2 style={{ textAlign: "center" }}><b>Change your Password</b></h2>
                              <form style={{ textAlign: "center" }}><br />

                                <div class="inputsize">
                                  <br />

                                  <div className="form-group">

                                    <input type={passwordShown ? "text" : "password"} className="form-control" id="current_password" placeholder="Current Password" />

                                    <i className="bi bi-eye-fill" id="eyerx" onClick={togglePassword}></i>
                                    <i className="bi bi-lock-fill"></i>
                                  </div>
                                  <br />

                                  <div className="form-group">

                                    <input type={NpasswordShown ? "text" : "password"} className="form-control" id="new_password" placeholder="New Password" />

                                    <i className="bi bi-eye-fill" id="eyerx" onClick={toggleNPassword}></i>
                                    <i className="bi bi-lock-fill"></i>
                                  </div>
                                  <br />

                                  <div className="form-group">

                                    <input type={CNpasswordShown ? "text" : "password"} className="form-control" id="confirm_new_password" placeholder="Confirm Password" />

                                    <i className="bi bi-eye-fill" id="eyerx" onClick={toggleCNPassword}></i>
                                    <i className="bi bi-lock-fill"></i>
                                  </div>
                                  <br /> <br />


                                  <button type="button" class="btn btn-primary btn-block" style={{ textAlign: "center", width: "350px", marginLeft: "50px", height: "45px" }} onClick={() => ChangePassword(orgSeller._id)}>Change</button>
                                  <button type="button" class="btn btn-dark btn-block" style={{ textAlign: "center", width: "350px", marginLeft: "50px", height: "45px" }}
                                  onClick = {()=> {
                        props.history.push("/Seller/MyProfile");
                    }}>BACK</button>
                                  <span> </span>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
