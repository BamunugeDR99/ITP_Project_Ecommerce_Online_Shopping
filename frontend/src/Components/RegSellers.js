import axios from "axios";
import React, { useState, useEffect } from "react";

export default function RegSellers(props) {
  const [orgSellers, setorgSellers] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    function getorgSellers() {
      axios
        .get("http://localhost:8070/orgSeller/get")
        .then((res) => {
          setorgSellers(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }

    getorgSellers();
  }, []);

  function showmore(id){
    console.log(id);
    props.history.push("/admin/reg/sellers/view/" + id);
};



function handleSearch(e){

  let orgSellerSearch = e;
  console.log(orgSellerSearch);

  axios
      .get("http://localhost:8070/orgSeller/get")
      .then((res) =>{

        filterorgSellers(res.data, orgSellerSearch);
        console.log(res.data);
      })
      .catch((err)=> {

          alert(err);
      });
  
}

//Search

function filterorgSellers(data, orgSellerSearch){

    let result = data.filter((post) =>

      post.companyname.toLowerCase().includes(orgSellerSearch.toLowerCase()) || post.ownername.toLowerCase().includes(orgSellerSearch.toLowerCase()) || post.year.toLowerCase().includes(orgSellerSearch.toLowerCase()) || post.email.toLowerCase().includes(orgSellerSearch.toLowerCase())
      

    );

    console.log(result);
    setorgSellers(result);

    if(result != null){

      setLoad(false);
    }

    if(result.length === 0){

      setLoad(true);
    }

    
}


  return (
    <div className="container">
      <h1>Registered Sellers</h1><br/>
      
      <div class="input-group" id = "SellSerch"  style={{width: "1200px"}}>
        
        <input type="search"  class="form-control rounded" placeholder="Search by any keyword..." aria-label="Search"
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
            <th scope="col" style={{ textAlign: "center"}}>VIEW SELLER INFOMATION</th>
          </tr>
        </thead>
        {orgSellers.map((orgSeller, index) => {
          return (
            // <div>

            <tbody style={{ textAlign: "center"}}>
              <tr>
                <th>{orgSeller.companyname}</th>
                <th>{orgSeller.ownername}</th>
                <th>{orgSeller.year}</th>
                <th>{orgSeller.email}</th>
                
                <td >
                  <button
                    onClick = {()=>showmore(orgSeller._id)}
                    class="btn btn-primary">
                    SHOW MORE
                  </button>
                </td>
              </tr>
            </tbody>
            // </div>
          );
        })}

        {/* </div> */}
      </table>
    </div>
  );
}
