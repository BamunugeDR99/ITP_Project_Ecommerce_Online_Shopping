import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "../CSS/cusreview.css";

export default function CustomerReviews(props) {
  let [review, setReview] = useState([]);
  let re = [];
  const [customertest, setCustomertest] = useState([]);
  let [customer, setCustomer] = useState([]);
  let customers = [];
  let customerName = "";
  let customerImage = "";
  let Review = "";
  let [abc, setabc] = useState([]);
  let reviewWithCustomer = {

    customerName,
    customerImage,
    Review
  
} 

  let reviewWithCustomers = [];



  useEffect(() => {
    function getReview() {
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          //setReview(res.data);
          const filter = res.data.filter(
            (itemrev) => itemrev.itemid === "611f4784c259414e3c405a34"
          );
         // review = setReview(filter);
          re = filter;
        //   console.log(re.length);


          for (let i = 0; i < re.length; i++) {
            console.log("sdf");
            let customerid = re[i].customerid;
            // console.log(customerid);
      
            axios
              .get("http://localhost:8070/customertest/get/" + customerid)
              .then((res) => {
                // console.log(res.data);
      
                reviewWithCustomer = {
                    customerName : res.data.name,
                    customerImage : res.data.cusimage,
                    Review : re[i].description
                }    
      
                // console.log(reviewWithCustomer);
                reviewWithCustomers.push(reviewWithCustomer);
                //console.log(reviewWithCustomers);
                setabc(reviewWithCustomers);
              
              })
              .catch((err) => {
                alert(err);
              });
      
          }

        })
        .catch((err) => {
          alert(err);
        });
    }



    getReview();
    // getCustomer();
  },[]);



  

  return (
    <div class="rev">
      <h1 id="h1"> Customer Reviews</h1>
      <h5 id="h5">what our customers say about us</h5>

      {abc.map((reviewss) => {
        return (
          <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
              <h5 class="card-title">{reviewss.customerName}</h5>
              {/* <img src =  */}
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
             {reviewss.Review}
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
