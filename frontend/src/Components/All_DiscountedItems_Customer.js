import React, { useState, useEffect } from "react"; //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import "../Css/AllItems.css";
import go from "./../images/go.jfif";
export default function AllDiscountedItems(props) {
  const [items, setItems] = useState([]); //Defines that items is an array
  let fitems = [];
  const [ratings, setRatings] = useState([]);
  const [loads, setLoad] = useState(false);

  let [ItemsArrr,setItemsArrr] = useState([]);

  //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
  useEffect(() => {
    //function to getItems
    function getItems() {
      //call a backend URL using axios
      axios
        .get("http://localhost:8070/items/getItems")
        .then((res) => {
          console.log(res.data);
          setItems(res.data.filter((item) => item.DiscountStatus === true && item.ItemAvailabilityStatus == true));

          fitems = items;
          console.log(fitems);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    function displayRating() {
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          setRatings(res.data);
          //console.log(ratings[0].itemid)
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }



      //Get Cart
      function getCart(){

      
        const customerId= "6144a56b88cbe1257c8a887b";
    
        axios.get("http://localhost:8070/ShoppingCart/getOneCart/" + customerId).then((res) => {
    
          console.log("====================CART=======================");
          console.log(res.data);
          setItemsArrr(res.data.ItemIDs);
    
    
        }).catch((err)=> {
    
          console.log(err);
        })


      }
















    displayRating();
    getItems();
    getCart();

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
        if (items[i]._id == ratings[j].itemid) {
          totalNoRatings++;
        }

        if (items[i]._id == ratings[j].itemid) {
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

    if (result != null) {
      setLoad(false);
      //document.getElementById("txt2").innerHTML = "";
    }

    if (result.length == 0) {
      //alert("d");
      setLoad(true);
      //document.getElementById("txt2").innerHTML = "No Result Found!";
    }
  }

  // search
  function handleSearch(e) {
    let userSearch = e;
    console.log(userSearch);

    axios
      .get("http://localhost:8070/items/getItems")
      .then((res) => {
        filterContent(res.data, userSearch);
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




   function addToCart(id){

    const customerId= "6144a56b88cbe1257c8a887b";

    console.log(id);
    console.log(ItemsArrr); 
    
    ItemsArrr.push(id);
    console.log(ItemsArrr); 

    //Add(ItemsArrr, customerId);

  }





function Add(ItemIDArr, customerId){

  axios.put("http://localhost:8070/ShoppingCart/updateCartItems/" + customerId, ItemIDArr).then((res) => {

    alert("Added to Cart");      

}).catch((err) => {

    console.log(err);
})


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

          <div className="row">
            {items.map((item, index) => {
              return (
                <div className="col-sm-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="container-fluid" style={{ padding: "0px" }}>
                      
                      <img
                        className="img-responsive center-block header1"
                        src={"/Images/" + item.Images[0]}
                        width="286px"
                        height="250px"
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

                        <p>
                          <b>Rs.</b>
                          {item.FinalPrice}.00
                        </p>
                        <p className="iPrice" style={{ padding: "0px" }}>
                          {" "}
                          Rs.{item.Price}.00
                        </p>
                      </div>

                      <button
                        class="btn btn-success" 
                        onClick={() => addToCart(item._id)} >
                        Add to cart
                      </button>
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
