import React, { useState, useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

import "../Css/sellerprofile.css";

export default function SellerUpdate(props) {

  let flag1 = 0;
  let image2 = "";
  let image3 = "";

  let[currentLogo,setCurrentLogo] = useState("");

    const [data,setData] = useState({
        ownername : "",
              mobile : "",
              companyname : "",
              address : "",
              year : "",
              email : "",
              description : "",
              logo : "",
    });
  
    useEffect(() =>{
        function getorgSellers(){
          const objectId = props.match.params.id; 
          console.log(objectId);
            axios.get("http://localhost:8070/orgSeller/get/" + objectId).then((res) =>
            {
  
                setData(res.data);
                console.log(res.data);
                setCurrentLogo(res.data.logo);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getorgSellers();
  
       
    }, []);

    function validatereg(){
      const yearValue = data.year;
      const phoneNumber = data.mobile;
    
  
       if (isNaN(yearValue)) {
        flag1 = 0;
      
        Swal.fire('Enter only numeric value to Established Year!')	
        } else if (yearValue.length < 4) {
        flag1 = 0;
        Swal.fire('Established Year must be 4 digit! Entered value is less than 4!!')
        
        } else if (yearValue.length > 4) {
        flag1 = 0;
        Swal.fire('Established Year must be 4 digit! Entered value is greater than 4!!')
        
        } else if (isNaN(phoneNumber)) {
        flag1 = 0;
        Swal.fire('Enter only numeric value to Contact Number!')
        
        } else if (phoneNumber.length < 10) {
        flag1 = 0;
        Swal.fire('Contact Number must be 10 digit! Your Number is less than 10!')
      
        } else if (phoneNumber.length > 10) {
        flag1 = 0;
        Swal.fire('Contact Number must be 10 digit! Your Number is greater than 10!')
        
        } else if (phoneNumber.charAt(0) !== "0") {
        flag1 = 0;
        Swal.fire('Contact Number must start with 0!')
        
        }else {
        flag1 = 1;
        }
        
      }

      function changeLogo(){

        let Clogo = document.getElementById("company_l").value;

		if (Clogo === "") {

			 image3 = currentLogo;
       console.log(image3)
       data.logo = image3
       console.log(data)

		}else{

			 image2 = document.getElementById("company_l").value;
		  
			 image3 = image2.substring(12);
       console.log(image3)
       data.logo = image3
       console.log(data)

		}
}
  
  
    function sendData(e){
   
      const objectId = props.match.params.id; 
      console.log(objectId);
  
      e.preventDefault();

      validatereg();
      changeLogo()
  //flag1 = 1;
  
     if(flag1 === 1){
      axios.put("http://localhost:8070/orgSeller/update/" + objectId,data).then(()=>{


      //  alert("Seller Updated Successfully!");
      Swal.fire(
        'Success!',
        'Successfully Updated Your Profile!',
        'success'
      )
       
        props.history.push("/Seller/MyProfile");
  
      }).catch((err) =>{

        alert(err)
      })
    }
  }
  
    function handle(e){

    
      const newdata = {...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
  
    }
  
   

    function deleteSeller() {
      Swal.fire(
        'Success!',
        'Request Sent!',
        'success'
      )
    }

  return (

    <div className="sellerprofile">
    <div className="height-100 bg-light">
      <br />
      <br />
      {/* <br/><br/><br/><br/> */}
      <h2 style={{color:"black", marginLeft:"130px", marginBottom:"30px"}}>Edit Profile</h2>
      {/* <h1 id = "txt"></h1> */}


      <div class="container">
      <form onSubmit = {sendData}> 
        <div class="main-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <br></br>
                    <img
                       src = {'/Images/'+data.logo}
                      alt="Admin"
                      class="rounded-circle p-1 bg-black"
                      width="175"
                    />
                    <br></br>
                  </div>

				  <div className = "card border border-dark rounded ">
					  <br/>
					  <div className = "card-body">
                  <ul class="list-group list-group-flush">
                    <div class="shop">
                      <h4 class="mb-0" style = {{textAlign : "center"}}>{data.companyname}</h4>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}} >{data.mobile}</h6>
                    </div>
                    <br></br>

                    <div class="shop">
                      <h6 class="mb-0" style = {{textAlign : "center"}} >{data.email}</h6>
                    </div>
                    <br></br>

             
                
                    <div class="mt-3">
                      <button class="btn btn-danger btn-block button-shape" onClick={() => deleteSeller()}>
                        REQUEST DELETE
                      </button>
                    </div>
                  </ul>
				  <br/></div></div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="card">
              
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                    <input type="text" className ="form-control" id="ownername" Value = {data.ownername}
                            onChange= {
                            (e)=>handle(e)} />
                    </div>
                    <div class="col">
                    <input type="text" className="form-control" id="companyname" Value = {data.companyname}
                            onChange= {
                            (e)=>handle(e)}
                            />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col">
                    <input type="text" className="form-control" id="mobile" Value = {data.mobile}
                            onChange= {
                            (e)=>handle(e)}
                          />
                    </div>
                    <div class="col">
                    <input type="text" className="form-control" id="email" Value = {data.email} readOnly
                            onChange= {
                            (e)=>handle(e)}
                          />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body" id="sellerB">
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                          <textarea type="text" rows="9" className="form-control" id="description" value = {data.description}
                                    onChange= {
                                    (e)=>handle(e)}
                                    />
                          </div>
                        </div>
                        <div class="col">
                        <input type ="text" className ="form-control" id = "year" Value = {data.year}
                                onChange= {
                                (e)=>handle(e)}/>
                          <br />
                          <div className="row">
                            <div class="form-group">
                              <textarea
                               className="form-control" id="address" rows="3" value = {data.address}
                                onChange= {
                                 (e)=>handle(e)}
                                >
                            </textarea>
                            </div>

                            <div className="form-group">
                                <label for="SellerI" id="SellI">Company Logo</label>
                                <input type="file" className="form-control-file" id="company_l"/>
                                </div>
                                
			                       <br/>
                          </div>
                        </div>
						<div className = "container">
						<div class="float-right">
            
						<button type="submit" class="btn btn-primary">UPDATE</button>
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
        </form> 
      </div>
 
    </div>
    <br/><br/><br></br>
    </div>
  );
}
