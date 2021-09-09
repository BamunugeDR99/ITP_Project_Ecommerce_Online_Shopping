import React, { useState } from "react";
import axios from "axios";

import img1 from "./../images/s.jpg";


function SignUp(props){

	let [firstName, setFirstName] = useState("");
	let [lastName,setLastName] = useState("");
	let [email,setEmail] = useState("");
	let [phoneNumber, setPhoneNumber] = useState("");
	//let [dob ,setDob] = useState("");
	let dob = "";
	// let [gender, setGender] = useState("");
	let gender = "";
	let [address ,setAddress] = useState("");
	let [username ,setUsername] = useState("");
	let [password , setPassword ] = useState("");
	let [confirmPassword ,setConfirmPassword] = useState("");
	// let [userImage ,setUserImage] = useState("");
	let userImage = "";
	let flag = 0;

  
	function genderSelect(){
		gender = document.getElementById("gender").value;	
	}
	function images(){
		userImage = document.getElementById("user_image").value;	

	}
	function birthday(){
		dob = document.getElementById("birthday").value;	

	}
	
	function checkPassword(){
		const password = document.getElelmentById("exampleInputPassword1").value;
		const confirmPassword = document.getElelmentById("exampleInputPassword2").value;
		
		if(password == confirmPassword){
			flag = 1;
		}else{
			alert("Password mismatch!");
		}
	}
	
	function sendData(e){
	  // alert("d0");
	  e.preventDefault();
	  genderSelect();
	  images();
	  birthday();
	  checkPassword();

	  let image2 = document.getElementById("user_image").value;
		
	  let image3 = image2.substring(12);
  	if(flag == 1){
		
	  const newCustomer = {
		firstName,
		lastName,
		email,
		phoneNumber,
		dob,
		gender,
		address,
		username,
		password,
		confirmPassword,
		userImage : image3

	  }

	  console.log(newCustomer);
	  //document.write("newStudent");

	  axios.post("http://localhost:8070/Customer/add", newCustomer).then(()=>{
		//alert("Student Added");
		setFirstName(" ");
		setLastName(" ");
		setEmail(" ");
		setPhoneNumber(" ");
		setAddress(" ");
		setUsername(" ");
		setPassword(" ");
		setConfirmPassword(" ");
		
	alert("Customer Added Successfully!");
	
		
		
	}).catch((err) =>{
		alert(err)
	  })
		}
	}
	

    return(

		<div className = "CustomerSignup">

		<div className="wrapper">
					<div className="inner">
						<div className="image-holder">
					<img src={img1} alt="" id="signUpI"/>
				</div>
				
				<form action=""  onSubmit = {sendData}>
					<h3 id = "sign_up">Sign Up</h3>
	
					<div className="form-row">
						<div className="col">
						  <input type="text" className="form-control" placeholder="First name"
						  onChange= {
							(e)=>{
							  setFirstName(e.target.value);
							}
						  }/>


						</div>
						<div className="col">
						  <input type="text" className="form-control" placeholder="Last name"
						  onChange= {
							(e)=>{
							  setLastName(e.target.value);
							}
						  }/>
						</div>
					 </div>
					 
					<br/>
					 
				<div className="form-group">
				
					<input type="email" className="form-control" id="email" placeholder = "Email"
					onChange= {
						(e)=>{
						  setEmail(e.target.value);
						}
					  }/>
					
					<i className="bi bi-envelope-fill"></i>
			  </div>
			  
			  <div className="form-group">
					
					<input type="text" className="form-control" id="phone" placeholder = "Phone Number"
					onChange= {
						(e)=>{
						  setPhoneNumber(e.target.value);
						}
					  }/>
					<i className="bi bi-telephone-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					<label htmlFor="exampleInputDOB">Date of Birth</label>
					<input type="date" className="form-control" id="birthday" placeholder = "Date of Birth"/>
			  </div>
			  
			  
			  <div className="form-group">
				<select className="form-control" id = "gender">
					<option value="" disabled selected>Gender</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
					
				
			  </div>
			  
			  
			  <div className="form-group">
					
					<input type="text" className="form-control" id="address" placeholder = "Address"
					onChange= {
						(e)=>{
						  setAddress(e.target.value);
						}
					  }/>
					<i className="bi bi-geo-alt-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					<input type="text" className="form-control" id="username" placeholder = "Username"
					onChange= {
						(e)=>{
						  setUsername(e.target.value);
						}
					  }/>
					<i className="bi bi-person-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder = "Password"
					onChange= {
						(e)=>{
						  setPassword(e.target.value);
						}
					  }/>
					<i className="bi bi-lock-fill"></i>
			  </div>
			  
			   <div className="form-group">
					
					<input type="password" className="form-control" id="exampleInputPassword2" placeholder = "Confirm Password"
					onChange= {
						(e)=>{
						  setConfirmPassword(e.target.value);
						}
					  }/>
					<i className="bi bi-lock-fill"></i>
			  </div>
			  
			  <div className="form-group">
				<label htmlFor ="exampleFormControlFile1">User Image</label>
				<input type="file" className="form-control-file" id="user_image"/>
			  </div>
  
			  <div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
					<label className="form-check-label" htmlFor="exampleCheck1">I caccept the Terms of Use & Privacy Policy.</label>
			  </div>
			  
			  <button type="submit" className="btn">Create Account</button>
	
			<div className = "signup">
					
					<br/><p><b>Already have an account ?</b>         <a href="">Login</a></p>
					
			</div>
	
	
	
				</form>
				
			</div>
		</div>

		</div>		


    );
}

export default SignUp;
