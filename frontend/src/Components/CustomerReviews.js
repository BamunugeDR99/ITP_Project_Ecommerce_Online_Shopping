import React, { useState, useEffect} from "react";
import axios from "axios";


import a1 from "../images/avatar1.png";

export default function CustomerReviews(props) {

  

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
  
  let objectId = "";

  // const [items,setItems] = useState([]);
  const [ratings, setRatings] = useState([]);
  let reviewWithCustomers = [];

  useEffect(() => {
    function getReview() {
      objectId = localStorage.getItem("ItemID");
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          //setReview(res.data);
          const filter = res.data.filter(
            (itemrev) => itemrev.itemid === 
            "614c80200704f13750c09928"
            // ItemID
           
          );
          reviews = filter;
          console.log(reviews)
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
          if (reviews[i].customerid === customers[j]._id) {
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


  // function calculateStarRating(){
  //   let totalNoRatings = 0
  //   let totalstarforRatingCount = 0;
  
    
  //     for(let j = 0; j < ratings.length; j++){
  //         if(items._id == ratings[j].itemid){
  //           totalNoRatings=ratings[j].noofstars;
  //           // starCount += parseInt(ratings[j].noofstars);  
  //         }
  
         
  //     }
  
  //     totalstarforRatingCount = totalNoRatings * 5;
  //     console.log(totalNoRatings);
  //     displayStarRating(totalNoRatings);
  
  
  // }

  // function displayStarRating(totalNoRatings){
  //   let txt = "";
  //     if(isNaN(totalNoRatings)){
  //       txt = "No Ratings yet!";
  //       document.getElementById('stars').innerHTML = txt;
  //       // document.getElementById('stars').style.color = "#FF0000";
  //     }else{
      
  //     for(let j = 0; j < totalNoRatings; j++){
  //       txt += '<span class="fa fa-star checked"></span>';
  //     }
  //     for(let j = 0; j < (5 - totalNoRatings); j++){
  //       txt += '<span class="fa fa-star"></span>';
  //     }
     
  
  //     document.getElementById('stars').innerHTML = txt +'  '+ totalNoRatings + '.0 / 5.0';
  //    }
  // }
 

  return (
    <div style={{ padding: "20px 15px 10px 50px", backgroundColor:'#F9F9F9'}}>
        
        
          <div class="row" style={{ width: "100%", alignItems: "center", borderRadius: "10px",backgroundColor:'#F9F9F9' }} >
          <div className="container" style={{backgroundColor:'#F9F9F9', width:'95%'}}>
            <br />
            <h1 style={{ textAlign: "center", color: "black" ,textShadow:'3px 3px #CECECE '}}>
              {" "}
              Customer Reviews
            </h1>
            <h5 style={{ textAlign: "center", color: "black" }}>
              what our customers say about us
            </h5>

            <div>
               <div className="row" style={{margin: "50px 20px 20px 30px",}}>
            
              {abc.map((reviewss) => {
                return (
                 
                    <div class="col-3" style={{ paddingBottom:'30px'}}>
                      <div class="Regular shadow" style={{width: "70%",margin: "0px",borderRadius: "15px",marginTop: "30px",height: "290px",boxShadow:'2px 2px 2px 2px #dcdcdc', backgroundColor:'white'}}>
                        <div class="card-body">
                          <center>
                          <img alt={a1} src={"/Images/"+reviewss.customerImage  }
                          style={{ width: "65%", alignItems: "center", borderRadius:400/2 }}/>
                          <br/><br/>
                          <span style={{fontSize:'20px', color: "#191919", textAlign: "center" }}>{reviewss.customerName}</span>
                          </center>
                          
                          

                          <div id = 'stars'class="card-text" style={{textAlign: "center", padding:'0px 0px 10px 0px' }}>
                            <span id ='review'>{reviewss.Stars}/5</span><br/>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span><span> </span> 
                          </div>

                          {/* <div id = 'stars'class="card-text">
                            <br/><span id ='review'>4.0/ 5.0</span><br/>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span><br/>
                            <span class="fa fa-star"></span>
                          </div> */}
                          <p style={{ textAlign: "center", fontSize: "16px"}}>
                            {reviewss.Review}
                          </p>
                        </div>
                      </div>
                    </div>

                  
              
                );
              })}
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

