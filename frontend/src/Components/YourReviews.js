// import React, {useState, useEffect } from "react";
// import axios from "axios";

// import "../CSS/yourreviews.css";
// import p2 from "../images/p3.jpg";



// export default function MyReviews(props){
	
// 	const [review,setReview] = useState([]);
// 	let [description,setDescription] = useState([]);
// 	let [date,setDate] = useState([]);
// 	let [noofstars,setNoofstars] = useState([]);
// 	let [customerid,setCustomerid] = useState([]);
// 	let [itemid,setItemid] = useState([]);
// 	let [reviewstatus,setReviewstatus] = useState([]);
// 	let [reportreason,setReportreason] = useState([]);
//     let [loads,setLoad] = useState(false);

//    useEffect(() =>{
//     function getReview(){

// 		const reviewId = props.match.params.id;
// 		console.log(reviewId);

//         axios.get("http://localhost:8070/review/get" + reviewId).then((res) =>
//         {
// 			console.log(res.data);
//             setDescription(res.data);
// 			setDate(res.data);
// 			setNoofstars(res.data);
// 			setItemid(res.data);
// 			setReviewstatus(res.data);
// 			setReportreason(res.data);
//             console.log(res.data);
            
            
//         }).catch((err) =>{
//             alert(err);
//         })
//     }
   
//     getReview();

// }, []);


// function deletee(id){
//     axios.delete("http://localhost:8070/review/delete/" + id).then((res) =>
//     {
//         document.getElementById("txt").innerHTML = "Message Deleted!";
//         const afterDeleteReview = review.filter(review=>review._id != id);
//         setReview(afterDeleteReview);
//     }).catch((err) =>{
//         alert(err);
//     })
// }

// // function updateReview(e){
 
// //     const ReviewId = props.match.params.id; 
// //     console.log(ReviewId);
   
// //     getsDetails();

// // 	if(content.length == 0){
// // 		alert("Cannot edit");
// // 		window.location.reload(true);
// // 	}
// // 	else{
// // 		const updatedReview={
// // 			description,
// // 			date,
// // 			noofstars,
// // 			reviewstatus,
// // 			reportreason,
// // 			customerid,
// // 			itemid
// // 		}
// // 	}
// // 	console.log(updatedReview);

// //     axios.put("http://localhost:8070/review/update/" + ReviewId,updateReview).then(()=>{
// //      alert("Review Updated Successfully!") ;
	 
// //       props.history.push("/allReviews");

// //     }).catch((err) =>{
// //       alert(err)
// //     })
// //   }

//  return(
// <div className="rev">
// <section id="testimonials">
// 	<div className="box">		
// 	<form>
// 			<div className="testimonial-heading">
// 				<h1>Your Reviews</h1>
// 			</div>			

// 			={review.map((review,index) =>{

// 			<h1 id = "txt"></h1>

// 			return(
// 				<div className="testimonial-box-container">
// 						<div class="testimonial-box">
// 							<div class="box-top">
// 								<div class="profile">

// 						{review.reviewitem.map((pack)=> {
//                             return(
// 								<div class="profile-img">
// 									<img src={`../images/${pack.itemimage}`} className="card-img-top"/>
// 								</div>
// 							)
// 							})
// 							}

// 							<div class="name-user">
// 							{review.reviewitem.map((pack)=> {
// 								return(
// 									<strong>{pack.name}</strong>
// 								)
// 								})
// 								}
	
										
// 										<div class="reviews">
// 											<i class="fas fa-star"></i>
// 											<i class="fas fa-star"></i>
// 											<i class="fas fa-star"></i>
// 											<i class="fas fa-star"></i>
// 											<i class="far fa-star"></i>
// 										</div>
// 										<div class="client-comment">
// 											<p>{review.description}</p>
// 										</div>
// 									</div>
									
// 								</div>
								
// 								<div class="name-user">
// 									<label>{review.date}</label>
// 								</div>
								
// 							</div>
							
							
							
// 							<div class="profile">	
// 								<div >
// 									<a href="#editEmployeeModal" class="edit" data-toggle="modal">
// 										<button class="button1" type="button">Edit Review</button>
// 									</a>
// 								</div>
// 								<div>
// 									<a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
// 										<button onClick = {()=> deletee(review._id)} class="button2" type="button">Delete Review</button>
// 									</a>	
// 								</div>
// 							</div>	
// 						</div>
// 						</div>	
// 				)
// 				})}	

			
			
			

// 		<div id="editEmployeeModal" class="modal fade">
// 			<div class="modal-dialog">
// 				<div class="modal-content">
// 					<form>
// 						<div class="modal-header">						
// 							<h4 class="modal-title">Edit Review</h4>
// 							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
// 						</div>
// 						<div class="modal-body">					
// 							<div class="form-group">
// 								<label>Re-write your review</label>
// 								<input type="text" class="form-control" required/>
// 							</div>					
// 						</div>
// 						<div class="modal-footer">
// 							<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
// 							<input type="submit" class="btn btn-info" value="Save"/>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>	
			
// 		<div id="deleteEmployeeModal" class="modal fade">
// 			<div class="modal-dialog">
// 				<div class="modal-content">
// 					<form>
// 						<div class="modal-header">						
// 							<h4 class="modal-title">Delete Review</h4>
// 							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
// 						</div>
// 						<div class="modal-body">					
// 							<p>Are you sure you want to delete the review</p>
// 							<p class="text-warning"><small>This action cannot be undone.</small></p>
// 						</div>
// 						<div class="modal-footer">
// 							<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
// 							<input type="submit" class="btn btn-danger" value="Delete"/>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div> 
// 		</form>
// 	</div>	
// </section>	
// </div>
//  )

// }


