import React, { useState, useEffect } from "react";
import axios from "axios";

// import { FaStar } from "react-icons/fa";

import {Link} from 'react-router-dom';


import p2 from "../images/p3.jpg";

export default function SellerReviews(props){

    const [item,setItem] = useState([]);

    let reviews = [];
    let customers = [];
    let customerName = "";
    let customerImage = "";
    let Review = "";
    let Stars = "";
    let [abc, setabc] = useState([]);
    let reviewWithCustomer = {
      customerName,
      customerImage,
      Review,
      Stars,
    };
    let content;
  
    let reviewWithCustomers = [];
  
    useEffect(() => {

        function getItem(){
            axios
            .get("http://localhost:8070/items/get/6120b61011f8374ae1fa904f")
            .then((res) =>
            {
                setItem(res.data);
                console.log(res.data);
                console.log(item);
                console.log('abc');
        
                
            }).catch((err) =>{
                alert(err);
            })
            
        }
       
        getItem();

        


      function getReview() {
        axios
          .get("http://localhost:8070/review/get")
          .then((res) => {
            //setReview(res.data);
            const filter = res.data.filter(
              (itemrev) => itemrev.itemid === "6120b61011f8374ae1fa904f"
            );
            reviews = filter;
  
            axios
              .get("http://localhost:8070/Customer/getAll")
              .then((res) => {
                customers = res.data;
                createReview(reviews, customers);
              })
              .catch((err) => {
                alert(err);
              });
          })
          .catch((err) => {
            alert(err);
          });

          
      }
  
      function createReview(reviews, customers) {
        let j = 0;
        for (let i = 0; i < reviews.length; i++) {
          j = 0;
          for (j = 0; j < customers.length; j++) {
            if (reviews[i].customerid == customers[j]._id) {
              reviewWithCustomer = {
                customerName: customers[j].firstName,
                customerImage: customers[j].userImage,
                Review: reviews[i].description,
                Stars: reviews[i].noofstars,
              };
  
              reviewWithCustomers.push(reviewWithCustomer);
            }
          }
        }
  
        setabc(reviewWithCustomers);
      }
  
      getReview();
    

   


}, []);

//  onTaskClicked(){
//   console.log("clicked");
// }
// function setReport(){

// }


 return(    
 <div style={{padding:'20px 15px 10px 50px'}}>    
    <div className="row" >
        <div className="col-6" style={{alignItems:'center'}}>
        
       {/* { alert(item)} */}
       
            <div className="row">
                
                {/* {/* {item.Images.map((post) => {
                 return (   */}

                    <div className="col">
                      {/* <img style={{height:'90%',width:'80%',  paddingRight:'20px'}} src={"/Images/" + item.userImage[0]}/> */}
                    </div>
                
                    <div className="col">
                       
                    <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong'}}><b>{item.Item_name}</b></span>
                    <br/><br/>
                    <p style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>{item.Description}</p>
                    <br/>
                    <span style={{fontSize: '18px',textalign: 'left',fontstyle: 'strong'}}>Rs. {item.Price}.00/=</span>
                </div>
                
                	
            </div>
            <br/>
            <div className="row" style={{padding:'50px 40px 10px 10px'}}>
                <div className="col"> 
                    
                  <span style={{fontSize: '20px',textalign: 'left',fontstyle: 'strong',padding: '20px 0px 10px 0px'}}>Analytics</span>
                  
                  <br/><br/>
                  <div className="row">
                      <div className="col">
                          <span>No of customers </span><br/>
                          <span>Reviews</span><br/>
                          <span>Ratings</span><br/>
                      </div>
                      <div className="col" >
                          <span>10</span><br/>
                          <span>8</span><br/>
                          <span>4</span>
                      </div> 
                    </div>     
                </div>
                <div className="col"> 
                    
                  <span style={{fontSize: '20px',textalign: 'left',fontstyle: 'strong',padding: '20px 0px 10px 0px'}}>Item Description</span>
                  
                  <br/><br/>
                  <div className="row">
                      <div className="col">
                          <span>Brand</span><br/>
                          <span>Model</span><br/>
                          <span>Category</span><br/>
                          <span>Specification</span><br/>
                          <span>Warrenty</span><br/>
                      </div>
                      <div className="col" >
                          <span>: &emsp;{item.Brand}</span><br/>
                          <span>: &emsp;{item.Model}</span><br/>
                          <span>: &emsp;{item.Category}</span><br/>
                          <span>: &emsp;{item.Specification}</span><br/>
                          <span>: &emsp;{item.Warrenty}</span>
                      </div> 
                    </div>     
                </div>
                {/* <div className="col"> 
                    
                   <div className="row" style={{backgroundColor:'white', borderRadius:'15px',padding:'10px 0px 20px 10px', width:'100%'}}>
                      <div className="col">
                        <span style={{fontSize: '20px',textalign: 'left',fontstyle: 'strong',padding: '20px 0px 10px 0px'}}>Item Description</span><br/>   

                          <span style={{width:'100%',height:'100%', borderRadius:'15px' ,padding:'0px 0px 0px 10px'}}>Brand : {item.Brand}</span><br/>
                          <span style={{width:'100%',height:'100%', borderRadius:'15px', padding:'0px 0px 0px 10px'}}>Model : {item.Model}</span><br/>
                          <span style={{width:'100%',height:'100%', borderRadius:'15px', padding:'0px 0px 0px 10px'}}>Category : {item.Category}</span><br/>
                          <span style={{width:'100%',height:'100%', borderRadius:'15px', padding:'0px 0px 0px 10px'}}>Item Availability : {item.ItemAvailabilityStatus}</span><br/>
                          <span style={{width:'100%',height:'100%', borderRadius:'15px', padding:'0px 0px 0px 10px'}}>Specification : {item.Specification}</span><br/>
                          <span style={{width:'100%',height:'100%', borderRadius:'15px', padding:'0px 0px 0px 10px'}}>Warrenty : {item.Warrenty}</span>
                                </div> 
                                
                            </div>
                   
                </div> */}
        </div> 
            
            {abc.map((reviewss) => {
              return (
            <div className="row">
                <span style={{fontSize:'20px', fontstyle:'strong',padding:'30px 0px 20px 30px'}}>Ratings and reviews of item name</span>
                <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 100px'}}>{reviewss.Stars}/5</span><br/>
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
              )
            })}
        </div>
        <div className="col">
        
            <span style={{fontSize: '21px',textalign: 'left',fontstyle: 'strong',padding:'20px'}}>Product Reviews</span>
            <hr style={{width:'90%'}}/>

        <div style={{height:'550px',overflowY: 'scroll', paddingBottom:'20px'}}>
            

        {abc.map((reviewss) => {
              return (


              
                <div className="row" style={{width:'90%', padding:'10px 0px 10px 20px',margin:'0px 0px 20px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px',border:'red'}}>
                    <div className="row">
                        <div className="col-2">
                            
                                <img style={{width:'100%'}} src={"/Images/" + reviewss.customerImage[0]}/>
                        </div>

                        <div className="col">
                            <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>{reviewss.customerName}</span>
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
                                {reviewss.Review}
                            </span> 
                        </div>
                        <div className="col-3" style={{backgroundColor:'white'}}>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">  
                                <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                            </a>
                        </div>
                    </div>
                </div>  
               
                );
            })}
            
         
        </div>    
        <div id="editEmployeeModal" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form>
                    <div class="modal-header">
                      <h4 class="modal-title">Report Review</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <label>Customer Name</label>
                        <span>{props.name}</span><br/>

                        <label>Customer Review</label>
                        <span>{props.review}</span><br/>

                        <label>write your report</label>
                        <input type="text" class="form-control" 
                        // required  onChange= {
                        //         (e)=>{
                        //         setReport(e.target.value);
                        //         }
                        //       }
                              />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <input
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        value="Cancel"
                      />
                      {/* <button onClick = {()=> updatee(review.review_id)} type="submit" class="btn btn-info" value="Submit" >Update</button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>

           
           
         </div>
    </div>
</div>   
 )

}


