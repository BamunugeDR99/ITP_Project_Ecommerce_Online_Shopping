import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom';

import "../CSS/selrev.css";

import p2 from "../images/p3.jpg";

export default function CustomerReviews(props){

//     const [review,setReview] = useState([]);
// 	const [customertest,setCustomertest] = useState([]);
//     const [loads,setLoad] = useState(false);

//   useEffect(() =>{
//     function getReview(){
//         axios.get("http://localhost:8070/review/get").then((res) =>
//         {
//             setReview(res.data);
//             console.log(res.data);
            
            
//         }).catch((err) =>{
//             alert(err);
//         })
//     }
   
//     getReview();

    
   
// }, []);

// function getCustomertest(){
//     axios.get("http://localhost:8070/customertest/get").then((res) =>
//     {
//         setCustomertest(res.data);
//         console.log(res.data);
        
        
//     }).catch((err) =>{
//         alert(err);
//     })
// }

// getCustomertest();



 return(
 <div className="page">    
    <div className="row" >
        <div className="col-5" style={{alignItems:'center'}}>
            <div className="row">

                <div>
                    <img style={{height:'70%',width:'30%',  paddingRight:'20px'}} src={p2}/>
                    <span class="title1">Item Name</span>
                </div>

            </div>
            <div className="row">
                <span class="title2">Analytics</span>
                    <div className="col">
                        <div class="li">
                            <span>No of customers</span><br/>
                            <span>Reviews</span><br/>
                            <span>Ratings</span><br/>
                        </div>
                    </div>
                    <div className="col">
                    <div class="li">
                            <span>10</span><br/>
                            <span>8</span><br/>
                            <span>4</span>
                        </div>
                    </div>
            </div>
            <div className="row">
                <span class="title2">Ratings and reviews of item name</span>
                <div class="li">
                            
                            <span style={{fontSize:'18px', fontStyle:'strong'}}>4.5/5</span><br/>
                            <span>
                                <div class="reviews">
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="far fa-star"></i>
								</div>
                            </span>
                        </div>
            </div>
        </div>
        <div className="col">
        
        <section id="testimonials">
            
        
        <span class="title3">Product Reviews</span>
            <div className="testimonial-box-container">
				<div class="testimonial-box">
					<div class="box-top">
						<div class="profile">
							<div class="profile-img">
								<img src={p2}/>
							</div>
									
							<div class="name-user">
								<strong>Customer Name</strong>
                                <div class="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <div class="client-comment">
                                    <p>Awsome</p>
                                
                                	
                                    
                               
                                </div>
                                <div >
                                        <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                        <Link to = "/adrep" className = "nav-link" >
                                            <button class="button3" type="button">Report</button>
                                            </Link>
                                        </a>
                                    </div>
                            </div>
                            
                    </div>
                    </div>
                    </div>
                    </div>

                   
                    </section>
         </div>
    </div>
</div>    
 )

}


