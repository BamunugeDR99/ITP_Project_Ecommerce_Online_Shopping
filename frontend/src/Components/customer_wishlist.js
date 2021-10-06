import axios from "axios";
import React, { useState, useEffect,radix } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Customer_wishlist(props) {
    let [items,setItems] = useState([]);
    const [ratings, setRatings] = useState([]);
    let itemIDs = [];
    let itemID = "";
    let averageRating = "";
    let itemWithRatings = {
      itemID,
      averageRating
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
          .post("http://localhost:8070/wishlist/getByCustomerID/"+ objectID)
          .then((res) => {
           // console.log(res.data);

        
                
            wishlist = res.data.wishlistss;

            console.log(wishlist.Items);
   




            axios
            .get("http://localhost:8070/items/getItems")
            .then((res) => {
              
              let result2 = res.data;
                 
  
              //items = newItems;
                //setItems(res.data)          
              display(result2,wishlist.Items);
            })
            .catch((err) => {
              alert(err);
            });
          })
          .catch((err) => {
            alert(err);
          });


         

       
      }

       function displayRating(){
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
    displayRating();
     getItems();

    }, []);

    useEffect(() => {
      //displayStatus();
     calculateStarRating(1);

    })

    useEffect(() =>{
     //displayStarRating();
    })

    function display(re,wi){

      for(let i = 0; i < wi.length; i++){
        for(let j = 0; j < re.length; j++){
            if(wi[i] === re[j]._id){
              newItems.push(re[j]);
            }
        }
    }

    console.log(newItems);
 
    setItems(newItems);

    }

  function calculateStarRating(id){
    let totalNoRatings = 0;
    let totalstarforRatingCount = 0;
    let starCount = 0;
    let average = 0;

    for(let i = 0; i < items.length; i++){

      totalNoRatings = 0;
      totalstarforRatingCount = 0;
      starCount = 0;
      average = 0;

      for(let j = 0; j < ratings.length; j++){
          if(items[i]._id == ratings[j].itemid){
            totalNoRatings++;
          }

          if(items[i]._id === ratings[j].itemid){
            starCount += parseInt(ratings[j].noofstars);
          }

      }

      totalstarforRatingCount = totalNoRatings * 5;
      average = parseInt((starCount / totalstarforRatingCount) * 5,radix);
      console.log(average);
      if(id === 1){
      //displayStarRating(i,average);
      }
      itemWithRatings = {
        itemID : items[i]._id,
        averageRating :average
      }
      itemsWithRatings.push(itemWithRatings);
      console.log(itemsWithRatings);

    }

  }


  function addToWishlist(itemId) {
    // already added check
    let customerID = localStorage.getItem("CustomerID");
    let newItems = []; /// Change this later
    let Items = [];
    let ItemID = "";
    axios
      .post("http://localhost:8070/wishlist/getByCustomerID/" + customerID)
      .then((res) => {
        console.log(res.data.wishlistss.Items);
        ItemID = res.data.wishlistss._id;
        newItems = res.data.wishlistss.Items;
        //let CustomerIDs = res.data.wishlistss.CustomerID;
        // console.log(CustomerIDs)
        let falgs = 0;
        for (let i = 0; i < newItems.length; i++) {
          if (newItems[i] == itemId) {
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
        if (falgs == 0) {
          axios
            .put("http://localhost:8070/wishlist/update/" + ItemID, newWishList)
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
        } else if (falgs == 1) {

          Swal.fire("Item Already in Your Wishlist.");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }


  function remove(id){

    axios
    .delete("http://localhost:8070/wishlist/delete/" + id) 
    .then((res) => {
     


      const afterDeletewishlist = items.filter(
        (a) => a._id != id
      );

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
          return(
          <div class="col-sm-6">
            <br />
            <div class="card">
              <div class="row no-gutters">
                <div class="col-sm-5" style={{ background: "#ffffff" }}>
                  <img
                    src={"/Images/iphone-x-.jpg"}
                    class="card-img-top h-100"
                    style={{ width: "250px" }}
                    alt="..."
                  />
                </div>
                <div class="col-sm-7">
                  <div class="card-body">
                    <h5 class="card-title">{itemss.Brand} {itemss.Item_name}</h5>
                    <h5 class="card-title">{itemss.Specification}</h5>
                    <p class="card-text">
                      <b>LKR {itemss.Price}</b>
                    </p>
                    <p class="card-text" id = {"i"+index}></p>
                    
                    <button class = "btn btn-danger" onClick={() => remove(itemss._id)}>  Remove from list</button>
                    {" "}
                    <span> </span>
                    <button class="btn btn-success" onClick={() => addToWishlist(itemss._id)} >Add to cart</button>{" "}
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
                <div id={index} hidden>{itemss.Description}</div>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}
