import axios from "axios";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import ReactSession from "react-client-session";
import emailjs from "emailjs-com";

import { CircleLoader } from "react-spinners";

export default function EmailTest(props) {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    
    // console.log(makeid(5));

    function sendEmail(e) {
        e.preventDefault();
    console.log(makeid(20));

        const emailContent = {
            subject: "GG working!",
            to_email : "uchiru123326@gmail.com"
        }
        emailjs.send('service_ac9xbqd', 'template_zuxlt3d',emailContent,'user_TGhnW7M8Z4dNu0PzvbuZ9')
          .then((result) => {
              console.log(result.text);
              alert("send successfully");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
  return (
    <div>
        <br/><br/>
      <form onSubmit= {sendEmail}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
