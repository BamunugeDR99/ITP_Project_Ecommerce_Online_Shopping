import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DtestCard(props) {


    return(

        <div className="CuseDetails">

        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-xl-6 col-md-12">
                        <div class="card user-card-full ">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25"> </div>
                                        <h5 class="f-w-600"> </h5>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h3 class="m-b-20 p-b-5 b-b-default f-w-600">Package Details</h3>
                                       
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600" id="p" style={{marginTop:"20px"}}>Package Name</p>
                                                <h6 class="text-muted f-w-400" id="h6">Wixen</h6>
                                            </div>
                                           
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600"  id="p" style={{marginTop:"20px"}}>Package Price</p>
                                                <h6 class="text-muted f-w-400"  id="h6">Rs.200000.00</h6>
                                            </div>
                                            
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600"  id="p">Package Description</p>
                                                <h6 class="text-muted f-w-400"  id="h6">Ferro Wixen</h6>
                                            </div>
                                           
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600"  id="p">Package Start Date</p>
                                                <h6 class="text-muted f-w-400"  id="h6">2021-10-15</h6>
                                            </div>
                                            
                                             <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600"  id="p">Package End Date</p>
                                                <h6 class="text-muted f-w-400"  id="h6">2021-10-25</h6>
                                            </div>
                                           
                                            
                                        </div>
                                        <button className="btnCancel" style={{marginLeft:"40px", marginBottom:"10px"}}><b>Go Back</b></button>
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