import React from "react";
//  import back from "./../images/back2.jpg"
 import '../Css/InitialPage.css'


export default function InitialPage(props) {

    function customerLogin(){
        props.history.push("/CustomerLogin");
    }
    return (
        <div className = "IP">
            
            <div class="hero-image" >
                <div class="hero-text">
                 <br/><br/>   {/* <img src={back}/> */}
                    <h1 style={{ fontSize: '100px', fontFamily:"Arial"}}>Tech Scope</h1>
                    <h3 style={{ fontSize: '40px'}}>See what's selling best !</h3>

                </div>
                <div class="SigninButtons">
                    <br/><br/>
                    <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad" onClick = {() => customerLogin()}>Get started</button> <br />
                </div>
            </div>

        </div>

    )





}
