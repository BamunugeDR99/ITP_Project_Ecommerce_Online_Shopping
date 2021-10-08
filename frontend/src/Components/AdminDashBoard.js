import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashBoard(props) {

 
  const [customerCount, setCustomerCount] = useState("");
  const [sellerCount, setsellerCount] = useState("");
  const [itemCount, setitemCount] = useState("");
  const [packageCount, setpackageCount] = useState("");
  const [adminCount, setadminCount] = useState("");
  const [sellerRequesCount, setsellerRequestCount] = useState("");

  useEffect(() =>{
    function getCustomers(){
        axios.get("http://localhost:8070/Customer/getAll").then((res) =>
        {
           
            console.log(res.data);
            setCustomerCount(res.data.length);
            console.log(customerCount);
            
        }).catch((err) =>{
            alert(err);
        })
    }

    function getSellers(){

      axios.get("http://localhost:8070/orgseller/get").then((res) =>
      {
         
          console.log(res.data);
          setsellerCount(res.data.length);
          console.log(sellerCount);
          
      }).catch((err) =>{
          alert(err);
      })
    }

    function getItems(){

      axios.get("http://localhost:8070/items/getItems").then((res) =>
      {
         
          console.log(res.data);
          setitemCount(res.data.length);
          console.log(itemCount);
          
      }).catch((err) =>{
          alert(err);
      })
       

    }

    function getPackages(){

      axios.get("http://localhost:8070/Packages/getPackages").then((res) =>
      {
         
          console.log(res.data);
          setpackageCount(res.data.length);
          console.log(packageCount);
          
      }).catch((err) =>{
          alert(err);
      })
       

    }

    function getAdmins(){

      axios.get("http://localhost:8070/Admin/getAllAdmins").then((res) =>
      {
         
          console.log(res.data);
          setadminCount(res.data.length);
          console.log(adminCount);
          
      }).catch((err) =>{
          alert(err);
      })
       

    }

    
    function getSellerRequests(){

      axios.get("http://localhost:8070/seller/get").then((res) =>
      {
         
          console.log(res.data);
          setsellerRequestCount(res.data.length);
          console.log(sellerRequesCount);
          
      }).catch((err) =>{
          alert(err);
      })
       

    }
   
    getCustomers();
    getSellers();
    getItems();
    getPackages();
    getAdmins();
    getSellerRequests();
    
   
}, []);



  return (
    <div className="DashBoard">

      <br/><br/>

<div class="row">
  <div class="column">
    <div class="card" style={{ background: "linear-gradient(to right, #493240, #f09)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/group.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Total Customers</h3>
      <p  style={{color:"white"}}><b>{customerCount}</b></p>
    </div>
  </div>

  <div class="column">
    <div class="card"  style={{background:"linear-gradient(to right, #a86008, #ffba56)"}}>
    
    <img src="https://img.icons8.com/fluency/300/000000/guest-male.png" style={{width:"120px", height:"120px", marginLeft:"80px"}}/>
      <h3  style={{color:"white"}}>Total Sellers</h3>
      <p  style={{color:"white"}}><b>{sellerCount}</b></p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{background: "linear-gradient(to right, #0a504a, #38ef7d)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/multiple-smartphones.png" style={{width:"120px", height:"120px", marginLeft:"60px"}}/>
      <h3 style={{color:"white"}}>Total Items</h3>
      <p style={{color:"white"}}><b>{itemCount}</b></p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card"  style={{background: "linear-gradient(to right, #373b44, #4286f4)"}}>
     
    <img src="https://img.icons8.com/fluency/300/000000/package.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Total Packages</h3>
      <p style={{color:"white"}}><b>{packageCount}</b></p>
     
    </div>
  </div>
</div>

<br/>

<div class="row">
  <div class="column">
    <div class="card" style={{background: "linear-gradient(45deg,#FF5370,#ff869a"}}>
    <img src="https://img.icons8.com/fluency/300/000000/administrator-male.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Total Admins</h3>
      <p style={{color:"white"}}><b>{adminCount}</b></p>
     
    </div>
  </div>

  <div class="column">
    <div class="card" style={{background: "linear-gradient(45deg,#2ed8b6,#59e0c5)"}}>
    <img src="https://img.icons8.com/fluency/300/000000/invite.png"  style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Seller Requests</h3>
      <p style={{color:"white"}}><b>{sellerRequesCount}</b></p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{background: "linear-gradient(45deg,#4099ff,#73b4ff)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/purchase-order.png"  style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Orders</h3>
      <p style={{color:"white"}}>Some text</p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{background: "linear-gradient(45deg,#FFB64D,#ffcb80)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/fine-print.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Reports</h3>
      <p style={{color:"white"}}>Some text</p>
     
    </div>
  </div>
</div>
<br/><br/>
     
    </div>


  );
}

// export default AddStudent;
