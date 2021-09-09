// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import "../CSS/writereview.css";
// import go from "../images/bg9.jpg";


// export default function WriteReview(props){

//     const [description,setDescription] = useState("");
//     const [date,setDate] = useState("");
//     const [noofstars,setNoofstars] = useState("");
  
//     function sendData(e){

//       e.preventDefault();
  
//       const newReview = {
//         description,
//         date,
//         noofstars
//       }
  
     
//       console.log(newReview);

//       axios.post("http://localhost:8070/review/postrev",newReview).then(()=>{

//         setDescription(" ");
//         setDate(" ");
//         setNoofstars(" ");
//         props.history.push("/Home");
//         document.getElementById("txt").innerHTML = "Message Sended Successfully!";
        
//       }).catch((err) =>{
//         alert(err)
//       })
//     }


//  return(
// <div>
  
//     <div className="contact2">
//       <h1 id = "txt"></h1>
      
//         <div className="container-contact2">

//         <form onSubmit = {sendData} className="contact2-form validate-form">

//           <div className="container">
          
//               <div className="row">
//                 <div className="col">
//                   <span className="contact2-form-title"><b>Write Your Review</b></span>
//                 </div>
//               </div>
//               <div className="row">

//               {review.reviewitem.map((pack)=> {
//                             return(
//                 <div className="col">
//                   <span className="test">{pack.name}</span>
//                 </div>
//                 )
//               })
//             }
//                 <div className="col">
//                   <div className="rating"> <input type="radio" name="rating" value="5" id="5"/>
//                     <label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/>
//                     <label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/>
//                     <label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/>
//                     <label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/>
//                     <label for="1">☆</label>
//                     </div>
//                 </div>
//               </div>
//               <div class="row">

//               {review.reviewitem.map((pack)=> {
//                             return(
//                               <div class="col-4">
// 										<img src={require('../images/'+pack.itemimage).default} className="card-img-top"/>
//                     </div>
// 									)
// 								})
// 							}

//                 <div class="col">
//                 <div classNameName="wrap-input1 validate-input" data-validate = "Message is required">
//                         <textarea className="input1" name="review" placeholder="Write your review here"onChange= {
//                             (e)=>{
//                               setDescription(e.target.value);
//                             }
//                           }></textarea>
//                         <span className="shadow-input1"></span>
//                     </div>
//                 </div>
//               </div>
//               <div className="row">
//                   <span className="contact2-form-title2">Your feedback help us to improve.</span>
                  
//               </div>
//               <div className="row">
//                   <div className="container-contact2-form-btn">
//                         <button className="contact2-form-btn">
//                             <span> Submit </span>
//                         </button>
//                     </div>
//               </div>
//             </div>
//           </form>
//         </div>
//     </div>
//  </div>   
//  )

// }


