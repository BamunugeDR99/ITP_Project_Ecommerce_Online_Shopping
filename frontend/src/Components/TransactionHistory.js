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
    


    function gotoShowMore(Orderid){

        console.log(Orderid);
         props.history.push("/Customer/purchaseHistoryExtended/" + Orderid)
    }


    return(

        <div className = "container">
            <br/>
           <center> <h1>Payment History</h1></center>
            <h1 id = "txt"></h1>
            <table class="table table-hover table">
                    <thead>
                        <tr>
                        <th scope="col">Transaction Time</th>
                        <th scope="col">Payment Type</th>
                        <th scope="col">Recipt No</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Items</th>   
                        <th scope="col">Total</th>
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
                        <th>{  }</th>
                        <th>{  }</th>
                        <th>{  }</th>
                        <th>{  }</th>
                        <th>{  }</th>
                        <th>{  }</th>
                        
                        {/* {payhistory.ItemList.map((Il)=>{
                            return(
                        <th>{Il}</th>
                            )
                        })} */}
                        {/* <th>{payhistory.PacakgeID}</th> */}
                        {/* <th>{payhistory.ItemList}</th> */}
                        
                      
                        </tr>
                       
                       
                    </tbody>
                // </div>
            );

        })}

        {/* </div> */}
        </table>
        <table class="table table-hover table">
                    <thead>
                        <tr>
                        <th scope="col">highest Purchases Amount</th>
                        <th scope="col">Total Purchases</th>
                        
                        </tr>
                        <tr>
                        <th scope="col">Lowest Purchases Amount</th>
                        <th scope="col">Avarage Amount</th>
                        
                        </tr>
                    </thead>
            {/* <div className = "row"> */}
        {payhistory.map((payhistory,index) =>{

           
        })}

        {/* </div> */}
        </table>

        </div>
    );
}