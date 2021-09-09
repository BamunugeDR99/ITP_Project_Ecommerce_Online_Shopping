import axios from "axios";
import React, {useState,useEffect} from "react";
//import {ClipLoader} from "react-spinners";


export default function AllRequests(props){
    const [sellers,setsellers] = useState([]);
    const [loads,setLoad] = useState(false);
    
    useEffect(() =>{
        function getsellers(){
            axios.get("http://localhost:8070/seller/get").then((res) =>
            {
                setsellers(res.data);
                console.log(res.data);
                // hello
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getsellers();
       
    }, []);

    function deleteSeller(id){
        axios.delete("http://localhost:8070/seller/delete/" + id).then((res) =>
        {
            document.getElementById("txt").innerHTML = "Seller Deleted Successfully!";
            const afterDeleteSeller = sellers.filter(seller=>seller._id != id);
            setsellers(afterDeleteSeller);
        }).catch((err) =>{
            alert(err);
        })
    }


    return(

        <div className = "container">
            <h1>Seller Requests</h1>
            <h1 id = "txt"></h1>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">COMPANY NAME</th>
                        <th scope="col">OWNER'S NAME</th>
                        <th scope="col">DETAILS</th>
                        <th scope="col"> </th>
                        </tr>
                    </thead>
            {/* <div className = "row"> */}
        {sellers.map((seller,index) =>{

            return (

                // <div>
                   
                    <tbody>
                        <tr>
                        <th>{seller.companyname}</th>
                        <td>{seller.ownername}</td>
                        <td>{seller.year}</td>
                        <td>
                            <button class="btn btn-danger" style = {{marginRight : "10px"}}>ACCEPT</button>
                            <button class="btn btn-primary"onClick = {()=> deleteSeller(seller._id)} style = {{marginRight : "10px"}}>DELETE</button></td>
                        </tr>
                       
                       
                    </tbody>
                // </div>
            )

        })}

        {/* </div> */}
        </table>

        </div>
    )
}