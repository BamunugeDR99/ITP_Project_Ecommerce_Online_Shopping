import React, { useState } from "react";
import axios from "axios";
// import swal from 'sweetalert2';

import img1 from "./../images/kl.jpg";

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
  let flag2 = 0;
  let flag3 = 0;
  let flag4 = 0;

  function genderSelect() {
    gender = document.getElementById("gender").value;
  }
  function images() {
    userImage = document.getElementById("user_image").value;
  }
  function birthday() {
    dob = document.getElementById("birthday").value;
  }

  //check password

  function checkPassword() {
    const password = document.getElementById("CusPassword").value;
    const confirmPassword = document.getElementById("CusConfirmPsw").value;

    const psw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    // To check a password  which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character

    if (password == "") {
      flag1 = 0;
      alert("Password shouldn't be null!");
    } else if (password.length < 8) {
      flag1 = 0;
      alert("Password must be contain minimum 8 charcters!");
    } else if (!password.match(psw)) {
      flag1 = 0;
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit"
      );
    } else if (password != confirmPassword) {
      flag1 = 0;
      alert("Password mismatch!");
    } else {
      flag1 = 1;
    }
  }

  //check phone number

  function validPhoneNumber() {
    const phoneNumber = document.getElementById("phone").value;

    if (isNaN(phoneNumber)) {
      flag2 = 0;
      alert("Enter only numeric value to phone number!");
    } else if (phoneNumber.length < 10) {
      flag2 = 0;
      alert("Phone number must be 10 digit!");
    } else if (phoneNumber.length > 10) {
      flag2 = 0;
      alert("Phone number must be 10 digit!");
    } else if (phoneNumber.charAt(0) != 0) {
      flag2 = 0;
      alert("Phone number must start with 0!");
    } else {
      flag2 = 1;
    }
  }

  //check email

  function validEmail() {
    const email = document.getElementById("email").value;

    const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(EmailAdd)) {
      flag3 = 1;
    } else {
      flag3 = 0;
      alert("You have entered an invalid email address!");
    }
  }

  // check ckeckbox

  function checkCheckbox() {
    const checkbox = document.getElementById("TermsC");

    if (!checkbox.checked) {
      flag4 = 0;
      alert("You Should Agree To Our Terms & Conditions!");
    } else {
      flag4 = 1;
    }
  }

  //send a avatar

  function avatar() {
    let useri = "avatar.png";

    let uimage = document.getElementById("user_image").value;
    // console.log(uimage);
    if (uimage === "") {
      image3 = useri;
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
      checkPassword();
      validPhoneNumber();
      validEmail();
      checkCheckbox();
    avatar();

    if(flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 ==1 ){

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
    setErrorMsg("");

    }).catch((err) =>{

    	console.log(err.response.data);
    	alert(err.response.data.error);
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

          <form action="" onSubmit={sendData}>
            <h3 id="sign_up">Sign Up</h3>

            <h6 id="signupError">{errorMsg}</h6>

            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
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
              <span id="message" style={{ color: "red" }}>
                {" "}
              </span>
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
              <input type="checkbox" className="form-check-input" id="TermsC" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I Accept the Terms of Use & Privacy Policy.
              </label>
            </div>

            <button type="submit" className="CusCreateBtn" id="CusCreateBtn">
              Create Account
            </button>

            <div className="signup">
              <br />
              <p>
                <b>Already have an account ?</b> <a href="">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
