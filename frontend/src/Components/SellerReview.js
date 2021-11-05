import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
// import { FaStar } from "react-icons/fa";

// import {Link} from 'react-router-dom';

import a1 from "../images/avatar1.png";
import p2 from "../images/p3.jpg";

export default function SellerReviews(props){

    const [items,setItems] = useState([]);
    let [itemss,setItemss] = useState([]);
    const [ratings, setRatings] = useState([]);

    var ipsumText = true;
    
  // const [description,setDescription] = useState("");
  // const [date,setDate] = useState("");
  // const [noofstars,setNoofstars] = useState("");
  // const [reviewstatus,setReviewstatus] = useState("");
    
  // const [updateReviewId,setupdateReviewId] = useState("");

  //   const [review,setReview] = useState([]);
    const [reportreason,setReportreason] = useState("");

    
    // let reportreason = " ";
    let [k,setK]=useState([]);

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
    // let content;
  let ItemImage = [];
    let reviewWithCustomers = [];
  
    useEffect(() => {

        function getItem(){

          const objectId = props.match.params.id;
            axios
            .get("https://tech-scope-online.herokuapp.com/items/get/"+ objectId)
            .then((res) =>
            {
                setItems(res.data);
                itemss.push(items);
                setItemss(items);
                console.log(res.data);
                console.log(items);
                console.log(itemss);
                console.log('abc');
        
                ItemImage = res.data.Images;

                setK(res.data.Images)
              console.log(k)
                
            }).catch((err) =>{
                alert(err);
            })
            
        }
       
        getItem();

        


      function getReview() {
        const objectId = props.match.params.id;
        axios
          .get("https://tech-scope-online.herokuapp.com/review/get")
          .then((res) => {
            //setReview(res.data);
            const filter = res.data.filter(
              (itemrev) => itemrev.itemid === objectId
            );
            reviews = filter;
            // 6120b61011f8374ae1fa904f
            axios
              .get("https://tech-scope-online.herokuapp.com/Customer/getAll")
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
        .get("https://tech-scope-online.herokuapp.com/review/get")
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
   

    document.getElementById('stars').innerHTML =  totalAverage + ' / 5' + txt +'  ';
   }
}

///////////solo stars

useEffect(()=>{
  calculateStarRatings()
})

function calculateStarRatings(){

  abc.map((item,index)=>{
      console.log(item.Stars)
      displayStarRatings(index,item.Stars);
  })
    // displayStarRating(i,average);
  // }

}

function displayStarRatings(id,totalAverages){

  let txt = "";

    if(isNaN(totalAverages)){

      txt = "No Ratings yet!";

      document.getElementById(id +'stars').innerHTML = txt;

      document.getElementById(id +'stars').style.color = "#FF0000";

    }else{

    

    for(let j = 0; j < totalAverages; j++){

      txt += '<span class="fa fa-star checked"></span>';

    }

    for(let j = 0; j < (5 - totalAverages); j++){

      txt += '<span class="fa fa-star"></span>';

    }

    document.getElementById(id +'stars').innerHTML = txt +'  ';

   }

}




function updatee(id){
  console.log(id)

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
          reviewstatus : true,
          sellerid: items.SellerID
        }
        axios.put("https://tech-scope-online.herokuapp.com/review/updateRev/" +id,newItem).then((res)=>{
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

function report(id) {
  props.history.push("/Seller/ItemRatings/" + id);
 //console.log(id)
}





 return(    
 <div className="rev" style={{padding:'20px 15px 10px 50px'}}>    
    <div className="row" >
        <div className="col-6" style={{alignItems:'center'}}>
        
       
       
            <div className="row">
                
            
                    <div className="col-4">
                      <img style={{width:'100%'}}
                       src={"/images/" + k[0]}/>
                       <div>
                          <img style={{width:'30%',  padding:'10px'}} src=
                          {"/images/"+ k[1]}
                          />
                          <img style={{width:'30%',  padding:'10px'}} src=
                          {"/images/"+ k[0]}
                          />
                          <img style={{width:'30%',  padding:'10px'}} src=
                          {"/images/"+ k[2]}
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
                                    <span>Warrenty</span>
                                </div> 
                                <div className="col-1">
                                    
                                    <span> : </span><br/>
                                    <span> :</span><br/>
                                    <span> :  </span><br/>
                                    <span> :  </span>
                                </div> 
                                <div className="col">    
                                    <span>{items.Brand} </span><br/>
                                    <span>{items.Model} </span><br/>
                                    <span>{ipsumText.toString(items.ItemAvailabilityStatus) }</span><br/>
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
                <span style={{fontSize:'20px', fontstyle:'strong',padding:'20px 0px 20px 5px'}}>Ratings and reviews of item name</span>
               
                <span style={{fontSize:'26px', fontStyle:'strong',padding:'0px 0px 0px 10px'}}>
                    

                    <div id = 'stars'class="card-text">
                      <br/><span id ='review'>4.0 / 5.0</span><br/>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span><br/>
                      <span class="fa fa-star"></span>

                      
                    </div>

                  </span>
                <br/>
                <br/>
                  <button  onClick = {()=> report(items._id)}  type="button"style={{fontSize:'14px', width:'30%', marginLeft:'10px', marginRight:'20px'}} class="btn btn-primary">Generate A Report</button>
            </div>

        </div>
        <div className="col">
        
            <span style={{fontSize: '21px',textalign: 'left',fontstyle: 'strong',padding:'20px'}}>Product Reviews</span>
            <hr style={{width:'90%'}}/>

        <div style={{height:'550px',overflowY: 'scroll', paddingBottom:'20px'}}>
            

        {abc.map((reviewss,index) => {
      
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
                            <div id = {index +'stars'} class="card-text">

                                <span class="fa fa-star checked"></span>

                                <span class="fa fa-star checked"></span>

                                <span class="fa fa-star checked"></span>

                                <span class="fa fa-star checked"></span>

                                <span class="fa fa-star"></span><span> </span> 

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


                </div>  
               
                );
              
            })}
            
         </div>                
        </div>
    </div>
</div>   
 )

}

