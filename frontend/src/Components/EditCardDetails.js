import axios from "axios";
import React, {useState, useEffect} from "react";


export default function EditCardDetails(props){


    let [cardowner, setcardowner] = useState("");
	let [cardnumber, setcardnumber] = useState("");
	let [carddate, setcarddate] = useState("");
	let [cardcvv, setcardcvv] = useState("");
	let cardtype = "";
    const [paymentdetails,setpaymentdetails] = useState([]);
    let objectId = "";
    useEffect(() =>{

        objectId = props.match.params.id;
        function getpaymentdetails(){
            axios.get("http://localhost:8070/paymentdetails/getItem/" + objectId).then((res) =>
            {
                setpaymentdetails(res.data);
                console.log(res.data);
                if(res.data.cardtype = "VISA"){
                    document.getElementById("visa").checked = true;
                    document.getElementById("visa").disabled = true;

                    }else{
                        document.getElementById("mastercard").checked = true;
                    document.getElementById("mastercard").disabled = true;  
                    }
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getpaymentdetails();
        // displayStudentdetails();
       
    }, []);

    
	function cardtypeCheck() {

		
	
	  }
	
      function backToWallet(){
          props.history.push("/Customer/MyWallet");
      }

    function updateCardDetails(){
        
        alert("ggg");
        const updateCard = {

            cardtype : paymentdetails.cardtype,
            cardowner : paymentdetails.cardowner,
            cardnumber : paymentdetails.cardnumber,
            carddate,
            cardcvv : paymentdetails.cardcvv
            
        }

        console.log(updateCard);

		axios.put("http://localhost:8070/paymentdetails/update/"+ objectId, updateCard).then(()=>{
		

		alert("Card Updated Successfully!");
		props.history.push("/Customer/MyWallet");
	
			
		}).catch((err) =>{
			alert(err)
		  })
    }

    return(

        <div>
        <br/><br/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
        <div class="AddPaymentMethod">
        <div class="padding">
            <form method="post">
            <div class="row">
                <div class="container-fluid d-flex justify-content-center">
                    <div class="col-sm-8 col-md-6">
                        <div class="card" style={{width:"500px"}} >
                            { <div class="card-header">
                                <div class="row">
                                    
                                    <div class="col-md-6 text-right" style= {{ marginTop: "-5px" }}>
        
                                        <div class="cc-selector">
                                            <span><input id="visa" type="radio" name="credit-card" value="VISA" style= {{ marginRight: "0px"}} /></span>
                                            <label class="drinkcard-cc visa" for="visa" ></label>
                                        <span><input id="mastercard" type="radio" name="credit-card" value="MASTER" style= {{ marginLeft: "0px"}} /></span>
                                            <label class="drinkcard-cc mastercard"for="mastercard"></label>
                                        </div>
                                        
        
                                        </div>
                                </div>
                            </div> }
                            <div class="card-body" style={{height: "300px"}} >
                            <div class="form-group">
                                     <label for="numeric" class="control-label">CARD HOLDER NAME</label>
                                      <input type="text" class="input-lg form-control" readOnly Value={paymentdetails.cardowner}/>
                                              
                                      </div>
                                <div class="form-group"> 
                                <label for="cc-number" class="control-label">CARD NUMBER</label>
                                 <input id="cc-number" type="text" class="input-lg form-control cc-number" readOnly Value={paymentdetails.cardnumber}/>
                                      </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                             <label for="cc-exp" class="control-label">CARD EXPIRY</label> 
                                             <input id="cc-exp" type="text" class="input-lg form-control cc-exp" placeholder="M M / Y Y" Value={paymentdetails.carddate} required 
                                            onChange= {
                                                (e)=>{
                                                    setcarddate(e.target.value);
                                                    }
                                                }/> 
        
                                    </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                             <label for="cc-cvc" class="control-label">CARD CVC</label> 
                                             <input id="cc-cvc" type="password" class="input-lg form-control cc-cvc" readOnly Value={paymentdetails.cardcvv}
                                            /> 
                                              </div>
                                    </div>
                                </div>
                                <br/><br/>
                               
                                     <div class="float-right">
                                     
                                     <span style= {{ marginRight: "200px"}}> <button type="reset" class="btn btn-success"onClick={()=> backToWallet()} >Cancel</button></span>  
                                
                                     <span><button type="button" class="btn btn-primary" onClick={()=> updateCardDetails(paymentdetails._id)}>Update</button></span> 
                                </div>
                            <br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
        <br/><br/> <br/><br/>
        </div> 
        
         );



    
}