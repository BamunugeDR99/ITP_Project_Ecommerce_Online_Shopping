import React, { useState, useEffect } from "react";
import axios from "axios";

export default function test1(props) {


    return(

    

<div className="container" style={{marginTop:'20px'}}> 

<div className="row shadow-lg p-3 mb-5 bg-white rounded" style={{width:'90%', padding:'20px 0px 20px 0px',margin:'10px 0px 20px 0px', backgroundColor:'white', borderRadius:'25px'}}>

<div className="col">
        
        
        <img style={{width:'250px', height:'250px',borderRadius:"10px"}} src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" />
        <br/><br/><span style={{fontSize:"25px", marginLeft:"50px"}}><b>Mackbook Pro</b></span>
</div>

<div className="col">
<br/>
        Order ID&emsp;:&emsp; Tr1234567890
        <br/>
        <br/>
        Company Name  :&emsp; iStore
        <br/>
        <br/>
        <span>Company Logo &emsp;<img style={{width:'100px', height:'100px', borderRadius:"50%"}} src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" /></span>
</div>

<div className="col">
        <br/>
        <span>Category  &emsp;&emsp;:&emsp;  Apple</span>
        <br/>
        <br/>
        <span>Item No &emsp; &emsp;&nbsp;:&emsp;  123456789</span>
        <br/>
        <br/>
        <span>Quantity &nbsp;&nbsp;&emsp;&emsp;:&emsp;  10</span>
        <br/>
        <br/>
        <span>Price &emsp;&emsp;&emsp;&emsp;:&emsp; Rs.100,000/=</span>
        <br/>
        <br/>
        <span>Date &emsp;&emsp;&emsp;&emsp;&nbsp;:&emsp; 06/10/2021</span>
</div>  

</div>
</div>


    );
}