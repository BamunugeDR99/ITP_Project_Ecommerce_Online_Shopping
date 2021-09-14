import react, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home_Customer(props) {

  return (
  <div>
      <br/>
     <img  src = {require('../images/HomeHeaderImage.png').default}  class="img-fluid" alt="Responsive image"></img>
     <br/><br/>
     <h2>Explore Popular Categories</h2><br/><br/>
     
     <div className = "row">
     <div  class="card shadow-lg p-3 mb-5 bg-white rounded " style = {{width : "300px", marginRight : "15px", marginLeft : "0px"}}>
    <img src = {require('../images/homepic2.jpg').default}   class="card-img-top" alt="..."/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Mobile Phones</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "300px", marginRight : "15px"}}>
    <img src = {require('../images/homepic4.jpg').default} class="card-img-top" alt="..."/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Tablet / iPad / iPod</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "300px", marginRight : "15px"}}>
    <img src = {require('../images/homepic5.jpg').default}   class="card-img-top" alt="..."/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Gaming</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "300px", marginRight : "10px"}}>
    <img src = {require('../images/homepic6.jpg').default}   class="card-img-top" alt="..."/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Laptops</h4></Link>
    </div>
    </div><br/>
    <img  src = {require('../images/Secondheader333.jpg').default} class="img-fluid" alt="Responsive image"></img>
    <br/><br/>
    <h2>Explore Popular Brands</h2><br/><br/>
    <div className = "row">
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
    <img src = {require('../images/AppleLogo.png').default}   class="card-img-top" alt="..."/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Apple</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
    <img src = {require('../images/samsungLogo.jpg').default}   class="card-img-top" alt="..."/><br/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Samsung</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
    <img src = {require('../images/googleLogo.jpg').default}   class="card-img-top" alt="..."/><br/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Google</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "25px"}}>
    <img src = {require('../images/sonyLogo.jpeg').default}   class="card-img-top" alt="..."/><br/><br/><br/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Sony</h4></Link>
    </div>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style = {{width : "220px", marginRight : "0px"}}>
    <img src = {require('../images/xboxLogo.png').default}   class="card-img-top" alt="..."/><br/><br/>
    <Link><h4 style = {{textAlign : "center"}}>Xbox</h4></Link>
    </div>
    </div>
  </div>
  );
}
