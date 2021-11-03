import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export default function CustomerLogin(props) {
  //remember me

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    setRememberMe(value);
  };

  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    function RememberMe() {
      if (localStorage.getItem("rememberMe") === "true") {
        setUsername(localStorage.getItem("username"));
      }else{
          setUsername("");
      }
    }

    RememberMe();
    // displayStudentdetails();
  }, []);

  function loginUser(e) {
    e.preventDefault();

    const loginCredentials = {
      username,
      password,
    };

    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("username", rememberMe ? username : "");

    axios
      .post("https://tech-scope-online.herokuapp.com/Customer/loginCustomer", loginCredentials)
      .then((res) => {
        // setCustomer(res.data.customerLogin);
        localStorage.setItem("CustomerID", res.data.customerLogin._id);

        // sessionStorage.setItem('userID',"sss");

       // alert("Customer loggin Successfully!");
        //console.log("logging success");
        ///console.log(res.data);
       // setErrorMsg("");
        props.history.push("/Customer/Home");

      })
      .catch((err) => {
        //alert(err);
        console.log(err.response.data);
        // alert(err.response.data.error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Check Your Username & Password!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setErrorMsg(err.response.data.error);
      });
  }

  // SVGDefsElement

  return (
    <div className="CustomerLogin">
      <div className="container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6">
              <div className="myLeftCtn">
                <form className="myForm" onSubmit={loginUser}>
                  <header>Sign In</header>

                  <div className="form-group">
                    <h6 id="CusLoginError">{errorMsg}</h6>
                    <label htmlFor="username">
                      <b>Username</b>
                    </label>
                    <br />
                    <i className="fas fa-user"></i>
                    <input
                      className="myInput"
                      type="text"
                      id="Username"
                      defaultValue={username}
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <b>Password</b>
                    </label>
                    <br />
                    <i className="fas fa-lock"></i>
                    <i
                      className="bi bi-eye-fill"
                      id="eyer"
                      onClick={togglePassword}
                    ></i>
                    <input
                      className="myInput"
                      type={passwordShown ? "text" : "password"}
                      id="Logipassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <br />

                  <input type="submit" className="butt" value="Sign In" />

                  <br />
                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={handleChange}
                      />
                      <label className="remember"> Remember me </label>
                    </div>

                    <div className="col">
                      <p className="fp">
                        {" "}
                        <Link to="/CustomerForgotPassword">Forgot Password?</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              {/* <img src={img6} alt="" id="LoginI"/> */}
              <div className="myRightCtn">
                <div className="DontAcc">
                  <header>
                    <b>Welcome to login</b>
                  </header>

                  <h4 className="acc">Don't have an account?</h4>
                  <br />

                  <input type="button" className="butt_out" onClick = {() => {
                    props.history.push("/CustomerRegistration");
                  }} value="Sign Up" />

                  <div className="changeSLogin">
                    <p>
                      {" "}
                      If You Are A Seller Use This Link To Login!{" "}
                      <Link to="/SellerLogin">LogIn</Link><br/>
                      <Link to="/">Initial ? </Link>

                    </p>
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
