import axios from "axios";
import React, {useState,useEffect} from "react";


export default function UpdateProfile(props){

	const [passwordShown, setPasswordShown] = useState(false);
	

	// Password toggle handler
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };

	let Dateofb;

	let[currentImage,setCurrentImage] = useState("");
	const [birth, setBirthday] = useState("");
	let [firstName, setFirstName] = useState("");
	let [lastName,setLastName] = useState("");
	let [email,setEmail] = useState("");
	//let[currentPassword,setCurrentPassword] = useState("");
	//let[currentImage, setCurrentImage]= useState("");
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
	let objectID = "";
	let userImage = "";

	let image2 = "";
	let image3 = "";
	let CurrentImage = "";

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
				

				
				
			}).catch((err) =>{
				alert(err);
			})
		}
	   
		getCustomer();


	}, []);


	function Imagecheck(){

		let uimage = document.getElementById("user_image").value;

		if (uimage === "") {

			image3 = currentImage;

		}else{

			 image2 = document.getElementById("user_image").value;
		  
			 image3 = image2.substring(12);

		}
	}





	function UpdateCusProfile(){
		// alert("d0");
		// e.preventDefault();
		 genderSelect();
		images();
		birthday();
		// checkPassword();
		Imagecheck();
  
		
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

		axios.put("http://localhost:8070/Customer/update/"+ objectID, updatecus).then(()=>{
		

		//alert("Customer Updated Successfully!");
		
		props.histroy.push("/Customer/MyProfile");
			
		}).catch((err) =>{
			alert(err)
		  })

			}
	

	
	
	
	function deleteCustomer(id){
	  axios.delete("http://localhost:8070/Customer/delete/"+objectID).then((res) =>
	  {
		  alert("Customer Deleted Successfully!");
		  props.histroy.push("/CustomerRegistration");
		  //const afterDeleteCustomer = customer.filter(customer=>customer._id !== id);
		  //setCustomer(afterDeleteCustomer);
	  }).catch((err) =>{
		  alert(err);
	  })
  }



  

    return(

		<div  className="CusUpdatePro">


			<div className="profile-area">
			
			<div className="containerrrrr">
			<div className="row">
			
			<div className="col-md-4">
			
			<div className="cardUpdatePro">
			
			<h1 className="top-leftI">Edit Profile</h1>
			
			
			<div className="UserProImage">
			
			<img src={"/Images/" + customer.userImage} id="userproI" alt="UserImage"/>
			
			</div>
			<br/>
			<h2 style={{color:"black", textAlign:"center"}}>{customer.username}</h2>
			<h3 style={{color:"black", textAlign:"center"}}>{customer.email}</h3>
			
			<div className="main-text">
			
			<h4 className="CusAccountD">Account Details</h4>
			
			<br/>
			<div className="form-row">

						<div className="col">
						  <input type="text" className="form-control" placeholder="First name" Value = {customer.firstName}
						  onChange= {
							(e)=>{
							  setFirstName(e.target.value);
							}
						  }
						  />
						</div>

						<div className="col">
						  <input type="text" className="form-control" placeholder="Last name" Value = {customer.lastName}
						  onChange= {
							(e)=>{
							  setLastName(e.target.value);
							}
						  }/>
						</div>
						</div>
						<br/>
			
			<div className="form-group">
				
					<input type="email" className="form-control" id="exampleInputEmail1" placeholder = "Email"  readOnly Value = {customer.email}
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
					<label for="DOB" id="CusDOB">Date of Birth</label>
					<input type="date" className="form-control" id="birthday" placeholder = "Date of Birth" defaultValue = {birth}/>
			  </div>
			  
			  
			  <div className="form-group">
				<select className="form-control" id = "gender">
					<option>{customer.gender}</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
				<i className="bi bi-caret-down-fill"></i>
				
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
					readOnly/>
					<i className="bi bi-person-fill"></i>
			  </div>

			  <div className="form-group">
				<label for="UserI" id="CusI">User Image</label>
				<input type="file" className="form-control-file" id="user_image"/>
			  </div>
			  
			  <br/>
			  
			  <h4 className="CusChangeP"><b>Change Password</b></h4>
			  
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
						 <button type="submit" className="btnUpdate" onClick={()=>UpdateCusProfile(customer._id)}>Update</button>
						</div>
						<div className="col">
						  <button type="submit" className="btnDelete" onClick = {()=> deleteCustomer(customer._id)}>Delete</button>
						</div>
		 	  </div>
			
			
			
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	
    );

}  

