import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import a1 from "../images/avatar1.png";

export default function CustomerReviews(props) {

  let history = useHistory();

  const[rating,setRating]=useState([]);

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
  let itemID = "";
  let averageRating = "";
  let itemWithRatings = {
    itemID,
    averageRating,
  };
  let itemsWithRatings = [];
  
  let objectId = "";

  const [items,setItems] = useState([]);
  const [ratings, setRatings] = useState([]);
  let reviewWithCustomers = [];

  useEffect(() => {
    function getReview() {
      objectId = localStorage.getItem("ItemID");
      axios
        .get("https://tech-scope-online.herokuapp.com/review/get")
        .then((res) => {
          //setReview(res.data);

          const ItemId = props.match.params.id;
          const filter = res.data.filter(
            (itemrev) => itemrev.itemid === ItemId
    
            // ItemID
           
          );
          reviews = filter;
          console.log(reviews)
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
    
    function displayRating(){

      axios

      .get("https://tech-scope-online.herokuapp.com/review/get")

      .then((res) => {

        setRating(res.data);

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

  


  useEffect(()=>{
    calculateStarRating()
  })

  useEffect(()=>{
    calculateStarRating()
  })

  function calculateStarRating(){

    abc.map((item,index)=>{
        console.log(item.Stars)
        displayStarRating(index,item.Stars);
    })
      // displayStarRating(i,average);
    // }

  }

  function displayStarRating(id,totalAverage){

    let txt = "";

      if(isNaN(totalAverage)){

        txt = "No Ratings yet!";

        document.getElementById(id +'stars').innerHTML = txt;

        document.getElementById(id +'stars').style.color = "#FF0000";

      }else{

      

      for(let j = 0; j < totalAverage; j++){

        txt += '<span class="fa fa-star checked"></span>';

      }

      for(let j = 0; j < (5 - totalAverage); j++){

        txt += '<span class="fa fa-star"></span>';

      }

      document.getElementById(id +'stars').innerHTML = txt +'  ';

     }

  }
  
  return (
    <div style={{ padding: "20px 15px 10px 50px", backgroundColor:'#F9F9F9'}}>
         
        
          <div class="row" style={{ width: "100%", alignItems: "center", borderRadius: "10px",backgroundColor:'#F9F9F9' }} >
            <div>
            <button type="button"style={{fontSize:'14px', borderRadius:'15px'}} class="btn btn-info" onClick={() => history.goBack()} ><i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</button>
          </div>
          <div className="container" style={{backgroundColor:'#F9F9F9', width:'95%'}}>
            <br />
            <h1 style={{ textAlign: "center", color: "black" ,textShadow:'3px 3px #CECECE '}}>
             
              Customer Reviews
            </h1>
            <h5 style={{ textAlign: "center", color: "black" }}>
              what our customers say about us
            </h5>

            <div>
               <div className="row" style={{margin: "50px 20px 20px 30px",}}>
               {/* <h2 id="stars"></h2> */}
              {abc.map((reviewss,index) => {
                return (
                 
                    <div class="col-3" style={{ paddingBottom:'30px'}}>
                      <div class="Regular shadow" style={{width: "70%",margin: "0px",borderRadius: "15px",marginTop: "30px",height: "290px",boxShadow:'2px 2px 2px 2px #dcdcdc', backgroundColor:'white', padding:'10px 10px 10px 10px'}}>
                        <div class="card-body">
                          <center>
                          <img src={"/Images/"+reviewss.customerImage }
                          style={{ width: "65%", height:'80%', maxHeight:'100px',alignItems: "center", borderRadius:400/2 }}/>
                          <br/><br/>
                          <span style={{fontSize:'20px', color: "#191919", textAlign: "center" }}>{reviewss.customerName}</span>
                          
                          
                          <div id = {index +'stars'} class="card-text">

                                    <span class="fa fa-star checked"></span>

                                    <span class="fa fa-star checked"></span>

                                    <span class="fa fa-star checked"></span>

                                    <span class="fa fa-star checked"></span>

                                    <span class="fa fa-star"></span><span> </span> 

                                    </div>
                                    </center>
                          <p style={{ textAlign: "center", fontSize: "14px"}}>
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

