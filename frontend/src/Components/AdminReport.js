import React, {useState, useEffect} from "react";
import axios from "axios";

import "../Css/msg.css";
// import g1 from "../images/avatar1.png";


export default function AdminReport(props){

	// const [review,setReview] = useState([]);

	let reviews = [];
	// let emails = [];
	let sellers = [];
	let sellerName = "";
	let sellerImage = "";
	let Review = "";
	let Report = "";
	let [abc, setabc] = useState([]);
	let reviewWithSeller = {
	  sellerName,
	  sellerImage,
	  Review,
	  Report,
	};
  
	let reviewWithSellers = [];
  
	useEffect(() => {
	  function getReview() {
		axios
		  .get("http://localhost:8070/review/get")
		  .then((res) => {
			reviews=(res.data);
			// const filter = res.data.filter(
			//   (selmsg) => selmsg.sellerid === "613b33772b517a0f50634c8e"
			// );
			// reviews = filter;
			console.log(reviews);
			axios
			  .get("http://localhost:8070/seller/get")
			  .then((res) => {
				sellers = res.data;
				createReview(reviews, sellers);
				console.log(sellers);
			  })
			  .catch((err) => {
				alert(err);
			  });
		  })
		  .catch((err) => {
			alert(err);
		  });
	  }
  
	  function createReview(reviews, sellers) {
		let j = 0;
		for (let i = 0; i < reviews.length; i++) {
		  j = 0;
		  for (j = 0; j < sellers.length; j++) {
			if (reviews[i].sellerid == sellers[j]._id) {
			  reviewWithSeller = {
				sellerName: sellers[j].ownername,
				sellerImage: sellers[j].logo,
				Review: reviews[i].description,
				Report: reviews[i].reportreason,
			  };
  
			  reviewWithSellers.push(reviewWithSeller);
			}
		  }
		}
  
		setabc(reviewWithSellers);
	  }
  
	  getReview();
	}, []);

// 	function deletee(id){
//     axios.delete("http://localhost:8070/review/delete/" + id).then((res) =>
//     {
//         // document.getElementById("txt").innerHTML = "Message Deleted!";
//         const afterDeleteReview = review.filter(review=>review._id != id);
//         setReview(afterDeleteReview);
//     }).catch((err) =>{
//         alert(err);
//     })
// }
// console.log(sellers)
 return(

<section className="rev">
	<div className="container-xl">
		<div className="table-responsive">
			<div className="table-wrapper">
				<div className="table-title">
							<h2><center><b>Seller Messages</b></center></h2>
				</div>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Owner Name</th>
							<th>Company Logo</th>
							<th>Customer Review</th>
							<th>Company Report</th>
							<th>Action</th>
						</tr>
					</thead>
					{abc.map((reviewss) => {
						return(

					<tbody>
						<tr>
							<td>{reviewss.sellerName}</td>
							{/* <td>
								<img src={"/Images/" +reviewss.sellerImage.Images[0]} className="img"/>
							</td> */}
							<td>{reviewss.Review}</td>
							<td>{reviewss.Report}</td>
							<td>
							<button className="button2" type="button">Remove</button>
							</td>
						</tr>
					</tbody>

					 )
					})}	

				</table>
			</div>
		</div>        
	</div>
</section>


 )

}





// 	const [contact,setContact] = useState([]);
// 	const [customer,setCustomer] = useState([]);
//     const [loads,setLoad] = useState(false);

//   useEffect(() =>{
//     function getContact(){
//         axios.get("http://localhost:8070/contact/get").then((res) =>
//         {
//             setContact(res.data);
//             console.log(res.data);
            
            
//         }).catch((err) =>{
//             alert(err);
//         })
//     }
   
//     getContact();

// 	function getCustomer(){
//         axios.get("http://localhost:8070/Customer/get").then((res) =>
//         {
//             setCustomer(res.data);
//             console.log(res.data);
            
            
//         }).catch((err) =>{
//             alert(err);
//         })
//     }
   
//     getCustomer();
   
// }, []);

// function deletee(id){
//     axios.delete("http://localhost:8070/contact/delete/" + id).then((res) =>
//     {
//         // document.getElementById("txt").innerHTML = "Message Deleted!";
//         const afterDeleteContact = contact.filter(contact=>contact._id != id);
//         setContact(afterDeleteContact);
//     }).catch((err) =>{
//         alert(err);
//     })
// }