import React, { useState } from "react";
import axios from "axios";

import "../Css/sellerprofile.css";

export default function SellerProfile(props) {


  return (
    <div className="height-100 bg-light">
      <br />
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
                      <h4 class="mb-0" style = {{textAlign : "center"}}>AMAR ELECTRONICS</h4>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}} >0772156489</h6>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}}>amarele89@gmail.com</h6>
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
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
                        placeholder="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="7"
                              placeholder="Description"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                          />
                          <br />
                          <div className="row">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                placeholder="physical address"
                              ></textarea>
                            </div>
                          </div>
                        </div>
						<div className = "container">
						<div class="float-right">
						<button type="button" class="btn btn-primary">EDIT</button>
							<span> </span>
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
