import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import "../Css/sellerregistration.css";
import { NavLink } from "react-router-dom";

export default function SellerRegistration(props){

	let [ownername,setownername] = useState("");
	let [mobile,setmobile] = useState("");
	let [companyname,setcompanyname] = useState("");
	let [address,setaddress] = useState("");
	let [year,setyear] = useState("");
	let [email,setemail] = useState("");
	let [description, setdescription] = useState("");
	let logo = "";
	let logo2 = "";
	let logo3 = "";
	let [errorMsg, setErrorMsg] = useState("");
	
	let flag2 = 0;
	let flag3 = 0;
	let flag4 = 0;

	  //check phone number

	  function validPhoneNumber() {
		const phoneNumber = document.getElementById("mobile").value;
	
		if (isNaN(phoneNumber)) {
		  flag2 = 0;
		  alert("Enter only numeric value to phone number!");
		} else if (phoneNumber.length < 10) {
		  flag2 = 0;
		  alert("Phone number must be 10 digit!");
		} else if (phoneNumber.length > 10) {
		  flag2 = 0;
		  alert("Phone number must be 10 digit!");
		} else if (phoneNumber.charAt(0) != 0) {
		  flag2 = 0;
		  alert("Phone number must start with 0!");
		} else {
		  flag2 = 1;
		}
	  }
	
	  //check email
	
	  function validEmail() {
		const email = document.getElementById("email").value;
	
		const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
		if (email.match(EmailAdd)) {
		  flag3 = 1;
		} else {
		  flag3 = 0;
		  alert("You have entered an invalid email address!");
		}
	  }
	
	  // check ckeckbox
	
	  function checkCheckbox() {
		const checkbox = document.getElementById("policy");
	
		if (!checkbox.checked) {
		  flag4 = 0;
		  alert("You Should Agree To Our Terms & Conditions!");
		} else {
		  flag4 = 1;
		}
	  }

		function sendData(e){

		e.preventDefault();

		validPhoneNumber();
		validEmail();
		checkCheckbox();
		
		logo2 = document.getElementById("logo").value;
	    logo3 = logo2.substring(12);

	
		const newseller = {
			ownername,
			mobile,
			companyname,
			address,
			year,
			email,
			description,
			logo : logo3
		}

	console.log(newseller);

	axios.post("http://localhost:8070/seller/add",newseller).then(()=>{
		setownername(" ");
    	setmobile(" ");
		setcompanyname(" ");
		setaddress(" ");
		setyear(" ");
		setemail(" ");
		setdescription(" ");



	alert("Request Sent");
	setErrorMsg("");
	
		
	}).catch((err) =>{

		console.log(err.response.data);
    	alert(err.response.data.error);
    	setErrorMsg(err.response.data.error);
	 
	})
	 }

  
return(
<div class="sellerregistration">
<div>
{/* <img src = {require('../images/sellerheader22.jpg').default} class="img-fluid" alt="Responsive image"/> */}

<div> <br/>
<center><h1>Start Your Business</h1></center> <br/>
</div>

<h4 style={{color:"red", textAlign:"center"}}>{errorMsg}</h4>

<form class="form-detail" align="center" method="post" onSubmit = {sendData}>
<div class="card container" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
  <div class="card-body"  id="sellerReq">
   

   <div class="row">
    <div class="col">
	<input type="text" 
		name="ownername" 
		id="ownername" 
		class="form-control" 
		placeholder="Owner's Name" 
		required
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
      <div className = "card container-size">
		  <br/>
		  <div className = "card-container">
			  <label style={{textAlign:"left"}}>Company logo</label><br/>
			  <div className = "card-container">
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
  <br/><br/><input class="form-check-input" type="checkbox" id="policy" name="policy" value="true" required />
 
  <label class="form-check-label" for="defaultCheck1">
   <b> I agree to the Terms of service </b>
  </label>
</div>
	
	<button type="reset" class="btn btn-success">Reset</button>
	<span> </span>
	<button type="submit" class="btn btn-primary" id="btn1" name="btn1" value="submit">Request</button>
	<br/><br/>
	</div>
</div>


<b>Already have an account ? </b><Link to = "/SellerLogin">Sign in!</Link>
</form>
</div>
</div>
 );

}


