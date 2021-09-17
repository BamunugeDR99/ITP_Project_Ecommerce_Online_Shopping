import React from "react";
 import back from "./../images/back2.jpg"
 import '../Css/InitialPage.css'


export default function InitialPage(props) {

    return (
        <div className = "IP">

            <div class="hero-image" >
                <div class="hero-text">
                    {/* <img src={back}/> */}
                    <h1 style={{ fontSize: '100px', fontFamily:"Arial"}}>Tech Scope</h1>
                    <h3 style={{ fontSize: '40px'}}>See what's selling best !</h3>

                </div>
                <div class="SigninButtons">
                    <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad">CUSTOMER LOGIN</button> <br />
                    <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad">CUSTOMER SIGNUP</button> <br />
                    <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad">SELLER LOGIN</button> <br />
                    <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad">SELLER SIGNUP</button> <br />



                </div>
            </div>

        </div>

    )





}
