
import React, {useState,useEffect} from "react";
import axios from "axios";


import "../Css/ViewCardDetails.css"; //css linked

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

    function updatePackage(id){

        props.history.push("/Customer/UpdateCard/" + id);
    
    }
    

    return(
       
<div Class="ViewCard">
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
            {/* gg */}
            {/* ggg */}
            {/* <div class="px-2 number mt-3 d-flex justify-content-between align-items-center">  */}
            {/* real card */}
            {/* <center> */}
                {/* <h4 style = {{textAlign : "center"}}>XXXX  XXXX  XXXX  4456</h4> */}
                <h4 style = {{textAlign : "center"}}>{paymentdetails.cardnumber}</h4>

                {/* </center> */}
            {/* </div> */}
            <div class="p-4 card-border mt-4">
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="cardholder">Card Holder</span> <span class="expires">Expires</span> </div>
                <div class="d-flex justify-content-between align-items-center"> 
                <span class="name">{paymentdetails.cardowner}</span> <span class="date">{paymentdetails.carddate}</span> </div>
                {/* <br></br> */}
            </div>
            <br/><br/>

            <div class="float-right">
							 
							 <span style= {{ marginRight: "150px" , marginLeft:"80px"}}> <button id="" type="reset" class="btn btn-primary"onClick ={()=>updatePackage(paymentdetails._id)} >Edit</button></span>  
						
							 <span><button  class="btn btn-danger " onClick ={()=>deletePackage(paymentdetails._id)}>Remove</button></span> 
						</div>

							 
        </div>
        <br/>
        
        
    </div>
)})}



</div>
        </div>
        </div>
    )
}