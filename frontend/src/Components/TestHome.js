import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home_Customer(props) {

    // let Category={};

  return (
  <div>
      <br/>
     <img  src = {'/Images/HomeHeaderImage.png'}  class="img-fluid" alt="Responsive image"></img>
     <br/><br/>
     <h2>Explore Popular Categories</h2><br/><br/>
     
     <div className = "row">
        <div  class="card shadow-lg p-3 mb-5 bg-white rounded " style = {{width : "300px", marginRight : "15px", marginLeft : "0px"}}>
            <img src = {'/Images/homepic2.jpg'}   class="card-img-top" alt="..."/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Mobile Phones")}}>
                <h4 style = {{textAlign : "center"}}>Mobile Phones</h4>
            </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "300px", marginRight : "15px"}}>
            <img src = {'/Images/homepic4.jpg'} class="card-img-top" alt="..."/><br/>
            <Link  onClick = {() => {props.history.push("/Customer/HomeTest/Tablet / iPad / iPod")}}>
                <h4 style = {{textAlign : "center"}}>Tablet / iPad / iPod</h4>
            </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "300px", marginRight : "15px"}}>
            <img src = {'/Images/homepic5.jpg'}   class="card-img-top" alt="..."/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Gaming")}}>
                <h4 style = {{textAlign : "center"}}>Gaming</h4>
            </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "300px", marginRight : "10px"}}>
            <img src = {'/Images/homepic6.jpg'}   class="card-img-top" alt="..."/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Other")}}>
                <h4 style = {{textAlign : "center"}}>Laptops</h4>
            </Link>
        </div>

    </div><br/>
    <img  src = {'/Images/Secondheader333.jpg'} class="img-fluid" alt="Responsive image"></img>
    <br/><br/>
    <h2>Explore Popular Brands</h2><br/><br/>

    <div className = "row">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
        <img src = {'/Images/AppleLogo.png'}   class="card-img-top" alt="..."/><br/>
        <Link onClick = {() => {props.history.push("/Customer/HomeTest/Apple")}}>
            <h4 style = {{textAlign : "center"}}>Apple</h4>
        </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
            <img src = {'/Images/samsungLogo.jpg'}   class="card-img-top" alt="..."/><br/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Samsung")}}>
                <h4 style = {{textAlign : "center"}}>Samsung</h4>
            </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
            <img src = {'/Images/googleLogo.jpg'}   class="card-img-top" alt="..."/><br/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Google")}}>
                <h4 style = {{textAlign : "center"}}>Google</h4>
            </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
            <img src = {'/Images/sonyLogo.jpeg'}   class="card-img-top" alt="..."/><br/><br/><br/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Sony")}}>
                <h4 style = {{textAlign : "center"}}>Sony</h4>
            </Link>
        </div>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "0px"}}>
            <img src = {'/Images/xboxLogo.png'}   class="card-img-top" alt="..."/><br/><br/>
            <Link onClick = {() => {props.history.push("/Customer/HomeTest/Xbox")}}>
                <h4 style = {{textAlign : "center"}}>Xbox</h4>
            </Link>
        </div>

    </div>
  </div>
  );
}
