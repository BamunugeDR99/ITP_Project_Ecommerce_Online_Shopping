import axios from "axios";
import React, {useState,useEffect} from "react";

export default function CustomerList(props){

    const [customer,setCustomers] = useState([]);
    // const [show, setShow] = useState(false);
    const [load, setLoad] = useState(false);

    
  
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
  //search
  function handleSearch(e){

    let customerSearch = e;
    console.log(customerSearch);

    axios
        .get("http://localhost:8070/Customer/getAll")
        .then((res) =>{

          filterCustomer(res.data, customerSearch);
          console.log(res.data);
        })
        .catch((err)=> {

            alert(err);
        });
    
  }

  //Search

  function filterCustomer(data, customerSearch){

      let result = data.filter((post) =>

        post.firstName.toLowerCase().includes(customerSearch.toLowerCase()) || post.lastName.toLowerCase().includes(customerSearch.toLowerCase())
        

      );

      console.log(result);
      setCustomers(result);

      if(result != null){

        setLoad(false);
      }

      if(result.length === 0){

        setLoad(true);
      }

      
  }

  function showMore(id){

    console.log(id);
    props.history.push("/Admin/Customers/Details/" + id);
  }


   return(
      <div class="CustomerList">    
      <div class = "cus">
        
        <p>Customers</p>
        
        </div>
        
        <hr id= "li" />

        <div class="input-group" id = "CusSerch">
        
        <input type="search"  class="form-control rounded" placeholder="Search by first name or last name...." aria-label="Search"
          aria-describedby="search-addon" onChange = {(e)=> handleSearch(e.target.value)}/>
        <i class="bi bi-search" id="iconS"></i>
        </div>
        

        <br/>
        
        <div class= "CusListcard">
        <table class="tablex">
          <thead class="theadD">
            <tr>
            <th>User Image</th> 
            <th>Cutomer Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
          </thead>


     {customer.map((customer,index) =>{

return (

     
     
     
     <tbody>

     	  <tr>
            <td data-label="UserImage">
            <img src = {"/Images/" + customer.userImage} alt="userImage" width="110px" height="110px"  className="rounded-circle" />
            </td>
            <td data-label="Cutomer Name">{customer.firstName} {customer.lastName}</td>
     	  	  <td data-label="Customer Username">{customer.username}</td>
            <td data-label="Customer Email">{customer.email}</td>
     	  
     	  	  
     	  	  <td data-label="Action">
			  
			  <div>
						  <button class="btnshowmr" onClick = {()=> showMore(customer._id)}>Show More</button>  

						  <button class="btnremove"  onClick = {()=> deleteCus(customer._id)}>Remove</button>
              
			  </div>

         {/* <div id = {customer._id}>   
         onClick = {() => setShow(true)} 
              {     
                show? <button class="btnshowless" onClick = {() => setShow(false)}>Show Less</button>:null
              }
			  </div> */}
			  
			  </td>
        {/* <p id = {customer._id}></p> */}
     	  	  
     	  </tr>

     	  
		 </tbody> 
     

)
     


    })}


  </table>
 
</div>
</div>	

);




}