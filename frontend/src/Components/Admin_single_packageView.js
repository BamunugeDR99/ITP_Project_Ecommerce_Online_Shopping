import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SinglePackage_AdminView(props) {
  const [packageS, setPackage] = useState([]);

  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");

  useEffect(() => {
    function getOnePackage() {
      const packageId = props.match.params.id;
      console.log(packageId);

      // const packageId = props.match.params.id;
      // console.log(packageId);

      axios
        .get("http://localhost:8070/Packages/getPackage/" + packageId)
        .then((res) => {
          console.log(res.data);
          setPackage(res.data);
          let startDate = "";
          let endDate = "";

          startDate = res.data.startDate;
          endDate = res.data.endDate;
          setEdate(String(endDate.substr(0, 10)));
          setSdate(String(startDate.substr(0, 10)));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getOnePackage();
  }, []);

  function gBack(SellerId) {
    //  console.log(`Seller ID : ${SellerId}`);

    props.history.push("/Admin/packages/" + SellerId);
  }

  return (
    <div className="container d-flex justify-content-center mt-3 mb-5">
      <div class="card " style={{ width: "30rem" }}>
        <img class="card-img-top" src={"/Images/" + packageS.image} alt="Card image cap" height="500px" />

        <div class="card-body">
          <h5 class="card-title">Package Details</h5>
          <p class="card-text">{`Package Name : ${packageS.packageName}`}</p>
          <p class="card-text">{`Package Price : Rs.${packageS.price}.00 `}</p>
          <p class="card-text">{`Package Description : ${packageS.description}`}</p>
          <p class="card-text">{`Package Start date: ${sdate}`}</p>
          <p class="card-text">{`Package End dtae : ${edate}`}</p>
          <a
            href="#"
            class="btn btn-primary"
            onClick={() => gBack(packageS.seller)}
          >
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
}
