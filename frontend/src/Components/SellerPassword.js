import React, { useState, useEffect} from "react";
import axios from "axios";

import "../Css/sellerpassword.css";

export default function SellerPassword(props) {

  const [orgSeller,setorgSellers] = useState([]);
  // const [loads,setLoad] = useState(false);
  // const [data,setData] = useState();
  
  useEffect(() =>{
      function getorgSellers(){
        const orgSellerid = "613a2af6b31f783accd94445";
          axios.get("http://localhost:8070/orgSeller/get/613a2af6b31f783accd94445").then((res) =>
          {
              setorgSellers(res.data);
              console.log(res.data);
              
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
      getorgSellers();

    }, );

    function update(id){
      console.log(id);
      props.history.push("/update/" + id);
  };


  return (

    <div className="sellerpass">
    <div className="height-100 bg-light">
      <br />
     
      

      <div class="container">
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
                      <h4 class="mb-0" style = {{textAlign : "left"}}>{orgSeller.companyname}</h4>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "left"}} >{orgSeller.mobile}</h6>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "left"}}>{orgSeller.email}</h6>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br>
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
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body" id="sellerB">
                       
                          <br />
                          <div className="row">
                            <div class="form-group"><br/><br/>
                              <h2 style = {{textAlign : "center"}}>Change your Password</h2>
                              <form style = {{textAlign : "center"}}><br/>
                              <div class="inputsize">
                              <input type="text" class="form-control" placeholder= "Current Password" required/>
                              <br/><br/>
                              <input type="text" class="form-control" placeholder= "New Password" required/>
                              <br/><br/>
                              <input type="text" class="form-control" placeholder= "Confirm Password" required/>
                              <br/><br/><br/><br/>
                              <button type="button" class="btn btn-primary btn-block" style = {{textAlign : "center"}}>Change</button>
							                <span> </span>
                              </div>
                              </form>
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
 
    </div>
    </div>
  );
}
