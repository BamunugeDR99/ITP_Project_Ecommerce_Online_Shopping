
import React, {useState,useEffect} from "react";
import axios from "axios";


import "../css/ViewCardDetails.css"; //css linked

export default function ViewCardDetails(props){
    const [paymentdetails,setpaymentdetails] = useState([]);
    const [loads,setLoad] = useState(false);
    const [data,setData] = useState();
    
    useEffect(() =>{
        function getpaymentdetails(){
            axios.get("http://localhost:8070/paymentdetails/get").then((res) =>
            {
                setpaymentdetails(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getpaymentdetails();
        // displayStudentdetails();
       
    }, []);


    function deletePackage(ID) {

        alert("gg");

         const CardId = ID;

        console.log(CardId);

         axios

           .delete("http://localhost:8070/paymentdetails/delete/" +CardId) 

           .then((res) => {



                alert("Package Deleted");

        //         props.history.push("/allpackages");



          }).catch((err)=>{



            console.log(err);

          })

    }
    

    return(
       

<div class="container-fluid p-3 my-3">
    <div className ="row">
{paymentdetails.map((paymentdetails,index) =>{
    return(
    <div className ="col-sm">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
                 <img src="https://i.imgur.com/gfp4wrR.png" width="50" />
                <h1>{paymentdetails.cardtype}</h1>

            </div>
            <div class="px-2 number mt-3 d-flex justify-content-between align-items-center"> 
            {/* real card */}
            <center><span >{paymentdetails.cardnumber}</span> </center> </div>
            <div class="p-4 card-border mt-4">
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="cardholder">Card Holder</span> <span class="expires">Expires</span> </div>
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="name">{paymentdetails.cardowner}</span> <span class="date">{paymentdetails.carddate}</span> </div>

            </div>
            <br/><br/>
                       
							 
        </div>
        <div class="float-right">
							 
							 <span style= {{ marginRight: "50px" , marginLeft:"120px"}}> <button type="reset" class="btn btn-primary">Edit</button></span>  
						
							 <span><button  class="btn btn-danger " onClick ={()=>deletePackage(paymentdetails._id)}>Remove</button></span> 
						</div>
        
    </div>
)})}



</div>
        </div>
    )
}