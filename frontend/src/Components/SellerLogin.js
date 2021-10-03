import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../Css/sellerLogin.css";

export default function SellerLogin(props){

    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [errormsg,seterrormsg] = useState("");

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
                        <div class="col-lg-7 col-xl-6">
                        <div class="myLeftContent">
                         <h3 class="sign_in" style={{color:"#0057d1", paddingTop:"60px", paddingBottom:"15px", fontSize:"35px", fontWeight:"bold"}}>Sign In to Your Account</h3> <br/>
                        <form className="myForm" onSubmit = {loginUser}>
                             
							<div class="form-group">
                                <h2>{errormsg}</h2>
							
                                <label htmlFor="username" style={{color:"black"}}>
                                    <b>Username</b>
                                    </label>
                                    <br />
                                    <i className="fas fa-user"></i>
                                <input class="myInputs" type="text" placeholder="Username" id="username" 
                                
                                onChange= {
                                    (e)=>{
                                      setusername(e.target.value);
                                    } }
                                
                                    required/> 
                            </div>
                            <div class="form-group">
                            <label htmlFor="password" style={{color:"black"}}>
                                <b>Password</b>
                                </label>
                                <br />
                                <i className="fas fa-lock"></i>
                                <i
                                className="bi bi-eye-fill"
                                id="eyerr"
                                onClick={togglePassword}
                                ></i>
                                <input className="myInputs"  type={passwordShown ? "text" : "password"} id="password" placeholder="Password" 
                                
                                onChange= {
                                    (e)=>{
                                      setpassword(e.target.value);
                                    } }                              
                                    required /> 
                            </div>
                           
                            <div className="col">
									<p className ="fp"> <Link to="/CustomerForgotPassword">Forgot Password?</Link></p>
								</div>
						
                            <button type="submit" class="btn btn-primary" style={{marginLeft:"65px", marginTop:"20px", width:"280px", height:"45px"}}>Sign in</button> <br/><br/>
                                <div class="text-center d-flex justify-content-between mt-10"> 
                                    <p style={{marginLeft:"80px", fontWeight:"bold", color:"black"}}> Don't have an account? 
                                        <Link to="/SellerRegistration" class="font-italic text-muted"> <u style={{color:"#0057d1"}}>Sign up!</u></Link></p>
                                </div>
                                
                                
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 d-none d-md-flex bg-image">

        <br/>
        <div class="myRightContent">

                                <div class="text-block">
									<p>easy & fast</p>
								</div>
								
								<br/>
                            
								<div class="text-block">
									<p>scale-ability</p>
								 </div>
								 
								<br/>
								 
								<div class="text-block">
									<p>no time restrictions</p>
								</div>
								
								<br/>
								
								<div class="text-block">
									<p>better cashflow</p>
								</div>

                                <br/>

                                <div class="log"> 
                                    <p style={{marginLeft:"40px", fontWeight:"bold", color:"white", marginTop:"20px"}}> Are you a customer? 
                                        <Link to="/CustomerLogin" class="font-italic text-muted"> <u style={{color:"#0057d1"}}>Go to Customer Sign in!</u></Link></p>
                                </div>

                                
                            </div>
                            
        </div>
    </div>
</div>
</div>

    )


}