import React, { useState } from "react";
import axios from "axios";
import "../JS/Addpayment";


// import "../css/AddpaymentMethod.css"; //css linked

export default function AddpaymentMethod(props){


	//let [cardtype, setcardtype] = useState("");
	let [cardowner, setcardowner] = useState("");
	let [cardnumber, setcardnumber] = useState("");
	let [carddate, setcarddate] = useState("");
	let [cardcvv, setcardcvv] = useState("");
	let cardtype = "";

	function sendData(e){

	  e.preventDefault();
	  cardtypeCheck();
	//	setcardtype("visa");
	  const newpaymentdetails = {
		cardtype,
		cardowner,
     	cardnumber,
     	carddate,
		cardcvv,

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
  
	function cardtypeCheck() {

		if (document.getElementById("visa").checked) {
	
		  cardtype = (document.getElementById("visa").value);
	
		} else if (document.getElementById("mastercard").checked) {
	
		  cardtype = (document.getElementById("mastercard").value);
	
		}
	
	  }
	
	

return(

<div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
<div class="AddPaymentMethod">
<div class="padding">
	<form method="post" onSubmit = {sendData}>
    <div class="row">
        <div class="container-fluid d-flex justify-content-center">
            <div class="col-sm-8 col-md-6">
                <div class="card" style={{width:"500px"}} >
                    { <div class="card-header">
                        <div class="row">
                            
                            <div class="col-md-6 text-right" style= {{ marginTop: "-5px" }}>

								<div class="cc-selector">
									<span><input id="visa" type="radio" name="credit-card" value="VISA" style= {{ marginRight: "0px"}} /></span>
									<label class="drinkcard-cc visa" for="visa" ></label>
								<span><input id="mastercard" type="radio" name="credit-card" value="MASTER" style= {{ marginLeft: "0px"}} /></span>
									<label class="drinkcard-cc mastercard"for="mastercard"></label>
								</div>
								

								</div>
                        </div>
                    </div> }
                    <div class="card-body" style={{height: "300px"}} >
					<div class="form-group">
							 <label for="numeric" class="control-label">CARD HOLDER NAME</label>
							  <input type="text" class="input-lg form-control"
							  		onChange= {
										(e)=>{
											setcardowner(e.target.value);
											}
										}/> 
							  </div>
						<div class="form-group"> 
						<label for="cc-number" class="control-label">CARD NUMBER</label>
						 <input id="cc-number" type="text" class="input-lg form-control cc-number" placeholder="•••• •••• •••• ••••" required
									onChange= {
										(e)=>{
											setcardnumber(e.target.value);
											}
										}/>
							  </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
									 <label for="cc-exp" class="control-label">CARD EXPIRY</label> 
									 <input id="cc-exp" type="text" class="input-lg form-control cc-exp" placeholder="•• / ••" required
									onChange= {
										(e)=>{
											setcarddate(e.target.value);
											}
										}/> 

							</div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
									 <label for="cc-cvc" class="control-label">CARD CVC</label> 
									 <input id="cc-cvc" type="text" class="input-lg form-control cc-cvc" placeholder="••••" required
									 onChange= {
										(e)=>{
										setcardcvv(e.target.value);
											}
									 	}
									/> 
									  </div>
                            </div>
                        </div>
                        <br/><br/>
                       
							 <div class="float-right">
							 
							 <span style= {{ marginRight: "200px"}}> <button type="reset" class="btn btn-success">Cancel</button></span>  
						
							 <span><button type="submit" class="btn btn-primary">Save</button></span> 
						</div>
                    <br/><br/>
					</div>
                </div>
            </div>
        </div>
    </div>
	</form>
</div>
</div>
</div> 

 );

}