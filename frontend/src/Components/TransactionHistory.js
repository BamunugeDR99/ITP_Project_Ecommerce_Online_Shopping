import axios from "axios";
import React, {useState,useEffect} from "react";
import { saveAs } from "file-saver";

export default function PaymentHistory(props){
    const [payhistory,setpayhistory] = useState([]);
    const [loads,setLoad] = useState(false);
    const [data, setData] = useState();
    const [count, setcount]= useState();
    const[total, setTotal] = useState();
    let Allitems = [];
    let AllItemsArr = [];



   let TotalPrice = 0;

   let Transactiontime = "";
   let PaymentType = "";
   let ReceiptNo = "";
   let CustomerLName = "";
   let CustomerFName = "";
   let Total = "";
  
    let result = [];
   let TransactionDetails = {
 
    
    Transactiontime,
     PaymentType,
     ReceiptNo,
     CustomerLName,
     CustomerFName,
     Total
 
   }


    useEffect(() =>{
        function getpayhistory(){
            axios.get("http://localhost:8070/orderhistory/getItems").then((res) =>
            {
                let AllOrderH = res.data;
                let CustomerIDs = [];
                let AllCustomers = [];
          
                for(let i = 0 ; i < AllOrderH.length ; i++){


                    CustomerIDs.push(AllOrderH[i].CustomerID)

                }


                axios
            .get("http://localhost:8070/Customer/getAll").then((res) => {

                AllCustomers = res.data;

                console.log("=============Function Parameters============");
                // console.log(AllCustomers);
                // console.log(CustomerIDs);
                // console.log(AllOrderH);
                getItemss(AllCustomers,CustomerIDs,AllOrderH);

            })
                    
        
                })
            .catch((err) =>{
                alert(err);
            });
        }

        // function calculateTotal(){
        //     axios.get("http://localhost:8070/orderhistory/getItems").then((res) =>
        //     {
        //         setpayhistory(res.data);
        //         console.log(res.data);
        //         setcount(res.data.length);
        //         total = res.data.Amount;
                    
        //         for (let i  = 0; i < count; i++){

        //          TotalPrice  += total[i];
        //     }

        //      setTotal(TotalPrice);

        //         })
        //     .catch((err) =>{
        //         alert(err);
        //     });
        // }

       
        getpayhistory();
        // calculateTotal();
       
       
    }, 
    []
    
    
    );

   
    function getItemss(allCustomers, CustomerIDs, AllOrderH) {

        let j = 0;
    
        for (let i = 0; i < CustomerIDs.length; i++) {
    
          j = 0;
    
          for (j = 0; j < allCustomers.length; j++) {
    
            if ( CustomerIDs[i] === allCustomers[j]._id) {
    
    
            //   ItemDetails = {
    
            //     ItemID : allItems[j]._id,
            //     Name: allItems[j].Item_name,
            //     Brand: allItems[j].Brand,
            //     Model: allItems[j].Model,
            //     Specification: allItems[j].Specification,
            //     //Color = allItems[i].Color_family[1],
            //     SKU: allItems[j].Stock_keeping_unit,
            //     fPrice: allItems[j].FinalPrice,
            //     itemImage : allItems[j].Images[1],
            //     itemSeller:allItems[j].SellerID
    
            //   };

                TransactionDetails = {
 
    
                Transactiontime : AllOrderH[i].TransTime.substr(0, 10),
                 PaymentType : AllOrderH[i].PaymentType,
                 ReceiptNo : AllOrderH[i].RecieptNo,
                 CustomerFName : allCustomers[j].firstName,
                 CustomerLName : allCustomers[j].lastName,
                 Total: AllOrderH[i].Amount
             
               }
    
               console.log(TransactionDetails);
               AllItemsArr.push(TransactionDetails);
           
            }
          }
        }
    
        setpayhistory(AllItemsArr);

        console.log(AllItemsArr);
      }




      function getItemsssss(allCustomers, CustomerIDs, AllOrderH) {

        let j = 0;
    
        for (let i = 0; i < CustomerIDs.length; i++) {
    
          j = 0;
    
          for (j = 0; j < allCustomers.length; j++) {
    
            if ( CustomerIDs[i] === allCustomers[j]._id) {
    
    
      

                TransactionDetails = {

                Transactiontime : AllOrderH[i].TransTime.substr(0, 10),
                 PaymentType : AllOrderH[i].PaymentType,
                 ReceiptNo : AllOrderH[i].RecieptNo,
                 CustomerFName : allCustomers[j].firstName,
                 CustomerLName : allCustomers[j].lastName,
                 Total: AllOrderH[i].Amount
             
               }
    
               console.log(TransactionDetails);
               result.push(TransactionDetails);
           
            }
          }


        }


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



    
        //setpayhistory(AllItemsArr);

        //console.log(AllItemsArr);
      }


    function gotoShowMore(Orderid){

        console.log(Orderid);
         props.history.push("/Customer/purchaseHistoryExtended/" + Orderid)
    }






    function generateReport(){
        let result = payhistory;


        axios.get("http://localhost:8070/orderhistory/getItems").then((res) =>
        {
            let AllOrderH = res.data;
            let CustomerIDs = [];
            let AllCustomers = [];
      
            for(let i = 0 ; i < AllOrderH.length ; i++){


                CustomerIDs.push(AllOrderH[i].CustomerID)

            }


            axios
        .get("http://localhost:8070/Customer/getAll").then((res) => {

            AllCustomers = res.data;

            console.log("=============Function Parameters============");
            // console.log(AllCustomers);
            // console.log(CustomerIDs);
            // console.log(AllOrderH);
            getItemsssss(AllCustomers,CustomerIDs,AllOrderH);

        })
                
    
            })
        .catch((err) =>{
            alert(err);
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
                        <th>{payhistory.Transactiontime }</th>
                        <th>{payhistory.PaymentType}</th>
                        <th>{payhistory.ReceiptNo}</th>
                        <th>{payhistory.CustomerFName} {payhistory.CustomerLName}</th>
                        {/* <th>{  payhistory.ItemList}</th> */}
                        <th>{payhistory.Total}</th>
                        
                        
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
                        {/* <tr>
                        <th scope="col">highest Purchases Amount </th>
                        <th scope="col">Total Price: {TotalPrice}</th>
                        
                        </tr>
                        <tr>
                        <th scope="col">Lowest Purchases Amount</th>
                        <th scope="col">Avarage Amount</th> */}
{/*                         
                        </tr> */}
                        <tr>
                        {/* <th scope="col">Total Purchase Items</th> */}
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