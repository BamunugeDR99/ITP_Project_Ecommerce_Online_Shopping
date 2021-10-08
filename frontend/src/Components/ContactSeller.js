import React, {  useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

import "../Css/contact.css";
import go from "../images/bg118.jpg";


export default function ContactSeller(props){

    let history = useHistory();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
  
    let sellerid  = "";
    let [errorMsg,setErrorMsg] = useState("");
	let flag1 = 0;
    let flag2 = 0;

    let customerid;

    let objectId;

    useEffect((req, res) => {
        const objectId = props.match.params.id;
         } );

    function validEmail(){

		const email = document.getElementById("email").value;

		const EmailAdd = /^\w+([-]?\w+)*@\w+([\.-]?\w+)*(\w{2,3})+$/

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
      const objectId = props.match.params.id;

        console.log(objectId)
      if((flag1 == 1) && (flag2==1)){
          
      const newContactsel = {
        name,
        email,
        message,
        sellerid:objectId, 
        customerid
      }
  
     
      console.log(newContactsel);

      axios.post("http://localhost:8070/contactsel/add",newContactsel).then(()=>{

        setName(" ");
        setEmail(" ");
        setMessage(" ");

          Swal.fire({
            title: "Good job!",
            text: "You send the messege!",
            icon: "success",
            button: "ok!"
            
        });
        // props.history.push("/Customer/Home");
        // window.location.reload();
        
      }).catch((err) =>{
        alert(err)
        
		setErrorMsg(err.response.data.error);
      })
    }
    }


 return(
<div className="rev">  
<br/>
<div>
            <button type="button"style={{fontSize:'14px', borderRadius:'15px'}} class="btn btn-info" onClick={() => history.goBack()} ><i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</button>
          </div>
<div className="contact1">
  {/* <h1 id = "txt"></h1> */}


    <div className="container-contact1">
    
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={go} className="img3" alt={go}/>
                    </div>
                    <div className="col">
                    <form onSubmit = {sendData} className="contact1-form validate-form">
                        <h6 id="signupError">{errorMsg}</h6>
                        <span className="contact1-form-title">
                            <b>Contact the Seller</b>
                        </span>
                        <span className="contact1-form-title2">
                            Any complain or suggestions?
                        </span>
                            
                        <div className="wrap-input1 validate-input" data-validate = "Name is required">
                            <input className="input1" id="name" type="text" name="name" placeholder="Name" required
                            
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
                            <textarea className="textarea1" name="message" placeholder="Message" required
                            onChange= {
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


// import React from 'react';
  
// class DemoForm extends React.Component {
//     constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {}
//     };
     
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
     
//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
  
//     this.setState({
//       input
//     });
//   }
    
//   handleSubmit(event) {
//     event.preventDefault();
  
//     if(this.validate()){
//         console.log(this.state);
  
//         let input = {};
//         input["name"] = "";
//         input["email"] = "";
//         input["comment"] = "";
//         this.setState({input:input});
  
//         alert('Demo Form is submited');
//     }
//   }
  
//   validate(){
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;
  
//       if (!input["name"]) {
//         isValid = false;
//         errors["name"] = "Please enter your name.";
//       }
  
//       if (!input["email"]) {
//         isValid = false;
//         errors["email"] = "Please enter your email Address.";
//       }
  
//       if (typeof input["email"] !== "undefined") {
          
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(input["email"])) {
//           isValid = false;
//           errors["email"] = "Please enter valid email address.";
//         }
//       }
  
//       if (!input["comment"]) {
//         isValid = false;
//         errors["comment"] = "Please enter your comment.";
//       }
  
//       this.setState({
//         errors: errors
//       });
  
//       return isValid;
//   }
     
//   render() {
//     return (
//       <div>
//         <h1>React Form Validation Example - ItSolutionStuff.com</h1>
//         <form onSubmit={this.handleSubmit}>
  
//           <div class="form-group">
//             <label for="name">Name:</label>
//             <input 
//               type="text" 
//               name="name" 
//               value={this.state.input.name}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter name" 
//               id="name" />
  
//               <div className="text-danger">{this.state.errors.name}</div>
//           </div>
  
//           <div class="form-group">
//             <label for="email">Email Address:</label>
//             <input 
//               type="text" 
//               name="email" 
//               value={this.state.input.email}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter email" 
//               id="email" />
   
//               <div className="text-danger">{this.state.errors.email}</div>
//           </div>
  
//           <div class="form-group">
//             <label for="comment">Comment:</label>
//             <textarea 
//               name="comment"
//               value={this.state.input.comment} 
//               onChange={this.handleChange}
//               placeholder="Enter comment"
//               class="form-control" />
  
//               <div className="text-danger">{this.state.errors.comment}</div>
//           </div>
             
//           <input type="submit" value="Submit" class="btn btn-success" />
//         </form>
//       </div>
//     );
//   }
// }
  
// export default DemoForm;