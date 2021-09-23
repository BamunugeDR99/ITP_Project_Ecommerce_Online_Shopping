import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

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
    let result;
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
   // displayRating();
     getItems();

    }, []);

    useEffect(() => {
      //displayStatus();
     calculateStarRating(1);

    })

    useEffect(() =>{
     //s displayStarRating();
    })

    function display(re,wi){

      for(let i = 0; i < wi.length; i++){
        for(let j = 0; j < re.length; j++){
            if(wi[i] == re[j]._id){
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

          if(items[i]._id == ratings[j].itemid){
            starCount += parseInt(ratings[j].noofstars);
          }

      }

      totalstarforRatingCount = totalNoRatings * 5;
      average = parseInt((starCount / totalstarforRatingCount) * 5);
      console.log(average);
      if(id == 1){
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

  /*function displayStarRating(id,totalAverage){
    let txt = "";
      if(isNaN(totalAverage)){
        txt = "No Ratings yet!";
       document.getElementById(id +'stars').innerHTML = txt;
      document.getElementById(id +'stars').style.color = "#FF0000";
      }else{

      for(let j = 0; j < totalAverage; j++){
        txt += '<span class="fa fa-star checked"></span>';
      }
      for(let j = 0; j < (5 - totalAverage); j++){
        txt += '<span class="fa fa-star"></span>';
      }

     document.getElementById(id +'stars').innerHTML = txt +'  '+ totalAverage + '.0 / 5.0';
     }
  }*/

  function more(num) {
    if (document.getElementById(num).innerHTML == "") {
      document.getElementById(num).innerHTML =
        "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.";
      document.getElementById("showBtn").innerHTML = "Minimize";
    } else {
      document.getElementById(num).innerHTML = "";
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
                    <h5 class="card-title">{itemss.Item_name}</h5>
                    <div  id = {index +'stars'} class="card-text">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span> </span> <span id = {index +'review'} >4.0 / 5.0</span>
                    </div>
                    <p class="card-text">
                      <b>{itemss.Price}</b>
                    </p>
                    <p class="card-text" id = {"i"+index}>Item status</p>
                    <a href="#" class="btn btn-danger ">
                      Remove from list
                    </a>{" "}
                    <span> </span>
                    <button class="btn btn-success">Add to cart</button>{" "}
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
                <div id="w1"></div>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}
