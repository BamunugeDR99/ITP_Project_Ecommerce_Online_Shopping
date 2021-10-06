import React, {useState, useEffect} from "react";
import axios from "axios";

import "../Css/msg.css";
// import g1 from "../images/avatar1.png";


export default function SellermMsg(props){

	const [contactsel,setContactsel] = useState([]);

	let contactsels = [];
	// let emails = [];
	let customers = [];
	let customerName = "";
	let customerImage = "";
	let Contactsel = "";
	let Email = "";
	let [abc, setabc] = useState([]);
	let contactselWithCustomer = {
	  customerName,
	  customerImage,
	  Contactsel,
	  Email,
	};
  
	let contactselWithCustomers = [];
  
	useEffect(() => {
	  function getContactsel() {

		const objectID = localStorage.getItem("SellerID")
		axios
		  .get("http://localhost:8070/contactsel/get")
		  .then((res) => {
			contactsels=(res.data);
			const filter = res.data.filter(
			  (selmsg) => selmsg.sellerid === objectID
			);
			contactsels = filter;
			console.log(contactsels);
			axios
			  .get("http://localhost:8070/Customer/getAll")
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
				Contactsel: contactsels[i].message,
				Email: contactsels[i].email,
			  };
  
			  contactselWithCustomers.push(contactselWithCustomer);
			}
		  }
		}
  
		setabc(contactselWithCustomers);
	  }
  
	  getContactsel();
	}, []);

	function deletee(id){
    axios.delete("http://localhost:8070/contactsel/delete/" + id).then((res) =>
    {
        // document.getElementById("txt").innerHTML = "Message Deleted!";
        const afterDeleteContactsel = contactsel.filter(contactsel=>contactsel._id !== id);
        setContactsel(afterDeleteContactsel);
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
	 <h5 style={{ textAlign: "center", color: "black" }}>
	   what our customers say about us
	 </h5>

	 <div>
	 <div className="row" style={{margin: "50px 20px 20px 30px",}}>
	   {abc.map((reviewss) => {
		 return (
		   
			 <div class="col-3" style={{ paddingBottom:'30px'}}>
			   <div class="card" style={{width: "90%",margin: "0px",borderRadius: "15px",marginTop: "30px",height: "320px",boxShadow:'2px 2px 2px 2px #dcdcdc'}}>
				 <div class="card-body">
				   <center>
				   <img alt="image" src={"/Images/"+reviewss.customerImage} 
				   style={{ width: "65%", alignItems: "center" }}/>
				   <br/>
				   <span style={{fontSize:'20px', color: "#191919", textAlign: "center" }}>{reviewss.customerName}</span>
				   
				   
				   
				   <p style={{ textAlign: "center", fontSize: "16px"}}>
					 {reviewss.Contactsel}
				   </p><br/>
				  
					<button onClick = {()=> deletee(contactsel._id)} className="btn btn-danger" type="button">Remove</button>
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



