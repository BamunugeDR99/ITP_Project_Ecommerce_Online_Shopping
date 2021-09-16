import React, { useState, useEffect} from "react";
import axios from "axios";


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
      <div class="rev">
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
                  <div className="row">
                    <div class="col" style={{ paddingBottom:'30px'}}>
                      <div class="card" 
                      style={{width: "20%",margin: "50px",borderRadius: "15px",marginTop: "30px",height: "290px",}}
                      >
                        <div class="card-body">
                          <img src={"/Images/"+reviewss.customerImage[0]} style={{ width: "80%", alignItems: "center" }}/>
                        
                          <h5 style={{ color: "#191919", textAlign: "center" }}>{reviewss.customerName}</h5>

                          
                          <div style={{ color: "#f9d71c", textAlign: "center" }}>
                          <span style={{ color: "#191919" }}>{reviewss.Stars}/5</span><br/>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <br />
                          <p style={{ textAlign: "center", fontSize: "16px" }}>
                            {reviewss.Review}
                          </p>
                        </div>
                      </div>
                    </div>
                  


                  {/* <div class="col-sm-2" style={{ paddingBottom:'30px'}}>
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
                    </div> */}

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
