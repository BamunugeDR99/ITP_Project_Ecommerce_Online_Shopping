import React, { useState, useEffect } from "react";
import axios from "axios";

// import "../Css/yourreviews.css";
import p2 from "../images/p3.jpg";

export default function YourReviews(props) {

  const [review,setReview] = useState([]);
  const [description,setDescription] = useState("");
  const [updateReviewId,setupdateReviewId] = useState("");
  let reviews = [];
  let review_id = "";
  let items = [];
  let itemName = "";
  let itemImage = "";
  let itemDescription= "";
  let Review = "";
  let Date = "";
  let [abc, setabc] = useState([]);
  let reviewWithItem = {
    review_id,
    itemName,
    itemImage,
    itemDescription,
    Review,
    Date,
  };

  let reviewWithItems = [];
let objectId = "";
  useEffect(() => {
    function getReview() {
      objectId = localStorage.getItem("CustomerID");

      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          const filter = res.data.filter(
            (customerrev) =>
              customerrev.customerid === objectId
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
              review_id  : reviews[i]._id,
              itemName: items[j].Item_name,
              itemImage: items[j].Images[0],
              itemDescription: items[j].Description,
              Review: reviews[i].description,
              Date: reviews[i].date,
            };

            reviewWithItems.push(reviewWithItem);
            //console.log(reviewWithItem.review_id)
          }
        }
      }
      console.log(reviewWithItems)
      setabc(reviewWithItems);

      if(reviewWithItems.length==0){
        document.getElementById("errortext").innerHTML="No Reviews yet!"
        document.getElementById("error").innerHTML='<br><br><br><br><br><br><br><br><br><br>'
      }
      
      
    }

    getReview();
    // getCustomer();
  }, []);

  function deletee(id,index) {
 
    //let afterDelete = [];

      axios
        .delete("http://localhost:8070/review/delete/" + id)
        .then((res) => {
    
          let afterDelete = abc.splice(index,1);
          setabc(afterDelete);
        
        })
        .catch((err) => {
          alert(err);
        });
  }
  


    function updatee(e){

      e.preventDefault();

      const ReviewId = updateReviewId;
      //console.log(ReviewId);

      const newReview = {
        
        description,
        date : Date()
      }

      console.log(newReview);

      axios.put("http://localhost:8070/review/updateReview/" +ReviewId,newReview).then(()=>{

        setReview(" ");
        //props.history.push("/Home");
        //document.getElementById("txt").innerHTML = "Message Sended Successfully!";
        alert("Updated!");
        
        
      }).catch((err) =>{
        alert(err)
      })
    }


  return (
    // <div className="rev">
    //   <section id="testimonials">
    //     <div className="box">
          
    //         <div className="testimonial-heading">
    <div style={{padding:'20px 15px 10px 50px', width:'60%'}} className="container">    
    
    <div className="row" >

    <div className="col">
      
        <h1 style={{textalign: 'center',fontstyle: 'strong',padding:'20px'}}><center><b>Your Reviews</b></center></h1>
        <hr style={{width:'90%'}}/>
        <br/><br/>
        <h2 id="errortext" style={{color:'red', textAlign:'center'}}></h2>

        <div id="error"></div>
              {/* <h1>Your Reviews</h1> */}
    {/* <br/> */}

            </div>
            {abc.map((re,index) => {
              return (
                // <div className="testimonial-box-container">
                <div className="row" style={{width:'90%', padding:'10px 0px 10px 20px',margin:'0px 0px 20px 2px', backgroundColor:'white', boxShadow:'2px 2px 2px 2px #dcdcdc', borderRadius:'10px',border:'red'}}>
                    
                  {/* <div class="testimonial-box"> */}
                    {/* <div class="box-top"> */}
                    <div className="row">
                      {/* <div class="profile"> */}
                        {/* <div class="profile-img">*/}
                         <div className="col-2">
                          {/* <img src={`../images/{re.itemImage}`} className="card-img-top"/> */}
                        </div>

                        {/* <div class="name-user"> */}
                        <div className="col">
                              <strong>{re.itemName}</strong>
                              
                                <div style={{color: "#f9d71c"}}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                {/* <div class="client-comment">
                                  <p>{re.Review}</p>
                                </div> */}
                            {/* </div> */}
                         </div>
                         <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                            <div className="col">
                              <p>{re.Review}</p>
                            </div>
                          </div>

                          <div className="row" style={{width:'100%', padding:'10px 0px 0px 10px', backgroundColor:'white'}}>
                            <div className="col">
                            <div class="profile">
                                  <div>
                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                      <button class="button1" onClick = {()=>setupdateReviewId(re.review_id)} type="button">
                                        Edit Review
                                      </button>
                                    </a>
                                  </div>
                                  <div>
                                      <button  onClick = {()=>deletee(re.review_id,index)} class="button2" type="button">
                                        Delete Review
                                      </button>
                                    
                                  </div>
                                </div>
                            </div>
                          </div>

               
                    </div>

                    {/* <div class="profile">
                      <div>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                          <button class="button1" onClick = {()=>setupdateReviewId(re.review_id)} type="button">
                            Edit Review
                          </button>
                        </a>
                      </div>
                      <div>
                          <button  onClick = {()=>deletee(re.review_id,index)} class="button2" type="button">
                            Delete Review
                          </button>
                         
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
              );
            })}
    {/* dd */}
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
                        <input type="text" class="form-control" required onChange= {
                                (e)=>{
                                setDescription(e.target.value);
                                }
                              }/>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <input
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        value="Cancel"
                      />
                      <button  onClick = {(e)=>updatee(e)}  class="btn btn-info"  >Update</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

           
        </div>
     {/* </section> */}
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
