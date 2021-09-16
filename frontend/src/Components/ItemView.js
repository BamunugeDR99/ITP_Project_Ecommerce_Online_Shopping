import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom';


import p2 from "../images/p3.jpg";
import v1 from "../images/visa2.png";
import v2 from "../images/master2.png";
import v3 from "../images/paypal2.png";


export default function ItemView(props){

    const [items,setItems] = useState([]);

    let [allitems,setAllitems] = useState([]);
    let [filtereditems,setFiltereditems] = useState([]);

    let reviews = [];
    // let items = [];
    let itemName = "";
    let itemBrand="";
    let itemModel="";
    let itemPrice="";
    let itemDescription="";   
    let itemSpecification="";
    let itemWarrenty="";
    let itemImage = "";
    let itemCategory="";
    let itemAvailability="";
    let itemDiscount="";
    let itemFinalprice="";
    let itemDispercentage="";
    
    let Review = "";
    let [abc, setabc] = useState([]);
    let reviewWithItem = {
      itemName,
      itemBrand,
      itemModel,
      itemPrice,
      itemDescription ,  
      itemSpecification,
      itemWarrenty,
      itemImage,
      itemCategory,
      itemAvailability,
      itemDiscount,
      itemFinalprice,
      itemDispercentage,
      Review,
    };
  
    let reviewWithItems = [];
  
    useEffect(() => {
      function getReview() {
        axios
          .get("http://localhost:8070/review/get")
          .then((res) => {
            // setReview(res.data);
            const filter = res.data.filter(
              (itemrev) => itemrev.itemid === "6120b61011f8374ae1fa904f"
            );
            reviews = filter;
            console.log(reviews);
            axios
              .get("http://localhost:8070/items/get/6120b61011f8374ae1fa904f")
              .then((res) => {
              setItems(res.data);
              console.log(items);
              createReview(reviews, items);
              })
              .catch((err) => {
                alert(err);
              });
          })
          .catch((err) => {
            alert(err);
          });
      }

      function filtercatogory(){
            axios
            .get("http://localhost:8070/items/getItems")
            .then((res)=>{
           
                filter(res.data, items.Category);

            
            })
            .catch((err) => {
                alert(err);
              });


             
              
      }


      function filter(data, category) {


        //let result = data.filter((post) =>


            //post.Category.toLowerCase().includes(category.toLowerCase())



      //  );
    //     console.log(result);
    // setFiltereditems(result);
      }

    
      
  
      function createReview(reviews, items) {
        let j = 0;
        for (let i = 0; i < reviews.length; i++) {
          j = 0;
          for (j = 0; j < items.length; j++) {
            if (reviews[i].itemid == items[j]._id) {
              reviewWithItem = {
                itemName: items[j].Item_name,
                itemBrand: items[j].Brand,
                itemModel: items[j].Model,
                itemPrice: items[j].Price,
                itemDescription : items[j].Description,  
                itemSpecification: items[j].Specification,
                itemWarrenty: items[j].Warrenty,
                itemImage: items[j].Images[0],
                itemCategory: items[j].Category,
                itemAvailability: items[j].ItemAvailabilityStatus,
                itemDiscount: items[j].DiscountStatus,
                itemFinalprice: items[j].FinalPrice,
                itemDispercentage: items[j].DiscountPrecentage,
                Review: reviews[i].noofstars,
                
              };
  
              reviewWithItems.push(reviewWithItem);
            }
          }
        }
        console.log(reviewWithItems)
        setabc(reviewWithItems);
      }
  
      getReview();
     // filtercatogory();
    }, []);



    
return(
<div style={{padding:'20px 15px 10px 50px'}}>  

{/* {abc.map((reviewss) => { */}
        {/* return (  */}
<div>

    <div className="row" >
        <div className="col-3">
            {/* <img style={{height:'90%',width:'100%',  paddingRight:'20px'}} src={`../images/${items.Item_name}`}/> */}
        </div>

        <div className="col">
            <span style={{fontSize:'22px'}}><b>{items.Item_name}</b></span><br/><br/>
            
            <div className="row">
                <div className="col">
                    <span style={{fontSize:'18px', fontStyle:'strong'}}>{items.Review}</span><br/>
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
                                    <button type="button"style={{fontSize:'16px'}} class="btn btn-link">View Reviews</button>
                                </Link>
                            </a>
                            
                        </div>
                    </div>
                </div>
             
             <br/>
             <span style={{fontSize:'18px'}}>Rs. {items.Price}.00/=</span>&nbsp;&nbsp;&nbsp;&nbsp;
             <span style={{fontSize:'18px'}}>{items.DiscountPrecentage}%</span><br/>
             <span style={{fontSize:'18px'}}>Rs. {items.FinalPrice}.00/=</span><br/>
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
                
                <span class="border border-info" style={{width:'45%',height:'100%', borderRadius:'15px'}}>
                <br/>
                    <span style={{ borderRadius:'15px',fontSize:'18px', padding:'20px'}}>Item Description</span><hr style={{color:'#4169E1'}}/>
                    <p style={{width:'100%',height:'100%', borderRadius:'15px'}}>{items.Description}</p><br/>
                    <span style={{width:'100%',height:'100%', borderRadius:'15px'}}>Brand : {items.Brand}</span><br/>
                    <span style={{width:'100%',height:'100%', borderRadius:'15px'}}>Model : {items.Model}</span><br/>
                    <span style={{width:'100%',height:'100%', borderRadius:'15px'}}>Category : {items.Category}</span><br/>
                    <span style={{width:'100%',height:'100%', borderRadius:'15px'}}>Item Availability : {items.ItemAvailabilityStatus}</span><br/>
                    <span style={{width:'100%',height:'100%', borderRadius:'15px'}}>Specification : {items.Specification}</span><br/>
                    <span style={{width:'100%',height:'100%', borderRadius:'15px'}}>Warrenty : {items.Warrenty}</span>
                </span>    
            </div> 
                <br/><br/>
            {/* <div class="row" style={{padding:'10px 10% 10px 30px'}}>
                <span style={{fontSize:'18px'}}>Similar Items</span><br/><br/>
                <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
                    <div class="card" style={{width: '80%', height: '90%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', paddingBottom:'20px',boxShadow:'4px 4px 4px 4px #DCDCDC'}}>
                        <div class="card-body">
                            <img src={p2} style={{width:'80%',paddingBottom:'10px'}}/><br/>
                            <span style={{fontSize:'14px'}}>{reviewss.itemName}</span><br/>
                            <span style={{fontSize:'13px'}}>{reviewss.itemImage}</span><br/>
                            <span style={{fontSize:'13px'}}>{reviewss.DiscountStatus}</span><br/>
                            <span style={{fontSize:'13px'}}>{reviewss.itemPrice}</span>
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
                
            </div> */}
        </div>   
        {/* ); */}
    {/* })} */}





    {/* <div className='container' style={{background:'#dcdcdc',width: '70%', fontSize:'18px'}}>
            <div className="row" style={{padding:'0px 0px 10px 0px'}}>
                <div className="col">
                    <div style={{width: '100%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', padding:'20px 20px 20px 20px', margin:'10px 0px 0px 0px'}}>
                        <div className="row">
                            <div className="col-5">
                                <i class="fa fa-pencil" aria-hidden="true" style={{color:'green', fontSize:'30px'}}></i>
                            </div> 
                            <div className="col">
                                <span>278</span><br/>
                                <span>New Pencil</span>
                            </div> 
                        </div> 
                    </div>   
                    
                </div>   
                <div className="col">
                    <div style={{width: '100%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', padding:'20px 20px 20px 20px', margin:'10px 0px 0px 0px'}}>
                        <div className="row">
                            <div className="col-5">
                                <i class="fa fa-comments-o" aria-hidden="true" style={{color:'orange', fontSize:'30px'}}></i>
                            </div> 
                            <div className="col">
                                <span>278</span><br/>
                                <span>New Pencil</span>
                            </div> 
                        </div> 
                    </div>   
                    
                </div>  
                <div className="col">
                    <div style={{width: '100%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', padding:'20px 20px 20px 20px', margin:'10px 0px 0px 0px'}}>
                        <div className="row">
                            <div className="col-5">
                                <i class="fa fa-bolt" aria-hidden="true" style={{color:'blue', fontSize:'30px'}}></i>
                            </div> 
                            <div className="col">
                                <span>278</span><br/>
                                <span>New Pencil</span>
                            </div> 
                        </div> 
                    </div>   
                    
                </div> 
                
                <div className="col">
                    <div style={{width: '100%', backgroundColor:'white', borderRadius:'10px', borderColor:'#00408C', padding:'20px 20px 20px 20px', margin:'10px 0px 0px 0px'}}>
                        <div className="row">
                            <div className="col-5">
                                <i class="fa fa-map-marker" aria-hidden="true" style={{color:'red', fontSize:'30px'}}></i>
                            </div> 
                            <div className="col">
                                <span>278</span><br/>
                                <span>New Pencil</span>
                            </div> 
                        </div> 
                    </div>   
                    
                </div>
                 
            </div>
            
        </div>  */}

</div>
)
}


