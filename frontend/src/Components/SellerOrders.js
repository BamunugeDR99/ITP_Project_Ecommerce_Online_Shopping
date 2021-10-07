import React, { useState, useEffect } from "react"; //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios";
import g1 from "../images/p1.png";

export default function SellerOrders(props) {
  const [Orders, setOrders] = useState([]);
  let CustomerIDs = [];
  let OrderIDs = [];
  let [FilteredOrders, setFilteredOrders] = useState([]);
  let [AllCustomers, setAllCustomers] = useState([]);

  // let [AllCustomers, setAllCustomers] = [];

  let OrderArr = [];

  const OrderID = "";
  const SellerID = "";
  const CustomerFName = "";
  const CustomerLName = "";
  const CustomerID = "";
  const OQuantity = "";
  const TransitTime = "";
  const Items = [];

  let FinalOrder = {
    OrderID,
    SellerID,
    CustomerFName,
    CustomerLName,
    CustomerID,
    OQuantity,
    TransitTime,
    Items,
  };

  useEffect(() => {
    function getOrders() {
      const gg = "";

      const SellerID = "613a2b0fb31f783accd94447"; /// change this

      axios
        .get("http://localhost:8070/Orders/getOrders")
        .then((res) => {
          console.log(res.data);

          FilteredOrders = res.data.filter(
            (order) => order.SellerID == SellerID
          );

          console.log("Filtered Orders");

          for (let i = 0; i < FilteredOrders.length; i++) {
            CustomerIDs.push(FilteredOrders[i].CustomerID);
            OrderIDs.push(FilteredOrders[i].OrderID);
            console.log(FilteredOrders[i].OrderID);
            console.log(OrderIDs);
          }

          axios
            .get("http://localhost:8070/Customer/getAll")
            .then((res) => {
              console.log(FilteredOrders);
              console.log(CustomerIDs);
              AllCustomers = res.data;
              console.log(AllCustomers);
              setFinalOrder(FilteredOrders, CustomerIDs, AllCustomers);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getOrders();
  }, []);

  function setFinalOrder(AllOrders, SellerIDs, AllSellers) {
    let j = 0;

    for (let i = 0; i < SellerIDs.length; i++) {
      j = 0;

      for (j = 0; j < AllSellers.length; j++) {
        if (SellerIDs[i] === AllSellers[j]._id) {
          console.log(AllSellers[j].logo);
          FinalOrder = {
            OrderID: AllOrders[i].OrderID,
            SellerID: SellerIDs[i],
            CustomerFName: AllSellers[j].firstName,
            CustomerLName: AllSellers[j].lastName,
            CustomerID: AllOrders[i].CustomerID,
            OQuantity: AllOrders[i].OQuantity,
            TransitTime: AllOrders[i].TransitTime,
            Items: AllOrders[i].Items,
          };

          OrderArr.push(FinalOrder);
          console.log(FinalOrder);
        }
      }
    }

    setOrders(OrderArr);
  }

  function goToItemOrders() {
    props.history.push("/Seller/ItemMonthlySales");
  }

  function goToPackageOrder() {}

  return (
    <div>
      <br />
      <br />
      <button
        type="button"
        class="btn btn-primary "
        style={{ float: "right" }}
        id="GPackageBtn2"
        onClick={goToItemOrders}
      >
        Item Orders
      </button>
      <button
        type="button"
        class="btn btn-primary "
        style={{ float: "right" }}
        id="GDisItemsBtn2"
        onClick={goToPackageOrder}
      >
        Package Orders
      </button>
      <br />
      <br />
      {Orders.map((order) => {
        return (
          <div>
            <div className="container" style={{ marginTop: "20px" }}>
              <div
                className="row shadow p-3 mb-5 bg-white rounded"
                style={{
                  width: "90%",
                  padding: "20px 0px 20px 0px",
                  margin: "0px 0px 20px 2px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "red",
                }}
              >
                <div className="col">
                  <img
                    style={{ width: "50%", borderRadius: "10px" }}
                    src={"/Images/" + order.Items[0].Images[0]}
                  />
                  <br />
                  <span>{order.Items[0].Item_name}</span>
                </div>

                <div className="col">
                  <br />
                  {`Order ID : ${order.OrderID}`}
                  <br />
                  <br />
                  {`Customer Name : ${order.CustomerFName} ${order.CustomerLName}`}
                  <br />
                  <br />
                  {`Date : ${order.TransitTime}`}
                  <br />
                </div>

                <div className="col">
                  <br />
                  <span>{`Category : ${order.Items[0].Category}`}</span>
                  <br />
                  <br />
                  <span>{`Item name : ${order.Items[0].Item_name}`}</span>
                  <br />
                  <br />
                  <span>{`Quantity : ${order.OQuantity}`}</span>
                  <br />
                  <br />
                  <span>{`Price : ${parseFloat(
                    order.Items[0].FinalPrice * order.OQuantity
                  ).toFixed(2)}`}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
