import React, { useState } from "react";
import axios from "axios";


export default function AddCard(props){

    let [cardtype, setcardtype] = useState("");
	let [cardowner, setcardowner] = useState("");
	let [cardnumber, setcardnumber] = useState("");
	let [carddate, setcarddate] = useState("");
	// let [cardccv, setcardccv] = useState("");
  
	function sendData(e){

	  e.preventDefault();
  
	  const newpaymentdetails = {
		cardtype,
		cardowner,
     	cardnumber,
     	carddate,
		// cardcvv,

	  }

	  console.log(newpaymentdetails);

	  axios.post("https://tech-scope-online.herokuapp.com/paymentdetails/add",newpaymentdetails).then(()=>{

		alert(" Card Added");
	/*	props.history.push("/Home");
		document.getElementById("txt").innerHTML = "Card added Successfully!";
	*/
	  }).catch((err) =>{
		alert(err)
	  })
	}
    
return (  

<div className = "addcard">
<div className = "container">

<form method = "post" onSubmit = {sendData}> 

<div className="mb-3">
<label className="form-label">Card Type</label>
<input type="text" class="form-control"
				onChange= {
							(e)=>{
                            setcardtype(e.target.value);
							}
					}/> 
</div>

<div className="mb-3">
<label className="form-label">Card Holder's Name</label>
<input type="text" class="form-control"
				onChange= {
							(e)=>{
							setcardowner(e.target.value);
							}
					}/> 
</div>

<div className="mb-3">
<label className ="form-label">Card Number</label>
<input id="cardnumber" type="text" class="form-control" placeholder="•••• •••• •••• ••••" required
				onChange= {
							(e)=>{
							setcardnumber(e.target.value);
							}
					}/>
</div>

<div className="mb-3">
<label className ="form-label">CARD EXPIRY</label>
<input id="carddate" type="text" class="form-control" placeholder="•• / ••" required
				onChange= {
							(e)=>{
							setcarddate(e.target.value);
							}
					}/> 
</div>

<button type="reset" className="btn btn-danger">Cancel</button>
<button type="submit" className="btn btn-primary">Save</button>
</form>
</div>
</div>
  );
}