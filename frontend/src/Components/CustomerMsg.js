import React, {useState, useEffect} from "react";
import axios from "axios";

import "../CSS/msg.css";
import g1 from "../images/avatar1.png";


export default function CustomerMsg(props){

	const [contact,setContact] = useState([]);
	const [customer,setCustomer] = useState([]);
    const [loads,setLoad] = useState(false);

  useEffect(() =>{
    function getContact(){
        axios.get("http://localhost:8070/contact/get").then((res) =>
        {
            setContact(res.data);
            console.log(res.data);
            
            
        }).catch((err) =>{
            alert(err);
        })
    }
   
    getContact();

	function getCustomer(){
        axios.get("http://localhost:8070/customer/get").then((res) =>
        {
            setCustomer(res.data);
            console.log(res.data);
            
            
        }).catch((err) =>{
            alert(err);
        })
    }
   
    getCustomer();
   
}, []);

  function deletee(id){
    axios.delete("http://localhost:8070/contact/delete/" + id).then((res) =>
    {
        document.getElementById("txt").innerHTML = "Message Deleted!";
        const afterDeleteContact = contact.filter(contact=>contact._id != id);
        setContact(afterDeleteContact);
    }).catch((err) =>{
        alert(err);
    })
}

 return(

<section className="rev">
	<div className="container-xl">
		<div className="table-responsive">
			<div className="table-wrapper">
				<div className="table-title">
					<div className="row">
						<div className="col-sm-6">
							<h2><center><b>Customer Messages</b></center></h2>
						</div>
					</div>
				</div>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Customer Email</th>
							<th>Customer Photo</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
				={contact.map((contact,index) =>{

				<h1 id = "txt"></h1>

				return(
					<tbody>
						<tr>
							<td>{contact.name}</td>
							
							<td><img src={''} className="img"/></td>
							<td>{contact.email}</td>
							<td>{contact.message}</td>
							<td>
							<button onClick = {()=> deletee(contact._id)} className="button2" type="button">Remove</button>
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


