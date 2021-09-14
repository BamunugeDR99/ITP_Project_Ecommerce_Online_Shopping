import React, { useState, useEffect} from "react";
import axios from "axios";


export default function CustomerReviews(props) {
  let reviews = [];
  let customers = [];
  let customerName = "";
  let customerImage = "";
  let Review = "";
  let [abc, setabc] = useState([]);
  let reviewWithCustomer = {
    customerName,
    customerImage,
    Review,
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
          <div
            class="shadow-lg p-3 mb-5 bg-white rounded"
            style={{ width: "100%", alignItems: "center", borderRadius: "5px" }}
          >
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
                  <div
                    class="card"
                    style={{
                      width: "20%",
                      margin: "50px",
                      borderRadius: "15px",
                      marginTop: "30px",
                      height: "290px",
                    }}
                  >
                    <div class="card-body">
                      {/* <img
                      src={`../images/${reviewss.customerImage}`}
                      style={{ width: "80%", alignItems: "center" }}
                    /> */}
                      {/* <img src =  */}
                      <h5 class="card-title">{reviewss.customerName}</h5>
                      <div style={{ color: "#f9d71c", textAlign: "center" }}>
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
