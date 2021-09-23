import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom';


import p2 from "../images/p3.jpg";
import v1 from "../images/visa2.png";
import v2 from "../images/master2.png";
import v3 from "../images/paypal2.png";


export default function ItemView(props){

    const [items,setItems] = useState([]);
    let [itemss,setItemss] = useState([]);
    const [ratings, setRatings] = useState([]);

    let [allitems,setAllitems] = useState([]);
    let [filtereditems,setFiltereditems] = useState([]);

    let [ICategory, setICategory]= useState("");

    let reviews = [];
    // let items = [];
    let itemName = "";
    let itemBrand="";
    let itemQuantity="";
    let itemModel="";
    let itemPrice="";
    let itemUnit="";
    let itemDescription="";   
    let itemSpecification="";
    let itemWHT="";
    let itemWarrenty="";
    let itemColors="";
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
      itemQuantity,
      itemModel,
      itemPrice,
      itemUnit,
      itemDescription ,  
      itemSpecification,
      itemWHT,
      itemWarrenty,
      itemColors,
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
                  ICategory= res.data.Category;
                  console.log(ICategory);
              setItems(res.data);
              console.log(res.data);
            //   console.log(items);
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


        let cat = "";

        axios
        .get("http://localhost:8070/items/get/6120b61011f8374ae1fa904f")
        .then((res) => {
            cat= res.data.Category;
            console.log(cat);
    
        })
        .catch((err) => {
          alert(err);
        });




            axios
            .get("http://localhost:8070/items/getItems")
            .then((res)=>{
        
                console.log(cat);
                console.log(ICategory);
                console.log(res.data);
                setAllitems(res.data);
                // console.log(items.Category);
                

            
            })
            .catch((err) => {
                alert(err);
              });


              console.log(allitems);
              console.log(cat);
              filter(allitems, cat);

      }
      function filter(data, Caategory) {

            console.log("Filter");
            console.log(data);
            console.log(Caategory);

        let result = data.filter((post) =>


            post.Category.toLowerCase().includes(Caategory.toLowerCase())



       );
        console.log(result);
    setFiltereditems(result);
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
                itemQuantity: items[j].Quantity,
                itemModel: items[j].Model,
                itemPrice: items[j].Price,
                itemUnit: items[j].Stock_keeping_unit,
                itemDescription : items[j].Description,  
                itemSpecification: items[j].Specification,
                itemWHT: items[j].WHT,
                itemWarrenty: items[j].Warrenty,
                itemColors: items[j].Other_colors,
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
      filtercatogory();
    }, []);


    useEffect(() => {
        calculateStarRating();
        
      })
      
      function calculateStarRating(){
        let totalNoRatings = 0;
        let totalstarforRatingCount = 0;
        let starCount = 0;
        let average = 0; 
        // for(let i = 0; i < items.length; i++){
          
          // totalNoRatings = 0;
          // totalstarforRatingCount = 0;
          // starCount = 0;
          // average = 0;
        
          for(let j = 0; j < ratings.length; j++){
              if(items._id == ratings[j].itemid){
                totalNoRatings++;
                starCount += parseInt(ratings[j].noofstars);  
              }
      
             
          }
      
          totalstarforRatingCount = totalNoRatings * 5;
          average = parseInt((starCount / totalstarforRatingCount) * 5);
          console.log(average);
          displayStarRating(average);
      
      
      }
      
      
      function displayStarRating(totalAverage){
        let txt = "";
          if(isNaN(totalAverage)){
            txt = "No Ratings yet!";
            document.getElementById('stars').innerHTML = txt;
            // document.getElementById('stars').style.color = "#FF0000";
          }else{
          
          for(let j = 0; j < totalAverage; j++){
            txt += '<span class="fa fa-star checked"></span>';
          }
          for(let j = 0; j < (5 - totalAverage); j++){
            txt += '<span class="fa fa-star"></span>';
          }
         
      
          document.getElementById('stars').innerHTML = txt +'  '+ totalAverage + '.0 / 5.0';
         }
      }
    



    
return(
<div style={{padding:'20px 15px 10px 50px'}}>  


<div>

    <div className="row" >
        <div className="col-3">
            <img style={{width:'90%',  paddingRight:'20px'}} src=
            {"./Images/"+items.Item_name}
            />
            <div>
                <img style={{width:'25%',  padding:'10px'}} src=
                {"./Images/"+items.Item_name}
                />
                <img style={{width:'25%',  padding:'10px'}} src=
                {"./Images/"+items.Item_name}
                />
                <img style={{width:'25%',  padding:'10px'}} src=
                {"./Images/"+items.Item_name}
                />
            </div>
        </div>

        <div className="col">
            <span style={{fontSize:'22px'}}><b>{items.Item_name} </b></span><br/>
            <span style={{fontSize:'19px'}}>{items.Description}</span><br/>
            <span style={{fontSize:'16px'}}>{items.Brand}</span><br/>
             
             <br/>
             {/* <span style={{fontSize:'18px'}}>Rs. {items.Price}.00/=</span><br/> */}
             &nbsp;
             {/* <span style={{fontSize:'16px'}}><i>discount : {items.DiscountPrecentage}%</i></span><br/><br/> */}
             <span style={{fontSize:'19px'}}>Rs. {items.FinalPrice}.00/=</span><br/>
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
                    <Link to = "/Customer/contactseller" className = "nav-link" >
                        <button type="button" class="btn btn-outline-info" style={{borderRadius:'25px'}}><i class="fas fa-comments"></i>  Contact Seller</button>
                    </Link>
                </a>
            </div>
            <div >
                <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <Link to = "/Customer/contactus" className = "nav-link" >
                        <button type="button" class="btn btn-outline-info" style={{ borderRadius:'25px'}}><i class="fas fa-comment-alt"></i>  Contact Admin</button>
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
        <div className="row" style={{padding:'0px 40px 10px 10px'}}>
                <div className="col"> 
                     <div className="row" style={{backgroundColor:'white',lineHeight:'32px', borderRadius:'15px',padding:'10px 0px 20px 10px', width:'90%',  boxShadow: '0 0 5pt 0.5pt #dcdcdc'}}>
                            <span style={{alignItems:"center", fontSize:'20px', padding:'10px 10px 20px 10px'}}><b>Item Description</b></span>   
                               
                                <div className="col-2">
                                    
                                    <span>Brand</span><br/>
                                    <span>Model</span><br/>
                                    <span>Availability</span><br/>
                                    <span>Specification</span><br/>
                                    <span>Warrenty</span>
                                </div> 
                                <div className="col-1">
                                    
                                    <span> : </span><br/>
                                    <span> :</span><br/>
                                    <span> :  </span><br/>
                                    <span> : </span><br/>
                                    <span> :  </span>
                                </div> 
                                <div className="col">    
                                    <span>{items.Brand} </span><br/>
                                    <span>{items.Model} </span><br/>
                                    <span>{items.ItemAvailabilityStatus} </span><br/>
                                    <span>{items.Specification} </span><br/>
                                    <span>{items.Warrenty} </span>
                                </div>
                                <div className="col-2">
                                    
                                    <span> Quantity</span><br/>
                                    <span> WHT </span><br/>
                                    <span> Stock unit</span><br/>
                                    <span> Category</span><br/>
                                    <span> Other_colors</span><br/>
                                </div> 
                                <div className="col-1">
                                    
                                    <span> : </span><br/>
                                    <span> : </span><br/>
                                    <span> : </span><br/>
                                    <span> : </span><br/>
                                    <span> : </span><br/>
                                </div> 
                                <div className="col-3">    
                                    <span>{items.Quantity}</span><br/>
                                    <span>{items.WHT}</span><br/>
                                    <span>{items.Unit}</span><br/>
                                    <span>{items.Category}</span><br/>
                                    <span>{items.Colors}</span><br/>
                                </div>
                                
                            </div> 
                </div>
                <div className="col-5"> 
                        <div className="row">
                            <div className="col">
                                <span style={{alignItems:"center", fontSize:'20px'}}><b>Ratings And Reviews</b></span>      <br/><br/>
                                <div className="row">
                                    <div className="col">
                                        {/* <span style={{fontSize:'22px', fontStyle:'strong', textAlign:'center'}}>&emsp;&emsp;{items.Review}/5</span><br/> */}
                                        <span>
                                        <div id = 'stars'class="card-text">
                                            <br/><span id ='review'>4.0 / 5.0</span><br/>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span><br/>
                                            <span class="fa fa-star"></span>
                                            </div>
                                            
                                        </span>
                                    </div>
                                    <div className="col-7">
                                        <div >
                                            <br/>
                                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                                <Link to = "/ItemReviews" className = "nav-link" >
                                                    <button type="button"style={{fontSize:'16px'}} style={{ borderRadius:'15px'}} class="btn btn-primary">View Reviews</button>
                                                </Link>
                                            </a>
                                            
                                        </div>
                                        <div >
                                            <br/>
                                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                                <Link to = "/WriteReview" className = "nav-link" >
                                                    <button type="button"style={{fontSize:'16px'}} style={{ borderRadius:'15px'}} class="btn btn-info">Write a Review</button>
                                                </Link>
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                </div>
        </div>    
           
                {/* <br/><br/>
            <div class="row" style={{padding:'10px 10% 10px 30px'}}>
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
    

</div>
)
}


