import axios from "axios";
import React, { useState, useEffect, radix } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Customer_wishlist(props) {
  let [items, setItems] = useState([]);
  const [ratings, setRatings] = useState([]);
  let itemIDs = [];
  let itemID = "";
  let averageRating = "";
  let itemWithRatings = {
    itemID,
    averageRating,
  };
  let itemsWithRatings = [];
  let objectID = "";
  let newItems = [];
  // let result;
  let wishlist;
  useEffect(() => {
    async function getItems() {
      //change url
      objectID = localStorage.getItem("CustomerID");
      axios
        .post("https://tech-scope-online.herokuapp.com/wishlist/getByCustomerID/" + objectID)
        .then((res) => {
          // console.log(res.data);

          wishlist = res.data.wishlistss;

          console.log(wishlist.Items);

          axios
            .get("https://tech-scope-online.herokuapp.com/items/getItems")
            .then((res) => {
              let result2 = res.data;

              //items = newItems;
              //setItems(res.data)
              display(result2, wishlist.Items);
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
    getItems();
  }, []);

  useEffect(() => {
    //displayStatus();
    calculateStarRating(1);
  });

  useEffect(() => {
    //displayStarRating();
  });

  function display(re, wi) {
    for (let i = 0; i < wi.length; i++) {
      for (let j = 0; j < re.length; j++) {
        if (wi[i] === re[j]._id) {
          newItems.push(re[j]);
        }
      }
    }

    console.log(newItems);

    setItems(newItems);
  }

  function calculateStarRating(id) {
    let totalNoRatings = 0;
    let totalstarforRatingCount = 0;
    let starCount = 0;
    let average = 0;

    for (let i = 0; i < items.length; i++) {
      totalNoRatings = 0;
      totalstarforRatingCount = 0;
      starCount = 0;
      average = 0;

      for (let j = 0; j < ratings.length; j++) {
        if (items[i]._id == ratings[j].itemid) {
          totalNoRatings++;
        }

        if (items[i]._id === ratings[j].itemid) {
          starCount += parseInt(ratings[j].noofstars);
        }
      }

      totalstarforRatingCount = totalNoRatings * 5;
      average = parseInt((starCount / totalstarforRatingCount) * 5, radix);
      console.log(average);
      if (id === 1) {
        //displayStarRating(i,average);
      }
      itemWithRatings = {
        itemID: items[i]._id,
        averageRating: average,
      };
      itemsWithRatings.push(itemWithRatings);
      console.log(itemsWithRatings);
    }
  }

  function addToCart(id) {
    /// complete this
    axios
      .get("https://tech-scope-online.herokuapp.com/items/get/" + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.ItemAvailabilityStatus === false) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Item is not available Right now!",
          });
        } else {
          let CustomerID = localStorage.getItem("CustomerID");

          // https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/:id
          axios
            .get("https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/" + CustomerID)
            .then((res) => {
              let cartID = res.data._id;
              console.log(res.data);
              let packages = res.data.PackageIDs;
              let newwItems = res.data.ItemIDs;

              let falgs = 0;
              for (let i = 0; i < newwItems.length; i++) {
                if (newwItems[i] == id) {
                  falgs = 1;
                }
              }
              newwItems.push(id);
              console.log(newwItems);

              const updatedCart = {
                customerID: CustomerID,
                PackageIDs: packages,
                ItemIDs: newwItems,
              };

              if (falgs === 0) {
                axios
                  .put(
                    "https://tech-scope-online.herokuapp.com/ShoppingCart/updateSItem/" + cartID,
                    updatedCart
                  )
                  .then((res) => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Item added to cart Successfully!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  })
                  .catch((err) => {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Please try again!",
                    });
                  });
              } else if (falgs === 1) {
                Swal.fire("Item Already in Your Shopping Cart.");
              }
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


  // function addToWishlist(itemId) {
  //   // already added check
  //   let customerID = localStorage.getItem("CustomerID");
  //   let newItems = []; /// Change this later
  //   let Items = [];
  //   let ItemID = "";
  //   axios
  //     .post("https://tech-scope-online.herokuapp.com/wishlist/getByCustomerID/" + customerID)
  //     .then((res) => {
  //       console.log(res.data.wishlistss.Items);
  //       ItemID = res.data.wishlistss._id;
  //       newItems = res.data.wishlistss.Items;
  //       //let CustomerIDs = res.data.wishlistss.CustomerID;
  //       // console.log(CustomerIDs)
  //       let falgs = 0;
  //       for (let i = 0; i < newItems.length; i++) {
  //         if (newItems[i] == itemId) {
  //           falgs = 1;
  //         }
  //       }
  //       newItems.push(itemId);
  //       console.log(newItems);
  //       let newWishList = {
  //         CustomerID: customerID,
  //         Items: newItems,
  //       };
  //       console.log(newWishList);
  //       if (falgs == 0) {
  //         axios
  //           .put("https://tech-scope-online.herokuapp.com/wishlist/update/" + ItemID, newWishList)
  //           .then(() => {
  //             //alert("Student Updated");
  //             // document.getElementById("itemsTxt").innerHTML =
  //             //"Item added to your Wishlist!";

  //             Swal.fire({
  //               position: "center",
  //               icon: "success",
  //               title: "Your Item has been added to your wishlist!",
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //           })
  //           .catch((err) => {
  //             alert(err);
  //           });
  //       } else if (falgs == 1) {
  //         Swal.fire("Item Already in Your Wishlist.");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }

  function remove(id) {
   
    axios
      .put("https://tech-scope-online.herokuapp.com/wishlist/update/" + id,)
      .then((res) => {

        
        const afterDeletewishlist = items.filter((a) => a._id != id);

        setItems(afterDeletewishlist);
      })
      .catch((err) => {
        alert(err);
      });
  }
  function more(num) {
    if (document.getElementById(num).hidden == true) {
      document.getElementById(num).hidden = false;

      document.getElementById("showBtn").innerHTML = "Minimize";
    } else {
      document.getElementById(num).hidden = true;
      document.getElementById("showBtn").innerHTML = "show more";
    }
  }
  return (
    <div>
      <div class="row">
        {items.map((itemss, index) => {
          return (
            <div class="col-sm-6">
              <br />
              <div class="card">
                <div class="row no-gutters">
                  <div class="col-sm-5" style={{ background: "#ffffff" }}>
                    <img
                       src={"/Images/" + itemss.Images[0]}
                      class="card-img-top h-100"
                      style={{ width: "220px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title"><b>
                        {itemss.Brand} {itemss.Item_name}
                      </b></h5>
                      <h6 class="card-title" style = {{fontSize : "12px"}}>{itemss.Specification}</h6>
                      <p class="card-text">
                        <b>LKR {itemss.Price}</b>
                      </p>
                      <p class="card-text" id={"i" + index}></p>
                      <button
                        class="btn btn-danger"
                        onClick={() => remove(itemss._id)}
                      >
                        {" "}
                        Remove from list
                      </button>{" "}
                      <span> </span>
                      <button
                        class="btn btn-success"
                        onClick={() => addToCart(itemss._id)}
                      >
                        Add to cart
                      </button>{" "}
                      <span></span>
                      <br />
                      <br />
                      <span></span>
                      <button
                        id="showBtn"
                        class="btn btn-primary"
                        onClick={() => more(index)}
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                  <div id={index} hidden>
                    {itemss.Description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
