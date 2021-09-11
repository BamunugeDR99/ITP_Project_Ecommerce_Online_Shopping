// import React, { Component, useState } from "react";
// import axios from "axios";

// import "../CSS/contact.css";
// import go from "../images/bg2.jpg";


// export default function Report(props){

//     let [description,setName] = useState("");
//     let [customerid,setCustomerid] = useState("");
//     const [reportreason,setReportreason] = useState("");
  
//     function sendData(e){

//       e.preventDefault();
  
//       const newReview = {
//         description,
//         customerid,
//         reportreason
//       }
  
     
//       console.log(newReview);

//       axios.post("http://localhost:8070/review/add",newReview).then(()=>{

//         // setName(" ");
//         // setEmail(" ");
//         setReportreason(" ");
//         props.history.push("/Home");
//         document.getElementById("txt").innerHTML = "Message Sended Successfully!";
        
//       }).catch((err) =>{
//         alert(err)
//       })
//     }


//  return(
// <div className="rev">
  
//     <div className="contact1">
//       <h1 id = "txt"></h1>
//         <div className="container-contact1">

//         <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <img src={go} className="img3" />
//                     </div>
//                     <div className="col">
//                     <form onSubmit = {sendData} className="contact1-form validate-form">
//                         <span className="contact1-form-title">
//                             <b>Report a review</b>
//                         </span>

                        
//                               <div className="wrap-input1 validate-input" data-validate = "Name is required">
//                                 <input className="input1" type="text" name="name" placeholder={review.description}/>
//                                 <span className="shadow-input1">Customer Review</span>
//                             </div>
                          
                        

                        
//                               <div className="wrap-input1 validate-input" data-validate = "Name is required">
//                                 <input className="input1" type="text" name="name" placeholder={review.customerid}/>
//                                 <span className="shadow-input1">Customer ID</span>
//                             </div>
                          

//                         <div className="wrap-input1 validate-input" data-validate = "Message is required">
//                             <textarea className="textarea1" name="message" placeholder=" "onChange= {
//                                 (e)=>{
//                                 setReportreason(e.target.value);
//                                 }
//                             }></textarea>
//                             <span className="shadow-input1">Write your reason</span>
//                         </div>

//                         <div className="container-contact1-form-btn">
//                             <button type="submit" className="contact1-form-btn">
//                                 <span> Send Report </span>
//                             </button>
//                         </div>
//                     </form>
//                     </div> 
//                 </div>
//             </div>  
            
        
//         </div>
//     </div>
//  </div>   
//  )

// }


