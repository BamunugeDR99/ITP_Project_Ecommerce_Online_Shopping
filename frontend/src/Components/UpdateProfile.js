import axios from "axios";
import React, {useState,useEffect} from "react";
import img1 from "./../images/s.jpg";




export default function UpdateProfile(){

	const [dob, setDob] = useState("");
	// let [firstName, setFirstName] = useState("");
	// let [lastName,setLastName] = useState("");
	// let [email,setEmail] = useState("");
	// let [phoneNumber, setPhoneNumber] = useState("");
	// let [address ,setAddress] = useState("");
	// let [username ,setUsername] = useState("");
	// let [password , setPassword ] = useState("");
	// let [confirmPassword ,setConfirmPassword] = useState("");
	// let gender = "";
	// let userImage = "";

	// function genderSelect(){
	// 	gender = document.getElementById("gender").value;	
	// }
	// function images(){
	// 	userImage = document.getElementById("user_image").value;	

	// }
	// function birthday(){
	// 	dob = document.getElementById("birthday").value;	

	// }

	//  genderSelect();
	//   images();
	//   birthday();

	const [customer,setCustomer] = useState([]);

	let Dateofb;

	useEffect(() =>{
		function getCustomer(){
			axios.get("http://localhost:8070/Customer/get/6134f21cada0f635d8d1f257").then((res) =>
			{
				setCustomer(res.data);
				console.log(res.data);
				Dateofb = res.data.dob;
				setDob(String(Dateofb.substr(0, 10)));

				
				
			}).catch((err) =>{
				alert(err);
			})
		}
	   
		getCustomer();


	}, []);

	// function updateCus(id){

	// 	const updateCust = {

	// 	firstName,
	// 	lastName,
	// 	email,
	// 	phoneNumber,
	// 	dob,
	// 	gender,
	// 	address,
	// 	username,
		// password,
		// confirmPassword,
		// userImage
		// }

		// console.log(updateCus);

		// axios.put("http://localhost:8070/Customer/update/6134f21cada0f635d8d1f257").then((res) =>

		// 	{
				
		// 		alert("Customer Updted");
				
				
		// 	}).catch((err) =>{
		// 		alert(err);
		// 	})
		// }


	
	

	
	
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



  

    return(

		<div className="CusUpdatePro">
        <div className="wrapperr">
					<div className="innerr">
						<div className="image-holder">
					<img src={img1} id="updateImg" alt=""/>
				</div>
				
				<form action="">
					<h3 id ="updateEd">Edit Profile</h3>
					
					<div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User"  className="rounded-circle" width="230px" height="230px"/>
                    </div>
					
					<br/>
	
					<div className="form-row">
						<div className="col">
						  <input type="text" className="form-control" placeholder="First name" Value = {customer.firstName}/>
						</div>
						<div className="col">
						  <input type="text" className="form-control" placeholder="Last name" Value = {customer.lastName}/> 
						</div>
					 </div>
					 
					<br/>
					 
				<div className="form-group">
				
					<input type="email" className="form-control" id="exampleInputEmail1" placeholder = "Email"  Value = {customer.email}/>
					
					<i className="bi bi-envelope-fill"></i>
			  </div>
			  
			  <div className="form-group">
					
					<input type="text" className="form-control" id="phone" placeholder = "Phone Number" Value = {customer.phoneNumber} />
					<i className="bi bi-telephone-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					<label htmlFor="exampleInputDOB">Date of Birth</label>
					<input type="date" className="form-control" id="birthday" placeholder = "Date of Birth" defaultValue = {dob}/> 
			  </div>
			  
			  
			  <div className="form-group">
				<select className="form-control">
					<option>{customer.gender}</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
					
				
			  </div>
			  
			  
			  <div className="form-group">
					
					<input type="text" className="form-control" id="address" placeholder = "Address" Value = {customer.address}/>
					<i className="bi bi-geo-alt-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					<input type="text" className="form-control" id="username" placeholder = "Username" Value = {customer.username}/>
					<i className="bi bi-person-fill"></i>
			  </div>
			  
			  <br/>
			  
			  <h5><b>Change Password</b></h5>
			  
			   <br/>
			   
			   <div className="form-group">
					
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder = "Current Password"/>
					<i className="bi bi-lock-fill"></i>
			  </div>
			  
			  <div className="form-group">
					
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder = "Password"/>
					<i className="bi bi-lock-fill"></i>
			  </div>
			  
			   <div className="form-group">
					
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder = "Confirm Password"/>
					<i className="bi bi-lock-fill"></i>
			  </div>
			  
			  <div className="form-group">
				<label htmlFor="exampleFormControlFile1">User Image</label>
				<input type="file" className="form-control-file" id="user_image" img src = {require('../images/s.jpg').default} />
			  </div>
			 
			  
			  <div className="form-row">
						<div className="col">
						 <button type="submit" className="btn">Update</button>
						</div>
						<div className="col">
						  <button type="submit" className="btn" style = {{backgroundColor: "#D2042D"}}  onClick = {()=> deleteCustomer(customer._id)}>Delete</button>
						</div>
		 </div>
	
	
	
	
				</form>
				
			</div>
		</div>
		</div>		
	
    )

}    