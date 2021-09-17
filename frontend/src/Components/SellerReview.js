import React, { useState, useEffect } from "react";
import axios from "axios";

// import { FaStar } from "react-icons/fa";

import {Link} from 'react-router-dom';


import p2 from "../images/p3.jpg";

export default function SellerReviews(props){

    const [items,setItems] = useState([]);
    const [ratings, setRatings] = useState([]);

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
                setItems(res.data);
                console.log(res.data);
                console.log(items);
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
              (itemrev) => itemrev.itemid === "6136f4a5003aa10c6324ac53"
            );
            reviews = filter;
            // 6120b61011f8374ae1fa904f
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


// useEffect(() => {
//   calculateStarRating();
  
// })

// function calculateStarRating(){
//   let totalNoRatings = 0;
//   let totalstarforRatingCount = 0;
//   let starCount = 0;
//   let average = 0; 
//   for(let i = 0; i < items.length; i++){
    
//     totalNoRatings = 0;
//     totalstarforRatingCount = 0;
//     starCount = 0;
//     average = 0;
  
//     for(let j = 0; j < ratings.length; j++){
//         if(items[i]._id == ratings[j].itemid){
//           totalNoRatings++;
//         }

//         if(items[i]._id == ratings[j].itemid){
//           starCount += parseInt(ratings[j].noofstars);  
//         }

//     }

//     totalstarforRatingCount = totalNoRatings * 5;
//     average = parseInt((starCount / totalstarforRatingCount) * 5);
//     console.log(average);
//     displayStarRating(i,average);

//   }

// }


// function displayStarRating(id,totalAverage){
//   let txt = "";
//     if(isNaN(totalAverage)){
//       txt = "No Ratings yet!";
//       document.getElementById(id +'stars').innerHTML = txt;
//       document.getElementById(id +'stars').style.color = "#FF0000";
//     }else{
    
//     for(let j = 0; j < totalAverage; j++){
//       txt += '<span class="fa fa-star checked"></span>';
//     }
//     for(let j = 0; j < (5 - totalAverage); j++){
//       txt += '<span class="fa fa-star"></span>';
//     }
   

//     document.getElementById(id +'stars').innerHTML = txt +'  '+ totalAverage + '.0 / 5.0';
//    }
// }

//  onTaskClicked(){
//   console.log("clicked");
// }
// function setReport(){

// }

// function sendData(e){

//   e.preventDefault();

//   const newContact = {
//     name,
//     email,
//     message
//   }

 
//   console.log(newContact);

//   axios.post("http://localhost:8070/contact/add",newContact).then(()=>{

//     setName(" ");
//     setEmail(" ");
//     setMessage(" ");
//     props.history.push("/Home");
//     document.getElementById("txt").innerHTML = "Message Sended Successfully!";
    
//   }).catch((err) =>{
//     alert(err)
//   })
// }

  // function toogleHandler() {
  //   if (isOrderd) {
  //     orderedCtx.removeOrder(props.id);
  //   } else {
  //     orderedCtx.addOrder({
  //       id: props.id,
  //       name: props.name,
  //       review: props.review,
  //       status: 1,
  //     });
  //   }
  // }


 return(    
 <div style={{padding:'20px 15px 10px 50px'}}>    
    <div className="row" >
        <div className="col-6" style={{alignItems:'center'}}>
        
       {/* { alert(item)} */}
       
            <div className="row">
                
                {/* {/* {item.Images.map((post) => {
                 return (   */}

                    <div className="col-4">
                      <img style={{width:'70%'}}
                       src=
                       {p2}
                      //  {"/Images/" + items.userImage[0]}
                       />
                    </div>
                
                    <div className="col">
                       
                    <span style={{fontSize: '22px',textalign: 'left',fontstyle: 'strong'}}><b>{items.Item_name}</b></span>
                    <br/><br/>
                    <p style={{fontSize: '16px',textalign: 'left',fontstyle: 'strong'}}>{items.Description}</p>
                    <br/>
                    <span style={{fontSize: '18px',textalign: 'left',fontstyle: 'strong'}}>Rs. {items.Price}.00/=</span>
                </div>
                
                	
            </div>
            <br/>
            <div className="row" style={{padding:'10px 20px 0px 10px'}}>
                <div className="row" style={{lineHeight:'32px', borderRadius:'15px',padding:'10px 0px 20px 10px', width:'90%',  boxShadow: '0 0 5pt 0.5pt #dcdcdc'}}>
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
                                    <span> Category</span><br/>
                                    <span> Stock unit</span><br/>
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
                                    <span>{items.Category}</span><br/>
                                    <span>{items.Unit}</span><br/>
                                    <span>{items.Colors}</span><br/>
                                </div>
                                
                            </div> 
                
        </div> 
            
            {/* {abc.map((reviewss) => {
              return ( */}
            <div className="row">
                <span style={{fontSize:'20px', fontstyle:'strong',padding:'20px 0px 20px 30px'}}>Ratings and reviews of item name</span>
                <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 100px'}}>4/5
                  {/* { +'stars'} */}
                  </span><br/> 
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
              {/* )
            })} */}
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


        <form 
        // onSubmit = {sendData}
        >

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
          </form>    
           
           
         </div>
    </div>
</div>   
 )

}


// function CalcDiscount(e) {

//   setDiscount(e.target.value);

//   let dis = document.getElementById("discountPercentage").value;

//   console.log(dis);
//   let finalP = Number(item.Price) - (Number(item.Price) * (Number(dis) / 100));

//   console.log(finalP);

//   document.getElementById("newPrice").value = finalP;

//   setFinalPrice(finalP);

// }



// export default function FoodItem(props) {
//   //getting access to the ordered context object in orderontext.js page
//   const orderedCtx = useContext(OrderContext);
//   const isOrderd = orderedCtx.isOrdered(props.id);
//   const favouriteCtx = useContext(FavouriteContext);
//   const isFavourite = favouriteCtx.isFavourite(props.id);
//   let [user, setUser] = useState("");

//   const [modelOpen, setmodelOpen] = useState(false);
//   const [comment, setComment] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/orderDetails/getUserbyid/111")
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   }, []);

//   function toogleOrderStatusHandler() {
//     if (isOrderd) {
//       orderedCtx.removeOrder(props.id);
//     } else {
//       orderedCtx.addOrder({
//         id: props.id,
//         price: props.price,
//         name: props.name,
//         image: props.image,
//         status: 1,
//         description: props.description,
//       });
//     }
//   }


//   return (
//   
//       <div class="blog grid-blog">
//         <div class="blog-image">
//           <a>
//             <img
//               class="img-fluid"
//               src={`img/${props.image}`}
//               alt="Food image"
//               onClick={modalOpen}
//               style={{
//                 width: "250px",
//                 height: "200px",
//               }}
//             />
//           </a>
//         </div>
//         <div class="blog-content">
//           <div className="row">
//             <div className="col-md-3">
//               <a onClick={toogleFavouriteStatusHandler}>
//                 {isFavourite ? (
//                   <FeatherIcon
//                     icon="heart"
//                     fill="red"
//                     color="white"
//                     style={{ stroke: "red" }}
//                   />
//                 ) : (
//                   <FeatherIcon
//                     icon="heart"
//                     borderColor="white"
//                     style={{ stroke: "black" }}
//                   />
//                 )}
//               </a>
//             </div>
//             <div className="col-md-6"></div>
//             <div className="col-md-3">
//               <a onClick={toogleFavouriteStatusHandler}>
//                 <FeatherIcon icon="more-vertical" style={{ stroke: "black" }} />
//               </a>
//             </div>
//             <div className="col-md-2"></div>
//           </div>
//         </div>
//       </div>

//       <Modal
//         animation={true}
//         isOpen={modelOpen}
//         onRequestClose={modalClose} >
//         <div className="row">
//           <div
//             className="card col-md-6"
//             style={{
//               overflowY: "initial",
//             }}
//           >
//             <FoodDetails
//               name={props.name}
//               price={props.price}
//               id={props.foodID}
//               description={props.description}
//               image={props.image}
//               type={props.type}
//             />
//             <div className="row">
//               <div className="col-md-5">
//                 <button
//                   onClick={toogleOrderStatusHandler}
//                   className="btn btn-primary"
//                 >
//                   {isOrderd ? "Cancel order" : "Order now"}
//                 </button>
//               </div>
//               <div className="col-md-2"></div>
//               <div className="col-md-5">
//                 <button onClick={modalClose} className="btn btn-danger">
//                   Close
//                 </button>
//               </div>
//             </div>
//             <br />
//           </div>

//           <div className="model-body col-md-6">
//             <div
//               style={{
//                 height: "350px",
//                 overflowY: "scroll",
//               }}
//             >
//               {comment.map((post) => (
//                 <div key={post._id}>
//                   <FoodComment
//                     userID={post.userID}
//                     foodID={post.foodID}
//                     comment={post.comment}
//                   />
//                 </div>
//               ))}
//             </div>

//             <SendComment func={modalOpen} foodID={props.id} />
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }
