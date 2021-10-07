import React, { useState, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "../Css/sellerview.css";
import AllItemsFiltered from "./AllItemsFiltered";

export default function RequestView(props) {

  const [seller,setsellers] = useState([]);
  const [data, setData] = useState();
  let username = "";
  let password = "";
  let email = "";
  let emailContent = {
    email,
    username,
    password,
  };
 
  let objectID = "";
  useEffect(() =>{
      function getsellers(){
        objectID = props.match.params.id;
          axios.get("http://localhost:8070/seller/get/" + objectID).then((res) =>
          {
              setsellers(res.data);

          }).catch((err) =>{
              alert(err);

          })
      }
     
      getsellers();

    }, );

    function deleteSeller(id) {
        axios
          .delete("http://localhost:8070/seller/delete/" + id)
          .then((res) => {
            
          })
          .catch((err) => {
            alert(err);
          });
      }

    
  async function confirmRequest(id) {
    //e.preventDefault();
    // let flag = 0;
    axios
      .get("http://localhost:8070/seller/get/" + id)
      .then((res) => {
        //setData(res.data);
        //console.log(res.data.ownername)
        password = passwordGenerator(25);
        console.log(password);
        // if same usename came
        //  while(flag == 0){
        username = usernameGenerator(res.data.companyname);
        // axios
        //   .get("http://localhost:8070/orgseller/getUsername/" + username)
        //   .then((res) => {
        //     console.log(res.data);

        //    // document.getElementById("txt").innerHTML =
        //         //"Seller Accepted Successfully!";
        //     // what if
        //   })
        //   .catch((err) => {
        //     alert(err);
        //   });
        let ownername = res.data.ownername;
        let mobile = res.data.mobile;
        let companyname = res.data.companyname;
        let address = res.data.address;
        let year = res.data.year;
        let email = res.data.email;
        let description = res.data.description;
        let logo = res.data.logo;

        const newSeller = {
          ownername,
          mobile,
          companyname,
          address,
          year,
          email,
          description,
          logo,
          username,
          password,
        };

        console.log(newSeller);

        emailContent = {
          email: res.data.email,
          username,
          password,
        };


        axios
        .post("http://localhost:8070/orgseller/add", newSeller)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Request accepted successfully!',
            showConfirmButton: false,
            timer: 1500
          })

          
          emailjs
            .send(
              "service_amyey5b", //your service id
              "template_fy5ukg1", // template id
              emailContent,
              "user_yX9pt2mdVNlUhiI2lw7tv" // user access
            )
            .then(
              (result) => {
                console.log(result.text);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Email has been sent successfully!',
                  showConfirmButton: false,
                  timer: 1500
                })
                objectID = props.match.params.id;
                deleteSeller(objectID);

                
          props.history.push("/Admin/AllSellersRequest");
  
                // document.getElementById("verifyBtn").disabled = false;
              },
              (error) => {
                console.log(error.text);
              }
            );
         
        })
        .catch((err) => {
          alert(err);
        });
      })
      .catch((err) => {
        alert(err);
      });

   
  }
  
  function usernameGenerator(companyName) {
    companyName = companyName.replace(/ +/g, '');
    var result = companyName;
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function passwordGenerator(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  function declineSeller(id){

    Swal.fire({
      title: 'Do you want to Decline the Request ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        deleteSeller(id);
        props.history.push("/Admin/AllSellersRequest");
        
      } else if (result.isDenied) {
        Swal.fire('Cancelled!', '', 'info')
      }
    })
  }

  return (

    <div className="sellerview">
    <br/>
    <div>

      <h2 style={{color:"black",textAlign : "center"}}>REQUEST DETAILS - {seller.companyname}</h2><br/>

      <div class="container">
        <div class="main-body">

          
                  <div class="d-flex flex-column align-items-center text-center">
                    <br></br>

            <div class="col-lg-8">
              <div class="card"><br></br>
                <div class="card-body">
                <img
                       src = {'/Images/'+seller.logo}
                      alt="Admin"
                      class="rounded-circle p-1 bg-black"
                      width="175"
                    />
                   <br/><br/>
                  <div class="row">
                    <div class="col"><div class="d-flex justify-content-start">
                        <label style={{color:"black",textAlign : "left"}}>OWNER NAME</label>
                        </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={seller.ownername} readOnly
                      />
                    </div>
                    <div class="col"><div class="d-flex justify-content-start">
                    <label style={{color:"black",textAlign : "left"}}>COMPANY NAME</label></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={seller.companyname} readOnly
                      />
                    </div>
                  </div>
                  <br />
                  
                  <div class="row">
                    <div class="col"><div class="d-flex justify-content-start">
                    <label style={{color:"black",textAlign : "left"}}>CONTACT NUMBER</label></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={seller.mobile} readOnly
                      />
                    </div>
                    <div class="col"><div class="d-flex justify-content-start">
                    <label style={{color:"black",textAlign : "left"}}>EMAIL ADDRESS</label></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={seller.email} readOnly
                      />
                    </div>
                  </div>
                </div>

                    <div class="card-body" id="sellerB">
                      <div class="row">
                        <div class="col">
                          <div class="form-group"><div class="d-flex justify-content-start">
                          <label style={{color:"black",textAlign : "left"}}>DESCRIPTION</label></div>
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="10"
                              placeholder={seller.description} readOnly
                            ></textarea>
                          </div>
                        </div>
                        <div class="col"><div class="d-flex justify-content-start">
                        <label style={{color:"black",textAlign : "left"}}>ESTABLISHED YEAR</label></div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder={seller.year} readOnly
                          />
                          <br />
                          <div className="row">
                            <div class="form-group"><div class="d-flex justify-content-start">
                            <label style={{color:"black",textAlign : "left"}}>PHYSICAL ADDRESS</label></div>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="6"
                                placeholder={seller.address} readOnly
                              ></textarea>
                            </div>
                          </div>
                        </div><br/><br/>
						<div className = "container">
						<div class="float-center">
            
            <button type="button" class="btn btn-primary" onClick={() => confirmRequest(seller._id)}>ACCEPT</button><span> </span>
						<button type="button"  onClick={() => declineSeller(seller._id)} class="btn btn-danger">DECLINE</button>
							<span> </span>
							</div>
              <p id = {seller._id} class="card-text">
                                <br/><br/><br/>
                            </p>
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