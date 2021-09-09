import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom';

import "../CSS/selrev.css";

import p2 from "../images/p3.jpg";
import visa from "../images/visa1.png";
import v1 from "../images/visa2.png";
import v2 from "../images/master2.png";
import v3 from "../images/paypal2.png";

export default function ItemView(props){


 return(
<div>
<div className="page">  

    <div className="row" >
        <div className="col-3">
            <img style={{height:'90%',width:'100%',  paddingRight:'20px'}} src={p2}/>
        </div>
        <div className="col">
            <span class="title1">Item Name</span><br/><br/>
            <div>
                <span style={{fontSize:'18px', fontStyle:'strong'}}>4.5/5</span><br/>
                <span>
                    <div>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="far fa-star"></i>
					</div>
                </span>
             </div>
             <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/adrep" className = "nav-link" >
                        <button type="button" class="btn">View Reviews</button>
                    </Link>
                </a>
            </div><br/>
            <div >
                <button type="button" class="btn btn-danger" style={{width:'200px'}}>Buy Now</button>
            </div>
            <br/>
            <div >
                <button type="button" class="btn btn-success" style={{width:'200px'}}>Add to cart</button>
            </div>
        </div>
        <div className="col">
            
            <span class="title2">For Inquiries and Complaints</span>
            <br/>
            <br/>
            <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/adrep" className = "nav-link" >
                        <button type="button" class="btn btn-outline-info" style={{width:'170px' ,borderRadius:'25px'}}><i class="fas fa-comments"></i>  Contact Seller</button>
                    </Link>
                </a>
            </div>
            <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/adrep" className = "nav-link" >
                        <button type="button" class="btn btn-outline-info" style={{width:'170px', borderRadius:'25px'}}><i class="fas fa-comment-alt"></i>  Contact Us</button>
                    </Link>
                </a>
            </div>
            <br/><br/><br/><br/>
            <span >Payments :</span>&emsp;&emsp;
            <img src={v1} style={{width:'50px'}}/>&emsp;
            <img src={v2} style={{width:'50px'}}/>&emsp;
            <img src={v3} style={{width:'50px'}}/>
        </div>
        
    </div>  
    <br/><br/>
    <div className="row" style={{padding:'10px 40px 10px 40px'}}>
        
        <span class="border border-info" style={{width:'85%',height:'100%', borderRadius:'15px'}}>
        <br/>
            <span style={{ borderRadius:'15px',fontSize:'18px', padding:'20px'}}>Item Description</span><br/><br/>
            <textarea style={{width:'100%',height:'100%', borderRadius:'15px'}}></textarea>
        </span>
    </div> 
    <br/><br/>
    <div class="container">
        <div class="row" >
            <span style={{fontSize:'18px'}}>Similar Items</span><br/><br/>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'#D6E4F5', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2">
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'white', borderRadius:'10px', borderColor:'black'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2">
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'white', borderRadius:'10px', borderColor:'black'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2">
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'white', borderRadius:'10px', borderColor:'black'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2">
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'white', borderRadius:'10px', borderColor:'black'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2">
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'white', borderRadius:'10px', borderColor:'black'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2">
                <div class="card" style={{width: '9rem', height: '13rem', backgroundColor:'white', borderRadius:'10px', borderColor:'black'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div className="reviews">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
        </div>
    </div>  
</div>         
)

}


