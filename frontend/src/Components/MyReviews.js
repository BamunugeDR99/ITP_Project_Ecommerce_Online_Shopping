// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import {Link} from 'react-router-dom';


// import p2 from "../images/p3.jpg";

// export default function SellerReviews(props){

//     // let reviews = [];
//     // let items = [];
//     // let itemName = "";
//     // let itemImage = "";
//     // let Review = "";
//     // let [abc, setabc] = useState([]);
//     // let reviewWithItem = {
//     //   itemName,
//     //   itemImage,
//     //   Review,
//     // };
  
//     // let reviewWithItems = [];
  
//     // useEffect(() => {
//     //   function getReview() {
//     //     axios
//     //       .get("http://localhost:8070/review/get")
//     //       .then((res) => {
//     //         const filter = res.data.filter(
//     //           (customerrev) =>
//     //             customerrev.customerid === "613b4f1a73eceb40702affe6"
//     //         );
//     //         reviews = filter;
//     //         axios
//     //           .get("http://localhost:8070/items/getItems")
//     //           .then((res) => {
//     //             items = res.data;
//     //             createReview(reviews, items);
//     //           })
//     //           .catch((err) => {
//     //             alert(err);
//     //           });
//     //       })
//     //       .catch((err) => {
//     //         alert(err);
//     //       });
//     //   }
  
//     //   function createReview(reviews, items) {
//     //     let j = 0;
//     //     for (let i = 0; i < reviews.length; i++) {
//     //       j = 0;
//     //       for (j = 0; j < items.length; j++) {
//     //         if (reviews[i].itemid == items[j]._id) {
//     //           reviewWithItem = {
//     //             itemName: items[j].Item_name,
//     //             itemImage: items[j].Images[0],
//     //             Review: reviews[i].description,
//     //           };
  
//     //           reviewWithItems.push(reviewWithItem);
//     //         }
//     //       }
//     //     }
//     //     console.log(reviewWithItems)
//     //     setabc(reviewWithItems);
//     //   }
  
//     //   getReview();
//     //   // getCustomer();
//     // }, []);



//  return(    
//  <div style={{padding:'20px 15px 10px 50px'}}>    
//     <div className="row" >
//         <div className="col-6" style={{alignItems:'center'}}>
//             <div className="row">

//                 <div className="col">
//                     <img style={{height:'90%',width:'80%',  paddingRight:'20px'}} src={p2}/>
//                     </div>

//                     <div className="col">
//                     <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong'}}><b>Item Name</b></span>
//                     <br/><br/>
//                     <p style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Item Description</p>
//                     <br/>
//                     <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>Item Price</span>
//                 </div>

//             </div>
//             <div className="row" style={{fontsize: '18px',textalign: 'left',fontstyle: 'strong',padding:'0px 0px 0px 30px'}}>
//                 <span style={{fontSize: '20px',textalign: 'left',fontstyle: 'strong',padding: '20px 0px 10px 0px'}}>Analytics</span>
                
//                 <br/><br/>
//                 <div className="col">
//                     <span>No of customers</span><br/>
//                     <span>Reviews</span><br/>
//                     <span>Ratings</span><br/>
//                 </div>
//                 <div className="col-8" >
//                     <span>10</span><br/>
//                     <span>8</span><br/>
//                     <span>4</span>
//                 </div>
//             </div>
//             <div className="row">
//                 <span style={{fontSize:'20px', fontstyle:'strong',padding:'30px 0px 20px 30px'}}>Ratings and reviews of item name</span>
//                 <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 100px'}}>4.5/5</span><br/>
//                 <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 70px'}}>
//                     <div style={{color: "#f9d71c"}}>
// 						<i class="fas fa-star"></i>
// 						<i class="fas fa-star"></i>
// 						<i class="fas fa-star"></i>
// 						<i class="fas fa-star"></i>
// 						<i class="far fa-star"></i>
// 					</div>
//                 </span>
//             </div>
//         </div>
//         <div className="col">
        
//             <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong',padding:'20px'}}>Product Reviews</span>
//             <hr style={{width:'90%'}}/>

//         <div style={{height:'550px',overflowY: 'scroll', paddingBottom:'20px'}}>
            

//         {/* {abc.map((reviewss) => {
//               return ( */}


              
//                 <div className="row" style={{width:'90%', padding:'10px 0px 20px 20px',margin:'0px 0px 20px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px',border:'red'}}>
//                     <div className="row">
//                         <div className="col-2">
                            
//                                 <img style={{width:'100%'}} src={p2}/>
//                         </div>

//                         <div className="col">
//                             <span style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>abc</span>
//                             <div style={{color: "#f9d71c"}}>
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                                 <i class="fas fa-star"></i>
//                                 <i class="far fa-star"></i>
//                             </div>
//                         </div>
                        
//                     </div>    
//                     <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
//                         <div className="col">
//                             <span style={{width:'50%', padding:'10px 0px 0px 10px', fontSize:'13.5px', lineHeight:'0.5'}}>
//                                 abc
//                             </span> 
//                         </div>
//                         <div className="col-3" style={{backgroundColor:'white'}}>
//                             <a href="#editEmployeeModal" class="edit" data-toggle="modal">
//                                 <Link to = "/adrep" className = "nav-link" >
//                                     <button type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
//                                 </Link>
//                             </a>
//                         </div>
//                     </div>
//                 </div>  
               
//                 {/* );
//             })} */}
            
         
//         </div>        
           
//          </div>
//     </div>
// </div>   
//  )

// }


  // const [Item_name,setItemname] = useState("");
    // const [Brand,setItembrand] = useState("");
    // const [Model,setItemmodel] = useState("");
    // const [Price,setItemprice] = useState("");
    // const [Description,setItemdescription] = useState("");
    // const [Specification,setItemspecification] = useState("");
    // const [Warrenty,setItemwarrenty] = useState("");
    // const [Images,setItemimage] = useState("");
    // const [Category,setItemcategory] = useState("");
    // const [ItemAvailabilityStatus,setItemavailability] = useState("");
    // const [DiscountStatus,setItemdiscount] = useState("");
    // const [FinalPrice,setItemfinalprice] = useState("");
    // const [DiscountPrecentage,setItemdispercentage] = useState("");