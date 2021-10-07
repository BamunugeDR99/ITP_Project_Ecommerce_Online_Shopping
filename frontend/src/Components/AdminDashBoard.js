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
    <div class="card" style={{backgroundImage: "linear-gradient( 107deg,  rgba(2,108,223,1) 27.4%, rgba(0,255,255,1) 92.7% )"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/group.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Total Customers</h3>
      <p  style={{color:"white"}}><b>{customerCount}</b></p>
    </div>
  </div>

  <div class="column">
    <div class="card"  style={{backgroundImage: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"}}>
    
    <img src="https://img.icons8.com/fluency/300/000000/guest-male.png" style={{width:"120px", height:"120px", marginLeft:"80px"}}/>
      <h3  style={{color:"white"}}>Total Sellers</h3>
      <p  style={{color:"white"}}><b>{sellerCount}</b></p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{backgroundImage: " linear-gradient( 45.8deg,  rgba(175,104,254,1) 9.3%, rgba(101,223,255,1) 75.1% )"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/multiple-smartphones.png" style={{width:"120px", height:"120px", marginLeft:"60px"}}/>
      <h3>Total Items</h3>
      <p><b>{itemCount}</b></p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card"  style={{backgroundColor:" rgb(255,103,200)", background: "linear-gradient(90deg, rgba(255,103,200,1) 3%, rgba(255,255,255,1) 100%)"}}>
     
    <img src="https://img.icons8.com/fluency/300/000000/package.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3>Total Packages</h3>
      <p><b>{packageCount}</b></p>
     
    </div>
  </div>
</div>

<br/>

<div class="row">
  <div class="column">
    <div class="card" style={{backgroundImage: "radial-gradient( circle farthest-corner at 50.4% 50.5%,  rgba(251,32,86,1) 0%, rgba(135,2,35,1) 90% )"}}>
    <img src="https://img.icons8.com/fluency/300/000000/administrator-male.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3>Total Admins</h3>
      <p><b>{adminCount}</b></p>
     
    </div>
  </div>

  <div class="column">
    <div class="card" style={{backgroundColor: "rgb(180,68,91)", background: "linear-gradient(90deg, rgba(180,68,91,1) 3%, rgba(255,255,255,1) 100%)"}}>
    <img src="https://img.icons8.com/fluency/300/000000/invite.png"  style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3>Seller Requests</h3>
      <p><b>{sellerRequesCount}</b></p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{backgroundColor: "rgb(207,205,66)", background: "linear-gradient(90deg, rgba(207,205,66,1) 3%, rgba(255,255,255,1) 100%)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/purchase-order.png"  style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3>Orders</h3>
      <p>Some text</p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{backgroundColor: "rgb(182,182,179)", background: "linear-gradient(90deg, rgba(182,182,179,1) 3%, rgba(255,255,255,1) 100%)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/fine-print.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3>Reports</h3>
      <p>Some text</p>
     
    </div>
  </div>
</div>
<br/><br/>
     
    </div>


  );
}

// export default AddStudent;
