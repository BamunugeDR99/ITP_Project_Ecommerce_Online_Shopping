import axios from "axios";
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Swal from 'sweetalert2'


export default function CustomerList(props) {

  const [customer, setCustomers] = useState([]);
  // const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  let result;
  let totalCustomers;


  useEffect(() => {
    function getCustomers() {
      axios.get("http://localhost:8070/Customer/getAll").then((res) => {
        setCustomers(res.data);
        console.log(res.data);


      }).catch((err) => {
        alert(err);
      })
    }

    getCustomers();


  }, []);



  function deleteCus(id) {
    axios.delete("http://localhost:8070/Customer/delete/" + id).then((res) => {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Successfully Deleted'
      })


      //alert("Customer Deleted Successfully!");
      const afterDeleteCustomer = customer.filter(customer => customer._id !== id);
      setCustomers(afterDeleteCustomer);
    }).catch((err) => {
      alert(err);
    })
  }
  //search
  function handleSearch(e) {

    let customerSearch = e;
    console.log(customerSearch);

    axios
      .get("http://localhost:8070/Customer/getAll")
      .then((res) => {

        filterCustomer(res.data, customerSearch);
        console.log(res.data);
      })
      .catch((err) => {

        alert(err);
      });

  }

  //Search

  function filterCustomer(data, customerSearch) {

    let result = data.filter((post) =>

      post.firstName.toLowerCase().includes(customerSearch.toLowerCase()) || post.lastName.toLowerCase().includes(customerSearch.toLowerCase()) || post.username.toLowerCase().includes(customerSearch.toLowerCase())


    );

    console.log(result);
    setCustomers(result);

    if (result != null) {

      setLoad(false);
    }

    if (result.length === 0) {

      setLoad(true);
    }


  }

  function showMore(id) {

    console.log(id);
    props.history.push("/Admin/Customers/Details/" + id);
  }

  // function filterbyMonth() {
  //   let month = "05";


  //   axios.get("http://localhost:8070/Customer/getAll").then((res) => {



    
  //     result = res.data.filter(
  //       (post) => String(post.newlyAddeddate.substr(5, 2)) === month


  //     );

  //     console.log(result);
  //      setCustomers(result)

  //   }).catch((err) => {
  //     alert(err);
  //   })

  // }

function generateReport(){
  let month = document.getElementById("month").value;


  axios.get("http://localhost:8070/Customer/getAll").then((res) => {

    totalCustomers = res.data.length;
   

    result = res.data.filter(
      (post) => String(post.newlyAddeddate.substr(5, 2)) === month


    );
  //  console.log(result[0].newlyAddeddate.substr(0,10));
  setCustomers(result)
  result.push(totalCustomers);
   console.log(result);
    axios
  .post("http://localhost:8070/Customer/create-pdf", result)
  .then(() =>
    axios.get("http://localhost:8070/Customer/fetch-pdf", {
      responseType: "blob",
      // A BLOB is a binary large object that can hold a variable amount of data. important
    })
  )
  .then((res) => {
    const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    saveAs(pdfBlob, "CustomerMonthlyReport.pdf");
                      //your file name 
  });

    console.log(result);
    
   
    

  }).catch((err) => {
    alert(err);
  })

  


}

function monthChange(){

 let month = document.getElementById("month").value;
  axios.get("http://localhost:8070/Customer/getAll").then((res) => {

    totalCustomers = res.data.length;
   

    result = res.data.filter(
      (post) => String(post.newlyAddeddate.substr(5, 2)) === month


    );
  //  console.log(result[0].newlyAddeddate.substr(0,10));
  setCustomers(result)
  //result.push(totalCustomers);
   //console.log(result);


    //console.log(result);
    
   
    

  }).catch((err) => {
    alert(err);
  })




}




  return (
    <div class="CustomerList">
      <div class="cus">

      <select id="month" style={{width:"200px", fontSize:"20px"}} onChange = {()=> {monthChange()}}>
      <option value="" disabled selected >Month</option>
      <option value="01">January</option>
      <option value="02">February</option>
      <option value="03">March</option>
      <option value="04">April</option>
      <option value="05">May</option>
      <option value="06">June</option>
      <option value="07">July</option>
      <option value="08">August</option>
      <option value="09">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
      </select>

      <button type="button"style={{float:"right",backgroundColor:"rgb(34,139,34)", marginTop:"30px"}} class="btn btn-primary" onClick={() => generateReport()}>Generate Report</button>
      
       

        <p>Customers</p>
       
      </div>

      <hr id="li" />

      <div class="input-group" id="CusSerch">

        <input type="search" class="form-control rounded" placeholder="Search by first name or last name or username...." aria-label="Search"
          aria-describedby="search-addon" onChange={(e) => handleSearch(e.target.value)} />
        <i class="bi bi-search" id="iconS"></i>
      </div>
      {/* <div class="dropdown"> */}
      {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}

      <br />

      <div class="CusListcard">
        <table class="tablex">
          <thead class="theadD">
            <tr>
              <th>User Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>


          {customer.map((customer, index) => {

            return (




              <tbody>

                <tr>
                  <td data-label="UserImage">
                    <img src={"/Images/" + customer.userImage} alt="userImage" width="110px" height="110px" className="rounded-circle" />
                  </td>
                  <td data-label="Cutomer First Name">{customer.firstName}</td>
                  <td data-label="Cutomer Last Name">{customer.lastName}</td>
                  <td data-label="Customer Username">{customer.username}</td>
                  <td data-label="Customer Email">{customer.email}</td>


                  <td data-label="Action">

                    <div>
                      <button class="btnshowmr" onClick={() => showMore(customer._id)}>Show More</button>

                      <button class="btnremove" onClick={() => deleteCus(customer._id)}>Remove</button>

                    </div>

                    {/* <div id = {customer._id}>   
         onClick = {() => setShow(true)} 
              {     
                show? <button class="btnshowless" onClick = {() => setShow(false)}>Show Less</button>:null
              }
			  </div> */}

                  </td>
                  {/* <p id = {customer._id}></p> */}

                </tr>


              </tbody>


            )



          })}


        </table>

      </div>
    </div>

  );




}