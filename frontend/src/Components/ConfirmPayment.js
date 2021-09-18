import React, { useState } from "react";
import axios from "axios";


import "../Css/ConfirmPayment.css"; //css linked

export default function ConfirmPayment(props){

    return(
        <div class="ConfirmPay">

<div class="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-sm-11">
            <div class="card border-0">
                <div class="row justify-content-center">
                    <h3 class="mb-4">Credit Card Checkout</h3>
                </div>
                <div class="row">
                    <div class="col-sm-7 border-line pb-3">

                        

                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">Name on the card</p> 
                            <input type="text" name="name" placeholder="Name" size="15"/>
                        </div>
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">Card Number</p>
                            <div class="row px-3">
                                 <input type="text" name="card-num" placeholder="0000 0000 0000 0000" size="18" id="cr_no" minlength="19" maxlength="19"/>
                                <p class="mb-0 ml-3">/</p> 
                                <img class="image ml-1" src="https://i.imgur.com/WIAP9Ku.jpg"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">Expiry date</p> 
                            <input type="text" name="exp" placeholder="MM/YY" size="6" id="exp" minlength="5" maxlength="5"/>
                        </div>
                        <div class="form-group">
                            <p class="text-muted text-sm mb-0">CVV/CVC</p> 
                            <input type="password" name="cvv" placeholder="000" size="1" minlength="3" maxlength="3"/>
                        </div>
                        <div class="form-group mb-0">
                            <div class="custom-control custom-checkbox custom-control-inline">
                                 <input id="chk1" type="checkbox" name="chk" class="custom-control-input" checked/>
                                      <label for="chk1" class="custom-control-label text-muted text-sm">save my card for future payment</label> </div>
                        </div>
                    </div>
                    <div class="col-sm-5 text-sm-center justify-content-center pt-4 pb-4">
                         <small class="text-sm text-muted">Order number</small>
                        <h5 class="mb-5">12345678</h5> 
                        <small class="text-sm text-muted">Payment amount</small>
                        <div class="row px-3 justify-content-sm-center">
                            <h2 class=""><span class="text-md font-weight-bold mr-2">$</span>
                            <span class="text-danger">59.49</span></h2>
                        </div> <button type="submit" class="btn btn-red text-center mt-4">PAY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
        )
        
    }
