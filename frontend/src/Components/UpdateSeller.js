import React, { useState,useEffect } from "react";
import axios from "axios";


export default function UpdateSeller(props){

  const [data,setData] = useState({
    companyname : "",
    ownername : "",
    year : "",
  });

  useEffect(() =>{
      function getsellers(){
        const objectId = props.match.params.id; 
        console.log(objectId);
          axios.get("http://localhost:8070/seller/get/" + objectId).then((res) =>
          {

              setData(res.data);
              console.log(res.data);
              
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
      getsellers();

     
  }, []);


  function sendData(e){
 
    const objectId = props.match.params.id; 
    console.log(objectId);

    e.preventDefault();



    axios.put("http://localhost:8070/seller/update/" + objectId,data).then(()=>{

     document.getElementById("txt").innerHTML = "Seller Updated Successfully!";
      

    }).catch((err) =>{
      alert(err)
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }


 return(
   <div className = "container">
     <div className = "container">
       <h1 id = "txt"></h1>
     </div>
<form onSubmit = {sendData}> 
  <div className="mb-3">
    <label htmlFor="companyname" className="form-label">Company Name</label>
    <input type="text" className="form-control" id="companyname" value = {data.companyname}
     onChange= {
      (e)=>handle(e)}
      />
  </div>

  <div className="mb-3">
    <label htmlFor="ownername" className ="form-label">Owner Name</label>
    <input type="text" className ="form-control" id="ownername" Value = {data.ownername}
    onChange= {
      (e)=>handle(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor ="year" className ="form-label">Established Year</label>
    <input type ="text" className ="form-control" id = "year" Value = {data.year}
    onChange= {
      (e)=>handle(e)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Update</button>
</form>
   </div>
  

 )

}
