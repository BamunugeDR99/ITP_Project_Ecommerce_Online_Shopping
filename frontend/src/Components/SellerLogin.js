import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../Css/sellerLogin.css";

export default function SellerLogin(props){

    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [errormsg,seterrormsg] = useState("");
   

    function loginUser(e){

        e.preventDefault();

        const loginCredentials = {
            username,
            password,
          }

          axios.post("http://localhost:8070/orgSeller/loginSeller", loginCredentials).then((res)=>{

           // setCustomer(res.data.customerLogin);
        //   localStorage.setItem('sellerID', res.data.loginTest._id);

             // sessionStorage.setItem('userID',"sss");

            //alert("Customer loggin Successfully!");
            //console.log("logging success");
            console.log(res.data.sellerLogin._id);
           localStorage.setItem("SellerID",res.data.sellerLogin._id);
           props.history.push("/Seller/Home");

          }).catch((err) =>{

            //alert(err);
          console.log(err.response.data);
          alert(err.response.data.error);
          seterrormsg(err.response.data.error);
        

        })
    }


    return(

            <div class="sellerlogin">
            <div class="container-fluid">
            <div class="row no-gutter">
            
            <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-xl-6 mx-auto">
                            <h2 class="display-7">Sign in to your Account</h2> <br/>
                        <form className="myForm" onSubmit = {loginUser}>
                             
							<div class="form-group mb-3">
                                <h2>{errormsg}</h2>
							{/* <label htmlFor="username"><b>Username</b></label><br/>
                                <i className="fas fa-user"></i> */}
                                <input class="form-control" type="text" placeholder="Username" id="username" 
                                
                                onChange= {
                                    (e)=>{
                                      setusername(e.target.value);
                                    } }
                                
                                    required/> 
                            </div>
                            <div class="form-group mb-3">
							{/* <label htmlFor="password"><b>Password</b></label><br/>
                                <i className="fas fa-lock"></i> */}
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
                                <div class="text-center d-flex justify-content-between mt-10"> 
                                    <p> Don't have an account? 
                                        <Link to="/SellerRegistration" class="font-italic text-muted"> <u>Sign up!</u></Link></p>
                                </div>
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