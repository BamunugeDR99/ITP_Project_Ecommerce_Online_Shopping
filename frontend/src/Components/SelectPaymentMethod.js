import React, { useState } from "react";
import axios from "axios";

import "../css/SelectPaymentMethod.css"; //css linked

export default function SelectPaymentMethod(props){

 
	

    return(
<div>

<div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card p-5">
        <div>
            <h4 class="heading">Confirm Payment</h4>
            <p class="text">Please Select the payment Method to Continue with the payment</p>
        </div>
        <div class="pricing p-3 rounded mt-4 d-flex justify-content-between">
            <div class="images d-flex flex-row align-items-center">
               <img src="https://i.imgur.com/S17BrTx.png" class="rounded" width="60"/>
                <div class="d-flex flex-column ml-4"> <span class="business">Total Amount      </span>  </div>
            </div>
            
            <div class="d-flex flex-row align-items-center">
               <sup class="dollar font-weight-bold">Rs.</sup> 
               <span class="amount ml-1 mr-1">8350.00</span> <span class="year font-weight-bold">/ year</span> 
               </div> 
        </div> <span class="detail mt-5">Select Payment Method</span>
        <div class="credit rounded mt-4 d-flex justify-content-between align-items-center">
            <div class="d-flex flex-row align-items-center">
               <img src="https://i.imgur.com/qHX7vY1.png" class="rounded" width="70"/>
                <div class="d-flex flex-column ml-3">
                   <span class="business">Credit Card</span> <span class="plan">1234 XXXX XXXX 2570</span> 
                </div>
            </div>
            <div> <input type="text" class="form-control cvv" placeholder="CVC"/> 
            </div>
        </div>
        <div class="credit rounded mt-2 d-flex justify-content-between align-items-center">
            <div class="d-flex flex-row align-items-center">
               <img src="https://i.imgur.com/qHX7vY1.png" class="rounded" width="70"/>
                <div class="d-flex flex-column ml-3">
                   <span class="business">Credit Card</span> <span class="plan">2344 XXXX XXXX 8880</span>
                    </div>
            </div>
            <div> <input type="text" class="form-control cvv" placeholder="CVC"/> </div>
        </div>
        <h6 class="mt-4 text-primary">ADD PAYMENT METHOD</h6>
        <div class="email mt-2">
           <input type="text" class="form-control email-text" placeholder="Email Address"/> </div>
        <div class="mt-3">
           <button class="btn btn-primary btn-block payment-button">Proceed to payment <i class="fa fa-long-arrow-right"></i></button> 
           </div>
    </div>
</div>

</div>


    )
    }