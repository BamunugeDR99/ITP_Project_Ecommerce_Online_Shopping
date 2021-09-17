import React, { useState, useEffect } from "react";
import axios from "axios";

// import "../CSS/writereview.css";
import go from "../images/p2.jpg";


export default function WriteReview(props){

    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    const [noofstars,setNoofstars] = useState("");
  
    function sendData(e){

      e.preventDefault();
  
      const newReview = {
        description,
        date,
        noofstars
      }
  
     
      console.log(newReview);

      axios.post("http://localhost:8070/review/postrev",newReview).then(()=>{

        setDescription(" ");
        setDate(" ");
        setNoofstars(" ");
        props.history.push("/Home");
        document.getElementById("txt").innerHTML = "Message Sended Successfully!";
        
      }).catch((err) =>{
        alert(err)
      })
    }


 return(
  <div className="container" style={{ padding: "20px 10px 10px 10px" }}>
  <div class="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "100%", alignItems: "center", borderRadius: "10px" }} >
    <br />
    <h2 style={{ textAlign: "center", color: "black" }}>
      Write your Review
    </h2>
    <h5 style={{ textAlign: "center", color: "black" , fontSize:'18px', padding:'5px 0px 10px 0px'}}>
      Share your thoughts with us
    </h5>
   
    <hr/>

    <div>
    
    
          <div className="row" style={{fontSize:'22px', padding:'20px 20px 20px 50px'}}>
            <div className="col">
              <span>Item Name</span>
            </div>
            <div className="col">
                <div style={{ color: "#f9d71c", textAlign: "center" }}>
                   
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                </div>
            </div>
          </div>
          <div className="row"  style={{padding:'20px 20px 20px 50px'}}>
            <div className="col">
              <img src={go} style={{width:'50%'}}/>
            </div>
            <div className="col">
              <textarea style={{ height: '80%', borderRadius: '25px',background: '#e6e6e6'}}>enter your review here</textarea>
            </div>

          </div>
          <div className="row">
           

          </div>
    
    </div>
    
  </div>
</div>
    //   <div className="container">

    //     <form onSubmit = {sendData} className="contact2-form validate-form">

        
          
    //           <div className="row">
    //             <div className="col">
    //               <span className="contact2-form-title"><b>Write Your Review</b></span>
    //             </div>
    //           </div>
    //           <div className="row">

    //           {/* {review.reviewitem.map((pack)=> { */}
                            
    //             <div className="col">
    //               <span className="test">
    //                   {/* {pack.name} */}
    //                   </span>
    //             </div>
                
    //           {/* })
    //         } */}
    //             <div className="col">
    //               <div className="rating"> <input type="radio" name="rating" value="5" id="5"/>
    //                 <label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/>
    //                 <label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/>
    //                 <label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/>
    //                 <label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/>
    //                 <label for="1">☆</label>
    //                 </div>
    //             </div>
    //           </div>
    //           <div class="row">

    //           {/* {review.reviewitem.map((pack)=> { */}
                            
    //                           <div class="col-4">
		// 								<img 
    //                                     // src={require('../images/'+pack.itemimage).default} 
    //                                     className="card-img-top"/>
    //                 </div>
									
		// 						{/* })
		// 					} */}

    //             <div class="col">
    //             <div classNameName="wrap-input1 validate-input" data-validate = "Message is required">
    //                     <textarea className="input1" name="review" placeholder="Write your review here"onChange= {
    //                         (e)=>{
    //                           setDescription(e.target.value);
    //                         }
    //                       }></textarea>
    //                     <span className="shadow-input1"></span>
    //                 </div>
    //             </div>
    //           </div>
    //           <div className="row">
    //               <span className="contact2-form-title2">Your feedback help us to improve.</span>
                  
    //           </div>
    //           <div className="row">
    //               <div className="container-contact2-form-btn">
    //                     <button className="contact2-form-btn">
    //                         <span> Submit </span>
    //                     </button>
    //                 </div>
    //           </div>
    //      </form>
    //  </div>
 )

}


