import React, { useState } from "react";
import axios from "axios";

import "../css/sellerprofile.css";


export default function SellerProfile(props){ 

    return(
        <div class="container">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center"><br></br>
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="175"/>
								<br></br>
							</div>
                           
							<hr class="my-4"></hr>
							<ul class="list-group list-group-flush">
                                    <div class="shop">
									<h6 class="mb-0">AMAR ELECTRONICS</h6></div>
									<br></br>
								
                                    <div class="shop">
									<h6 class="mb-0">0772156489</h6></div>
									<br></br>
							
                                    <div class="shop">
									<h6 class="mb-0">amarele89@gmail.com</h6></div>
									<br></br>
							
								
                                <br></br><br></br><br></br><br></br><br></br>
                                <div class="mt-3">
									<button class="btn btn-primary btn-block button-shape">REQUEST DELETE</button>
								</div>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">  

                            <div class="row mb-3">
                                <div class="col-sm-9 text-secondary"> 
									<input type="text" class="form-control" value="OWNER'S NAME" readOnly/>
                                </div> 
							</div> 
							 
                            <div class="row mb-3">
								 <div class="col-sm-9 text-secondary"> 
									<input type="text" class="form-control" value="COMPANY NAME" readOnly/>
							    </div> 
                            </div>

							<div class="row mb-3">
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="CONTACT NUMBER" readOnly/>
								</div>
							</div>

							<div class="row mb-3">

								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="EMAIL ADDRESS" readOnly/>
								</div>
							</div>
						</div>
					</div>
                    <div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
                                <div class="row mb-3">

								<div class="col-sm-9 text-secondary">
									<textarea class="form-control" value="DESCRIPTION" readOnly/>
								</div>
							</div>
							<div class="row mb-3">

								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="ESTABLISHED YEAR" readOnly/>
								</div>
							</div>
							<div class="row mb-3">

								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="PHYSICAL ADDRESS" readOnly/>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary center">
									<input type="button" class="btn btn-primary px-5 btn-align" value="EDIT"/>
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