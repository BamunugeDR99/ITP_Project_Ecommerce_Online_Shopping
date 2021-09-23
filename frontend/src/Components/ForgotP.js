import axios from "axios";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ForgotP(props) {
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
        alert("gg");
      }

      if(flag == 1){
        Code = makeid(20);
        setCodeCheck(Code);
        emailContent = {
          email,
          Code,
        };
        console.log(emailContent);
    
        emailjs
          .send(
            "service_ac9xbqd", //your service id
            "template_zuxlt3d", // template id
            emailContent,
            "user_TGhnW7M8Z4dNu0PzvbuZ9" //
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
    if(enteredCode == codeCheck){
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
    if(verification == 1){

      

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
    <h2 style ={{textAlign : "center"}} id = "txtMsg"></h2>
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
    <input type="text" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter new password" required
       onChange= {
        (e)=>{
          setPassword(e.target.value);
        } } />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Confirm New Password</label>
    <input type="text" class="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="Re-enter Password"  required
       onChange= {
        (e)=>{
          setConfirmPassword(e.target.value);
        } }/>
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
