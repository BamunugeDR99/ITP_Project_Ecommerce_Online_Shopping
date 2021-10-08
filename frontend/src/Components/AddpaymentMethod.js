import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';




 //import "../Css/AddpaymentMethod.css"; //css linked

export default function AddpaymentMethod(props){


	//let [cardtype, setcardtype] = useState("");
	let [cardowner, setcardowner] = useState("");
	let [cardnumber, setcardnumber] = useState("");
	let [carddate, setcarddate] = useState("");
	let [cardcvv, setcardcvv] = useState("");
	let cardtype = "";
	let flag = 0;

	function vaidate(){

		if(cardowner.length === 0){
			flag = 0;
			Swal.fire('Owner Name is required')
		}else if(cardnumber.length === 0){

			flag = 0;
			Swal.fire('Card Number is required')

		}else if(carddate.length === 0){
			flag = 0;
			Swal.fire('Expiaration Date is required')
		
		}else if(cardcvv.length === 0){
			flag = 0;
			Swal.fire('Card Cvv is required')

		}else{
			flag = 1;
		}
	}

	function sendData(e){

	  e.preventDefault();
	  cardtypeCheck();
	  vaidate();

	  let ownerID = localStorage.getItem("CustomerID");
	  console.log(ownerID);

	//	setcardtype("visa");
	if(flag === 1){
	  const newpaymentdetails = {
		cardtype,
		cardowner,
     	cardnumber,
     	carddate,
		cardcvv,
		ownerID

	  }

	  console.log(newpaymentdetails);

	  axios.post("http://localhost:8070/paymentdetails/add",newpaymentdetails).then(()=>{

		
		Swal.fire("Success", "New Payment Method Added Successfully", "success");
		props.history.push("/Customer/MyWallet");
		// document.getElementById("txt").innerHTML = "Card added Successfully!";
	
	  }).catch((err) =>{
		alert(err)
	  }) 
	}
}


	function cardtypeCheck() {

		if (document.getElementById("visa").checked) {
	
		  cardtype = (document.getElementById("visa").value);
	
		} else if (document.getElementById("mastercard").checked) {
	
		  cardtype = (document.getElementById("mastercard").value);
	
		}
	
	  }
	

	  
	  function cancel(){

        props.history.push("/Customer/MyWallet");
    }



	  
	

return(

<div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
<div class="AddPaymentMethod">
	<br/><br/>
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
									<span><input id="visa" type="radio" name="credit-card" value="VISA" style= {{ marginRight: "0px"}} required /></span>
									<label class="drinkcard-cc visa" for="visa" ></label> <img src = "/Images/visaLogo.png" height = '60rem' width = '60rem'/>
								<span><input id="mastercard" type="radio" name="credit-card" value="MASTER" style= {{ marginLeft: "10px"}} required /></span>
									<label class="drinkcard-cc mastercard"for="mastercard"></label><img src = "/Images/masterLogo.png" height = '60rem' width = '60rem'/>
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
						 <input id="cc-number" type="text" class="input-lg form-control cc-number" placeholder="1234 •••• •••• 7890"  pattern="[0-9]{16}"
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
									 <input id="cc-exp" type="text" class="input-lg form-control cc-exp" placeholder="M M / Y Y"  
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
									 <input id="cc-cvc" type="text" class="input-lg form-control cc-cvc" placeholder="•••"  pattern="[0-9]{3}"
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
							 
							 <span style= {{ marginRight: "200px"}}> <button type="reset" class="btn btn-success" onClick={() => cancel()}>Cancel</button></span>  
						
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
<br/><br/><br/>
</div> 

 );

}