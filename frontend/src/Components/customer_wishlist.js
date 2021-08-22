import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function customer_wishlist(props) {
  return (
  


    <div class = "row">
        
    <div class="col-sm-6">
        <br/>
<div class="card" style={{width : "600px"}}>
    <div class="row no-gutters">
        <div class="col-sm-5" style={{background: "#ffffff"}}>
            <img src = {require('../images/iphone-x-.jpg').default} class="card-img-top h-100" style = {{width : "240px"}}alt="..."/>
        </div>
        <div class="col-sm-7">
            <div class="card-body" style = {{width : "600px"}}>
                <h5 class="card-title">Alice Liddel</h5>
                <p class="card-text">Brand : </p>
                <p class="card-text">Ratings :  </p>
                <p class="card-text">Item Status Price</p>
                <a href="#" class="btn btn-danger ">Remove</a> <span> </span>
                <a href="#" class="btn btn-success">Add to cart</a> <span></span>
                <a href="#" class="btn btn-primary">Show more</a>
              
                
            </div>
        </div>
    </div>
</div>
</div>







</div>
  );
}
