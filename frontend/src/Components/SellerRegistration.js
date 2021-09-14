import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import "../Css/style1.css";
import { NavLink } from "react-router-dom";

export default function SellerRegistration(props){

	let [ownername,setownername] = useState("");
	let [mobile,setmobile] = useState("");
	let [companyname,setcompanyname] = useState("");
	let [address,setaddress] = useState("");
	let [year,setyear] = useState("");
	let [email,setemail] = useState("");
	let [description,setdescription] = useState("");
	let logo;
		function sendData(e){

		e.preventDefault();
		logo = document.getElementById("logo").value;
		const newseller = {
			ownername,
			mobile,
			companyname,
			address,
			year,
			email,
			description,
			logo
		}

	console.log(newseller);

	axios.post("http://localhost:8070/seller/add",newseller).then(()=>{



	alert("Request Sent");
	props.history.push("/Home");
	document.getElementById("txt").innerHTML = "Request added Successfully!";
		
	}).catch((err) =>{
	alert(err)
	 })
	 }
  
return(
<div class="sellerregistration">
<div>
{/* <img src = {require('../images/sellerheader22.jpg').default} class="img-fluid" alt="Responsive image"/> */}

<div>
<center><h1>Start Your Business</h1></center>
</div>
<form class="form-detail" align="center" method="post" onSubmit = {sendData}>
<div class="card container shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">
   

   <div class="row">
    <div class="col">
	<input type="text" name="ownername" id="ownername" class="form-control" placeholder="Owner's Name" required
					onChange= {	
						(e)=>{	
							setownername(e.target.value);
							 }
						}/>
    </div>
    <div class="col">
	<input type="text" name="mobile" id="mobile" class="form-control" placeholder="Contact Number" required pattern="[0-9]{10}"
					onChange= {
						(e)=>{
							setmobile(e.target.value);
							 }
						}/>
    </div>
  </div>
	<br/><br/>
  <div class="row">
    <div class="col">
	<input type="text" name="companyname" id="companyname" class="form-control" placeholder="Company Name" required
					onChange= {	
						(e)=>{	
							setcompanyname(e.target.value);
							 }
						}/>
    </div>
    <div class="col">
	<input type="text" name="address" id="address" class="form-control" placeholder="Physical Address" required 
					onChange= {
						(e)=>{
							setaddress(e.target.value);
							 }
						}/>
    </div>
  </div>



  <br/><br/>
  <div class="row">
    <div class="col">
	<input type="text" name="year" id="year" class="form-control" placeholder="Established Year" required pattern="[0-9]{4}"
					onChange= {	
						(e)=>{	
							setyear(e.target.value);
							 }
						}/>
    </div>
    <div class="col">
	<input type="text" name="email" id="email" class="form-control" placeholder="Email Address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
					onChange= {
						(e)=>{
							setemail(e.target.value);
							 }
						}/>
    </div>
  </div>


  <br/><br/>
  <div class="row">
    <div class="col">
	<div class="form-group">
    
    <textarea class="form-control" name="description" id="description" rows="5" placeholder = "Description" required
	onChange= {	
		(e)=>{	
			setdescription(e.target.value);
			 }
		}></textarea>
  </div>
    </div>
    <div class="col">	
      <div className = "card">
		  <br/>
		  <div className = "container">
			  <label>Company logo</label><br/>
			  <div className = "container">
			  <input type="file" name="logo" id="logo" class="form-control-file" placeholder="Allowed types: png/jpg/jpeg" accept="image/*" required />
		  </div>

		  </div>
		  <br/>
		 <h6 style = {{textAlign : "right"}}>Allowed types : png/jpg/jpeg</h6>
		
		</div>
    </div>
  </div>
  </div>
</div>
<div className = "container">
	
	<div class="float-right">
	<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    I agree to the Terms of service
  </label>
</div>
	
	<button type="reset" class="btn btn-success">Reset</button>
	<span> </span>
	<button type="submit" class="btn btn-primary">Request</button>
	<br/><br/>
	</div>
</div>

<br/><br/>
Already have an account ? <a href = "/selllog">Sign in!</a>
</form>
</div>
</div>
 );

}


