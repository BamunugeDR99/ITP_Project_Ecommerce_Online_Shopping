import axios from "axios";
import React, {useState,useEffect} from "react";
import {ClipLoader} from "react-spinners";


export default function AllRequests(props){
    const [sellers,setsellers] = useState([]);
    const [loads,setLoad] = useState(false);
    
    useEffect(() =>{
        function getsellers(){
            axios.get("http://localhost:8070/seller/getsellers").then((res) =>
            {
                setsellers(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getsellers();
       
    }, []);




    return(
        

        <div className = "container">
            <h1>Seller Requests</h1>

            <input class="form-control" type="text" placeholder="Search" aria-label="Search" /*onChange = {(e) => handleSearch(e.target.value) }*//>
            <br></br>
            <div>
            <ClipLoader size = {90} color = 'blue' loading = {loads}></ClipLoader>
            </div>
            <h1 id = "txt"></h1>
            
            <div className = "row">
        {sellers.map((seller,index) =>{

            return (
             
                <div class="col-sm-6">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">{seller.ownername}</h5>
                            <p class="card-text">
                                {seller.mobile}
                            </p>
                            <p class="card-text">
                                {student.companyname}
                            </p>
                            <p class="card-text">
                                {student.address}
                            </p>
                            <p class="card-text">
                                {student.year}
                            </p>
                            <p class="card-text">
                                {student.email}
                            </p>
                            <p class="card-text">
                                {student.description}
                            </p>
                            <p class="card-text">
                                {student.logo}
                            </p>
                           
                            
                            <button class="btn btn-primary" onClick = {()=>update(student._id)} style = {{marginRight : "10px"}}>Edit</button>
                            <button class="btn btn-primary" onClick = {()=> deletee(student._id)} style = {{backgroundColor : "red", borderColor : "red"}}>Delete</button>
                          <br></br><br></br>
                            <p id = {seller._id} class="card-text">
                                
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>
   
            
            )

        })}

        </div>
        </div>
    )
}
