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
	let flag = 0;

    function validEmail(){

		const email = document.getElementById("email").value;

		const EmailAdd = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		 if(email.match(EmailAdd)){

			flag = 1;

		 }else{
			
			flag = 0;
			alert("You have entered an invalid email address!");

		 }
		
	}


    function sendData(e){

      e.preventDefault();
      validEmail();
      customerid  = localStorage.getItem("CustomerID");

      if(flag == 1){
          
  
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
        //props.history.push("/Home");
        //setErrorMsg("");
        //document.getElementById("txt").innerHTML = "Message Sended Successfully!";
        // alert("Message Sended Successfully!");
        Swal.fire(
            'Good job!',
            'You Send the message!',
            'success'
          )
        
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
                            <input className="input1" type="text" name="name" placeholder="Name"
                            onChange= {
                                (e)=>{
                                setName(e.target.value);
                                }
                            }/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input1" type="text" id="email" name="email" placeholder="Email"
                            onChange= {
                                (e)=>{
                                setEmail(e.target.value);
                                }
                            }/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate = "Message is required">
                            <textarea className="textarea1" name="message" placeholder="Message"onChange= {
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


