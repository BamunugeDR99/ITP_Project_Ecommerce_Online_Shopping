import axios from "axios";
import React, {useState,useEffect} from "react";

export default function CustomerList(){

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
<div>    
<div class = "cus">
	
	<p>Customers</p>
	
	</div>
	
	<hr class = "line" />
	
	<form class="CusSearch">
	
	<div class="search">
		 
		  <i class="fa fa-search"></i>
		  <input type="search" placeholder="Search By Keyword..." class= "searchIn"/>
		  
		  <button type="submit" class="btnsrch">Search</button>
	</div>	  
	</form>

			
			<table class="table table-bordered table-hover ">
		  <thead class="theadD">
			
			<tr>
			  <th scope="col">Customer ID</th>
			  <th scope="col">Customer Name</th>
			  <th scope="col">Other Details</th>
			  <th scope="col">Action</th>
			</tr>
		  </thead>

          {customer.map((customer,index) =>{

        return (
		 
		 <tbody>
			
			<tr>
			  <td>{customer.username}</td>
			  <td>{customer.firstName}{customer.lastName}</td>
			  <td><img src={require('../images/' + customer.userImage).default}></img></td>
              <td>
                    <div>
						  <button type="submit" class="btnshowmr">Show More</button>
						  <button type="submit" class="btnremove" onClick = {()=> deleteCus(customer._id)}>Remove</button>
			        </div>
              </td>
              <p id = {customer._id}></p>
			</tr>
			
			
  </tbody>

)
       

})}

</table>

</div>	

);




}