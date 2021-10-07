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
    <div class="card"  style={{backgroundImage:"linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"}}>
    
    <img src="https://img.icons8.com/fluency/300/000000/guest-male.png" style={{width:"120px", height:"120px", marginLeft:"80px"}}/>
      <h3  style={{color:"white"}}>Total Sellers</h3>
      <p  style={{color:"white"}}><b>{sellerCount}</b></p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{backgroundImage: "linear-gradient(180deg, #2af598 0%, #009efd 100%)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/multiple-smartphones.png" style={{width:"120px", height:"120px", marginLeft:"60px"}}/>
      <h3 style={{color:"white"}}>Total Items</h3>
      <p style={{color:"white"}}><b>{itemCount}</b></p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card"  style={{backgroundImage: "linear-gradient(to top, #e8198b 0%, #c7eafd 100%)"}}>
     
    <img src="https://img.icons8.com/fluency/300/000000/package.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Total Packages</h3>
      <p style={{color:"white"}}><b>{packageCount}</b></p>
     
    </div>
  </div>
</div>

<br/>

<div class="row">
  <div class="column">
    <div class="card" style={{backgroundImage: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"}}>
    <img src="https://img.icons8.com/fluency/300/000000/administrator-male.png" style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Total Admins</h3>
      <p style={{color:"white"}}><b>{adminCount}</b></p>
     
    </div>
  </div>

  <div class="column">
    <div class="card" style={{backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)"}}>
    <img src="https://img.icons8.com/fluency/300/000000/invite.png"  style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Seller Requests</h3>
      <p style={{color:"white"}}><b>{sellerRequesCount}</b></p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{backgroundColor: "rgb(207,205,66)", background: "linear-gradient(90deg, rgba(207,205,66,1) 3%, rgba(255,255,255,1) 100%)"}}>
      
    <img src="https://img.icons8.com/fluency/300/000000/purchase-order.png"  style={{width:"120px", height:"120px", marginLeft:"75px"}}/>
      <h3 style={{color:"white"}}>Orders</h3>
      <p style={{color:"white"}}>Some text</p>
     
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={{backgroundColor: "rgb(182,182,179)", background: "linear-gradient(90deg, rgba(182,182,179,1) 3%, rgba(255,255,255,1) 100%)"}}>
      
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
