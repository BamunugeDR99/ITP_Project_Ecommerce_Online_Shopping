import React, {useState, useEffect} from "react";
import axios from "axios";

import "../CSS/msg.css";
import g1 from "../images/avatar1.png";


export default function CustomerMsg(props){

	const [contactsel,setContactsel] = useState([]);
    const [loads,setLoad] = useState(false);

  useEffect(() =>{
    function getContactsel(){
        axios.get("http://localhost:8070/contactsel/get").then((res) =>
        {
            setContactsel(res.data);
            console.log(res.data);
            
            
        }).catch((err) =>{
            alert(err);
        })
    }
   
    getContactsel();

   
}, []);

  function deletee(id){
    axios.delete("http://localhost:8070/contactsel/delete/" + id).then((res) =>
    {
        // document.getElementById("txt").innerHTML = "Message Deleted!";
        const afterDeleteContactsel = contactsel.filter(contactsel=>contactsel._id != id);
        setContactsel(afterDeleteContactsel);
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
						<div className="col-sm-4">
							<h2><center><b>Customer Messages</b></center></h2>
						</div>
					</div>
				</div>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Customer Email</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
				={contactsel.map((contactsel,index) =>{

				<h1 id = "txt"></h1>

				return(
					<tbody>
						<tr>
							<td>{contactsel.name}</td>
							<td>{contactsel.email}</td>
							<td>{contactsel.message}</td>
							<td>
							<button onClick = {()=> deletee(contactsel._id)} className="button2" type="button">Remove</button>
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


