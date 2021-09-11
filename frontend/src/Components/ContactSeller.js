import React, { Component, useState } from "react";
import axios from "axios";

import "../CSS/contact.css";
import go from "../images/bg6.jpg";


export default function ContactSeller(props){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
  
    function sendData(e){

      e.preventDefault();
  
      const newContactsel = {
        name,
        email,
        message
      }
  
     
      console.log(newContactsel);

      axios.post("http://localhost:8070/contactsel/add",newContactsel).then(()=>{

        setName(" ");
        setEmail(" ");
        setMessage(" ");
        props.history.push("/Home");
        document.getElementById("txt").innerHTML = "Message Sended Successfully!";
        
      }).catch((err) =>{
        alert(err)
      })
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
                            <b>Contact the Seller</b>
                        </span>
                        <span className="contact1-form-title2">
                            Any complain or suggestions?
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
                            <input className="input1" type="text" name="email" placeholder="Email"
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
                                <span> Send Message </span>
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


