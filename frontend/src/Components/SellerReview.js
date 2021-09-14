import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom';


import p2 from "../images/p3.jpg";

export default function SellerReviews(props){

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
 <div style={{padding:'20px 15px 10px 50px'}}>    
    <div className="row" >
        <div className="col-6" style={{alignItems:'center'}}>
            <div className="row">

                <div className="col">
                    <img style={{height:'90%',width:'80%',  paddingRight:'20px'}} src={p2}/>
                    </div>

                    <div className="col">
                    <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong'}}><b>Item Name</b></span>
                    <br/><br/>
                    <p style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Item Description</p>
                    <br/>
                    <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Item Price</span>
                </div>

            </div>
            <div className="row" style={{fontsize: '18px',textalign: 'left',fontstyle: 'strong',padding:'0px 0px 0px 30px'}}>
                <span style={{fontSize: '20px',textalign: 'left',fontstyle: 'strong',padding: '20px 0px 10px 0px'}}>Analytics</span>
                
                <br/><br/>
                <div className="col">
                    <span>No of customers</span><br/>
                    <span>Reviews</span><br/>
                    <span>Ratings</span><br/>
                </div>
                <div className="col-8" >
                    <span>10</span><br/>
                    <span>8</span><br/>
                    <span>4</span>
                </div>
            </div>
            <div className="row">
                <span style={{fontSize:'20px', fontstyle:'strong',padding:'30px 0px 20px 30px'}}>Ratings and reviews of item name</span>
                <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 100px'}}>4.5/5</span><br/>
                <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 70px'}}>
                    <div style={{color: "#f9d71c"}}>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="far fa-star"></i>
					</div>
                </span>
            </div>
        </div>
        <div className="col">
        
            <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong',padding:'20px'}}>Product Reviews</span>
            <hr style={{width:'90%'}}/>

        <div style={{height:'550px',overflowY: 'scroll', paddingBottom:'20px'}}>
            
                <div className="row" style={{width:'90%', padding:'10px 0px 5px 20px',margin:'0px 0px 0px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px'}}>
                    <div className="row">
                        <div className="col-2">
                                <img style={{width:'100%'}} src={p2}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Customer Name</span>
                            <div style={{color: "#f9d71c"}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        
                    </div>    
                    <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                        <div className="col">
                            <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px', lineHeight:'0.5'}}>
                                review 
                            </span> 
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>  
                <hr style={{width:'90%'}}/>
                
                <div className="row" style={{width:'90%', padding:'10px 0px 1px 20px',margin:'0px 0px 0px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px'}}>
                    <div className="row">
                        <div className="col-2">
                                <img style={{width:'100%'}} src={p2}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Customer Name</span>
                            <div style={{color: "#f9d71c"}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        
                    </div>    
                    <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                        <div className="col">
                            <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px' }}>
                                review
                            </span>
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>  
                <hr style={{width:'90%'}}/>
                <div className="row" style={{width:'90%', padding:'10px 0px 1px 20px',margin:'0px 0px 0px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px'}}>
                    <div className="row">
                        <div className="col-2">
                                <img style={{width:'100%'}} src={p2}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Customer Name</span>
                            <div style={{color: "#f9d71c"}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        
                    </div>    
                    <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                        <div className="col">
                            <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px' }}>
                                review
                            </span>
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>  
                <hr style={{width:'90%'}}/>
                <div className="row" style={{width:'90%', padding:'10px 0px 1px 20px',margin:'0px 0px 0px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px'}}>
                    <div className="row">
                        <div className="col-2">
                                <img style={{width:'100%'}} src={p2}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Customer Name</span>
                            <div style={{color: "#f9d71c"}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        
                    </div>    
                    <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                        <div className="col">
                            <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px' }}>
                                review
                            </span>
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div> 
                <hr style={{width:'90%'}}/>
                <div className="row" style={{width:'90%', padding:'10px 0px 1px 20px',margin:'0px 0px 0px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px'}}>
                    <div className="row">
                        <div className="col-2">
                                <img style={{width:'100%'}} src={p2}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Customer Name</span>
                            <div style={{color: "#f9d71c"}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        
                    </div>    
                    <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                        <div className="col">
                            <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px' }}>
                                review
                            </span>
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div> 
                <hr style={{width:'90%'}}/>
                <div className="row" style={{width:'90%', padding:'10px 0px 1px 20px',margin:'0px 0px 0px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px'}}>
                    <div className="row">
                        <div className="col-2">
                                <img style={{width:'100%'}} src={p2}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Customer Name</span>
                            <div style={{color: "#f9d71c"}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        
                    </div>    
                    <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                        <div className="col">
                            <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px' }}>
                                review
                            </span>
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div> 
        </div>        
           
            {/* <div>
                <img src={p2} style={{width:'10%'}}/>
                <span style={{fontSize:'16px'}}>Sonal Jayawardana</span>
                <div class="reviews">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="far fa-star"></i>
					</div>
            </div>     */}

        {/* <section id="testimonials">
            
        
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

                   
                    </section> */}
         </div>
    </div>
</div>   
 )

}


