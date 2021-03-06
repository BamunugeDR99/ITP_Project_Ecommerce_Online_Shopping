import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { PayPalButton } from "react-paypal-button-v2";

import "../Css/ConfirmPayment.css"; //css linked

export default function ConfirmPayment(props) {
  const [paymentdetails, setpaymentdetails] = useState([]);
  const [displayOrderID,setDisplayOrderID] = useState("");

  let totalPrice = localStorage.getItem("totalPrice");
  useEffect(() => {
    function getpaymentdetails() {
      const cardid = props.match.params.id;
      axios
        .get(
          "https://tech-scope-online.herokuapp.com/paymentdetails/getItem/" +
            cardid
        )
        .then((res) => {
          setpaymentdetails(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }


    function OrderIDGenerator(length) {
        var result = "";
    
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        var charactersLength = characters.length;
    
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
       setDisplayOrderID(result);
      }


    OrderIDGenerator(10);

    getpaymentdetails();
    // displayStudentdetails();
  }, []);

  function pay() {
    if (document.getElementById("cvvs").value == paymentdetails.cardcvv) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Order has been placed Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      Test();
      props.history.push("/Customer/Home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong cvv/cvc number please enter correct cvv",
      });
    }
  }

  function Test() {
    let AutoOrderID = displayOrderID;

    console.log("GG");
    let SessionItems = JSON.parse(localStorage.getItem("Items"));
    let SessionPackages = JSON.parse(localStorage.getItem("Packages"));

    console.log(SessionItems);
    console.log(SessionPackages);

    //Order History Variables
    let PacakgeID = [];
    let ItemList = [];
    let RecieptNo = "";
    let PaymentType = "";
    let Amount = " ";

    //Orders & PackageOrders Common Variables
    let OrderID = "";
    let SellerID = "";
    let CustomerID = "";
    let OQuantity = "";

    //Orders Specific
    let Items = [];

    //PackageOrders Specific
    let Packages = [];

    //Orders Item
    let newOrder = {
      OrderID,
      SellerID,
      CustomerID,
      OQuantity,
      Items,
    };

    //PackageOrders Item
    let PackageOrder = {
      OrderID,
      SellerID,
      CustomerID,
      OQuantity,
      Packages,
    };

    //OrderHistories Item
    let newOrderHistory = {
      RecieptNo,
      PacakgeID,
      PaymentType,
      ItemList,
      Amount,
      CustomerID,
    };

    for (let i = 0; i < SessionItems.length; i++) {
      ItemList.push(SessionItems[i].ItemID);

      axios
        .get(
          "https://tech-scope-online.herokuapp.com/items/get/" +
            SessionItems[i].ItemID
        )
        .then((res) => {
          let OneItem = res.data;
          let OneItemArr = [];

          OneItemArr.push(OneItem);
          // console.log(OneItem);

          newOrder = {
            OrderID: AutoOrderID,
            SellerID: SessionItems[i].ItemSeller,
            CustomerID: localStorage.getItem("CustomerID"),
            OQuantity: SessionItems[i].ItemQuantity,
            Items: OneItemArr,
          };

          axios
            .post(
              "https://tech-scope-online.herokuapp.com/Orders/addOrder",
              newOrder
            )
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });

          console.log("Item Order");
          console.log(newOrder);
        });
    }

    for (let i = 0; i < SessionPackages.length; i++) {
      PacakgeID.push(SessionPackages[i].packageID);

      axios
        .get(
          "https://tech-scope-online.herokuapp.com/Packages/getPackage/" +
            SessionPackages[i].packageID
        )
        .then((res) => {
          let Onepackage = res.data;
          let OnepackageArr = [];
          OnepackageArr.push(Onepackage);

          console.log(OnepackageArr);

          PackageOrder = {
            OrderID: AutoOrderID,
            SellerID: SessionPackages[i].packageSeller,
            CustomerID: localStorage.getItem("CustomerID"),
            OQuantity: SessionPackages[i].packageQuantity,
            Packages: OnepackageArr,
          };

          axios
            .post(
              "https://tech-scope-online.herokuapp.com/PackageOrders/addOrder",
              PackageOrder
            )
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });

          console.log("package Order");
          console.log(PackageOrder);
        })
        .catch((err) => {});

      // console.log(PacakgeID);
      // console.log(ItemList);
    }

    //Adding to OrderHistory
    newOrderHistory = {
      RecieptNo: AutoOrderID,
      PacakgeID: PacakgeID,
      PaymentType: paymentdetails.cardtype,
      ItemList: ItemList,
      Amount: localStorage.getItem("totalPrice"),
      CustomerID: localStorage.getItem("CustomerID"),
    };

    axios
      .post(
        "https://tech-scope-online.herokuapp.com/orderhistory/addItems",
        newOrderHistory
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });

    console.log("Order History Object");
    console.log(newOrderHistory);

    localStorage.removeItem("Packages");
    localStorage.removeItem("Items");
    localStorage.removeItem("totalPrice");

    // Swal.fire("Success", "Your Order Has Been Placed Successfully!", "success");
  }

const [savedCardStatus,setCardStatus] = useState(true);
const [paypalStatus,setPaypalStatus] = useState(false);

function ChangePaymentType(){
    if(savedCardStatus == true){
        setPaypalStatus(true);
        setCardStatus(false);

    }else{
        setPaypalStatus(false);
        setCardStatus(true);
    }
}

  return (
    <div class="ConfirmPay">
      <div class="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-sm-11">
            <div class="card border-0">
              <div class="row justify-content-center">
                <h3 class="mb-4">Credit Card Checkout</h3>
              </div>
              <div class="row">
                <div id = "paypalCheckout" class="col-sm-7 border-line pb-3" hidden = {paypalStatus}>
                  <PayPalButton
                    amount="100"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      alert(
                        "Transaction completed by " +
                          details.payer.name.given_name
                      );

                      // OPTIONAL: Call your server to save the transaction
                      return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                          orderId: data.orderID,
                        }),
                      });
                    }}
                    options={{
                      clientId:
                        "AdysjOAtp39MYLdaGWB-cGEs4T0QWd_jSF0PO40Of844ElCwGmUWbZ7uXsnA2AtdN__2okZOPRTSjHCh",
                    }}
                  />
                  <center>
                  <button
                    type="button"
                    class="btn btn-red text-center mt-4"
                    onClick={() => ChangePaymentType()}
                  >
                    Pay via Card
                  </button></center>
                </div>

                <div class="col-sm-7 border-line pb-3"  id = "savedCardDetails" hidden={savedCardStatus}>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Name on the card</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      size="15"
                      Value={paymentdetails.cardowner}
                      readOnly
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Card Number</p>
                    <div class="row px-3">
                      <input
                        type="text"
                        name="card-num"
                        placeholder="0000 0000 0000 0000"
                        size="18"
                        id="cr_no"
                        minlength="19"
                        maxlength="19"
                        Value={paymentdetails.cardnumber}
                        readOnly
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">Expiry date</p>
                    <input
                      type="text"
                      name="exp"
                      placeholder="MM/YY"
                      size="6"
                      id="exp"
                      minlength="5"
                      maxlength="5"
                      readOnly
                      Value={paymentdetails.carddate}
                    />
                  </div>
                  <div class="form-group">
                    <p class="text-muted text-sm mb-0">CVV/CVC</p>
                    <input
                      type="password"
                      name="cvv"
                      id="cvvs"
                      placeholder="000"
                      size="1"
                      minlength="3"
                      maxlength="3"
                    />
                  </div>
                  <div class="form-group mb-0">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        id="chk1"
                        type="checkbox"
                        name="chk"
                        class="custom-control-input"
                      />
                    <center>
                  <button
                    type="button"
                    class="btn btn-red text-center mt-4"
                    onClick={() => ChangePaymentType()}
                  >
                    Pay via Paypal
                  </button></center>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5 text-sm-center justify-content-center pt-4 pb-4">
                  <small class="text-sm text-muted">Order number</small>
                  <h5 class="mb-5">{displayOrderID}</h5>
                  <small class="text-sm text-muted">Payment amount</small>
                  <div class="row px-3 justify-content-sm-center">
                    <h2 class="">
                      <span class="text-md font-weight-bold mr-2">LKR </span>
                      <span class="text-danger">{totalPrice}.00</span>
                    </h2>
                  </div>{" "}
                  <button
                    type="button"
                    class="btn btn-red text-center mt-4" hidden = {savedCardStatus}
                    onClick={() => pay()}
                  >
                    PAY
                  </button>
                  <br />
                  {/* <button type="button" class="btn btn-red text-center mt-4" onClick={() => Test()}>Test</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
