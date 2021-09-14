import React, { useState } from "react";
import axios from "axios";

import "../Css/sellerforget.css"; 


export default function SellerForget (props){ 
    function login(){
        props.history.push("/selllog");
    }

return(

<div class="container padding-bottom-3x mb-2 mt-5">
    <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
            <div class="forgot">
                <center><h1>Forgot Password?</h1>
                <h3><i class="fa fa-lock fa-4x"></i></h3></center>
            </div>
            <br/>
            <div class="forgot">                
                <ol class="list-unstyled"><br/>
                    <li><span class="text-primary text-medium">1. </span>Enter the email address you used during the registration.</li>
                    <li><span class="text-primary text-medium">2. </span>Our system will send you a temporary link.</li>
                    <li><span class="text-primary text-medium">3. </span>Use that link to reset your password.</li>
                </ol>
            </div>
            <form class="card mt-4">
                <div class="card-body">
                    <div class="form-group"> <label for="email-for-pass">Enter your email address</label> 
                    <center>
                    <br/>
                    <input class="form-control" type="text" id="email-for-pass" required /> </center>
                    
                    <br/>
                    </div>
                <div class="float-right">
                    <button class="btn btn-danger" onClick = {()=> login()}>Back to Login</button>
                    <span> </span>
                    <button type="submit" class="btn btn-success">Get New Password</button>
                    <br/><br/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
				
    

    );
   
   }