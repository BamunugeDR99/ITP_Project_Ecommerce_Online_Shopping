import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../Css/adminLogin.css";

export default function AdminLogin(props){

    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [errormsg,seterrormsg] = useState("");
   

    function loginUser(e){

        e.preventDefault();

        const loginCredentials = {
            username,
            password,
          }

          axios.post("http://localhost:8070/Admin/loginAdmin", loginCredentials).then((res)=>{

            console.log(res.data.adminLogin._id);
        //    localStorage.setItem("AdminID",res.data.adminLogin._id);


          }).catch((err) =>{

          console.log(err.response.data);
          alert(err.response.data.error);
          seterrormsg(err.response.data.error);
        

        })
    }


    return(

            <div class="adminlogin">
            <div class="container-fluid">
            <div class="row no-gutter">
            
            <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-xl-6 mx-auto">
                            <h2 class="display-7">ADMIN LOGIN</h2> <br/>
                        <form className="myForm" onSubmit = {loginUser}>
                             
							<div class="form-group mb-3">
                                <h2>{errormsg}</h2>

                                <input class="form-control" type="text" placeholder="Username" id="username" 
                                
                                onChange= {
                                    (e)=>{
                                      setusername(e.target.value);
                                    } }
                                
                                    required/> 
                            </div>
                            <div class="form-group mb-3">

                                <input className="form-control" type="password" id="password" placeholder="Password" 
                                
                                onChange= {
                                    (e)=>{
                                      setpassword(e.target.value);
                                    } }                              
                                    required /> 
                            </div>
                            <br/>
                            <div className="col">
									<p className ="fp"> <Link to="/SellerForgotPassword">Forgot Password?</Link></p>
								</div>
							<br/>
                            <button type="submit" class="btn btn-primary">Sign in</button> <br/><br/>
                                
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
    </div>
</div>
</div>

    )


}