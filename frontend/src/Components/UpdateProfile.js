import axios from "axios";
import React, {useState,useEffect} from "react";
import Swal from 'sweetalert2';
const bcrypt = require('bcryptjs');




export default function UpdateProfile(props){

	const [passwordShown, setPasswordShown] = useState(false);
	const [NpasswordShown, setNPasswordShown] = useState(false);
	const [CNpasswordShown, setCNPasswordShown] = useState(false);
	

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
		
	  };

	  const toggleNPassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setNPasswordShown(!NpasswordShown);
	  };

	  const toggleCNPassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setCNPasswordShown(!CNpasswordShown);
	  };


	let Dateofb;

	let[currentImage,setCurrentImage] = useState("");
	const [birth, setBirthday] = useState("");
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
	
	let userImage = "";
	//let [confirmPassword ,setConfirmPassword] = useState("");

	// let [userImage ,setUserImage] = useState("");
	
	let objectID = "";

	let image2 = "";
	let image3 = "";


	


	const [customer,setCustomer] = useState([]);

	function genderSelect(){
		gender = document.getElementById("gender").value;	
	}
	function images(){
	  userImage = document.getElementById("user_image").value;	

	}
	function birthday(){
		dob = document.getElementById("birthday").value;	

	}


	let flag = 0;
	let flag1 = 0;

	

	useEffect(() =>{

		
		function getCustomer(){

			objectID = props.match.params.id;
			axios.get("http://localhost:8070/Customer/get/"+ objectID).then((res) =>
			{
				setCustomer(res.data);
				console.log(res.data);
				Dateofb = res.data.dob;
				setBirthday(String(Dateofb.substr(0, 10)));
				setFirstName(res.data.firstName);
				setLastName(res.data.lastName);
				setEmail(res.data.email);
				setPhoneNumber(res.data.phoneNumber);
				setAddress(res.data.address);
				setUsername(res.data.username);
				gender = res.data.gender;
				userImage = res.data.userImage;
				dob = res.data.dob;
				setCurrentImage(res.data.userImage);
				setPassword(res.data.password);
				
	
			}).catch((err) =>{
				alert(err);
			})
		}
	   
		getCustomer();


	}, []);



	function validate(){

		// To check a password  which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
		const phoneNumber = document.getElementById("phone").value;
	
	
		if(firstName.length === 0){
	
		  Swal.fire('First Name is required')
		   flag1 = 0;
		
		}else if(lastName.length === 0){
	
		Swal.fire('Last Name is required')
			  flag1 = 0;
	
	   }else if(phoneNumber.length === 0){
	
		Swal.fire('Phone Number is required')
			  flag1 = 0;
	   
	   
	   }else if (isNaN(phoneNumber)) {
		flag1 = 0;
		Swal.fire('Enter only numeric values to phone number')
	   
	
	  } else if (phoneNumber.length < 10) {
		flag1 = 0;
		Swal.fire('Phone Number must be 10 digit number')
	   
	   
		
	  } else if (phoneNumber.length > 10) {
		flag1 = 0;
		Swal.fire('Phone Number must be 10 digit number')
		
	
	  }  else if(dob.length === 0){
	
		Swal.fire('Birthday is required')
		flag1 = 0;
	
		}else if(gender.length === 0){
	
	  Swal.fire('Gender is required')
	  flag1 = 0;
	  
	}else{
	
	  flag1 = 1;
	}
	  
	}


	function Imagecheck(){

		let uimage = document.getElementById("user_image").value;

		if (uimage === "") {

			image3 = currentImage;

		}else{

			 image2 = document.getElementById("user_image").value;
		  
			 image3 = image2.substring(12);

		}
	}



	function changePassword(){

		let psw = document.getElementById("current_password").value;  

		if(psw === ""){

			psw = password;
			flag = 1;

		}else{

			let nCpsw = document.getElementById("new_password").value;
		    let nCopsw = document.getElementById("confirm_new_password").value;

		    const npsw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

			const isMatch = bcrypt.compareSync(psw, password);

			if(!isMatch){
				flag = 0;
				Swal.fire('Invalid Current Password!')
				
			}else{

				if(nCpsw.length < 8){
					flag = 0;
					Swal.fire('Password must be contain minimum 8 charcters!')
    			   

				}else if(!nCpsw.match(npsw)){

					flag = 0;
					Swal.fire('"Password must contain at least one lowercase letter, one uppercase letter, one numeric digit"!')
					

				}else if(nCpsw !== nCopsw){
					flag = 0;
					Swal.fire('Password Mismatch!!')
	

				}else{

					password = bcrypt.hashSync(nCpsw, bcrypt.genSaltSync(12));	
					flag = 1;
					
				}

			}
		}



	}



	function UpdateCusProfile(){
		// alert("d0");
		// e.preventDefault();
		 genderSelect();
		images();
		birthday();
		Imagecheck();
		changePassword();
		validate()
		
  
		if(flag === 1 && flag1 === 1){

		const updatecus={

		firstName,
		lastName,
		email,
		phoneNumber,
		dob,
		gender,
		address,
		username,
		password,
		// confirmPassword,
		userImage : image3
		}

		console.log(updatecus);

		objectID = props.match.params.id;
		axios.put("http://localhost:8070/Customer/update/"+ objectID, updatecus).then(()=>{
		

		//alert("Customer Updated Successfully!");



		Swal.fire(
			'Success',
			'Your Profile has been successfully updated',
			'success'	
		  )
		props.history.push("/Customer/MyProfile");
		window.location.reload();

		 
		  
		
			
		}).catch((err) =>{

			alert(err)
		  })
		}

			}
	
	
	function deleteCustomer(id){

		objectID = props.match.params.id;
	  axios.delete("http://localhost:8070/Customer/delete/"+ objectID).then((res) =>
	  {
		//   alert("Customer Deleted Successfully!");

		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this account!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(
				'Deleted!',
				'Your Profile Has Been Successfully Deleted!',
				'success'
				
			  )
			  props.history.push("/CustomerRegistration");
			}
		  })
		 
		  //const afterDeleteCustomer = customer.filter(customer=>customer._id !== id);
		  //setCustomer(afterDeleteCustomer);
	  }).catch((err) =>{
		  alert(err);
	  })



	
  }



    return(

		<div  className="CusUpdatePro">

<div class="container">
				<div class="row gutters">
				<h1 class="edit" style={{color:"black", textAlign:"center"}}>Edit Profile</h1><br/>
				<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
				<div class="card h-100">
					<div class="card-body">
				
						<div class="account-settings">
							<div class="user-profile">
							
								<div class="user-avatar">
								<img src={"/Images/" + customer.userImage} id="userproI" alt="UserImage"/>
								</div>
								<br/>
								<h5 class="user-name">{customer.username}</h5>
								<h6 class="user-email">{customer.email}</h6>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
				<div class="card h-100">
					<div class="card-body">
						<div class="row gutters">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<h3 class="mb-2 text-primary">Personal Details</h3><br/>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="FirsName"><b>Fist Name</b></label>
									<input type="text" class="form-control" id="fullName" placeholder="Frist Name" Value = {customer.firstName}
									 onChange= {
										(e)=>{
										  setFirstName(e.target.value);
										}
									  }
									
									/>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="LastName"><b>Last Name</b></label>
									<input type="text" class="form-control" id="LastName" placeholder="Last Name" Value = {customer.lastName}
									 onChange= {
										(e)=>{
											setLastName(e.target.value);
										}
									  }
									
									/>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="eMail"><b>Email</b></label>
									<input type="email" class="form-control" id="eMail" placeholder="Email Address" readOnly Value = {customer.email}
									onChange= {
										(e)=>{
										  setEmail(e.target.value);
										}
									  }
									
									/>
									  <i className="bi bi-envelope-fill"></i>
								</div>
							</div>
							
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="phone"><b>Phone</b></label>
									<input type="text" class="form-control" id="phone" placeholder = "Phone Number" Value = {customer.phoneNumber}
									
									onChange= {
										(e)=>{
										  setPhoneNumber(e.target.value);
										}
									  }
									
									/>
									<i className="bi bi-telephone-fill"></i>
								</div>
							</div>


							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="DOB" id="CusDOB"><b>Date of Birth</b></label>
									<input type="date" class="form-control"  id="birthday" placeholder = "Date of Birth" defaultValue = {birth}/>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="gender"><b>Gender</b></label>
									<select className="form-control" id = "gender">
										<option>{customer.gender}</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
									<i className="bi bi-caret-down-fill"></i>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="Address"><b>Address</b></label>
									<input type="text" class="form-control" id="address" placeholder = "Address" Value = {customer.address}
									onChange= {
										(e)=>{
										  setAddress(e.target.value);
										}
									  }
									
									
									/>
									<i className="bi bi-geo-alt-fill"></i>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="Username"><b>Username</b></label>
									<input type="text" class="form-control"  id="username" placeholder = "Username" Value = {customer.username}
									onChange= {
										(e)=>{
										  setUsername(e.target.value);
										}
									  }
									readOnly/>
									<i className="bi bi-person-fill"></i>
								</div>
							</div>
							
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="UserI" id="CusI"><b>User Image</b></label>
									<input type="file" class="form-control" id="user_image"/>
								</div>
							</div>

						</div>

						<div class="row gutters">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<h3 class="mt-3 mb-2 text-primary">Change Password</h3>
							</div>

							<br/>
			   
			   <div className="form-group">

			       <label for="CurrentP"><b>Current Password</b></label>
					<input type={passwordShown ? "text" : "password"} className="form-control" id="current_password" placeholder = "Current Password"/>
					
					<i className="bi bi-eye-fill" id="eyerx1" onClick={togglePassword}></i>
					<i className="bi bi-lock-fill" id="lock1"></i>
			  </div>
			  
			  <div className="form-group">
					
			  		<label for="NewP"><b>New Password</b></label>
					<input type={NpasswordShown ? "text" : "password"} className="form-control" id="new_password" placeholder = "New Password"/>
					
					<i className="bi bi-eye-fill" id="eyerx2" onClick={toggleNPassword}></i>
					<i className="bi bi-lock-fill"  id="lock2"></i>
			  </div>
			  
			  <div className="form-group">

			  		<label for="CNewP"><b>Confirm New Password</b></label>
					
					<input type={CNpasswordShown ? "text" : "password"} className="form-control" id="confirm_new_password" placeholder = "Confirm Password"/>
					
					<i className="bi bi-eye-fill" id="eyerx3" onClick={toggleCNPassword}></i>
					<i className="bi bi-lock-fill"  id="lock3"></i>
			  </div>
			
						
						</div>
						<div class="row gutters">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								
									<button type="submit" className="btnUpdate" onClick={()=>UpdateCusProfile(customer._id)}>Update</button>
									<button type="submit" className="btnDelete" onClick = {()=> deleteCustomer(customer._id)}>Delete</button>
								
							</div>
						</div>
					</div>
				</div>
				</div>
				</div>

				<br/><br/>
				</div>




			
</div>
	
    );

}  

