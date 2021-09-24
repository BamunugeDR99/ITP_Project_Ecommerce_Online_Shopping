import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
// import { FaStar } from "react-icons/fa";

import {Link} from 'react-router-dom';

import a1 from "../images/avatar1.png";
import p2 from "../images/p3.jpg";

export default function SellerReviews(props){

    const [items,setItems] = useState([]);
    let [itemss,setItemss] = useState([]);
    const [ratings, setRatings] = useState([]);

    var ipsumText = true;
    
  const [description,setDescription] = useState("");
  const [date,setDate] = useState("");
  const [noofstars,setNoofstars] = useState("");
  const [reviewstatus,setReviewstatus] = useState("");
    
  const [updateReviewId,setupdateReviewId] = useState("");

    const [review,setReview] = useState([]);
    const [reportreason,setReportreason] = useState("");

    const [data,setData] = useState({
      reportreason : "",
    });

    let reviews = [];
    let review_id = "";
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
      review_id,
      Stars,
    };
    let content;
  
    let reviewWithCustomers = [];
  
    useEffect(() => {

        function getItem(){

          const objectId = props.match.params.id;
            axios
            .get("http://localhost:8070/items/get/"+ objectId)
            .then((res) =>
            {
                setItems(res.data);
                itemss.push(items);
                setItemss(items);
                console.log(res.data);
                console.log(items);
                console.log(itemss);
                console.log('abc');
        
                
            }).catch((err) =>{
                alert(err);
            })
            
        }
       
        getItem();

        


      function getReview() {
        const objectId = props.match.params.id;
        axios
          .get("http://localhost:8070/review/get")
          .then((res) => {
            //setReview(res.data);
            const filter = res.data.filter(
              (itemrev) => itemrev.itemid === objectId
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
                review_id:reviews[i]._id
              };
  
              reviewWithCustomers.push(reviewWithCustomer);
            }
          }
        }
  
        setabc(reviewWithCustomers);
      }


      //Rating
      function displayRating(){
        axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          setRatings(res.data);
          //console.log(ratings[0].itemid)
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
      }


    
      displayRating();







  
      getReview();
    

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




function updatee(id){
  console.log(id)
  // e.preventDefault();
  // const ReviewId = updateReviewId;
  // //console.log(ReviewId);
  // const newReview = {
   
  //   reportreason,
  // }
  // console.log(newReview);

  // axios.put("http://localhost:8070/review/updateReview/" +id,newReview).then(()=>{
  //   setReview(" ");
    Swal.fire({
      title: 'Submit your Report',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Send',
      showLoaderOnConfirm: true,
     
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value)
        let newItem = {
          reportreason : result.value,
        }
        axios.put("http://localhost:8070/review/updateRev/" +id,newItem).then((res)=>{
          setReportreason(" ");
          console.log(result.value)
          // alert("success");
        }).catch((err)=>{
          console.log(err)
        })
        Swal.fire('Good job!',
        'You Send the report!',
         'success'
        )
      }
    })

}




 return(    
 <div className="rev" style={{padding:'20px 15px 10px 50px'}}>    
    <div className="row" >
        <div className="col-6" style={{alignItems:'center'}}>
        
       {/* { alert(item)} */}
       
            <div className="row">
                
                {/* {/* {item.Images.map((post) => {
                 return (   */}

                    <div className="col-4">
                      <img style={{width:'100%'}}
                       src={"/Images/" + items.Images}/>
                       <div>
                          <img style={{width:'30%',  padding:'10px'}} src=
                          {"/Images/"+items.Images}
                          />
                          <img style={{width:'30%',  padding:'10px'}} src=
                          {"/Images/"+items.Images}
                          />
                          <img style={{width:'30%',  padding:'10px'}} src=
                          {"/Images/"+items.Images}
                          />
                      </div>
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
            <div className="row" style={{padding:'0px 20px 0px 10px'}}>
                <div className="row" style={{lineHeight:'25px', borderRadius:'15px',padding:'10px 0px 20px 10px', width:'90%',  boxShadow: '0 0 5pt 0.5pt #dcdcdc'}}>
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
                                    <span>{ipsumText.toString(items.ItemAvailabilityStatus) }</span><br/>
                                    <span>{items.Specification} </span><br/>
                                    <span>{ipsumText.toString(items.Warrenty) } </span>
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
                                    <span>{ipsumText.toString(items.Unit) }</span><br/>
                                    <span>{ipsumText.toString(items.Colors) }</span><br/>
                                </div>
                                
                            </div> 

        </div> 
           
            <div className="row">
                <span style={{fontSize:'20px', fontstyle:'strong',padding:'20px 0px 20px 30px'}}>Ratings and reviews of item name</span>
               
                <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 70px'}}>
                    

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
                            
                                <img style={{width:'100%', borderRadius:'30px'}} src=
                                {"/Images/" + reviewss.customerImage}
                                />
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
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal" data-target="#exampleModalCenter">  
                                <button  onClick = {()=> updatee(reviewss.review_id)}  type="button"style={{fontSize:'14px'}} class="btn btn-danger">Report</button>
                            </a>
                        </div>
                    </div>



                    {/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <form>
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLongTitle">Report Review</h5>
                                
                                
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                
                                  
                                  <label>write your reason</label>
                                  <input type="text" class="form-control" 
                                  required  onChange= {
                                          (e)=>{
                                            setReportreason(e.target.value);
                                            
                                          }
                                        }
                                        />
                                
                              </div>
                              
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button 
                                  onClick = {()=> updatee(reviewss._id)} 
                                  type="button" class="btn btn-primary">Send</button>
                              
                                
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> */}
                </div>  
               
                );
              
            })}
            
         
        </div> 


        {/* <form 
        // onSubmit = {sendData}
        > */}
      <center>
         
           </center>
          {/* </form>     */}
           
          
         </div>
    </div>
</div>   
 )

}


// function sendData(e){
 
//   const ReviewId = props.match.params.id; 
//   console.log(ReviewId);
 
//   // alert("d0");
//   e.preventDefault();

//   //   const newReview = {
    
// //     reportreason,
// //   }

//   axios.put("http://localhost:8070/review/updateReport/" + ReviewId,data).then(()=>{
//     alert("Report Updated");
//     Swal.fire(
//       'Good job!',
//       'You Send the report!',
//       'success'
//     )
//   console.log(data);

//   }).catch((err) =>{
//     alert(err)
//   })
// }

// function handle(e){
//   const newdata = {...data}
//   newdata[e.target.id] = e.target.value
//   setData(newdata)
// }
