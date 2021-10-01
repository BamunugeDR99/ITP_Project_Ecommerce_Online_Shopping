import axios from "axios";
import React, {useState,useEffect} from "react";

//import {ClipLoader} from "react-spinners";


export default function PaymentHistory(props){
    const [payhistory,setpayhistory] = useState([]);
    const [loads,setLoad] = useState(false);
    const [data, setData] = useState();


    useEffect(() =>{
        function getpayhistory(){
            axios.get("http://localhost:8070/orderhistory/getItems").then((res) =>
            {
                setpayhistory(res.data);
                console.log(res.data);
                
                })
            .catch((err) =>{
                alert(err);
            });
        }
       
        getpayhistory();
       
    }, 
    []
    
    
    );
    




    return(

        <div className = "container">
            <br/>
           <center> <h1>Payment History</h1></center>
            <h1 id = "txt"></h1>
            <table class="table table-hover table">
                    <thead>
                        <tr>
                        <th scope="col">Transaction Time</th>
                        <th scope="col">Recipt No</th>
                        <th scope="col">Payment Type</th>
                        <th scope="col">Total Amount</th>
                        {/* <th scope="col">Package ID</th> */}
                        {/* <th scope="col">Item List</th> */}
                        <th scope="col"> </th>
                        </tr>
                    </thead>
            {/* <div className = "row"> */}
        {payhistory.map((payhistory,index) =>{

            return (

                // <div>
                   
                    <tbody>
                        <tr>
                        <th>{payhistory.TransTime}</th>
                        <th>{payhistory.RecieptNo}</th>
                        <th>{payhistory.PaymentType}</th>
                        <th>{payhistory.Amount}</th>
                        {/* {payhistory.ItemList.map((Il)=>{
                            return(
                        <th>{Il}</th>
                            )
                        })} */}
                        {/* <th>{payhistory.PacakgeID}</th> */}
                        {/* <th>{payhistory.ItemList}</th> */}
                        
                        <td><button  class="read-more-btn btn-primary"style = {{marginRight : "10px"}}>Show More</button></td>
                        </tr>
                       
                       
                    </tbody>
                // </div>
            );

        })}

        {/* </div> */}
        </table>

        </div>
    );
}