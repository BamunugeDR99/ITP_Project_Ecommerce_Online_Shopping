import axios from "axios";
import React, {useState,useEffect} from "react";
import { saveAs } from "file-saver";

export default function PaymentHistory(props){
    const [payhistory,setpayhistory] = useState([]);
    const [loads,setLoad] = useState(false);
    const [data, setData] = useState();
    const [count, setcount]= useState();
   const[total, setTotal] = useState();

   let TotalPrice = 0;


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

        function calculateTotal(){
            axios.get("http://localhost:8070/orderhistory/getItems").then((res) =>
            {
                setpayhistory(res.data);
                console.log(res.data);
                setcount(res.data.length);
                total = res.data.Amount;
                    
                for (let i  = 0; i < count; i++){

                 TotalPrice  += total[i];
            }

             setTotal(TotalPrice);

                })
            .catch((err) =>{
                alert(err);
            });
        }

       
        getpayhistory();
        calculateTotal();
       
       
    }, 
    []
    
    
    );

   
    


    function gotoShowMore(Orderid){

        console.log(Orderid);
         props.history.push("/Customer/purchaseHistoryExtended/" + Orderid)
    }

    function generateReport(){
        let result = payhistory;
        axios
        .post("http://localhost:8070/orderhistory/create-pdf",result )
        .then(() =>
          axios.get("http://localhost:8070/orderhistory/fetch-pdf", {
            responseType: "blob",
            // A BLOB is a binary large object that can hold a variable amount of data. important
          })
        )
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          saveAs(pdfBlob, "TransactionReport.pdf");
                            //your file name 
        });

    }




    return(

        <div className = "container">
            <br/>
           <center> <h1>Transaction History</h1></center>
            <h1 id = "txt"></h1>
            
            <table class="table table-hover table">
                    <thead>
                        <tr>
                        <th scope="col">Transaction Time</th>
                        <th scope="col">Payment Type</th>
                        <th scope="col">Recipt No</th>
                        <th scope="col">Customer Name</th>
                        {/* <th scope="col">Items</th>    */}
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
                        <th>{ payhistory.TransTime}</th>
                        <th>{ payhistory.PaymentType}</th>
                        <th>{ payhistory.RecieptNo}</th>
                        <th>{  }</th>
                        {/* <th>{  payhistory.ItemList}</th> */}
                        <th>{payhistory.Amount}</th>
                        
                        
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
                        <th scope="col">highest Purchases Amount </th>
                        <th scope="col">Total Price: {TotalPrice}</th>
                        
                        </tr>
                        <tr>
                        <th scope="col">Lowest Purchases Amount</th>
                        <th scope="col">Avarage Amount</th>
                        
                        </tr>
                        <tr>
                        <th scope="col">Total Purchase Items</th>
                        <th scope="col"><button type="button" class="btn btn-primary" onClick = {() => generateReport()}>Genarate Report</button></th>
                        
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