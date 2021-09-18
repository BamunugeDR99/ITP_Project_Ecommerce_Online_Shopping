import React, { useState, useEffect} from "react";
import axios from "axios";

import "../Css/sellerprofile.css";

export default function SellerUpdate(props) {

    const [data,setData] = useState({
        ownername : "",
              mobile : "",
              companyname : "",
              address : "",
              year : "",
              email : "",
              description : "",
              logo : "",
    });
  
    useEffect(() =>{
        function getorgSellers(){
          const objectId = props.match.params.id; 
          console.log(objectId);
            axios.get("http://localhost:8070/orgSeller/get/" + objectId).then((res) =>
            {
  
                setData(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getorgSellers();
  
       
    }, []);
  
  
    function sendData(e){
   
      const objectId = props.match.params.id; 
      console.log(objectId);
  
      e.preventDefault();
  
  
  
      axios.put("http://localhost:8070/orgSeller/update/" + objectId,data).then(()=>{


    
      //  alert("Seller Updated Successfully!");
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

  return (

    <div className="sellerprofile">
    <div className="height-100 bg-light">
      <br />
      <br />
      <h2 style={{color:"black", marginLeft:"130px", marginBottom:"30px"}}>Edit Profile</h2>
      <h1 id = "txt"></h1>


      <div class="container">
      <form onSubmit = {sendData}> 
        <div class="main-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <br></br>
                    <img
                       src = {require('../images/flight-logo.png').default} 
                      alt="Admin"
                      class="rounded-circle p-1 bg-black"
                      width="175"
                    />
                    <br></br>
                  </div>

				  <div className = "card border border-dark rounded ">
					  <br/>
					  <div className = "card-body">
                  <ul class="list-group list-group-flush">
                    <div class="shop">
                      <h4 class="mb-0" style = {{textAlign : "center"}} readOnly>{data.companyname}</h4>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}} readOnly >{data.mobile}</h6>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}} readOnly>{data.email}</h6>
                    </div>
                    <br></br>

             
                
                    <div class="mt-3">
                      <button class="btn btn-danger btn-block button-shape">
                        REQUEST DELETE
                      </button>
                    </div>
                  </ul>
				  <br/></div></div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="card">
              
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                    <input type="text" className ="form-control" id="ownername" Value = {data.ownername}
                            onChange= {
                            (e)=>handle(e)}/>
                    </div>
                    <div class="col">
                    <input type="text" className="form-control" id="companyname" value = {data.companyname}
                            onChange= {
                            (e)=>handle(e)}
                            />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col">
                    <input type="text" className="form-control" id="mobile" value = {data.mobile}
                            onChange= {
                            (e)=>handle(e)}
                            />
                    </div>
                    <div class="col">
                    <input type="text" className="form-control" id="email" value = {data.email}
                            onChange= {
                            (e)=>handle(e)}
                            />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body" id="sellerB">
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                          <textarea type="text" rows="9" className="form-control" id="description" value = {data.description}
                                    onChange= {
                                    (e)=>handle(e)}
                                    />
                          </div>
                        </div>
                        <div class="col">
                        <input type ="text" className ="form-control" id = "year" Value = {data.year}
                                onChange= {
                                (e)=>handle(e)}/>
                          <br />
                          <div className="row">
                            <div class="form-group">
                              <textarea
                               className="form-control" id="address" rows="6" value = {data.address}
                                onChange= {
                                 (e)=>handle(e)}
                                 >
                            </textarea>
                            </div>
                          </div>
                        </div>
						<div className = "container">
						<div class="float-right">
            
						<button type="submit" class="btn btn-primary">UPDATE</button>
						</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form> 
      </div>
 
    </div>
    </div>
  );
}
