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

  let reviewWithCustomers = [];

  useEffect(() => {
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



 

  return (
    <div style={{ padding: "20px 15px 10px 50px" }}>
        <div className="container">
          <div class="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "100%", alignItems: "center", borderRadius: "10px" }} >
            <br />
            <h1 style={{ textAlign: "center", color: "black" }}>
              {" "}
              Customer Reviews
            </h1>
            <h5 style={{ textAlign: "center", color: "black" }}>
              what our customers say about us
            </h5>

            <div>
            
              {abc.map((reviewss) => {
                return (
                  <div className="row" style={{margin: "50px 20px 20px 30px",}}>
                    <div class="col-3" style={{ paddingBottom:'30px'}}>
                      <div class="card" style={{width: "90%",margin: "0px",borderRadius: "15px",marginTop: "30px",height: "290px",boxShadow:'2px 2px 2px 2px #dcdcdc'}}>
                        <div class="card-body">
                          <center>
                          <img src={a1}
                          // {"/Images/"+reviewss.customerImage[0]} 
                          style={{ width: "65%", alignItems: "center" }}/>
                          <br/>
                          <span style={{fontSize:'20px', color: "#191919", textAlign: "center" }}>{reviewss.customerName}</span>
                          </center>
                          
                          

                          <div id = 'stars'class="card-text" style={{ textAlign: "center", padding:'0px 0px 10px 0px' }}>
                            <span id ='review'>{reviewss.Stars}/5</span><br/>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span><span> </span> 
                          </div>
                          <p style={{ textAlign: "center", fontSize: "16px"}}>
                            {reviewss.Review}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
              
                );
              })}
              
            </div>
            
          </div>
        </div>
      </div>
  );
}

