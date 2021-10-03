import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import g1 from "../images/avatar1.png";

export default function AdminReport(props) {
  const [review, setReview] = useState([]);

  let review_id = "";
  let reviews = [];
  // let emails = [];
  let sellers = [];
  let sellerName = "";
  let sellerImage = "";
  let Review = "";
  let Report = "";
  let [abc, setabc] = useState([]);
  let reviewWithSeller = {
    review_id,
    sellerName,
    sellerImage,
    Review,
    Report,
  };
  let filter_review = [];

  let reviewWithSellers = [];

  useEffect(() => {
    function getReview() {
      let seller = localStorage.getItem("SellerID");
     // let seller = "";


      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          reviews = res.data;
          // const filter = res.data.filter(

          filter_review = res.data.filter(
            (Review) =>
              Review.reviewstatus === true && Review.sellerid === seller
          );
          console.log(filter_review);
          console.log(seller);
          // );
          // reviews = filter;
          console.log(reviews);
          axios
            .get("http://localhost:8070/orgseller/get")
            .then((res) => {
              sellers = res.data;
              createReview(filter_review, sellers);
              console.log(sellers);
            })
            .catch((err) => {
              alert(err);
            });
        })
        .catch((err) => {
          alert(err);
        });
    }

    getReview();
  }, []);

	function deletee(id,index){
    console.log(id);
    console.log(index)
      console.log(abc)
    const afterDeleteReview = abc.filter(review=>review.review_id != id);

    console.log(afterDeleteReview);

      setabc(afterDeleteReview);
      
    axios.delete("http://localhost:8070/review/delete/" + id).then((res) =>
    {
      
      alert("Review Deleted!");
    }).catch((err) =>{
        alert(err);
    })
}

  function createReview(reviews, sellers) {
    let j = 0;
    for (let i = 0; i < reviews.length; i++) {
      j = 0;
      for (j = 0; j < sellers.length; j++) {
        if (reviews[i].sellerid === sellers[j]._id) {
          reviewWithSeller = {
            review_id:reviews[i]._id,
            sellerName: sellers[j].ownername,
            sellerImage: sellers[j].logo,
            Review: reviews[i].description,
            Report: reviews[i].reportreason,
          };

          reviewWithSellers.push(reviewWithSeller);
        }
      }
    }
	console.log(reviewWithSellers)
    setabc(reviewWithSellers);
	console.log(abc)
  }

  return (
    <div className="container" >
            <div style={{backgroundColor:'#dcdcdc', width:'90%', height:'70px'}}>
              <h2>
                <center>
                  <b>Seller Messages</b>
                </center>
              </h2>
            </div>
            <table className="table table-hover" style={{width:'90%',tableLayout: 'fixed', fontSize:'16px', textAlign:'center',borderColor:'grey'}}>
            
              <thead style={{fontSize:'18px'}}>
                <tr>
                  <th>Owner Name</th>
                  <th>Company Logo</th>
                  <th>Customer Review</th>
                  <th>Company Report</th>
                  <th>Action</th>
                </tr>
              </thead>
              {abc.map((reviewss, index) => {
                return (			
                  <tbody>
                    <tr>
                      <td>{reviewss.sellerName}</td>
                      <td><img src={"/Images/" + reviewss.sellerImage} style={{width:'30%'}} alt={g1}/></td>
                      <td>{reviewss.Review}</td>
                      <td>{reviewss.Report}</td>
                      <td><button onClick={() => deletee(reviewss.review_id, index)} className="btn btn-link" type="button"><i class="fas fa-trash-alt" style={{color:'red', fontSize:'20px'}}></i></button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
    </div>
  );
}

