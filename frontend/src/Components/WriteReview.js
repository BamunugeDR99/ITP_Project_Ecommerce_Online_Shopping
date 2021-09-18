import React, { useState, useEffect } from "react";
import axios from "axios";
    import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

import "../Css/writereview.css";

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

 
const ratingChanged = (newRating) => {
  console.log(newRating);
};
 
// render(
//   <ReactStars
//     count={5}
//     onChange={ratingChanged}
//     size={24}
//     isHalf={true}
//     emptyIcon={<i className="far fa-star"></i>}
//     halfIcon={<i className="fa fa-star-half-alt"></i>}
//     fullIcon={<i className="fa fa-star"></i>}
//     activeColor="#ffd700"
//   />,
 
//   document.getElementById("where-to-render")
// );
// function StarIcon(props) {
//   const { fill = 'none' } = props;
//   return (
//     <svg class="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
//   );
// }

// function RatingIcon(props) {
//   const {
//     index,
//     rating,
//     hoverRating,
//     onMouseEnter,
//     onMouseLeave,
//     onSaveRating,
//   } = props;
//   const fill = React.useMemo(() => {
//     if (hoverRating >= index) {
//       return 'yellow';
//     } else if (!hoverRating && rating >= index) {
//       return 'yellow';
//     }
//     return 'none';
//   }, [rating, hoverRating, index]);


 return(
<div className="rev">   
  <div className="container" style={{ padding: "20px 10px 10px 10px",width: '80%' }}>
  <div class="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "90%", alignItems: "center", borderRadius: "10px" }} >
    
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
            {/* <div 
              className="cursor-pointer"
              onMouseEnter={() => onMouseEnter(index)} 
              onMouseLeave={() => onMouseLeave()} 
              onClick={() => onSaveRating(index)}>
              <StarIcon fill={fill} />
            </div> */}
                {/* <div style={{ color: "#f9d71c", textAlign: "center", color: '#FFD600',cursor: 'pointer'}}>
                   
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                </div> */}
                  {/* <div id = 'stars'class="card-text">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span><span> </span> 
            </div> */}
                <div className="rating"> <input type="radio" name="rating" value="5" id="5"/>
                     <label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/>
                     <label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/>
                     <label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/>
                     <label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/>
                     <label for="1">☆</label>
                    </div>
            </div>
          </div>
          <div className="row"  style={{padding:'20px 20px 20px 10px'}}>
            <div className="col-4">
              <img src={go} style={{width:'70%'}}/>
            </div>
            <div className="col">
              <textarea name="review" style={{width: '80%' ,height: '80%', borderRadius: '25px',background: '#e6e6e6',outline: 'none', border: 'none',padding: '20px'}} placeholder="Enter your review here"/>
            </div>

          </div>
          <div className="row" style={{padding:"20px 0px 20px 0px"}}>
          <center>
            <button style={{width:'20%', alignItems:'center',borderRadius: '25px',height: '45px',fontSize: '16px'}} className="btn btn-primary">Submit</button>
            </center>

          </div>
    
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
// }


