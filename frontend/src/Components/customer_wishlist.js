import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function customer_wishlist(props) {


  
  function more(num) {
    if (document.getElementById(num).innerHTML == "") {
      document.getElementById(num).innerHTML =
        "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.";
      document.getElementById("showBtn").innerHTML = "Minimize";
      } else {
      document.getElementById(num).innerHTML = "";
      document.getElementById("showBtn").innerHTML = "show more";
    }
  }

  return (
    <div>
    <div class="row">
   


      <div class="col-sm-6">
        <br />
        <div class="card" >
          <div class="row no-gutters">
            <div class="col-sm-5" style={{ background: "#ffffff" }}>
              <img
                src={require("../images/iphone-x-.jpg").default}
                class="card-img-top h-100"
                style={{ width: "250px" }}
                alt="..."
              />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Alice Liddel</h5>
                <p class="card-text">Brand : </p>
                <p class="card-text">Ratings : </p>
                <p class="card-text">Item Status Price</p>
                <a href="#" class="btn btn-danger ">
                  Remove from list
                </a>{" "}
                <span> </span>
                <button class="btn btn-success">
                Add to cart
                </button>{" "}
                <span></span><br/><br/>
                <span></span><button id = "showBtn" class="btn btn-primary"
                  onClick={() => more("w1")} >
                  Show More
                </button>

              </div>

            </div>
            <div id = "w1"></div>

          </div>
        </div>
      </div>


      
      <div class="col-sm-6">
        <br />
        <div class="card" >
          <div class="row no-gutters">
            <div class="col-sm-5" style={{ background: "#ffffff" }}>
              <img
                src={require("../images/iphone-x-.jpg").default}
                class="card-img-top h-100"
                style={{ width: "250px" }}
                alt="..."
              />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Alice Liddel</h5>
                <p class="card-text">Brand : </p>
                <p class="card-text">Ratings : </p>
                <p class="card-text">Item Status Price</p>
                <a href="#" class="btn btn-danger ">
                  Remove from list
                </a>{" "}
                <span> </span>
                <button class="btn btn-success">
                Add to cart
                </button>{" "}
                <span></span><br/><br/>
                <span></span><a href="#" class="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      <div class="col-sm-6">
        <br />
        <div class="card" >
          <div class="row no-gutters">
            <div class="col-sm-5" style={{ background: "#ffffff" }}>
              <img
                src={require("../images/iphone-x-.jpg").default}
                class="card-img-top h-100"
                style={{ width: "250px" }}
                alt="..."
              />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Alice Liddel</h5>
                <p class="card-text">Brand : </p>
                <p class="card-text">Ratings : </p>
                <p class="card-text">Item Status Price</p>
                <a href="#" class="btn btn-danger ">
                  Remove from list
                </a>{" "}
                <span> </span>
                <button class="btn btn-success">
                Add to cart
                </button>{" "}
                <span></span><br/><br/>
                <span></span><a href="#" class="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <br />
        <div class="card" >
          <div class="row no-gutters">
            <div class="col-sm-5" style={{ background: "#ffffff" }}>
              <img
                src={require("../images/iphone-x-.jpg").default}
                class="card-img-top h-100"
                style={{ width: "250px" }}
                alt="..."
              />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Alice Liddel</h5>
                <p class="card-text">Brand : </p>
                <p class="card-text">Ratings : </p>
                <p class="card-text">Item Status Price</p>
                <a href="#" class="btn btn-danger ">
                  Remove from list
                </a>{" "}
                <span> </span>
                <button class="btn btn-success">
                Add to cart
                </button>{" "}
                <span></span><br/><br/>
                <span></span><a href="#" class="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-sm-6">
        <br />
        <div class="card" >
          <div class="row no-gutters">
            <div class="col-sm-5" style={{ background: "#ffffff" }}>
              <img
                src={require("../images/iphone-x-.jpg").default}
                class="card-img-top h-100"
                style={{ width: "250px" }}
                alt="..."
              />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Alice Liddel</h5>
                <p class="card-text">Brand : </p>
                <p class="card-text">Ratings : </p>
                <p class="card-text">Item Status Price</p>
                <a href="#" class="btn btn-danger ">
                  Remove from list
                </a>{" "}
                <span> </span>
                <button class="btn btn-success">
                Add to cart
                </button>{" "}
                <span></span><br/><br/>
                <span></span><a href="#" class="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>





      



     

      </div>
    </div>
  );
}
