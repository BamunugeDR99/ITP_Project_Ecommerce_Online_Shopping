import React, { useState, useEffect } from "react";
import axios from "axios";

import "../CSS/yourreviews.css";
import p2 from "../images/p3.jpg";

export default function YourReviews(props) {
  let reviews = [];
  let items = [];
  let itemName = "";
  let itemImage = "";
  let Review = "";
  let [abc, setabc] = useState([]);
  let reviewWithItem = {
    itemName,
    itemImage,
    Review,
  };

  let reviewWithItems = [];

  useEffect(() => {
    function getReview() {
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          const filter = res.data.filter(
            (customerrev) =>
              customerrev.customerid === "613b4f1a73eceb40702affe6"
          );
          reviews = filter;
          axios
            .get("http://localhost:8070/items/getItems")
            .then((res) => {
              items = res.data;
              createReview(reviews, items);
            })
            .catch((err) => {
              alert(err);
            });
        })
        .catch((err) => {
          alert(err);
        });
    }

    function createReview(reviews, items) {
      let j = 0;
      for (let i = 0; i < reviews.length; i++) {
        j = 0;
        for (j = 0; j < items.length; j++) {
          if (reviews[i].itemid == items[j]._id) {
            reviewWithItem = {
              itemName: items[j].Item_name,
              itemImage: items[j].Images[0],
              Review: reviews[i].description,
            };

            reviewWithItems.push(reviewWithItem);
          }
        }
      }
      console.log(reviewWithItems)
      setabc(reviewWithItems);
    }

    getReview();
    // getCustomer();
  }, []);

  function deletee(id) {
    //   axios
    //     .delete("http://localhost:8070/review/delete/" + id)
    //     .then((res) => {
    //       document.getElementById("txt").innerHTML = "Message Deleted!";
    //       const afterDeleteReview = review.filter((review) => review._id != id);
    //       setReview(afterDeleteReview);
    //     })
    //     .catch((err) => {
    //       alert(err);
    //     });
  }

  // function updateReview(e){

  //     const ReviewId = props.match.params.id;
  //     console.log(ReviewId);

  //     getsDetails();

  // 	if(content.length == 0){
  // 		alert("Cannot edit");
  // 		window.location.reload(true);
  // 	}
  // 	else{
  // 		const updatedReview={
  // 			description,
  // 			date,
  // 			noofstars,
  // 			reviewstatus,
  // 			reportreason,
  // 			customerid,
  // 			itemid
  // 		}
  // 	}
  // 	console.log(updatedReview);

  //     axios.put("http://localhost:8070/review/update/" + ReviewId,updateReview).then(()=>{
  //      alert("Review Updated Successfully!") ;

  //       props.history.push("/allReviews");

  //     }).catch((err) =>{
  //       alert(err)
  //     })
  //   }
{/* <div></div> */}
  return (
    <div className="rev">
      <section id="testimonials">
        <div className="box">
          <form>
            <div className="testimonial-heading">
              <h1>Your Reviews</h1>
            </div>

            {abc.map((reviewss) => {
              return (
                <div className="testimonial-box-container">
                  <div class="testimonial-box">
                    <div class="box-top">
                      <div class="profile">
                        <div class="profile-img">
                          {/* <img src={`../images/${reviewss.itemImage}`} className="card-img-top"/> */}
                        </div>

                        <div class="name-user">
                          <strong>{reviewss.itemName}</strong>

                          <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <div class="client-comment">
                            <p>{reviewss.Review}</p>
                          </div>
                        </div>
                      </div>

                      {/* <div class="name-user">
									<label>{reviewss.date}</label>
								</div> */}
                    </div>

                    <div class="profile">
                      <div>
                        <a
                          href="#editEmployeeModal"
                          class="edit"
                          data-toggle="modal"
                        >
                          <button class="button1" type="button">
                            Edit Review
                          </button>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#deleteEmployeeModal"
                          class="delete"
                          data-toggle="modal"
                        >
                          <button
                            onClick={() => deletee(reviewss._id)}
                            class="button2"
                            type="button"
                          >
                            Delete Review
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div id="editEmployeeModal" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form>
                    <div class="modal-header">
                      <h4 class="modal-title">Edit Review</h4>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <label>Re-write your review</label>
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <input
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        value="Cancel"
                      />
                      <input type="submit" class="btn btn-info" value="Save" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div id="deleteEmployeeModal" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form>
                    <div class="modal-header">
                      <h4 class="modal-title">Delete Review</h4>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Are you sure you want to delete the review</p>
                      <p class="text-warning">
                        <small>This action cannot be undone.</small>
                      </p>
                    </div>
                    <div class="modal-footer">
                      <input
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        value="Cancel"
                      />
                      <input
                        type="submit"
                        class="btn btn-danger"
                        value="Delete"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    /* <Modal
        animation={true}
        isOpen={modelOpen}
        onRequestClose={modalClose}
        // style={{
        // display: "flex",
        // overlay: {
        //   backgroundColor: "black",
        //   opacity: "0.9",
        // },
        // content: {
        //   width: "800px",
        //   height: "450px",
        //   margin: "auto",
        // },
        // }}
        style={
          (ModelCss,
          {
            display: "flex",
            overlay: {
              backgroundColor: "black",
              opacity: "0.9",
              width: "1200px",
              height: "650px",
              margin: "auto",
            },
            content: {
              width: "800px",
              height: "450px",
              margin: "auto",
            },
          })
        }
      >
        <div className="row">
          <div
            className="model-header col-md-6"
            style={{
              overflowY: "initial",
            }}
          >
            <FoodDetails
              name={props.name}
              price={props.price}
              id={props.foodID}
              description={props.description}
              image={props.image}
            />
            <div className="row">
              <div className="col-md-5">
                <button
                  onClick={toogleOrderStatusHandler}
                  className="btn btn-primary"
                >
                  {isOrderd ? "Cancel order" : "Order now"}
                </button>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <button onClick={modalClose} className="btn btn-danger">
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="model-body col-md-6">
            <div
              style={{
                height: "350px",
                overflowY: "scroll",
              }}
            >
              
                  <FoodComment
                    userID={post.userID}
                    foodID={post.foodID}
                    comment={post.comment}
                  />
                </div>
            </div>

            <SendComment foodID={props.id} />
          </div>
        </div>
      </Modal> */
  );
}
