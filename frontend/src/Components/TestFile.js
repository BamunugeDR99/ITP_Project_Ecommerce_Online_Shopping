import React, {useState, useEffect, useCallback } from "react";
import axios from "axios";

// import "../CSS/yourreviews.css";
import p2 from "../images/p3.jpg";



export default function TestFile(props){
	
  let [review, setReview] = useState([]);
  let re = [];
  const [itemtest, setItemtest] = useState([]);
  let [item, setItem] = useState([]);
  let items = [];
  let itemName = "";
  let itemImage = "";
  let Review = "";
  let [abc, setabc] = useState([]);
  let reviewWithItem = {

    itemName,
    itemImage,
    Review
  
} 

  let reviewWithItems = [];



  useEffect(() => {
    function getReview() {
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          //setReview(res.data);
          const filter = res.data.filter(
            (customerrev) => customerrev.customerid === "613b4f1a73eceb40702affe6"
          );
         // review = setReview(filter);
          re = filter;
         console.log(re.length);
        console.log(re);

          for (let i = 0; i < re.length; i++) {
            console.log("sdf");
            let itemid = re[i].itemid;
            // console.log(itemid);
      
            axios
              .get("http://localhost:8070/items/get/" + itemid)
              .then((res) => {
                // console.log(res.data);
      
                reviewWithItem = {
                    itemName : res.data.Item_name,
                    itemImage : res.data.Images[0],
                    Review : re[i].description
                }    
      
                // console.log(reviewWithCustomer);
                reviewWithItems.push(reviewWithItem);
                console.log(reviewWithItems);
              console.log(abc)
              // asbc = reviewWithItems;
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

    function addReview(){
      setabc(reviewWithItems);
    }

    getReview();
    addReview();
 
  },[]);


function deletee(id){
    axios.delete("http://localhost:8070/review/delete/" + id).then((res) =>
    {
        document.getElementById("txt").innerHTML = "Message Deleted!";
        const afterDeleteReview = review.filter(review=>review._id != id);
        setReview(afterDeleteReview);
    }).catch((err) =>{
        alert(err);
    })
}



 return(
    <div>
			{abc.map((reviewss) =>{

			return(
				<div>
                    <h1>d</h1>
                </div>
            )

        }   )}
        </div>    
)}

