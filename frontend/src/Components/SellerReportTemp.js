import React, { useState, useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

import "../Css/sellerreporttemp.css";

export default function SellerProfile(props) {

  const [orgSeller,setorgSellers] = useState([]);
  let objectID = "";
  useEffect(() =>{
      function getorgSellers(){
        objectID = localStorage.getItem("SellerID");
          axios.get("https://tech-scope-online.herokuapp.com/orgSeller/get/"+objectID).then((res) =>
          {
              setorgSellers(res.data);
             // console.log(res.data);
              
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
      getorgSellers();

    }, );

    function update(id){
      console.log(id);
      props.history.push("/Seller/updateProfile/" + id);
  };

  function deleteSeller() {
    Swal.fire(
      'Success!',
      'Request Sent!',
      'success'
    )
  }
  return (

    <div className="sellerprofile">
    
    <div>
      <br />
      <br />
      <h2 style={{color:"black",textAlign : "center"}}>SELLER PROFILE</h2><br/>

      <div class="container">
        <div class="main-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <br></br>
                    <img
                       src = {'/Images/'+orgSeller.logo}
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
                      <h4 class="mb-0" style = {{textAlign : "center"}}>{orgSeller.companyname}</h4>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}} >{orgSeller.mobile}</h6>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}}>{orgSeller.email}</h6>
                    </div>
                    <br></br>

             
                
                    <div class="mt-3">
                      <button class="btn btn-danger btn-block button-shape" onClick={() => deleteSeller()}>
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.ownername} readOnly
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.companyname} readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.mobile} readOnly
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.email} readOnly
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
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="9"
                              placeholder={orgSeller.description} readOnly
                            ></textarea>
                          </div>
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={orgSeller.year} readOnly
                          />
                          <br />
                          <div className="row">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="6"
                                placeholder={orgSeller.address} readOnly
                              ></textarea>
                            </div>
                          </div>
                        </div>
						<div className = "container">
						<div class="float-right">
            <button type="button" class="btn btn-primary" onClick = {()=> {
                        props.history.push("/Seller/sellerPassword");
                    }}>CHANGE PASSWORD</button><span> </span>
						<button type="button" onClick = {()=>update(orgSeller._id)} class="btn btn-primary">EDIT</button>
							<span> </span>
							</div>
              <p id = {orgSeller._id} class="card-text">
                                
                            </p>
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
    <br/><br/><br/><br/>
    </div>
  );
}