import axios from "axios";
import React, {useState,useEffect} from "react";


//cm
function UserProfile(props){

  const [customer,setCustomer] = useState([]);
  let Dateofb;
  const [birth, setBirthday] = useState("");
  
 
  
  useEffect(() =>{
      function getCustomer(){
        const objectID = localStorage.getItem("CustomerID") 
          axios.get("http://localhost:8070/Customer/get/61547cbbe2ce402e58f887d0").then((res) =>
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

//   function Updatecus(id){

//       console.log(id);
//       props.history.push("/Customer/update/" +id);
     
//   }

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
                                <div class="m-b-25"> <img src={"/Images/" + customer.userImage} className="rounded-circle"  width="100px" height="100px" alt="User-Image"/> </div>
                                <h5 class="f-w-600"> {customer.firstName} {customer.lastName}</h5>

                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h3 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h3>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">First Name</p>
                                        <h6 class="text-muted f-w-400"> {customer.firstName}</h6>
                                    </div>
                                   
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Last Name</p>
                                        <h6 class="text-muted f-w-400"> {customer.lastName}</h6>
                                    </div>
                                    
									<div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">{customer.email}</h6>
                                    </div>
                                   
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Phone</p>
                                        <h6 class="text-muted f-w-400"> {customer.phoneNumber}</h6>
                                    </div>
                                    
									 <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Address</p>
                                        <h6 class="text-muted f-w-400"> {customer.address}</h6>
                                    </div>
                            
									 <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Username</p>
                                        <h6 class="text-muted f-w-400">{customer.username}</h6>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
       
	
     </div>


    );


}

export default UserProfile;