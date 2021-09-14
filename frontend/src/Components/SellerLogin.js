import React, { useState } from "react";
import axios from "axios";

import "../Css/sellerLogin.css";


export default function SellerLogin (props){ 

return(

        <div class="containerrr">
        <div class="myCardx">
            <div class="row">
                <div class="col-md-6">
                    <div class="myLeftContent"> 
                        <form class="myForm1">
                            <h4>Sign In to Your Account</h4>
							
							<br/><br/>
                            
							<div class="form-group">
                                <i class="fas fa-user"></i>
                                <input class="myInputx" type="text" placeholder="Username" id="username" required/> 
                            </div>

							
							<br/>

                            <div class="form-group">
                                <i class="fas fa-lock"></i>
                                <input class="myInputx" type="password" id="password" placeholder="Password" required/> 
                            </div>

                            
							
							<div>
									<p class ="forgotp"> <a href="">Forgot Password?</a></p>
							</div>

                            <input type="submit" class="buttn" value="Sign In"/>
							
							<br/><br/>
							
							
								<div class="Daccount">
									<p for="Daccount">Don't have an account? <a href="/sellreg"> Sign Up! </a></p><br></br>
								</div>
						
							
							
                            
                        </form>
                    </div>
                </div> 
                <div class="col-md-6">
                    <div class="myRightContent">
					
								<br/>
                            
								<div class="text-block">
									<p>easy & fast</p>
								</div>
								
								<br/>
                            
								<div class="text-block">
									<p>scale-ability</p>
								 </div>
								 
								<br/>
								 
								<div class="text-block">
									<p>no time restrictions</p>
								</div>
								
								<br/>
								
								<div class="text-block">
									<p>better cashflow</p>
								</div>
                            
                             
                            
						
                            </div>
                                
                    </div>
                </div>
            </div>
        </div>
 				   

 );

}