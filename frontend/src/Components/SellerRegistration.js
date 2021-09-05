import React, { useState } from "react";
import axios from "axios";

import "../css/style1.css";


export default function SellerRegistration(props){



	let [ownername,setownername] = useState("");
	let [mobile,setmobile] = useState("");
	let [companyname,setcompanyname] = useState("");
	let [address,setaddress] = useState("");
	let [year,setyear] = useState("");
	let [email,setemail] = useState("");
	let [description,setdescription] = useState("");
	//let [logo,setlogo] = useState("");
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
	
	// setownername(" ");
	// setmobile(" ");
	// setcompanyname(" ");
	// setaddress(" ");
	// setyear(" ");
	// setemail(" ");
	// setdescription(" ");
	// setlogo(" ");


	alert("added");
	props.history.push("/sellreq");
	document.getElementById("txt").innerHTML = "Request added Successfully!";
		
	}).catch((err) =>{
	alert(err)
	 })
	 }
  
return(

<div class="form-v9"><br></br><br></br>
<center><h1>Start Your Business</h1></center><br></br><br></br>
<div class="page-content">
	<div class="form-v9-content">
	<form class="form-detail" align="center" method="post" onSubmit = {sendData}>
	
		<div class="row justify-content-center">
			<div class="col-4">
				<input type="text" name="ownername" id="ownername" class="form-control" placeholder="Owner's Name" required
					onChange= {	
						(e)=>{	
							setownername(e.target.value);
							 }
						}/>
			</div>
			<div class="col-4">
				<input type="text" name="mobile" id="mobile" class="form-control" placeholder="Contact Number" required pattern="[0-9]{10}"
					onChange= {
						(e)=>{
							setmobile(e.target.value);
							 }
						}/>
			</div>
		</div><br></br><br></br>
		<div class="row justify-content-center">
			<div class="col-4">
				<input type="text" name="companyname" id="companyname" class="form-control" placeholder="Company Name" required
					onChange= {	
						(e)=>{	
							setcompanyname(e.target.value);
							 }
						}/>
			</div>
			<div class="col-4">
				<input type="text" name="address" id="address" class="form-control" placeholder="Physical Address" required 
					onChange= {
						(e)=>{
							setaddress(e.target.value);
							 }
						}/>
			</div>
		</div><br></br><br></br>
		<div class="row justify-content-center">
			<div class="col-4">
				<input type="text" name="year" id="year" class="form-control" placeholder="Established Year" required pattern="[0-9]{4}"
					onChange= {	
						(e)=>{	
							setyear(e.target.value);
							 }
						}/>
			</div>
			<div class="col-4">
				<input type="text" name="email" id="email" class="form-control" placeholder="Email Address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
					onChange= {
						(e)=>{
							setemail(e.target.value);
							 }
						}/>
			</div>
		</div><br></br><br></br>
		
		<div class="row justify-content-center">
			<div class="col-4">
				<textarea class="form-control" name="description" id="description" placeholder="Description" rows="5"
					onChange= {	
						(e)=>{	
							setdescription(e.target.value);
							 }
						}/>
			</div>
			<div class="col-4">
				<label>Company Logo<br></br>
				<input type="file" name="logo" id="logo" class="form-control" placeholder="Allowed types: jpg/jpeg" accept="image/*" required />
				Allowed types: jpg/jpeg<br></br></label>
			</div>
		</div><br></br><br></br><p>
		<div class="form-check">
              	<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    			<label class="form-check-label" for="exampleCheck1">I agree to the Terms of service</label>
 		</div>
  	<div class="row justify-content-left">
		<div class="col-4">			
 			<button type="reset" class="btn btn-primary">Reset</button>
		</div>
		<div class="col-4">		 
  			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
		</div></p>	  






















































































</form>
</div>
</div>
</div> 

 );

}


