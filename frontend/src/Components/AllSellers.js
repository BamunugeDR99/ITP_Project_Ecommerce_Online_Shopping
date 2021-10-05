import axios from "axios";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
//import {ClipLoader} from "react-spinners";

export default function AllRequests(props) {
  const [sellers, setsellers] = useState([]);
  const [loads, setLoad] = useState(false);


  useEffect(() => {
    function getsellers() {
      axios
        .get("http://localhost:8070/seller/get")
        .then((res) => {
          setsellers(res.data);
          console.log(res.data);
          // hello
        })
        .catch((err) => {
          alert(err);
        });
    }

    getsellers();
  }, []);


  function showmore(id){
    console.log(id);
    props.history.push("/Admin/RequestSellerProfile/" + id);
};

function handleSearch(e){

  let sellerSearch = e;
  console.log(sellerSearch);

  axios
      .get("http://localhost:8070/seller/get")
      .then((res) =>{

        filtersellers(res.data, sellerSearch);
        console.log(res.data);
      })
      .catch((err)=> {

          alert(err);
      });
  
}

//Search

function filtersellers(data, sellerSearch){

    let result = data.filter((post) =>

      post.companyname.toLowerCase().includes(sellerSearch.toLowerCase()) || post.ownername.toLowerCase().includes(sellerSearch.toLowerCase())
      

    );

    console.log(result);
    setsellers(result);

    if(result != null){

      setLoad(false);
    }

    if(result.length === 0){

      setLoad(true);
    }

    
}

  return (
    <div className="container">
      <h1>Seller Requests</h1>
      <div class="input-group" id = "SellSerch"  style={{width: "950px"}}>
        
        <input type="search"  class="form-control rounded" placeholder="Search by company name or owner name...." aria-label="Search"
          aria-describedby="search-addon" onChange = {(e)=> handleSearch(e.target.value)}/>
        <i class="bi bi-search" id="iconS" style={{ position:"absolute",  color:"#000000", bottom:"5px",  right:"20px"}}></i>
        </div>
        
        <br/><br/>
      <table class="table table-hover" style={{ width: "92%"}}>
        <thead style={{ textAlign: "center"}}>
          <tr>
            <th scope="col">COMPANY NAME</th>
            <th scope="col">OWNER'S NAME</th>
            <th scope="col">YEAR</th>
            <th scope="col">EMAIL ADDRESS</th>
            <th scope="col">VIEW REQUEST INFOMATION</th>
          </tr>
        </thead>
        {sellers.map((seller, index) => {
          return (
            // <div>

            <tbody style={{ textAlign: "center"}}>
              <tr>
                <th>{seller.companyname}</th>
                <th>{seller.ownername}</th>
                <th>{seller.year}</th>
                <th>{seller.email}</th>
                <td>
                  <button
                    class="btn btn-primary"
                    onClick = {()=>showmore(seller._id)}
                    
                  >
                    SHOW MORE
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}


      </table>
    </div>
  );
}
