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

// 	const [item,setItem] = useState([]);
// 	// const [customer,setCustomer] = useState([]);
//     const [loads,setLoad] = useState(false);

//   useEffect(() =>{
//     function getItem(){
//         axios.get("http://localhost:8070/item/get").then((res) =>
//         {
//             setItem(res.data);
//             console.log(res.data);
            
            
//         }).catch((err) =>{
//             alert(err);
//         })
//     }
   
//     getItem();
   
// }, []);

return(
<div style={{padding:'20px 15px 10px 50px'}}>  

    <div className="row" >
        <div className="col-3">
            <img style={{height:'90%',width:'100%',  paddingRight:'20px'}} src={p2}/>
        </div>
        <div className="col">
            <span class="title1">Samsung galaxy note 10</span><br/><br/>
            <div>
            <div className="row">
            <div className="col">
                <span style={{fontSize:'18px', fontStyle:'strong'}}>4.5/5</span><br/>
                <span>
                    <div style={{color: "#f9d71c"}}>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="far fa-star"></i>
					</div>
                    
                </span>
                </div>
                <div className="col-9">
                <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/adrep" className = "nav-link" >
                        <button type="button"style={{fontSize:'16px'}} class="btn">View Reviews</button>
                    </Link>
                </a>
            </div>
            </div>
            </div>
             </div>
             <br/>
             <span style={{fontSize:'18px'}}>Rs.130,000.00/=</span><br/>
            <br/>
            <div >
                <button type="button" class="btn btn-danger" style={{width:'50%'}}>Buy Now</button>
            </div>
            <br/>
            <div >
                <button type="button" class="btn btn-success" style={{width:'50%'}}>Add to cart</button>
            </div>
        </div>
        <div className="col">
            
            <span class="title2">For Inquiries and Complaints</span>
            <br/>
            <br/>
            <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/adrep" className = "nav-link" >
                        <button type="button" class="btn btn-outline-info" style={{width:'40%' ,borderRadius:'25px'}}><i class="fas fa-comments"></i>  Contact Seller</button>
                    </Link>
                </a>
            </div>
            <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/adrep" className = "nav-link" >
                        <button type="button" class="btn btn-outline-info" style={{width:'40%', borderRadius:'25px'}}><i class="fas fa-comment-alt"></i>  Contact Us</button>
                    </Link>
                </a>
            </div>
            <br/><br/><br/><br/>
            <span >Payment Methods :</span>&emsp;&emsp;
            <img src={v1} style={{width:'10%'}}/>&emsp;
            <img src={v2} style={{width:'10%'}}/>&emsp;
            <img src={v3} style={{width:'10%'}}/>
        </div>
        
    </div>  
    <br/><br/>
    <div className="row" style={{padding:'10px 40px 10px 40px'}}>
        
        <span class="border border-info" style={{width:'89%',height:'100%', borderRadius:'15px'}}>
        <br/>
            <span style={{ borderRadius:'15px',fontSize:'18px', padding:'20px'}}>Item Description</span><hr style={{color:'#4169E1'}}/>
            <p style={{width:'100%',height:'100%', borderRadius:'15px'}}>Description</p>
        </span>
    </div> 
    <br/><br/>
        <div class="row" style={{padding:'10px 10% 10px 30px'}}>
            <span style={{fontSize:'18px'}}>Similar Items</span><br/><br/>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span><br/>
                        
                        <span style={{fontSize:'13px'}}>Rs.90,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'5px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    
                </div>
            </div><div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                    <div class="card-body">
                        <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                        <span style={{fontSize:'14px'}}>Item Name</span><br/>
                        <span style={{fontSize:'13px'}}>Rs.100,000/=</span>
                        <div style={{color: "#f9d71c"}}>
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
)

}


