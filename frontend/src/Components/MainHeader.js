import react, { useState } from "react";
import axios from "axios";

export default function MainHeader(props) {



  return (
    <div style = {{marginTop : "65px"}}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img className="card-img-top" src = {'../Images/Logo.png'} style = {{width: "55px"}}alt="Card image cap"/>

  <a class="navbar-brand" href="#">Tech Scope</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Discover Items</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Discover Discounted Items</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Promotional Packages</a>
      </li>
 
    </ul>
    <form class="form-inline my-2 my-lg-0">
     {/*Custoemr Profile picture */}
     <img className="card-img-top" src = {'/Images/shopping-cart.png'} style = {{width: "30px", borderRadius : "0px",marginLeft : "10px",marginRight : "20px"}}alt="Card image cap"/>
     <b>Mia Ride </b>
      <img className="card-img-top" src = {'/Images/propic.jpg'} style = {{width: "50px", borderRadius : "30px",marginLeft : "10px",marginRight : "10px"}}alt="Card image cap"/>
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
    
    </form>
  </div>
</nav>
{/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search in Tech Scope" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    </div>
  );
}
