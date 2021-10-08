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

    function handleSearch(e){

        let purchaseHistorySearch = e;
        console.log(purchaseHistorySearch);
      
        axios
            .get("http://localhost:8070/orderhistory/getItems")
            .then((res) =>{
      
              filterpurchaseHistory(res.data, purchaseHistorySearch);
              console.log(res.data);
            })
            .catch((err)=> {
      
                alert(err);
            });
        
      }
      
      //Search
      
      function filterpurchaseHistory(data, purchaseHistorySearch){
      
          let result = data.filter((post) =>
      
            post.RecieptNo.toLowerCase().includes(purchaseHistorySearch.toLowerCase()) || post.PaymentType.toLowerCase().includes(purchaseHistorySearch.toLowerCase())
            
      
          );
      
          console.log(result);
          setpayhistory(result);
      
          if(result != null){
      
            setLoad(false);
          }
      
          if(result.length === 0){
      
            setLoad(true);
          }
      
          
      }


    return(

        <div className = "container">
            <br/>
           <center> <h1>Payment History</h1></center>

           <br/>
      <div class="input-group" id = "SellSerch"  style={{width: "1200px"}}>
        
        <input type="search"  class="form-control rounded" placeholder="Search by Recipt Number or Payment Type " aria-label="Search"
          aria-describedby="search-addon" onChange = {(e)=> handleSearch(e.target.value)}/>
        <i class="bi bi-search" id="iconS" style={{ position:"absolute",  color:"#000000", bottom:"5px",  right:"20px"}}></i>
        </div>
      
        <br/>

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
                        
                        <td><button  class="read-more-btn btn-primary"style = {{marginRight : "10px"}} onClick={()=>gotoShowMore(payhistory._id)}>Show More</button></td>
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