import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../Css/adminLogin.css";

export default function AdminLogin(props){

    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [errorMsg,seterrormsg] = useState("");


    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
   

    function loginUser(e){

        e.preventDefault();

        const loginCredentials = {
            username,
            password,
          }

          axios.post("http://localhost:8070/Admin/loginAdmin", loginCredentials).then((res)=>{

          alert("login success");
          seterrormsg("");

         //   console.log(res.data.adminLogin._id);
        //    localStorage.setItem("AdminID",res.data.adminLogin._id);


          }).catch((err) =>{

          console.log(err.response.data);
          alert(err.response.data.error);
          seterrormsg(err.response.data.error);
        

        })
    }


    return(

<div className="AdminLogin">
      <div className="container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6">
              <div className="myLeftCtn">
                <form className="myForm" onSubmit={loginUser}>
                  <header>ADMIN LOGIN</header>

                  <div className="form-group">
                    <h6 id="AdminLoginError" style={{color:"red"}}>{errorMsg}</h6>
                    <label htmlFor="username">
                      <b>Username</b>
                    </label>
                    <br />
                    <i className="fas fa-user"></i>
                    <input
                      className="myInput"
                      type="text"
                      id="Username"
                      placeholder="Username"
                      name="username"
                      onChange={(e) => {
                        setusername(e.target.value);
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
                      id="Adminpassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                     
                      required
                    />
                  </div>

                  <br />

                  <input type="submit" className="butt" value="Sign In" />

                  <br />
                  <br />

                    <div className="col">
                
                        <Link to="">Forgot Password?</Link>
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

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}