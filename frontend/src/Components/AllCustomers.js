import axios from "axios";
import React, {useState,useEffect} from "react";

export default function AllCustomers(){

  const [customer,setCustomers] = useState([]);
  
  
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
        

    <div  style = {{marginLeft: "20px", marginRight: "20px"}}>
        <h1>Display All Customers</h1>
        
        <h1 id = "txt"></h1>

        <table class="table">
            <thead>
              <tr>
                
                
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Username</th>
                <th scope="col"></th>
               
              </tr>
            </thead>
            
            
       
    {customer.map((customer,index) =>{

        return (
         
            
            <tbody>
              <tr>

                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td> {customer.dob}</td>
                <td>{customer.gender}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.address}</td>
                <td>{customer.username}</td>
                <button class="btn btn-primary" onClick = {()=> deleteCus(customer._id)} style = {{marginLeft: "10px"}}>Remove</button>
                <p id = {customer._id}></p>
              </tr>
              
            </tbody>
          
           
        
        )
       

    })}
    
 
    </table>
   
    </div>
    
  
)
}