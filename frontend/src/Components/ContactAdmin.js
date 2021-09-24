import React, { Component, useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

import "../Css/contact.css";
import go from "../images/bgcontact3.jpg";


export default function ContactAdmin(props){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
  
    let customerid  = "";
    let [errorMsg,setErrorMsg] = useState("");
	let flag1 = 0;
    let flag2 = 0;

    function validEmail(){

		const email = document.getElementById("email").value;

		const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		 if(email.match(EmailAdd)){

			flag1 = 1;

		 }else{
			
			flag1 = 0;
			alert("You have entered an invalid email address!");

		 }
		
	}
    function validName(){

		const name = document.getElementById("name").value;

		const NameAdd = /^[a-zA-Z]+$/

		 if(name.match(NameAdd)){

			flag2 = 1;

		 }else{
			
			flag2 = 0;
			alert("Invalid name!");

		 }
		
	}


    function sendData(e){

      e.preventDefault();
      validEmail();
      validName();
      customerid  = localStorage.getItem("CustomerID");

      if((flag1 == 1) && (flag2=1)){
          
  
      const newContact = {
        name,
        email,
        message,
        customerid 
      }
  
     
      console.log(newContact);

      axios.post("http://localhost:8070/contact/add",newContact).then(()=>{

        setName(" ");
        setEmail(" ");
        setMessage(" ");
      
          Swal.fire({
            title: "Good job!",
            text: "You send the messege!",
            icon: "success",
            button: "ok!"
            
        });
        props.history.push("/Customer/Home");
        // window.location.reload();
        
      }).catch((err) =>{
        alert(err)
        
		setErrorMsg(err.response.data.error);
      })
    }
    }

 return(
<div className="rev">  
<div className="contact1">
  <h1 id = "txt"></h1>
  
    <div className="container-contact1">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={go} className="img3" />
                    </div>
                    <div className="col">
                    <form onSubmit = {sendData} className="contact1-form validate-form">
                        <span className="contact1-form-title">
                            <b>Contact Us</b>
                        </span>
                        <span className="contact1-form-title2">
                            Any questions or remarks? Just write us a message
                        </span>
                            
                        <div className="wrap-input1 validate-input" data-validate = "Name is required">
                            <input className="input1" type="text" id="name" name="name" placeholder="Name" required
                            onChange= {
                                (e)=>{
                                setName(e.target.value);
                                }
                            }/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input1" type="text" id="email" name="email" placeholder="Email" required
                            onChange= {
                                (e)=>{
                                setEmail(e.target.value);
                                }
                            }/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate = "Message is required">
                            <textarea className="textarea1" name="message" placeholder="Message" required onChange= {
                                (e)=>{
                                setMessage(e.target.value);
                                }
                            }></textarea>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="container-contact1-form-btn">
                            <button id="btncontact" type="submit" className="contact1-form-btn" >
                                <span > Send Message </span>
                            </button>
                        </div>
                    </form>
                    </div> 
                </div>
            </div>  
    </div>
</div>
</div>
 )

}


