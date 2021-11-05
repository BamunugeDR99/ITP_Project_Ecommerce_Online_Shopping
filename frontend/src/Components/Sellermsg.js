import React, {useState, useEffect} from "react";
import axios from "axios";

import "../Css/msg.css";
import Swal from "sweetalert2";
// import g1 from "../images/avatar1.png";


export default function SellermMsg(props){

	const [contactsel,setContactsel] = useState([]);

	let contactsels = [];
	let contactsel_id="";
	// let emails = [];
	let customers = [];
	let customerName = "";
	let customerImage = "";
	let Contactsel = "";
	let Email = "";
	let [abc, setabc] = useState([]);
	let contactselWithCustomer = {
	  contactsel_id,
	  customerName,
	  customerImage,
	  Contactsel,
	  Email,
	};
  
	let contactselWithCustomers = [];
  
	useEffect(() => {
	  function getContactsel() {

		const objectID = localStorage.getItem("SellerID")
		console.log(objectID)
		axios
		  .get("https://tech-scope-online.herokuapp.com/contactsel/get" )
		  .then((res) => {
			// contactsels=(res.data);
			const filter = res.data.filter(
			  (selmsg) => selmsg.sellerid == 
			  "613a2b0fb31f783accd94447"
			//   objectID
			);
			
			contactsels = filter;
			console.log(contactsels);
			console.log(res.data);
			axios
			  .get("https://tech-scope-online.herokuapp.com/Customer/getAll")
			  .then((res) => {
				customers = res.data;
				createContactsel(contactsels, customers);
				console.log(customers);
			  })
			  .catch((err) => {
				alert(err);
			  });
		  })
		  .catch((err) => {
			alert(err);
		  });
	  }
  
	  function createContactsel(contactsels, customers) {
		let j = 0;
		for (let i = 0; i < contactsels.length; i++) {
		  j = 0;
		  for (j = 0; j < customers.length; j++) {
			if (contactsels[i].customerid === customers[j]._id) {
			  contactselWithCustomer = {
				customerName: customers[j].firstName,
				customerImage: customers[j].userImage,
				contactsel_id: contactsels[i]._id,
				Contactsel: contactsels[i].message,
				Email: contactsels[i].email,
			  };
  
			  contactselWithCustomers.push(contactselWithCustomer);
			}
		  }
		}
  
		setabc(contactselWithCustomers);
		let a = contactselWithCustomers
		console.log(a)
	  }
  
	  getContactsel();
	}, []);

// 	function deletee(id){
//     axios.delete("https://tech-scope-online.herokuapp.com/contactsel/delete/" + id).then((res) =>
//     {
//         // document.getElementById("txt").innerHTML = "Message Deleted!";
//         const afterDeleteContactsel = contactsel.filter(contactsel=>contactsel._id !== id);
//         setContactsel(afterDeleteContactsel);
//     }).catch((err) =>{
//         alert(err);
//     })
// }

function deletee(id){
    console.log(id)
    const afterDeleteSeller = abc.filter(contactsel=>contactsel.contactsel_id != id);

    console.log(afterDeleteSeller);

      setabc(afterDeleteSeller);
      
    axios.delete("https://tech-scope-online.herokuapp.com/contactsel/delete/" + id).then((res) =>
    {
      
		Swal.fire(
		'Customer Message Deleted!',
		 'success'
		)
    }).catch((err) =>{
        alert(err);
    })
}

 return(


 <div style={{ padding: "20px 15px 10px 50px" }}>
 <div className="container">
   <div class="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "100%", alignItems: "center", borderRadius: "10px" }} >
	 <br />
	 <h1 style={{ textAlign: "center", color: "black" }}>
	   {" "}
	   Customer Messages
	 </h1>

	 <div>
	 <div className="row" style={{margin: "50px 20px 20px 30px",}}>
	   {abc.map((reviewss) => {
		 return (
		   
		   
			 <div class="col-3" style={{ paddingBottom:'30px'}}>
				
			   <div class="card" style={{width: "90%",margin: "0px",borderRadius: "15px",marginTop: "30px",height: "320px",boxShadow:'2px 2px 2px 2px #dcdcdc'}}>
				 <div class="card-body">
				   <center>
				   <img alt="image" src={"/Images/"+reviewss.customerImage} 
				   style={{ width: "65%", alignItems: "center" , borderRadius:400/2}}/>
				   <br/>
				   <span style={{fontSize:'20px', color: "#191919", textAlign: "center" }}>{reviewss.customerName}</span>
				   
				   
				   
				   <p style={{ textAlign: "center", fontSize: "16px"}}>
					 {reviewss.Contactsel}
				   </p><br/>
				  
					<button onClick = {()=> deletee(reviewss.contactsel_id)} style={{position:'absolute', bottom:'0',alignItems:'center', margin:'0px 0px 20px 0px'}} className="btn btn-danger" type="button">Remove</button>
					</center>
				 </div>
			   </div>
			 </div>

		   
	   
		 );
	   })}
	   </div>
	   
	 </div>
	 
   </div>
 </div>
</div>

 )

}



