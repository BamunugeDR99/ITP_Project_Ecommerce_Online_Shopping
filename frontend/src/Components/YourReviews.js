import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
// import "../Css/yourreviews.css";
import p2 from "../images/p3.jpg";

export default function YourReviews(props) {
  // const [review,setReview] = useState([]);

  const [itemss, setItemss] = useState([]);
  const [description, setDescription] = useState("");
  const [ratings, setRatings] = useState([]);
  const [r, setR] = useState([]);
  // const [updateReviewId,setupdateReviewId] = useState("");
  let reviews = [];
  let review_id = "";
  let items = [];
  let itemName = "";
  let itemImage = "";
  let itemDescription = "";
  let itemModel = "";
  let itemBrand = "";
  let Review = "";
  let Stars = "";
  let Date = "";
  let [abc, setabc] = useState([]);
  let reviewWithItem = {
    review_id,
    itemName,
    itemImage,
    itemDescription,
    itemModel,
    itemBrand,
    Review,
    Stars,
    Date,
  };

  let reviewWithItems = [];
  let objectId = "";
  useEffect(() => {
    function getReview() {
      objectId = localStorage.getItem("CustomerID");
      console.log(objectId);
      axios
        .get("https://tech-scope-online.herokuapp.com/review/get")
        .then((res) => {
          const filter = res.data.filter(
            (customerrev) =>
              customerrev.customerid ===
              //  "6144a5d888cbe1257c8a8880"
              objectId
          );
          console.log(filter);
          setR(filter);
          reviews = filter;
          console.log(reviews);
          axios
            .get("https://tech-scope-online.herokuapp.com/items/getItems")
            .then((res) => {
              items = res.data;
              createReview(reviews, items);

              calculateStarRating(reviews);
              console.log(res.data);
            })
            .catch((err) => {
              alert(err);
            });
        })
        .catch((err) => {
          alert(err);
        });
    }

    function displayRating() {
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
    if (r != null) {
      calculateStarRating();
    }
  });

  function calculateStarRating() {
    abc.map((item, index) => {
      displayStarRating(index, item.Stars);
    });
  }

  function displayStarRating(id, totalAverage) {
    console.log(totalAverage);
    let txt = "";
    if (isNaN(totalAverage)) {
      document.getElementById(id + "stars").innerHTML = txt;
      document.getElementById(id + "stars").style.color = "#FF0000";
    } else {
      for (let j = 0; j < totalAverage; j++) {
        txt += '<span class="fa fa-star checked"></span>';
      }

      for (let j = 0; j < 5 - totalAverage; j++) {
        txt += '<span class="fa fa-star"></span>';
      }
      if (isNaN(totalAverage)) {
      } else {
        document.getElementById(id + "stars").innerHTML = txt + "  ";
      }
    }
  }

  function filterContent(data, userSearch) {
    let result = data.filter(
      (post) =>
        post.Item_name.toLowerCase().includes(userSearch) ||
        post.Brand.toLowerCase().includes(userSearch) ||
        post.Model.toLowerCase().includes(userSearch)
    );
    console.log(userSearch);
    let x = result;
    createReview(r, x);
    if (result.length != 0) {
      document.getElementById("itemsTxt").innerHTML = "";
    } else if (result.length == 0) {
      document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }
  }

  // search
  function handleSearch(e) {
    let userSearch = e;
    //document.getElementsByTagName("CircleLoader").loading = '{true}';
    document.getElementById("itemsTxt").innerHTML = "";

    axios
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {
        // console.log(res.data);

        if (userSearch != null) {
          filterContent(res.data, userSearch);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function deletee(id, index) {
    axios
      .delete("https://tech-scope-online.herokuapp.com/review/delete/" + id)
      .then((res) => {
        let afterDelete = abc.splice(index, 1);
        setabc(afterDelete);

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  function updatee(id) {
    console.log(id);

    Swal.fire({
      title: "Write your review",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,

      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value);
        let newItem = {
          description: result.value,
        };
        axios
          .put("https://tech-scope-online.herokuapp.com/review/updateReview/" + id, newItem)
          .then((res) => {
            setDescription(" ");
            console.log(result.value);
            // alert("success");
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Good job!", "Your update saved!", "success");
        window.location.reload();
      }
    });
  }

  function createReview(reviews, items) {
    let j = 0;
    console.log(items);
    console.log(reviews);
    for (let i = 0; i < reviews.length; i++) {
      j = 0;
      console.log(reviews[i]);
      for (j = 0; j < items.length; j++) {
        if (reviews[i].itemid === items[j]._id) {
          reviewWithItem = {
            review_id: reviews[i]._id,
            itemName: items[j].Item_name,
            itemImage: items[j].Images[0],
            itemDescription: items[j].Description,
            itemModel: items[j].Model,
            itemBrand: items[j].Brand,
            Review: reviews[i].description,
            Stars: reviews[i].noofstars,
            Date: reviews[i].date,
          };

          reviewWithItems.push(reviewWithItem);
        }
      }
    }
    setabc(reviewWithItems);
  }

  return (
    <div
      style={{
        padding: "20px 15px 10px 50px",
        width: "100%",
        backgroundColor: "#F7F7F7 ",
      }}
    >
      {/* <center> */}
      <div
        className="container"
        style={{
          padding: "20px 0px 10px 0px",
          width: "70%",
          backgroundColor: "#F7F7F7 ",
        }}
      >
        <div
          className="row"
          style={{ padding: "20px 15px 10px 50px", width: "100%" }}
        >
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search Items by Name , Brand or Model ..."
              onChange={(e) => handleSearch(e.target.value)}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append"></div>
            <br />
          </div>
          <h3 id="itemsTxt"></h3>
          <div className="col">
            <h1
              style={{
                textalign: "center",
                fontstyle: "strong",
                padding: "20px",
              }}
            >
              <center>
                <b>Your Reviews</b>
              </center>
            </h1>
            <hr style={{ width: "97%" }} />
            <br />
            <h2
              id="errortext"
              style={{ color: "red", textAlign: "center" }}
            ></h2>

            <div id="error"></div>
          </div>
          {abc.map((re, index) => {
            return (
              <div
                className="row"
                style={{
                  width: "100%",
                  padding: "20px 0px 20px 0px",
                  margin: "0px 0px 30px 2px",
                  backgroundColor: "white",
                  boxShadow: "2px 2px 2px 2px #dcdcdc",
                  borderRadius: "10px",
                  border: "red",
                }}
              >
                <div className="row">
                  <div className="col-4">
                    <img alt={p2} style={{ width: "80%",
                     padding:"10px 0px 0px 20px" 
                     }} src={"/Images/" + re.itemImage}/>
                  </div>

                  <div className="col">
                    <div className="col" style={{ fontSize: "20px" }}>
                      <span style={{ fontSize: "20px" }}>
                        <b>{re.itemName}</b>&emsp; - &emsp;{re.itemModel}
                      </span>
                      <br />
                      {/* <span style={{ fontSize: "18px" }}>
                        {re.itemDescription}
                      </span> */}

                      <div id={index + "stars"} class="card-text">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span> </span>
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{
                        width: "100%",
                        padding: "10px 0px 0px 10px",
                        fontSize: "17px",
                      }}
                    >
                      <div className="col">
                        <p style={{ fontSize: "16px" }}>{re.Review}</p>
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{
                        width: "100%",
                        padding: "30px 0px 10px 10px",
                        backgroundColor: "white",
                        fontSize: "24px",
                      }}
                    >
                      <div className="col">
                        <button
                          style={{ fontSize: "14px" }}
                          className="btn btn-success"
                          onClick={() => updatee(re.review_id)}
                          type="button"
                        >
                          Edit Review
                        </button>
                      </div>
                      <div className="col">
                        <button
                          style={{ fontSize: "14px" }}
                          onClick={() => deletee(re.review_id, index)}
                          className="btn btn-danger"
                          type="button"
                        >
                          Delete Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </center> */}
    </div>
  );
}
