// import React, {useState, useEffect} from "react";
// import axios from "axios";

// import "../CSS/msg.css";
// // import g1 from "../images/avatar1.png";


// export default function SellermMsg(props){

// 	const [contactsel,setContactsel] = useState([]);

// 	let contactsels = [];
// 	// let emails = [];
// 	let customers = [];
// 	let customerName = "";
// 	let customerImage = "";
// 	let Contactsel = "";
// 	let Email = "";
// 	let [abc, setabc] = useState([]);
// 	let contactselWithCustomer = {
// 	  customerName,
// 	  customerImage,
// 	  Contactsel,
// 	  Email,
// 	};
  
// 	let contactselWithCustomers = [];
  
// 	useEffect(() => {
// 	  function getContactsel() {
// 		axios
// 		  .get("http://localhost:8070/contactsel/get")
// 		  .then((res) => {
// 			contactsels=(res.data);
// 			const filter = res.data.filter(
// 			  (selmsg) => selmsg.sellerid === "6120b61011f8374ae1fa904f"
// 			);
// 			contactsels = filter;
// 			console.log(contactsels);
// 			axios
// 			  .get("http://localhost:8070/Customer/getAll")
// 			  .then((res) => {
// 				customers = res.data;
// 				createContactsel(contactsels, customers);
// 				console.log(customers);
// 			  })
// 			  .catch((err) => {
// 				alert(err);
// 			  });
// 		  })
// 		  .catch((err) => {
// 			alert(err);
// 		  });
// 	  }
  
// 	  function createContactsel(contactsels, customers) {
// 		let j = 0;
// 		for (let i = 0; i < contactsels.length; i++) {
// 		  j = 0;
// 		  for (j = 0; j < customers.length; j++) {
// 			if (contactsels[i].customerid == customers[j]._id) {
// 			  contactselWithCustomer = {
// 				customerName: customers[j].firstName,
// 				customerImage: customers[j].userImage,
// 				Contactsel: contactsels[i].message,
// 				Email: contactsels[i].email,
// 			  };
  
// 			  contactselWithCustomers.push(contactselWithCustomer);
// 			}
// 		  }
// 		}
  
// 		setabc(contactselWithCustomers);
// 	  }
  
// 	  getContactsel();
// 	}, []);

// 	function deletee(id){
//     axios.delete("http://localhost:8070/contactsel/delete/" + id).then((res) =>
//     {
//         // document.getElementById("txt").innerHTML = "Message Deleted!";
//         const afterDeleteContactsel = contactsel.filter(contactsel=>contactsel._id != id);
//         setContactsel(afterDeleteContactsel);
//     }).catch((err) =>{
//         alert(err);
//     })
// }

//  return(

// <section className="rev">
// 	<div className="container-xl">
// 		<div className="table-responsive">
// 			<div className="table-wrapper">
// 				<div className="table-title">
// 							<h2><center><b>Customer Messages</b></center></h2>
// 				</div>
// 				<table className="table table-striped table-hover">
// 					<thead>
// 						<tr>
// 							<th>Customer Name</th>
// 							<th>Customer Photo</th>
// 							<th>Customer Email</th>
// 							<th>Message</th>
// 							<th>Action</th>
// 						</tr>
// 					</thead>
// 					{abc.map((reviewss) => {
// 						return(

// 					<tbody>
// 						<tr>
// 							<td>{reviewss.customerName}</td>
// 							{/* <td>
// 								<img src={"/Images/" +reviewss.customerImage.Images[0]} className="img"/>
// 							</td> */}
// 							<td>{reviewss.Email}</td>
// 							<td>{reviewss.Contactsel}</td>
// 							<td>
// 							<button onClick = {()=> deletee(contactsel._id)} className="button2" type="button">Remove</button>
// 							</td>
// 						</tr>
// 					</tbody>

// 					 )
// 					})}	

// 				</table>
// 			</div>
// 		</div>        
// 	</div>
// </section>


//  )

// }





// // 	const [contact,setContact] = useState([]);
// // 	const [customer,setCustomer] = useState([]);
// //     const [loads,setLoad] = useState(false);

// //   useEffect(() =>{
// //     function getContact(){
// //         axios.get("http://localhost:8070/contact/get").then((res) =>
// //         {
// //             setContact(res.data);
// //             console.log(res.data);
            
            
// //         }).catch((err) =>{
// //             alert(err);
// //         })
// //     }
   
// //     getContact();

// // 	function getCustomer(){
// //         axios.get("http://localhost:8070/Customer/get").then((res) =>
// //         {
// //             setCustomer(res.data);
// //             console.log(res.data);
            
            
// //         }).catch((err) =>{
// //             alert(err);
// //         })
// //     }
   
// //     getCustomer();
   
// // }, []);

// // function deletee(id){
// //     axios.delete("http://localhost:8070/contact/delete/" + id).then((res) =>
// //     {
// //         // document.getElementById("txt").innerHTML = "Message Deleted!";
// //         const afterDeleteContact = contact.filter(contact=>contact._id != id);
// //         setContact(afterDeleteContact);
// //     }).catch((err) =>{
// //         alert(err);
// //     })
// // }