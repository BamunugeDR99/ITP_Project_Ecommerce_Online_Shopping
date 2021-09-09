import React, { useState } from "react";
import axios from "axios";


import "../css/AddpaymentMethod.css"; //css linked

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

<div >

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
<div class="AddPaymentMethod">
<div class="padding">
    <div class="row">
        <div class="container-fluid d-flex justify-content-center">
            <div class="col-sm-8 col-md-6">
                <div class="card" style={{width:"500px"}} >
                    <div class="card-header">
                        <div class="row">
                            
                            <div class="col-md-6 text-right" style= {{ marginTop: "-5px"   ,
																			
																			}}   >

							<form>
								<div class="cc-selector">
									<span><input id="visa" type="radio" name="credit-card" value="visa" style= {{ marginRight: "0px"}} /></span>
									<label class="drinkcard-cc visa" for="visa" style= {{ marginRight: "80px"}}></label>
								<span><input id="mastercard" type="radio" name="credit-card" value="mastercard" style= {{ marginLeft: "0px"}} /></span>
									<label class="drinkcard-cc mastercard"for="mastercard"></label>
								</div>
								</form>

								</div>
                        </div>
                    </div>
                    <div class="card-body" style={{height: "300px"}} >
					<div class="form-group">
							 <label for="numeric" class="control-label">CARD HOLDER NAME</label>
							  <input type="text" class="input-lg form-control"/> 
							  </div>
						<div class="form-group"> 
						<label for="cc-number" class="control-label">CARD NUMBER</label>
						 <input id="cc-number" type="tel" class="input-lg form-control cc-number" autocomplete="cc-number" placeholder="•••• •••• •••• ••••" required/>
							  </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
									 <label for="cc-exp" class="control-label">CARD EXPIRY</label> 
									 <input id="cc-exp" type="tel" class="input-lg form-control cc-exp" autocomplete="cc-exp" placeholder="•• / ••" required/>
										  </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
									 <label for="cc-cvc" class="control-label">CARD CVC</label> 
									 <input id="cc-cvc" type="tel" class="input-lg form-control cc-cvc" autocomplete="off" placeholder="••••" required/>
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
</div>
</div>
</div> 

 );

}