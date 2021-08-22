import React, { useState } from "react";
import axios from "axios";




export default function AddpaymentMethod(props){


	let [ctype, setctype] = useState("");
	let [cowner, setcowner] = useState("");
	let [cnumber, setcnumber] = useState("");
	let [edate, setedate] = useState("");
  
	function sendData(e){

	  e.preventDefault();
  
	  const newpaymentdetails = {
		ctype,
		cowner,
     	cnumber,
     	edate,
	  }

	  console.log(newpaymentdetails);

	  axios.post("http://localhost:8070/paymentdetails/add",newpaymentdetails).then(()=>{
	  
	  	setctype(" ");
		setcowner(" ");
		setcnumber(" ");
		setedate(" ");


		alert("added");
	/*	props.history.push("/Home");
		document.getElementById("txt").innerHTML = "Card added Successfully!";
	*/
	  }).catch((err) =>{
		alert(err)
	  })
	}
  
return(

<div class="form-v9"><br></br><br></br>
<center><h1>Add New Payment Method</h1></center><br></br><br></br>
<div class="page-content">
	<div class="form-v9-content">
	<form class="form-detail"  method="post" onSubmit = {sendData}>
	
	<div class="container-md">

<div class="col-2">
  <div class="input-group">

	<div class="p-t-10">
	  <input type="radio" checked="checked" name="gender" />
	  <label class="radio-container m-r-45">Master

		<span class="checkmark"></span>
	  </label>
	  <input type="radio" checked="checked" name="gender" />
	  <label class="radio-container">Visa

		<span class="checkmark"></span>
	  </label>
	</div>
  </div>
</div>
<div class="mb-3">
<label for="formGroupExampleInput" class="form-label">card Owner</label>
<input type="text" class="form-control" id="formGroupExampleInput" />
</div>
<div class="mb-3">
<label for="formGroupExampleInput2" class="form-label">Card Number</label>
<input type="text" class="form-control" id="formGroupExampleInput2" />
</div>
<div class="mb-4">
<label for="formGroupExampleInput2" class="form-label">Expiration date</label>
<input type="text" class="form-control" id="formGroupExampleInput3" /></div>
<button type="cancel" class="btn btn-primary btn-lg">CANCEL</button>
<button type="submit" class="btn btn-secondary btn-lg">SAVE</button>
</div>
</form>
</div>
</div>
</div> 

 );

}