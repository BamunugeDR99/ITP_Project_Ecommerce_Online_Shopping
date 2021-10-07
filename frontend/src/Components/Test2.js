import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import g1 from "../images/p1.png";


// import c1 from "../Css/Test2.css";

export default function Test2(props) {


  return (


   <div className="container" style={{marginTop:'20px'}}> 


    <div className="row shadow-lg p-3 mb-5 bg-white rounded" style={{width:'90%', padding:'20px 0px 20px 0px',margin:'10px 0px 20px 0px', backgroundColor:'white', borderRadius:'25px'}}>
        <center>
        <span>Order ID &emsp;&nbsp;:&emsp; 1234567890</span>
        <br/>
        <span>Date &emsp;&emsp;&nbsp;:&emsp; 06/10/2021</span>
        {/* <hr/> */}
    <div className="row" style={{width:'90%', padding:'20px 0px 20px 0px',margin:'0px 0px 0px 0px', backgroundColor:'white', borderRadius:'25px'}}>
        <div className="col">
                
                
                <img style={{width:'50%'}} src={g1} />
                <br/><span>&emsp;iPhone XS</span>
        </div>

        <div className="col">
            <br/>
        <span>Item No  &emsp;&nbsp;:&emsp;  123456789</span>
                <br/>
                <br/>
                <span>Category  &emsp;&emsp;:&emsp;  Apple</span>
                <br/>
        </div>

        <div className="col">
        <br/>
                <span>Item No  &emsp;&nbsp;:&emsp;  123456789</span>
                <br/>
                <br/>
                <span>Category  &emsp;&emsp;:&emsp;  Apple</span>
                <br/>
        </div>  
</div>
<hr/>
<div className="row " style={{width:'90%', padding:'20px 0px 20px 0px',margin:'0px 0px 0px 0px', backgroundColor:'white', borderRadius:'25px'}}>
        <div className="col">
                
                
                <img style={{width:'50%'}} src={g1} />
                <br/><span>&emsp;iPhone XS</span>
        </div>

        <div className="col">
            <br/>
        <span>Item No  &emsp;&nbsp;:&emsp;  123456789</span>
                <br/>
                <br/>
                <span>Category  &emsp;&emsp;:&emsp;  Apple</span>
                <br/>
        </div>

        <div className="col">
        <br/>
                <span>Item No  &emsp;&nbsp;:&emsp;  123456789</span>
                <br/>
                <br/>
                <span>Category  &emsp;&emsp;:&emsp;  Apple</span>
                <br/>
        </div>  
</div>
        
</center>
</div>  

<div className="row shadow p-3 mb-5 bg-white rounded" style={{width:'90%', padding:'20px 0px 20px 0px',margin:'0px 0px 20px 2px', backgroundColor:'white', borderRadius:'10px',border:'red'}}>

<div className="col">
        <img style={{width:'50%', borderRadius:'30px'}} src={g1} />
        <br/>
        <span>Product Name</span>
</div>

<div className="col">
<br/>
        Seller ID : 1234567890
        <br/>
        <br/>
        Date : 06/10/2021
</div>

<div className="col">
        <br/>
        <span>Category  :  Apple</span>
        <br/>
        <br/>
        <span>Item No  :  123456789</span>
        <br/>
        <br/>
        <span>Quantity :  10</span>
        <br/>
        <br/>
        <span>Price :  Rs.100,000/=</span>
</div>  

</div>  

<div className="row shadow p-3 mb-5 bg-white rounded" style={{width:'90%', padding:'20px 0px 20px 0px',margin:'0px 0px 20px 2px', backgroundColor:'white', borderRadius:'15px',border:'red'}}>

<div className="col">
        <img style={{width:'50%', borderRadius:'30px'}} src={g1} />
        <br/>
        <span>Product Name</span>
</div>

<div className="col">
<br/>
        Seller ID : 1234567890
        <br/>
        <br/>
        Date : 06/10/2021
</div>

<div className="col">
        <br/>
        <span>Category  :  Apple</span>
        <br/>
        <br/>
        <span>Item No  :  123456789</span>
        <br/>
        <br/>
        <span>Quantity :  10</span>
        <br/>
        <br/>
        <span>Price :  Rs.100,000/=</span>
</div>  

</div>  

</div>

  );
}


