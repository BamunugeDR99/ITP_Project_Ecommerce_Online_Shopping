import axios from "axios";
import React, {useState,useEffect} from "react";
import img1 from "./../images/s.jpg";


export default function UpdateProfile(){

	const [customer,setCustomer] = useState([]);

	useEffect(() =>{
		function getCustomer(){
			axios.get("http://localhost:8070/Customer/get/6134f21cada0f635d8d1f257").then((res) =>
			{
				setCustomer(res.data);
				console.log(res.data);
				
				
			}).catch((err) =>{
				alert(err);
			})
		}
	   
		getCustomer();
		
	   
	}, []);
	
	function deleteCustomer(id){
	  axios.delete("http://localhost:8070/Customer/delete/61348b761c7373397cae1587").then((res) =>
	  {
		  alert("Customer Deleted Successfully!");
		  //const afterDeleteCustomer = customer.filter(customer=>customer._id !== id);
		  //setCustomer(afterDeleteCustomer);
	  }).catch((err) =>{
		  alert(err);
	  })
  }

  let imagename = "imgur_com.jpg";

    return(

        <div class="wrapperr">
					<div class="innerr">
						<div class="image-holder">
					<img src={img1} alt=""/>
				</div>
				
				<form action="">
					<h3>Edit Profile</h3>
					
					<div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User" class="rounded-circle" width="230px" height="230px"/>
                    </div>
					
					<br/>
	
					<div class="form-row">
						<div class="col">
						  <input type="text" class="form-control" placeholder="First name" Value = {customer.firstName}/>
						</div>
						<div class="col">
						  <input type="text" class="form-control" placeholder="Last name" Value = {customer.lastName}/> 
						</div>
					 </div>
					 
					<br/>
					 
				<div class="form-group">
				
					<input type="email" class="form-control" id="exampleInputEmail1" placeholder = "Email"  Value = {customer.email}/>
					
					<i class="bi bi-envelope-fill"></i>
			  </div>
			  
			  <div class="form-group">
					
					<input type="text" class="form-control" id="phone" placeholder = "Phone Number" Value = {customer.phoneNumber} />
					<i class="bi bi-telephone-fill"></i>
			  </div>
			  
			  
			  <div class="form-group">
					<label for="exampleInputDOB">Date of Birth</label>
					<input type="date" class="form-control" id="birthday" placeholder = "Date of Birth" Value = {customer.dob}/> 
			  </div>
			  
			  
			  <div class="form-group">
				<select class="form-control">
					<option>{customer.gender}</option>
					<option value="male">Male</option>
					<option value="femal">Female</option>
				</select>
					
				
			  </div>
			  
			  
			  <div class="form-group">
					
					<input type="text" class="form-control" id="address" placeholder = "Address" Value = {customer.address}/>
					<i class="bi bi-geo-alt-fill"></i>
			  </div>
			  
			  
			  <div class="form-group">
					<input type="text" class="form-control" id="username" placeholder = "Username" Value = {customer.username}/>
					<i class="bi bi-person-fill"></i>
			  </div>
			  
			  <br/>
			  
			  <h5><b>Change Password</b></h5>
			  
			   <br/>
			   
			   <div class="form-group">
					
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder = "Current Password"/>
					<i class="bi bi-lock-fill"></i>
			  </div>
			  
			  <div class="form-group">
					
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder = "Password"/>
					<i class="bi bi-lock-fill"></i>
			  </div>
			  
			   <div class="form-group">
					
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder = "Confirm Password"/>
					<i class="bi bi-lock-fill"></i>
			  </div>
			  
			  <div class="form-group">
				<label for="exampleFormControlFile1">User Image</label>
				<input type="file" class="form-control-file" id="user_image" img src = {require('../images/s.jpg').default} />
			  </div>
			 
			  
			  <div class="form-row">
						<div class="col">
						 <button type="submit" class="btn">Update</button>
						</div>
						<div class="col">
						  <button type="submit" class="btn" style = {{backgroundColor: "#D2042D"}}  onClick = {()=> deleteCustomer(customer._id)}>Delete</button>
						</div>
		 </div>
	
	
	
	
				</form>
				
			</div>
		</div>		
	
    )

}    