import axios from "axios";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import ReactSession from "react-client-session";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export default function InitialPage(props) {
  
  

  return (
    <div>
    <Link to = "/CustomerLogin">Login Customer</Link><br/>
    <Link to = "/SellerLogin">Login Seller</Link><br/>
    <Link to = "/SellerRegistration">Registration Seller</Link><br/>
    <Link to = "/CustomerRegistration">Registration Customer</Link><br/>
    

    </div>
  );
}
