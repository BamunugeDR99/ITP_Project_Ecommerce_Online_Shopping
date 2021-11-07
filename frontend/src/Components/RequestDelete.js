import axios from "axios";
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
export default function RequestDelete(props) {
  const [orgSellers, setorgSellers] = useState([]);
  const [requestDelete, setRequestDelete] = useState("");
  const [load, setLoad] = useState(false);
  let totalSellers;
  let result;
  let [abc, setabc] = useState([]);

  let objectID = "";
  let filter_selreq = [];

  useEffect(() => {
    function getorgSellers() {
        objectID = localStorage.getItem("SellerID");
      axios
        .get("https://tech-scope-online.herokuapp.com/orgSeller/get")
        .then((res) => {
            
            filter_selreq = res.data.filter(
                (selreq) =>
                  selreq.requestDelete === true
              );
              console.log(filter_selreq);
            res.data=filter_selreq
          setorgSellers(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }

    getorgSellers();
  }, []);

//   function accept(id) {
//     // console.log(id);
//     axios.delete("https://tech-scope-online.herokuapp.com/orgseller/delete/" + id)
//   }
  function accept(id, index) {
   

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("https://tech-scope-online.herokuapp.com/orgseller/delete/" + id)
        .then((res) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          let afterDelete = abc.splice(index, 1);
          setorgSellers(afterDelete);
        })
        .catch((err) => {
          alert(err);
        });
      
        
      }
    });
  
  }

  function decline(id) {
    // e.preventDefault();
    // const OrgSellerId = localStorage.getorgSeller("orgSellerID");
    // const OrgSellerId = props.match.params.id;
    const neworgSeller = {
      requestDelete: false,
      // orgSellerid : OrgSellerId,
    };
    console.log(neworgSeller)
    axios
    .put("http://localhost:8070/orgseller/reqDel/" + id, neworgSeller)
    .then(() => {
      // setRequestDelete(" ");
      let afterDecline = abc.filter(
        (selreq) =>
          selreq._id !== id
      );
      setorgSellers(afterDecline);
      Swal.fire(
        'Request Declined!',       
      )
      // props.history.push("/Seller/Home");
    })
    .catch((err) => {
      alert(err);
    });
   
  }



  return (
    <div className="container">
      <br />
      <br />
      <h1>Seller Requests</h1>  
      <br />
      <br />
      <table class="table table-hover" style={{ width: "92%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th scope="col">COMPANY NAME</th>
            <th scope="col">OWNER'S NAME</th>
            <th scope="col">EMAIL ADDRESS</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Action
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
                <th>{orgSeller.email}</th>

                <td>
                  <button
                    onClick={() => accept(orgSeller._id)}
                    class="btn btn-success"
                  >
                    Accept
                  </button>
                  &ensp;
                  <button
                    onClick={() => decline(orgSeller._id)}
                    class="btn btn-danger"
                  >
                    Decline
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
