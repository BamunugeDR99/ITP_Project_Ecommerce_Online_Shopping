import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

import img1 from "./../images/kl.jpg";
import { Link } from "react-router-dom";

function SignUp(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [CpasswordShown, setCPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const toggleCPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setCPasswordShown(!CpasswordShown);
  };

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  //let [dob ,setDob] = useState("");
  let dob = "";
  // let [gender, setGender] = useState("");
  let gender = "";
  let [address, setAddress] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  // let [userImage ,setUserImage] = useState("");
  
  let userImage = "";
  let image2 = "";
  let image3 = "";
  let [errorMsg, setErrorMsg] = useState("");
  let flag1 = 0;
  
  function genderSelect() {
    gender = document.getElementById("gender").value;
  }
  function images() {
    userImage = document.getElementById("user_image").value;
  }
  function birthday() {
    dob = document.getElementById("birthday").value;
  }


  function validate(){

    const password = document.getElementById("CusPassword").value;
    const confirmPassword = document.getElementById("CusConfirmPsw").value;
    const psw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    // To check a password  which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const checkbox = document.getElementById("TermsC");

    if(firstName.length === 0){

      Swal.fire('First Name is required')
       flag1 = 0;
    
    }else if(lastName.length === 0){

    Swal.fire('Last Name is required')
          flag1 = 0;

   }else if(email.length === 0){

    Swal.fire('Email is required')
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
    
    
  } else if (phoneNumber.charAt(0) != 0) {
    flag1 = 0;
    Swal.fire('Phone Number must start with 0')
   
  }  else if(dob.length === 0){

    Swal.fire('Birthday is required')
    flag1 = 0;

    }else if(gender.length === 0){

  Swal.fire('Gender is required')
  flag1 = 0;

  }else if(username.length === 0){

  Swal.fire('Username is required')
  flag1 = 0;

  }
  else if(password.length === 0){

  Swal.fire('Password is required')
  flag1 = 0;

  }else if(password.length < 8) {
  flag1 = 0;
  Swal.fire('Password must contain minimum 8 chracters')

  }else if(confirmPassword.length === 0){

  Swal.fire('Confirm Password is required')
  flag1 = 0;

 }else if (!password.match(psw)) {
  flag1 = 0;
  Swal.fire('Password must contain at least one lowercase letter, one uppercase letter, one numeric digit') 
 

} else if (password != confirmPassword) {
  flag1 = 0;
  Swal.fire('Password Mismatch')

  
} else if (!checkbox.checked) {
  flag1 = 0;
  Swal.fire('You must agree with our terms & conditions')



}else if(!email.match(EmailAdd)){
   
  Swal.fire('Invalid Email Address')

}else{

  flag1 = 1;
}
  
}



  //send a avatar

  function avatar() {

    let useriM = "avatarMale.jpg";
    let useriF = "avatarFemale.jpg";

    let uimage = document.getElementById("user_image").value;
    // console.log(uimage);
    if (uimage === "") {

      let gen = document.getElementById("gender").value;

      if(gen === "Male"){
        image3 = useriM;

      }else{
        image3 = useriF;
      }
      
    } else {
       image2 = document.getElementById("user_image").value;

       image3 = image2.substring(12);
    }
  }

  

  function sendData(e) {
    // alert("d0");
    e.preventDefault();
      genderSelect();
      images();
      birthday();
      avatar();
      validate()
      
      

    if(flag1 == 1){

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
    	// confirmPassword,
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

      Swal.fire({

        icon: 'success',
        title: 'Success',
        text: 'Your Account is Successfully Created! Now You Can login With Credentials.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        } 
      })
      props.history.push("/CustomerLogin");
     
    }).catch((err) =>{

    	console.log(err.response.data);
      Swal.fire('Email or Username Already Exits')
    	setErrorMsg(err.response.data.error);

      })
    	}
  }

  return (
    <div className="CustomerSignup">
      <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src={img1} alt="" id="signUpI" />
          </div>

          <form action="" id="form" onSubmit={sendData}>
            <h3 id="sign_up">Sign Up</h3>

            <h6 id="signupError">{errorMsg}</h6>

            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstname"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                   
                  }}
                />
                  {/* <samall id = "FNtxtMsg" style={{color:"red"}}>{FNErr}</samall> */}
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  id="lastname"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    
                   
                  }}
                />
                  {/* <samall id = "LNtxtMsg" style={{color:"red"}}>{LNErr}</samall>  */}
              </div>

            </div>

            <br />

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  
                  
                }}
              />

              <i className="bi bi-envelope-fill"></i>
               {/* <samall id = "emtxtMsg" style={{color:"red"}}>{emailErr}</samall>  */}
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  
                }}
              />
              <i className="bi bi-telephone-fill"></i>
              {/* <samall id = "phtxtMsg" style={{color:"red"}}>{phoneNumberErr}</samall>  */}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDOB" style={{ color: "black" }}>
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                placeholder="Date of Birth"


                
              />
               {/* <samall id = "bdtxtMsg" style={{color:"red"}}>{dobErr}</samall>  */}
            </div>

            <div className="form-group">
              <select className="form-control" id="gender">
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <i class="bi bi-caret-down-fill"></i>
              {/* <samall id = "gentxtMsg" style={{color:"red"}}>{genErr}</samall>  */}
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                  
                }}
              />
              <i className="bi bi-geo-alt-fill"></i>
              {/* <samall id = "adtxtMsg" style={{color:"red"}}>{addressErr}</samall>  */}
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  
                
                }}
              />
              <i className="bi bi-person-fill"></i>
              {/* <samall id = "untxtMsg" style={{color:"red"}}>{usernameErr}</samall>  */}
            </div>

            <div className="form-group">
              <input
                type={passwordShown ? "text" : "password"}
                className="form-control"
                id="CusPassword"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);

                 
                  
                }}
              />

              <i
                className="bi bi-eye-fill"
                id="eye"
                onClick={togglePassword}
              ></i>
              <i className="bi bi-lock-fill"></i>
             
              {/* <samall id = "pwtxtMsg" style={{color:"red"}}>{passwordErr}</samall>  */}
            </div>

            <div className="form-group">
              <input
                type={CpasswordShown ? "text" : "password"}
                className="form-control"
                id="CusConfirmPsw"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);

                 
                 
                }}
              />
              <i
                className="bi bi-eye-fill"
                id="eye"
                onClick={toggleCPassword}
              ></i>
              <i className="bi bi-lock-fill"></i>
              {/* <samall id = "cpwtxtMsg" style={{color:"red"}}>{confirmPasswordErr}</samall>  */}
            </div>

            <div className="form-group">
              <label
                htmlFor="exampleFormControlFile1"
                style={{ color: "black" }}
              >
                User Image
              </label>
              <input
                type="file"
                className="form-control-file"
                id="user_image"
              />
            </div>

            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="TermsC" 
              
              
              />
             
              <label className="form-check-label" htmlFor="exampleCheck1">
                I Accept the Terms of Use & Privacy Policy.
              </label>
            </div>
            {/* <samall id = "checktxtMsg" style={{color:"red"}}>{checkboxErr}</samall>  */}

            <button type="submit" className="CusCreateBtn" id="CusCreateBtn">
              Create Account
            </button>

            <div className="signup">
              <br />
              <p>
                <b>Already have an account ?</b> <Link to="/CustomerLogin">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
