import React, {useState, useEffect} from "react";
import axios from "axios";

// import "../Css/msg.css";
import g1 from "../images/avatar1.png";


export default function CustomerMsg(props){

	const [contact,setContact] = useState([]);

	let contacts = [];
	let contact_id="";
	let customers = [];
	let customerName = "";
	let customerImage = "";
	let Contact = "";
	let Email = "";
	let [abc, setabc] = useState([]);
	let contactWithCustomer = {
	  customerName,
	  contact_id,
	  customerImage,
	  Contact,
	  Email,
	};
  
	let contactWithCustomers = [];
  
	useEffect(() => {
	  function getContact() {
		axios
		  .get("http://localhost:8070/contact/get")
		  .then((res) => {
			contacts=(res.data);
			// const filter = res.data.filter(
			//   (itemrev) => itemrev.itemid === "6120b61011f8374ae1fa904f"
			// );
			// contacts = filter;
			console.log(contacts);
			axios
			  .get("http://localhost:8070/Customer/getAll")
			  .then((res) => {
				customers = res.data;
				createContact(contacts, customers);
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
  
	  function createContact(contacts, customers) {
		let j = 0;
		for (let i = 0; i < contacts.length; i++) {
		  j = 0;
		  for (j = 0; j < customers.length; j++) {
			if (contacts[i].customerid == customers[j]._id) {
			  contactWithCustomer = {
				customerName: customers[j].firstName,
				customerImage: customers[j].userImage,
				contact_id:contacts[i]._id,
				Contact: contacts[i].message,
				Email: contacts[i].email,
			  };
  
			  contactWithCustomers.push(contactWithCustomer);
			}
		  }
		}
  
		setabc(contactWithCustomers);
	  }
  
	  getContact();
	}, []);

	function deletee(id){
		console.log(id)

		const afterDeleteContact = contact.filter(contact=>contact.contact_id != id);
		console.log(afterDeleteContact);

      setabc(afterDeleteContact);

    axios.delete("http://localhost:8070/contact/delete/" + id).then((res) =>
    {
        
        
        alert("Message Deleted!");
    }).catch((err) =>{
        alert(err);
    })
}

 return(

<div className="container">
            <div style={{backgroundColor:'#dcdcdc', width:'90%', height:'70px'}}>
              <h2>
                <center>
                  <b>Seller Messages</b>
                </center>
              </h2>
            </div>
            <table className="table table-hover" style={{width:'90%',tableLayout: 'fixed', fontSize:'16px', textAlign:'center'}}>
              <thead style={{fontSize:'18px'}}>
						<tr>
							<th>Customer Name</th>
							<th>Customer Photo</th>
							<th>Customer Email</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
					{abc.map((reviewss) => {
						return(

					<tbody>
						<tr>
							<td>{reviewss.customerName}</td>
							<td><img src={"/Images/"+reviewss.customerImage  }style={{width:'40%'}} alt={g1}/></td>
							<td>{reviewss.Email}</td>
							<td>{reviewss.Contact}</td>
							<td>
							<button onClick = {()=> deletee(reviewss.contact_id)} className="btn btn-link" type="button"><i class="fas fa-trash-alt" style={{color:'red', fontSize:'20px'}}></i></button>
							</td>
						</tr>
					</tbody>

					 )
					})}	

				</table>
			</div>
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