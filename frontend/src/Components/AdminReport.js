import React, {useState,useEffect} from "react";
import axios from "axios";


export default function CustomerReviews(props){
    const [contact,setContact] = useState([]);
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
// testx

return(

<table className="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">Customer ID</th>
      <th scope="col">Company Name</th>
      <th scope="col">Customer Email</th>
      <th scope="col">Customer Message</th>
      
      
    </tr>
  </thead>

  {contact.map((contact,index) =>{

<h1 id = "txt"></h1>

 return(


  <tbody>
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.message}</td>
      <div>
		    <button onClick = {()=> deletee(contact._id)} className="button2" type="button">Remove</button>
	   </div>
    </tr>
  </tbody>


)

        })}
 </table>

 )
}



