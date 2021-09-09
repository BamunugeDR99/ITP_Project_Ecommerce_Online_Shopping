import React, { useState } from "react";
import axios from "axios";


import "../css/ViewCardDetails.css"; //css linked

export default function ViewCardDetails(props){

    return(
        <div>

<div class="container-fluid p-3 my-3">
    <div class="height-100 d-flex justify-content-center align-items-center">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
                 <img src="https://i.imgur.com/gfp4wrR.png" width="50" />
                <h1>VISA</h1>
            </div>
            <div class="px-2 number mt-3 d-flex justify-content-between align-items-center"> 
            <span>1234</span> <span>5678</span> <span>8910</span> <span>1112</span> </div>
            <div class="p-4 card-border mt-4">
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="cardholder">Card Holder</span> <span class="expires">Expires</span> </div>
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="name">Allice William</span> <span class="date">10/20</span> </div>

            </div>
            <div class="mt-3">
           <button class="btn btn-primary btn-block payment-button">Proceed to payment <i class="fa fa-long-arrow-right"></i></button> 
           </div>
        </div>
    </div>
</div>
<br/>
<div class="container-fluid p-3 my-3">
    <div class="height-100 d-flex justify-content-center align-items-center">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
                 <img src="https://i.imgur.com/gfp4wrR.png" width="50" />
                <h1>VISA</h1>
            </div>
            <div class="px-2 number mt-3 d-flex justify-content-between align-items-center"> 
            <span>1234</span> <span>5678</span> <span>8910</span> <span>1112</span> </div>
            <div class="p-4 card-border mt-4">
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="cardholder">Card Holder</span> <span class="expires">Expires</span> </div>
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="name">Allice William</span> <span class="date">10/20</span> </div>
            </div>
        </div>
    </div>
</div>


        </div>
    )
}