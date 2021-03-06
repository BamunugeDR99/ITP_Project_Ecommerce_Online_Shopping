import axios from "axios";
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
export default function RegSellers(props) {
  const [orgSellers, setorgSellers] = useState([]);
  const [load, setLoad] = useState(false);
  let totalSellers;
  let result;
  useEffect(() => {
    function getorgSellers() {
      axios
        .get("https://tech-scope-online.herokuapp.com/orgSeller/get")
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

  function showmore(id) {
    // console.log(id);
    props.history.push("/Admin/viewSellerProfile/" + id);
  }

  function handleSearch(e) {
    let orgSellerSearch = e;
    console.log(orgSellerSearch);

    axios
      .get("https://tech-scope-online.herokuapp.com/orgSeller/get")
      .then((res) => {
        filterorgSellers(res.data, orgSellerSearch);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  //Search

  function filterorgSellers(data, orgSellerSearch) {
    let result = data.filter(
      (post) =>
        post.companyname
          .toLowerCase()
          .includes(orgSellerSearch.toLowerCase()) ||
        post.ownername.toLowerCase().includes(orgSellerSearch.toLowerCase()) ||
        post.year.toLowerCase().includes(orgSellerSearch.toLowerCase()) ||
        post.email.toLowerCase().includes(orgSellerSearch.toLowerCase())
    );

    console.log(result);
    setorgSellers(result);

    if (result != null) {
      setLoad(false);
    }

    if (result.length === 0) {
      setLoad(true);
    }
  }

  function requests() {
    props.history.push("/Admin/AllSellersRequest");
  }

  function generateReport() {
    let month = document.getElementById("month").value;

    axios
      .get("https://tech-scope-online.herokuapp.com/orgSeller/get")
      .then((res) => {
        totalSellers = res.data.length;

        result = res.data.filter(
          (post) => String(post.acceptedDate.substr(5, 2)) === month
        );
        //  console.log(result[0].newlyAddeddate.substr(0,10));
        setorgSellers(result);
        result.push(totalSellers);
        // console.log(result);
        axios
          .post("https://tech-scope-online.herokuapp.com/orgSeller/create-pdf", result)
          .then(() =>
            axios.get("https://tech-scope-online.herokuapp.com/orgSeller/fetch-pdf", {
              responseType: "blob",
              // A BLOB is a binary large object that can hold a variable amount of data. important
            })
          )
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "SellerMonthlyReport.pdf");
            //your file name
          });
        console.log(result);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function MonthChange() {
    let month = document.getElementById("month").value;

    axios
      .get("https://tech-scope-online.herokuapp.com/orgSeller/get")
      .then((res) => {
        totalSellers = res.data.length;

        result = res.data.filter(
          (post) => String(post.acceptedDate.substr(5, 2)) === month
        );

        setorgSellers(result);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <br />
      <br />
      <button
        type="button"
        style={{ float: "right" , marginLeft : "10px"}}
        class="btn btn-warning"
        onClick={() => requests()}
      >
        
        Seller requests
      </button>
      <button
        type="button"
        style={{ float: "right" }}
        class="btn btn-danger"
        onClick={() => {props.history.push("/Admin/DeleteRequest")}}
      >
        
        Delete requests
      </button>
      <h1>Registered Sellers</h1>
      <br />
      <div class="input-group" id="SellSerch" style={{ width: "1200px" }}>
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search by any keyword..."
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <i
          class="bi bi-search"
          id="iconS"
          style={{
            position: "absolute",
            color: "#000000",
            bottom: "5px",
            right: "20px",
          }}
        ></i>
      </div>

      <br />
      <select
        id="month"
        onChange={() => {
          MonthChange();
        }}
        style={{ width: "155px", padding: "5px" }}
      >
        <option value="00">Select a Month</option>
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
      <br />
      <br />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => generateReport()}
      >
        GENERATE REPORT
      </button>
      <br />
      <br />
      <table class="table table-hover" style={{ width: "92%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th scope="col">COMPANY NAME</th>
            <th scope="col">OWNER'S NAME</th>
            <th scope="col">YEAR</th>
            <th scope="col">EMAIL ADDRESS</th>
            <th scope="col" style={{ textAlign: "center" }}>
              VIEW SELLER INFOMATION
            </th>
          </tr>
        </thead>
        {orgSellers.map((orgSeller, index) => {
          return (
            // <div>

            <tbody style={{ textAlign: "center" }}>
              <tr>
                <th>{orgSeller.companyname}</th>
                <th>{orgSeller.ownername}</th>
                <th>{orgSeller.year}</th>
                <th>{orgSeller.email}</th>

                <td>
                  <button
                    onClick={() => showmore(orgSeller._id)}
                    class="btn btn-primary"
                  >
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
