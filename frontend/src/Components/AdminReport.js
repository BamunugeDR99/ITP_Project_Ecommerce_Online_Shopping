import React, {useState,useEffect} from "react";
import axios from "axios";


import "../CSS/msg.css";

export default function CustomerReviews(props){
    const [review,setReview] = useState([]);
    const [item,setItem] = useState([]);
    const [seller,setSeller] = useState([]);
    const [loads,setLoad] = useState(false);

    useEffect(() =>{
      function getReview(){
          axios.get("http://localhost:8070/review/getrev").then((res) =>
          {
              setReview(res.data);
              console.log(res.data);
              
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
      getReview();

     
  }, []);

  function deletee(id){
    axios.delete("http://localhost:8070/contact/delete/" + id).then((res) =>
    {
        document.getElementById("txt").innerHTML = "Message Deleted!";
        const afterDeleteReview = review.filter(review=>review._id != id);
        setReview(afterDeleteReview);
    }).catch((err) =>{
        alert(err);
    })
}

return(
<div className="rev">
<table className="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Item Name</th>
      <th scope="col">Item Image</th>
      <th scope="col">Seller name</th>
      <th scope="col">Seller report</th>
      <th scope="col">Customer review</th>
    </tr>
  </thead>

  {review.map((review,index) =>{

  <h1 id = "txt"></h1>

 return(
  <tbody>
    <tr>
      <td>{item.name}</td>
      <td><img class="img " src={require('../images/'+item.image).default}/></td>
      <td>{seller.name}</td>
      <td>{review.reportreason}</td>
      <th>{review.description}</th>
      <div>
		    <button onClick = {()=> deletee(review._id)} className="button2" type="button">Remove</button>
	   </div>
    </tr>
  </tbody>

)
        })}
 </table>
</div>
 )
}



