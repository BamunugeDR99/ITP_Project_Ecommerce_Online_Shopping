import React, { useState,useEffect } from "react";
import axios from "axios";

import "../Css/SelectPaymentMethod.css"; //css linked

export default function SelectPaymentMethod(props){
    const [paymentdetails,setpaymentdetails] = useState([]);
    const [loads,setLoad] = useState(false);
    const [data,setData] = useState();

    const totalPrice = localStorage.getItem("totalPrice");
    
    useEffect(() =>{
        const objectID = localStorage.getItem("CustomerID");
        function getpaymentdetails(){
            axios.get("http://localhost:8070/paymentdetails/get").then((res) =>
            {
               

                let results = res.data.filter(
                    (post) =>
                    post.ownerID == objectID           
                  );
                  
                //console.log(res.data);
                setpaymentdetails(results);
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getpaymentdetails();
        // displayStudentdetails();
       
    }, []);

 
function checkout(){
    let cardId;
  
  for(let i = 0; i < paymentdetails.length; i++){
      if(document.getElementById("a"+i).checked == true){
          cardId = document.getElementById("a"+i).value;
      }
  }
    props.history.push("/Customer/Confrim/"+ cardId);
//console.log(cardId);
}	

    return(
<div Class="Selectpay">

<div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card p-5" style={{width: "500px"}}>
        
        <div>
            <h4 class="heading">Confirm Payment</h4>
            <p class="text">Please Select the payment Method to Continue with the payment</p>
        </div>
        <div class="pricing p-3 rounded mt-4 d-flex justify-content-between">
            <div class="images d-flex flex-row align-items-center">
               <img src="https://i.imgur.com/S17BrTx.png" class="rounded" width="60"/>
                <div class="d-flex flex-column ml-4"> <span class="business">Total Amount     </span>  </div>
            </div>
            
            <div class="d-flex flex-row align-items-center">
               <sup class="dollar font-weight-bold">LKR</sup> 
               <span class="amount ml-1 mr-1" style = {{fontSize : "20px"}}>{totalPrice}.00</span> <span class="year font-weight-bold"> </span> 
               </div> 
        </div> <span class="detail mt-5">Select Payment Method</span>
        <div className ="col-sm" type="radio" class="credit rounded mt-4 d-flex justify-content-between align-items-center">
        <div className="container">
        {paymentdetails.map((paymentdetails,index) =>{
                return(
                   
                    <div className="row">
            <div class="d-flex flex-row align-items-center">
                <input id={"a"+index} type="radio" name="Select-card" value={paymentdetails._id} style= {{ marginRight: "10px"}} required /><span > </span>
               <img src="https://i.imgur.com/qHX7vY1.png" class="rounded" width="70" style= {{ marginRight: "10px"}}/>
                <div class="d-flex flex-column ml-3">
                   <span class="business">{paymentdetails.cardtype}</span>
                    <span class="plan">{paymentdetails.cardnumber}</span> 
                </div>
                
                </div>
            </div>  
          
                );
            })}
              </div>  
              
        </div><br/>
        <div class="col-md-6">
        <div class="form-group">
      
        </div></div>
        <h6 class="mt-4 text-primary">ADD PAYMENT METHOD</h6>
        
        <div class="mt-3">
           <button class="btn btn-primary btn-block payment-button"    onClick={() => checkout()} >Proceed to payment <i class="fa fa-long-arrow-right"></i></button> 
           </div>
    </div>
</div>

</div>


    )
    }