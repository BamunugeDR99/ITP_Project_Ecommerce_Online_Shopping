import axios from "axios";
import React, {useState,useEffect} from "react";


//cm
function UserProfile(props){

  const [customer,setCustomer] = useState([]);
  let Dateofb;
  const [birth, setBirthday] = useState("");
  
  let objectID = "";
  
  useEffect(() =>{
      function getCustomer(){
        objectID = props.match.params.id;
          axios.get("http://localhost:8070/Customer/get/"+ objectID).then((res) =>
          {
            console.log(res.data);
              setCustomer(res.data);
              Dateofb = res.data.dob;
              setBirthday(String(Dateofb.substr(0, 10)));
             // customer = res.data;
              //image = res.data.userImage;
              //console.log(customer.lastName);
             // console.log(customer.userImage);
             
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
     
      getCustomer();
      // displayStudentdetails();
    // image();
  }, []);

  function Back(){

    props.history.push("/Customer/CustomerList");
  }

    return(

     <div className="CuseDetails">

<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full ">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src={"/Images/" + customer.userImage} className="rounded-circle"  width="180px" height="180px" alt="User-Image"/> </div>
                                <h5 class="f-w-600"> {customer.firstName} {customer.lastName}</h5>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h3 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h3>
                               
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600" id="p" style={{marginTop:"20px"}}>First Name</p>
                                        <h6 class="text-muted f-w-400" id="h6"> {customer.firstName}</h6>
                                    </div>
                                   
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"  id="p" style={{marginTop:"20px"}}>Last Name</p>
                                        <h6 class="text-muted f-w-400"  id="h6"> {customer.lastName}</h6>
                                    </div>
                                    
									<div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"  id="p">Email</p>
                                        <h6 class="text-muted f-w-400"  id="h6">{customer.email}</h6>
                                    </div>
                                   
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"  id="p">Phone</p>
                                        <h6 class="text-muted f-w-400"  id="h6"> {customer.phoneNumber}</h6>
                                    </div>
                                    
									 <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"  id="p">Address</p>
                                        <h6 class="text-muted f-w-400"  id="h6"> {customer.address}</h6>
                                    </div>
                            
									 <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"  id="p">Username</p>
                                        <h6 class="text-muted f-w-400"  id="h6">{customer.username}</h6>
                                    </div>
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btnCancel" onClick={()=> Back()}><b>Back</b></button>
            </div>
        </div>
    </div>
</div>
       
	
     </div>


    );


}

export default UserProfile;