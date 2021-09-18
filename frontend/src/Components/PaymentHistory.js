import axios from "axios";
import React, {useState,useEffect} from "react";
//import {ClipLoader} from "react-spinners";


export default function PaymentHistory(props){
    const [payhistory,setpayhistory] = useState([]);
    const [loads,setLoad] = useState(false);
    
    useEffect(() =>{
        function getpayhistory(){
            axios.get("http://localhost:8070/paymentdetails/get").then((res) =>
            {
                setpayhistory(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getpayhistory();
       
    }, 
    []
    
    
    );




    return(

        <div className = "container">
           <center> <h1>Payment History</h1></center>
            <h1 id = "txt"></h1>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Transaction Time</th>
                        <th scope="col">Recipt No</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col"> </th>
                        </tr>
                    </thead>
            {/* <div className = "row"> */}
        {payhistory.map((payhistory,index) =>{

            return (

                // <div>
                   
                    <tbody>
                        <tr>
                        <th>{payhistory.trantime}</th>
                        <td>{payhistory.reciptno}</td>
                        <td>{payhistory.description}</td>
                        <td>{payhistory.amount}</td>
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