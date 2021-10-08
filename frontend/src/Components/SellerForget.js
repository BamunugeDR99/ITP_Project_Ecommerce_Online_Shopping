import axios from "axios";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'
const bcrypt = require('bcryptjs');

export default function ForgotP(props) {

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





  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [enteredCode, setCode] = useState();
  const [customer,setCustomer] = useState();
  const [verification, setVarification] = useState(0);
  let Code = "";
  const [codeCheck,setCodeCheck] = useState();
  let flag = 0;
  let emailContent = {
    email,
    Code,
  };

  function sendEmail(e) {
    e.preventDefault();

    axios.get("http://localhost:8070/Customer/getEmail/"+email).then((res) =>
    {
      setCustomer(res.data);
      console.log(res.data);
      if(res.data != null){
        flag = 1;
      }else{
        // alert("gg");
      }

      if(flag === 1){
        Code = makeid(20);
        setCodeCheck(Code);
        emailContent = {
          email,
          Code,
        };
        console.log(emailContent);
    
        emailjs
          .send(
            "service_f2jwhyr", //your service id
            "template_25xzkan", // template id
            emailContent,
            "user_twU9MTlC54wOOrtS498AM" //
          )
          .then(
            (result) => {
              console.log(result.text);
              //alert("send successfully");
              document.getElementById("txtMsg").innerHTML = "Email has been sent!";
              document.getElementById("txtMsg").style.color = "#228B22";
              document.getElementById("exampleInputEmail2").disabled = false;
              // document.getElementById("verifyBtn").disabled = false;
    
    
            },
            (error) => {
              console.log(error.text);
              document.getElementById("txtMsg").innerHTML = "Error has been occured! Please try again!";
              document.getElementById("txtMsg").style.color = "#FF0000";
            }
          );
        
      }else{
        document.getElementById("txtMsg").innerHTML = "User not found!";
        document.getElementById("txtMsg").style.color = "#FF0000";
      }
      
    }).catch((err) =>{
      alert(err);
    })

   
   
    // e.target.reset();
  }

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  function verifyCode(){
    console.log(enteredCode);
    console.log(codeCheck);
    if(enteredCode === codeCheck){
      document.getElementById("txtMsg").innerHTML = "Code Verified Successfully!";
      document.getElementById("txtMsg").style.color = "#228B22";
      setVarification(1);

    }else{

      document.getElementById("txtMsg").innerHTML = "Code Verified Unsuccessfully!";
      document.getElementById("txtMsg").style.color = "#FF0000";

    }
  }

  function changePassword(e){
    e.preventDefault();
    //update passsword 
    if(verification === 1){

      const newPassword = document.getElementById("new_password").value;
      const ConfirmnewPassword = document.getElementById("confirm_new_password").value;

      if(newPassword === ConfirmnewPassword){
         
        let customer2 = {
          firstName: customer.firstName,
          lastName:  customer.lastName,
          email:  customer.email,
          phoneNumber:  customer.phoneNumber,
          dob:  customer.dob,
          gender:  customer.gender,
          address:  customer.address,
          username: customer.username,
          password: bcrypt.hashSync(newPassword, bcrypt.genSaltSync(12)),
          // confirmPassword,
          userImage : customer.userImage
        }

        axios.put("http://localhost:8070/Customer/update/"+ customer._id, customer2).then(()=>{
		

		// alert("Customer Updated Successfully!");

    Swal.fire(
      'Succes!',
      'Successfully Changed the Password!',
      'success'
    )
    props.history.push("/CustomerLogin");
		
				
		}).catch((err) =>{

			alert(err)
		  })
		

      }else{
        //sweetlert
        //bcrypt

        alert("password mismatch!");
      }


    }else{

    }
  }
  // add email validation
  // add password validation
  return (
    <div><br/>
      <h1 style = {{textAlign : "center"}}>Forgot Password ?</h1>
  <div className = "container">
    <div class="card">
  <div class="card-body">
    <h2 style ={{textAlign : "center"}} id = "txtMsg">.</h2>
    <form onSubmit = {sendEmail}>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  required  onChange= {
                                (e)=>{
                                  setEmail(e.target.value);
                                } }/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Get Code</button></form><br/>
  <div class="form-group">
    <label for="exampleInputEmail1">Code</label>
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter the Code" required
       onChange= {
        (e)=>{
          setCode(e.target.value);
        } }/>
    <small id="emailHelp" class="form-text text-muted">This is a 20 digit System generated code</small>
  </div>
  <button type="button" id = "verifyBtn" class="btn btn-success" onClick = {()=> verifyCode()}>Verify Code</button>
    <br/><br/>
    <form onSubmit = {changePassword}>
      <h1>Change Password</h1><br/>
    <div class="form-group">
    <label for="exampleInputEmail1">New Password</label>
    <input type={passwordShown ? "text" : "password"} class="form-control" id="new_password" aria-describedby="emailHelp" placeholder="Enter new password" required
       onChange= {
        (e)=>{
          setPassword(e.target.value);
        } } />
         <i
                className="bi bi-eye-fill"
                id="eye"
                onClick={togglePassword}
                style={{position: "relative",
                  bottom: "30px",
                  left: "1030px",
                  cursor:"pointer" }}
              ></i>
              <i className="bi bi-lock-fill" style={{position: "relative",
                  bottom: "32px",
                  left: "1040px",
                  cursor:"pointer"}}></i>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Confirm New Password</label>
    <input  type={CpasswordShown ? "text" : "password"} class="form-control" id="confirm_new_password" aria-describedby="emailHelp" placeholder="Re-enter Password"  required
       onChange= {
        (e)=>{
          setConfirmPassword(e.target.value);
        } }/>
        <i
                className="bi bi-eye-fill"
                id="eye"
                onClick={toggleCPassword}
                style={{position: "relative",
                  bottom: "30px",
                  left: "1030px",
                  cursor:"pointer" }}
              ></i>

              <i className="bi bi-lock-fill" style={{position: "relative",
                  bottom: "32px",
                  left: "1040px",
                  cursor:"pointer"}}></i>
  </div>
  <button type="submit" class="btn btn-success">Change Password</button>
    </form>
  </div>
  <br/>
  

  
  <button type="submit" class="btn btn-success" onClick = {() => {
    props.history.push("/CustomerLogin");
  }} style={{backgroundColor:"blue", width:"300px",marginLeft:"420px"}}>Back to Login</button>
  <br/>  <br/>
</div>

  </div></div>
  );
}
