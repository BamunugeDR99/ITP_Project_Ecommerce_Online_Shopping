import axios from "axios";
import React, {useState,useEffect} from "react";



function UserProfile(props){

  const [customer,setCustomer] = useState([]);
  let Dateofb;
  const [birth, setBirthday] = useState("");
  
 
  
  useEffect(() =>{
      function getCustomer(){
          axios.get("http://localhost:8070/Customer/get/613b4f1a73eceb40702affe6").then((res) =>
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

  function Updatecus(id){

      console.log(id);
      props.history.push("/update/" +id)
     
  }

    return(

      <div className="CustomerPro">

        <div className="Wraperrr">
    <div className="mainb">
    
          <div className="row1 gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="cardx">
                <div className="cardb">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={"Images/" + customer.userImage} alt="User_Image" className="rounded-circle" width="310px" height="310px"/>
                    <div className="mt-3">
                      <h2> {customer.firstName} {customer.lastName}</h2>
                      <h5><p className="text-secondary mb-1"><b> {customer.username}</b></p></h5>
                      <h5><p className="text-muted font-size-sm"><b> {customer.email}</b></p></h5>
                      
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
            <div className="col-md-8">
              <div className="cardx mb-3">
                <div className="cardb">
				
				<p className = "details">Personal Details</p>
				
                  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0"><b>First Name</b></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {customer.firstName}
                    </div>
                  </div>
                  <hr/>
				  
				  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0"><b>Last Name</b></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {customer.lastName}
                    </div>
                  </div>
                  <hr/>
				  
                  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0"><b>Dateof Birth</b></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {birth}
                    </div>
                  </div>
                  <hr/>
				  
                  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0"><b>Gender</b></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {customer.gender}
                    </div>
                  </div>
                  <hr/>
				  
                  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0"><b>Phone Number</b></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {customer.phoneNumber}
                    </div>
                  </div>
                  <hr/>
				  
                  <div className="row1">
                    <div className="col-sm-3">
                      <h6 className="mb-0"><b>Address</b></h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {customer.address}
                    </div>
                  </div>
                  <hr/><br/>



            </div>
			
			
          </div>
		  <br/>
			
			            <div className="row1">
                    <div className="col-sm-12">
                       <button type="submit" className="btnedit" onClick ={()=>Updatecus(customer._id)}><b>Edit</b></button>

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