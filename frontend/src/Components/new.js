import axios from "axios";
import React, {useState,useEffect} from "react";
//import {ClipLoader} from "react-spinners";


export default function PaymentHistory(props){
    const [payhistory,setpayhistory] = useState([]);
    const [loads,setLoad] = useState(false);
    
    useEffect(() =>{
        function getpayhistory(){
            axios.get("https://tech-scope-online.herokuapp.com/payhistory/get").then((res) =>
            {
                setpayhistory(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getsellers();
       
    }, []);




    return(

        <div className = "container">
            <h1>Payment History</h1>
            <h1 id = "txt"></h1>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Transaction Time</th>
                        <th scope="col">Recipt No</th>
                        <th scope="col">Description</th>
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
                        <td><button class="btn btn-primary"style = {{marginRight : "10px"}}>DELETE</button></td>
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