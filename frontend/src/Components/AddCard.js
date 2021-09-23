import React, { useState} from "react";
import axios from "axios";
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {

	state = {
		cardcvc: '',
		carddate: '',
		focus: '',
		cardowner: '',
		cardnumber: '',
	  };
	 
	  handleInputFocus = (e) => {
		this.setState({ focus: e.target.name });
	  }

    let [cardtype, setcardtype] = useState("");
	let [cardowner, setcardowner] = useState("");
	let [cardnumber, setcardnumber] = useState("");
	let [carddate, setcarddate] = useState("");
	let [cardcvc, setcardcvc] = useState("");
  
	function sendData(e){

	  e.preventDefault();
  
	  const newpaymentdetails = {
		cardtype,
		cardowner,
     	cardnumber,
     	carddate,
		cardcvc,

	  }

	  console.log(newpaymentdetails);

	  axios.post("http://localhost:8070/paymentdetails/add",newpaymentdetails).then(()=>{

		alert(" Card Added");
	/*	props.history.push("/Home");
		document.getElementById("txt").innerHTML = "Card added Successfully!";
	*/
	  }).catch((err) =>{
		alert(err)
	  })
	}
render() {   
return (  

<div className = "addcard">
<div className = "container">
<div id="PaymentForm">
        <Cards
          cvc={this.state.cardcvc}
          expiry={this.state.carddate}
          focused={this.state.focus}
          name={this.state.name}
          cardnumber={this.state.cardnumber}
        />

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
					onFocus={this.handleInputFocus}
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

<div className="mb-3">
<label className ="form-label">CARD CVC</label>
<input id="carddate" type="text" class="form-control" placeholder="•••" required
				onChange= {
							(e)=>{
							setcardcvc(e.target.value);
							}
					}/> 
</div>

<button type="reset" className="btn btn-danger">Cancel</button>
<button type="submit" className="btn btn-primary">Save</button>
</form>
</div>
</div>
</div>
  );
}
}