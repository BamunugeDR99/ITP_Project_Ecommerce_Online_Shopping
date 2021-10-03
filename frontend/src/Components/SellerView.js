import React, { useState, useEffect} from "react";
import axios from "axios";

import "../Css/sellerview.css";

export default function SellerProfile(props) {

  const [orgSeller,setorgSellers] = useState([]);
 
  let objectID = "";
  useEffect(() =>{
      function getorgSellers(){
        objectID = props.match.params.id;
          axios.get("http://localhost:8070/orgSeller/get/" + objectID).then((res) =>
          {
              setorgSellers(res.data);

              
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
      getorgSellers();

    }, );

    function deleteSeller(id) {
        axios
          .delete("http://localhost:8070/orgSeller/delete/" + id)
          .then((res) => {
            document.getElementById("txt").innerHTML =
              "Seller Deleted Successfully!";
            const afterDeleteSeller = orgSeller.filter((orgSeller) => orgSeller._id !== id);
            setorgSellers(afterDeleteSeller);
          })
          .catch((err) => {
            alert(err);
          });
      }

  return (

    <div className="sellerview">
    
    <div>

      <h2 style={{color:"black",textAlign : "center"}}>SELLER DETAILS - {orgSeller.companyname}</h2><br/>

      <div class="container">
        <div class="main-body">

          
                  <div class="d-flex flex-column align-items-center text-center">
                    <br></br>

            <div class="col-lg-8">
              <div class="card"><br></br>
                <div class="card-body">
                <img
                       src = {'/Images/'+orgSeller.logo}
                      alt="Admin"
                      class="rounded-circle p-1 bg-black"
                      width="175"
                    />
                   <br/><br/>
                  <div class="row">
                    <div class="col"><div class="d-flex justify-content-start">
                        <label style={{color:"black",textAlign : "left"}}>OWNER NAME</label>
                        </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.ownername} readOnly
                      />
                    </div>
                    <div class="col"><div class="d-flex justify-content-start">
                    <label style={{color:"black",textAlign : "left"}}>COMPANY NAME</label></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.companyname} readOnly
                      />
                    </div>
                  </div>
                  <br />
                  
                  <div class="row">
                    <div class="col"><div class="d-flex justify-content-start">
                    <label style={{color:"black",textAlign : "left"}}>CONTACT NUMBER</label></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.mobile} readOnly
                      />
                    </div>
                    <div class="col"><div class="d-flex justify-content-start">
                    <label style={{color:"black",textAlign : "left"}}>EMAIL ADDRESS</label></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={orgSeller.email} readOnly
                      />
                    </div>
                  </div>
                </div>

                    <div class="card-body" id="sellerB">
                      <div class="row">
                        <div class="col">
                          <div class="form-group"><div class="d-flex justify-content-start">
                          <label style={{color:"black",textAlign : "left"}}>DESCRIPTION</label></div>
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="10"
                              placeholder={orgSeller.description} readOnly
                            ></textarea>
                          </div>
                        </div>
                        <div class="col"><div class="d-flex justify-content-start">
                        <label style={{color:"black",textAlign : "left"}}>ESTABLISHED YEAR</label></div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder={orgSeller.year} readOnly
                          />
                          <br />
                          <div className="row">
                            <div class="form-group"><div class="d-flex justify-content-start">
                            <label style={{color:"black",textAlign : "left"}}>PHYSICAL ADDRESS</label></div>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="6"
                                placeholder={orgSeller.address} readOnly
                              ></textarea>
                            </div>
                          </div>
                        </div><br/><br/>
						<div className = "container">
						<div class="float-center">
            <button type="button" class="btn btn-primary">VIEW ITEMS</button><span> </span>
            <button type="button" class="btn btn-primary">VIEW PACKAGES</button><span> </span>
						<button type="button"  onClick={() => deleteSeller(orgSeller._id)} class="btn btn-danger">DELETE SELLER</button>
							<span> </span>
							</div>
              <p id = {orgSeller._id} class="card-text">
                                <br/><br/><br/>
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
  );
}
