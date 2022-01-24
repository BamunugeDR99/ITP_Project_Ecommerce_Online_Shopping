import axios from "axios";
import React, {useState,useEffect} from "react";
//import {ClipLoader} from "react-spinners";


export default function AdminViewHistory(props){
    const [adminhis,setadminhis] = useState([]);
    const [loads,setLoad] = useState(false);
    
    useEffect(() =>{
        function getadminhis(){
            axios.get("https://tech-scope-online.herokuapp.com/paymentdetails/get").then((res) =>
            {
                setadminhis(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getadminhis();
       
    }, []);




    return(

        <div className = "container">
           <center> <h1>Admin View and Search Transaction History</h1></center>
            <h1 id = "txt"></h1>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Transaction No.</th>
                        <th scope="col">Recipt No</th>
                        <th scope="col">Buyer Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col"> </th>
                        </tr>
                    </thead>
            {/* <div className = "row"> */}
        {adminhis.map((adminhis,index) =>{

            return (

                // <div>
                   
                    <tbody>
                        <tr>
                        <th>{adminhis.tranno}</th>
                        <td>{adminhis.reciptno}</td>
                        <td>{adminhis.buyername}</td>
                        <td>{adminhis.description}</td>
                        <td>{adminhis.amount}</td>
                        <td><button class="btn btn-primary"style = {{marginRight : "10px"}}>Show More</button></td>
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