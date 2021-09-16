import React, { useState, useEffect } from "react";
import axios from "axios";

import {Link} from 'react-router-dom';


import p2 from "../images/p3.jpg";

export default function SellerReviews(props){

    const [item,setItem] = useState([]);

    let reviews = [];
    let customers = [];
    let customerName = "";
    let customerImage = "";
    let Review = "";
    let [abc, setabc] = useState([]);
    let reviewWithCustomer = {
      customerName,
      customerImage,
      Review,
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
        // content=
                
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
              };
  
              reviewWithCustomers.push(reviewWithCustomer);
            }
          }
        }
  
        setabc(reviewWithCustomers);
      }
  
      getReview();
    

   


}, []);

 return(    
 <div style={{padding:'20px 15px 10px 50px'}}>    
    <div className="row" >
        <div className="col-6" style={{alignItems:'center'}}>
        
       {/* { alert(item)} */}
       
            <div className="row">
                
                {/* {/* {item.Images.map((post) => {
                 return (   */}

                    <div className="col">
                    {/* <img style={{height:'90%',width:'80%',  paddingRight:'20px'}} src={`../images/${post.Images}`}/> */}
                    </div>
                
                    <div className="col">
                       
                    <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong'}}><b>{item.Item_name}</b></span>
                    <br/><br/>
                    <p style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>{item.Description}</p>
                    <br/>
                    <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>{item.Price}</span>
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
            

        {abc.map((reviewss) => {
              return (


              
                <div className="row" style={{width:'90%', padding:'10px 0px 10px 20px',margin:'0px 0px 20px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px',border:'red'}}>
                    <div className="row">
                        <div className="col-2">
                            
                                <img style={{width:'100%'}} src={`../images/${reviewss.customerImage}`}/>
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
                                <Link to = "/adrep" className = "nav-link" >
                                    <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>  
               
                );
            })}
            
         
        </div>    

           
           
         </div>
    </div>
</div>   
 )

}


