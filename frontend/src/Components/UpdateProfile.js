import axios from "axios";
import React, {useState,useEffect} from "react";
import img1 from "./../images/lk.jpg";




export default function UpdateProfile(props){

	const [passwordShown, setPasswordShown] = useState(false);
	

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };

	let Dateofb;

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
	let [confirmPassword ,setConfirmPassword] = useState("");
	// let [userImage ,setUserImage] = useState("");
	
	let userImage = "";

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
	

	useEffect(() =>{

		
		function getCustomer(){
			
			
			axios.get("http://localhost:8070/Customer/get/613b4f1a73eceb40702affe6").then((res) =>
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
				

				
				
			}).catch((err) =>{
				alert(err);
			})
		}
	   
		getCustomer();


	}, []);


	function UpdateCusProfile(){
		// alert("d0");
		// e.preventDefault();
		 genderSelect();
		images();
		birthday();
  
		let image2 = document.getElementById("user_image").value;
		  
		let image3 = image2.substring(12);

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
		confirmPassword,
		userImage : image3
		}

		console.log(updatecus);

		axios.put("http://localhost:8070/Customer/update/613b4f1a73eceb40702affe6", updatecus).then(()=>{
		

		alert("Customer Updated Successfully!");
		
		props.histroy.push("/userPro");
			
		}).catch((err) =>{
			alert(err)
		  })

			}
	

	
	
	
	function deleteCustomer(id){
	  axios.delete("http://localhost:8070/Customer/delete/613b4f1a73eceb40702affe6").then((res) =>
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
                    <img src={"Images/" + customer.userImage} alt="UserImage"  className="rounded-circle" width="230px" height="230px"/>
                    </div>
					
					<br/>
	
					<div className="form-row">
						<div className="col">
						  <input type="text" className="form-control" placeholder="First name" Value = {customer.firstName}
						  onChange= {
							(e)=>{
							  setFirstName(e.target.value);
							}
						  }/>
						
						</div>
						<div className="col">
						  <input type="text" className="form-control" placeholder="Last name" Value = {customer.lastName}
						   onChange= {
							(e)=>{
							  setLastName(e.target.value);
							}
						  }
						  
						  
						  /> 
						</div>
					 </div>
					 
					<br/>
					 
				<div className="form-group">
				
					<input type="email" className="form-control" id="exampleInputEmail1" placeholder = "Email"  Value = {customer.email}
					 onChange= {
						(e)=>{
						  setEmail(e.target.value);
						}
					  }
					
					/>
					
					<i className="bi bi-envelope-fill"></i>
			  </div>
			  
			  <div className="form-group">
					
					<input type="text" className="form-control" id="phone" placeholder = "Phone Number" Value = {customer.phoneNumber} 
					onChange= {
						(e)=>{
						  setPhoneNumber(e.target.value);
						}
					  }
					
					/>
					<i className="bi bi-telephone-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					<label id="CusDOB" htmlFor="exampleInputDOB">Date of Birth</label>
					<input type="date" className="form-control" id="birthday" placeholder = "Date of Birth" defaultValue = {birth}/> 
			  </div>
			  
			  
			  <div className="form-group">
				<select className="form-control" id = "gender">
					<option>{customer.gender}</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
					
				
			  </div>
			  
			  
			  <div className="form-group">
					
					<input type="text" className="form-control" id="address" placeholder = "Address" Value = {customer.address}
					onChange= {
						(e)=>{
						  setAddress(e.target.value);
						}
					  }
					
					/>
					<i className="bi bi-geo-alt-fill"></i>
			  </div>
			  
			  
			  <div className="form-group">
					<input type="text" className="form-control" id="username" placeholder = "Username" Value = {customer.username}
					onChange= {
						(e)=>{
						  setUsername(e.target.value);
						}
					  }
					/>
					<i className="bi bi-person-fill"></i>
			  </div>

			  <div className="form-group">
				<label id="CusI" htmlFor="exampleFormControlFile1">User Image</label>
				<input type="file" className="form-control-file" id="user_image" />
			  </div>
			  
			  <br/>
			  
			  <h5 className ="CusChangeP"><b>Change Password</b></h5>
			  
			  
			   <br/>
			   
			   <div className="form-group">
				
					<input type={passwordShown ? "text" : "password"} className="form-control" id="exampleInputPassword1" placeholder = "Current Password"/>
				
					<i className="bi bi-eye-fill" id="eyerx" onClick={togglePassword}></i>
				
					<i className="bi bi-lock-fill"></i> 
		
					
			  </div>
			  
			  <div className="form-group">
					
					<input type={passwordShown ? "text" : "password"} className="form-control" id="exampleInputPassword1" placeholder = "New Password"/>
					<i className="bi bi-eye-fill" id="eyerx" onClick={togglePassword}></i>
					<i className="bi bi-lock-fill"></i>
			  </div>
			  
			   <div className="form-group">
					
					<input type={passwordShown ? "text" : "password"} className="form-control" id="exampleInputPassword1" placeholder = "Confirm Password"/>
					<i className="bi bi-eye-fill" id="eyerx" onClick={togglePassword}></i>
					<i className="bi bi-lock-fill"></i>
			  </div>
			
			 
			  
			  <div className="form-row">
						<div className="col">
						 <button type="button" className="btn" onClick={()=>UpdateCusProfile(customer._id)}>Update</button>
						</div>
						<div className="col">
						  <button type="button" className="btn" style = {{backgroundColor: "#D2042D"}}  onClick = {()=> deleteCustomer(customer._id)}>Delete</button>
						</div>
		 </div>
	
	
	
	
				</form>
				
			</div>
		</div>
		</div>		
	
    );

}  

