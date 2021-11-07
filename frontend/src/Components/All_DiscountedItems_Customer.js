import React, { useState, useEffect } from "react"; //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import "../Css/AllItems.css";

import Swal from "sweetalert2";

export default function AllDiscountedItems(props) {
  const [items, setItems] = useState([]); //Defines that items is an array
  let fitems = [];
  const [ratings, setRatings] = useState([]);
 

 // const [wishlist, setWishList] = useState();

  //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
  useEffect(() => {
    //function to getItems
    function getItems() {
      //call a backend URL using axios
      axios
        .get("https://tech-scope-online.herokuapp.com/items/getItems")
        .then((res) => {
          console.log(res.data);
          setItems(res.data.filter((item) => item.DiscountStatus === true && item.ItemAvailabilityStatus === true));

          fitems = items;
          console.log(fitems);
        })
        .catch((err) => {
          alert(err.message);
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
    calculateStarRating();
  });








  function calculateStarRating() {
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
        if (items[i]._id === ratings[j].itemid) {
          totalNoRatings++;
        }

        if (items[i]._id === ratings[j].itemid) {
          starCount += parseInt(ratings[j].noofstars);
        }
      }

      totalstarforRatingCount = totalNoRatings * 5;
      average = parseInt((starCount / totalstarforRatingCount) * 5);
      console.log(average);
      displayStarRating(i, average);
    }
  }

  function displayStarRating(id, totalAverage) {
    let txt = "";
    if (isNaN(totalAverage)) {
      txt = "No Ratings yet!";
      document.getElementById(id + "stars").innerHTML = txt;
      //  document.getElementById(id +'stars').style.color = "#FF0000";
    } else {
      for (let j = 0; j < totalAverage; j++) {
        txt += '<span class="fa fa-star checked"></span>';
      }
      for (let j = 0; j < 5 - totalAverage; j++) {
        txt += '<span class="fa fa-star"></span>';
      }

      document.getElementById(id + "stars").innerHTML =
        txt + "  " + totalAverage + ".0 / 5.0";
    }
  }

  //search
  function filterContent(data, userSearch) {
    let result = data.filter(
      (post) =>
        post.Item_name.toLowerCase().includes(userSearch.toLowerCase()) &&
        post.DiscountStatus === true
    );

    console.log(result);

    setItems(result);

    if (result !== null) {
     //
     document.getElementById("itemsTxt").innerHTML = "";
    }

    if (result.length === 0) {
      //alert("d");
     //
     document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }
  }

  // search
  function handleSearch(e) {

    document.getElementById("itemsTxt").innerHTML = "";
    let userSearch = e;
    console.log(userSearch);

    axios
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {

        let filteredData = res.data.filter((item) => item.DiscountStatus === true && item.ItemAvailabilityStatus === true)

        filterContent(filteredData, userSearch);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function goToPackages() {
    props.history.push("/Customer/Packages");
  }

  function goToDisItems() {
    props.history.push("/Customer/DiscountedItems");
  }






  //Add to wishList
  function addToWishlist(itemId) {
    // already added check
    let customerID = localStorage.getItem("CustomerID");
    let newItems = []; /// Change this later
    // let Items = [];
    let ItemID = "";
    axios
      .post("https://tech-scope-online.herokuapp.com/wishlist/getByCustomerID/" + customerID)
      .then((res) => {
        console.log(res.data.wishlistss.Items);
        ItemID = res.data.wishlistss._id;
        newItems = res.data.wishlistss.Items;
        //let CustomerIDs = res.data.wishlistss.CustomerID;
        // console.log(CustomerIDs)
        let falgs = 0;
        for (let i = 0; i < newItems.length; i++) {
          if (newItems[i] === itemId) {
            falgs = 1;
          }
        }
        newItems.push(itemId);
        console.log(newItems);
        let newWishList = {
          CustomerID: customerID,
          Items: newItems,
        };
        console.log(newWishList);
        if (falgs === 0) {
          axios
            .put("https://tech-scope-online.herokuapp.com/wishlist/update/" + ItemID, newWishList)
            .then(() => {
              //alert("Student Updated");
              // document.getElementById("itemsTxt").innerHTML =
              //"Item added to your Wishlist!";

              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Item has been added to your wishlist!",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              alert(err);
            });
        } else if (falgs === 1) {

          Swal.fire("Item Already in Your Wishlist.");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }




  //Add to Cart
  function addToCart(id) {
    /// complete this
    console.log(id);
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
                if (newwItems[i] === id) {
                  falgs = 1;
                }
              }
              newwItems.push(id);
              console.log(newwItems);

              const updatedCart = {
                customerID: CustomerID,
                PackageIDs: packages,
                ItemIDs: newwItems
              }


              if (falgs === 0) {
                axios
                  .put(
                    "https://tech-scope-online.herokuapp.com/ShoppingCart/updateSItem/" +
                    cartID,
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



  //View More
  function RedirectedReviews(id) {
    props.history.push("/Customer/ItemDetails/" + id);
  }

  return (
    <div className="OffersnPacks">
      <br />
      <br />
      <br />
      <button
        type="button"
        class="btn btn-primary "
        style={{ float: "right" }}
        id="GPackageBtn"
        onClick={goToPackages}
      >
        Promo Packages
      </button>
      <button
        type="button"
        class="btn btn-primary "
        style={{ float: "right" }}
        id="GDisItemsBtn"
        onClick={goToDisItems}
      >
        Discounted Items
      </button>
      <h1 style={{ color: "black", marginLeft: "18rem" }}>
        All Discounted Items
      </h1>{" "}
      <br />
      <div className="container">
        <div>
          <input
            class="form-control"
            type="text"
            placeholder="Search Item By Name"
            aria-label="Search"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <br></br>

          <h3
          id="itemsTxt"
          style={{ textAlign: "center", color: "#FF0000" }}
        ></h3>
          <div className="row">
            {items.map((item, index) => {
              return (
                <div className="col-sm-4">
                  <div className="card" style={{ width: "20rem" }}>
                    <div className="container-fluid" style={{ padding: "0px" }}>

                      <img
                        className="img-responsive center-block header1"
                        src={"/Images/" + item.Images[0]}
                        width="300px"
                        height="290px"
                        alt = "Discounted Item Img"
                      />
                      <div className="innertag" id="disPercentage">
                        <label className="innertag" id="disPercentage">
                          <b>-{item.DiscountPrecentage}%</b>
                        </label>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="cardText">
                        <p>
                          <b>{item.Item_name}</b>
                        </p>
                        <div id={index + "stars"} class="card-text">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span> </span>{" "}
                          <span id={index + "review"}>4.0 / 5.0</span>
                        </div>

                        <p style={{ color: 'orange' }}>
                          <b>Rs.
                            {item.FinalPrice}.00</b>
                        </p>
                        <p className="iPrice" style={{ padding: "0px", color: 'red' }}>
                          {" "}
                          Rs.{item.Price}.00
                        </p>
                      </div>

                      <br />
                     
                      <button
                        class="btn btn-primary" style={{marginTop : '10px'}}
                        onClick={() => addToWishlist(item._id)}
                      >
                        Add to Wishlist
                      </button>
                      <span> </span> 
                      <button
                        class="btn btn-success" style={{marginTop : '10px'}}
                        onClick={() => addToCart(item._id)}
                      >
                        Add to cart
                      </button>
                      <span> </span> 
                      <br />
                      {/* Center a button inside the div tag */}
                      <div className="text-center">
                      <button
                        class="btn btn-success " style={{marginTop : '10px'}}
                        onClick={() => RedirectedReviews(item._id)}
                      >
                        Show more
                      </button>
                      </div>








                    </div>
                  </div>
                  <br></br>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
