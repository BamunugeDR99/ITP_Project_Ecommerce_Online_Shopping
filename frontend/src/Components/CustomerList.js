import axios from "axios";
import React, {useState,useEffect} from "react";

export default function CustomerList(){

    const [customer,setCustomers] = useState([]);
    const [show, setShow] = useState(false);
  
    useEffect(() =>{
        function getCustomers(){
            axios.get("http://localhost:8070/Customer/getAll").then((res) =>
            {
                setCustomers(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getCustomers();
        
       
    }, []);

 
    
    function deleteCus(id){
      axios.delete("http://localhost:8070/Customer/delete/" + id).then((res) =>
      {
          alert("Customer Deleted Successfully!");
          const afterDeleteCustomer = customer.filter(customer=>customer._id !== id);
          setCustomers(afterDeleteCustomer);
      }).catch((err) =>{
          alert(err);
      })
  }

 

   return(
      <div class="CustomerList">    
      <div class = "cus">
        
        <p>Customers</p>
        
        </div>
        
        <hr class = "line" />

        <div class="input-group" id = "CusSerch">
        <input type="search"  class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary">search</button>
        </div>

        <br/>
        
        <div class= "CusListcard">
        <table class="tablex">
          <thead class="theadD">
            <tr>
            <th>Customer ID</th>
            <th>Cutomer Name</th>
            <th>Other Details</th>
            <th>Action</th>
            </tr>
          </thead>


     {customer.map((customer,index) =>{

return (

     
     
     
     <tbody>

     	  <tr>
     	  	  <td data-label="Customer ID">{customer._id}</td>
     	  	  <td data-label="Cutomer Name">{customer.firstName} {customer.lastName}</td>
     	  	  <td data-label="Other Details">

               <img src = {"Images/" + customer.userImage}  width="100px" height="100px"/>
              { 
                show? <p>{customer.email}</p>:null
              }  
              {
                show? <p>{customer.address}</p>:null
              } 
              {     
                show? <p>{customer. phoneNumber}</p>:null
              }
              

            </td>
     	  	  <td data-label="Action">
			  
			  <div>
						  <button class="btnshowmr" onClick = {() => setShow(true)}>Show More</button>

						  <button class="btnremove"  onClick = {()=> deleteCus(customer._id)}>Remove</button>
              
			  </div>

         <div>    
              {     
                show? <button class="btnshowless" onClick = {() => setShow(false)}>Show Less</button>:null
              }
			  </div>
			  
			  </td>
        <p id = {customer._id}></p>
     	  	  
     	  </tr>

     	  
		 </tbody> 
     

)
     


    })}


  </table>
 
</div>
</div>	

);




}