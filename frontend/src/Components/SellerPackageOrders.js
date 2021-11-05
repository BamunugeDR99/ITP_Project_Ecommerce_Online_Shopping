import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios";


export default function SellerPackageOrders(props) {

    const [Orders, setOrders] = useState([]);
    let CustomerIDs = [];
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
    const Packages = [];





    let FinalOrder = {

        OrderID,
        SellerID,
        CustomerFName,
        CustomerLName,
        CustomerID,
        OQuantity,
        TransitTime,
        Packages

    }












    useEffect(() => {

        function getOrders() {

            const gg = "";




            const SellerID = localStorage.getItem("SellerID");


            axios.get("http://localhost:8070/PackageOrders/getOrders").then((res) => {

                console.log(res.data);

                FilteredOrders = res.data.filter((order) => order.SellerID == SellerID);

                console.log("Filtered Orders")


                //  setOrders(FilteredOrders);

                // for(let i = 0; i < FilteredOrders.length; i++ ){

                //     SellerIDs.push(FilteredOrders[i].SellerID);                        )
                // }


                // console.log(SellerIDs);

                for (let i = 0; i < FilteredOrders.length; i++) {

                    CustomerIDs.push(FilteredOrders[i].CustomerID);
                }





                axios.get("http://localhost:8070/Customer/getAll").then((res) => {

                    console.log(FilteredOrders);
                    console.log(CustomerIDs);
                    AllCustomers = res.data;
                    console.log(AllCustomers);
                    setFinalOrder(FilteredOrders, CustomerIDs, AllCustomers)

                }).catch((err) => {

                    console.log(err);
                })



            }).catch((err) => {

                console.log(err);

            })






        }






        getOrders();

    }, [])





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
                        Packages: AllOrders[i].Packages

                    };


                    OrderArr.push(FinalOrder);
                    console.log(FinalOrder);

                }
            }
        }

        setOrders(OrderArr);

    }

    function goToItemOrders() {
        props.history.push("/Seller/Orders");
        }
      
        function goToPackageOrder() {
          props.history.push("/Seller/PackageOrders");
        }
      
        function goTOpackageSales(){
          props.history.push("/Seller/PackageMonthlySales");
          
        }

    return (

        <div>
               <br />
      <br />
      <button type="button" class="btn btn-secondary" onClick={() => {goTOpackageSales()}}>monthly sales on packages</button>
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
<br/><br/>
            {Orders.map((order) => {

                return (

                    <div>


                        <div className="container" style={{ marginTop: '20px' }}>

                            <div className="row shadow p-3 mb-5 bg-white rounded" style={{ width: '90%', padding: '20px 0px 20px 0px', margin: '0px 0px 20px 2px', backgroundColor: 'white', borderRadius: '10px', border: 'red' }}>

                                <div className="col">
                                    <img style={{ width: '50%', borderRadius: '10px' }} src={"/Images/" + order.Packages[0].image} />
                                    <br />
                                    <span>{order.Packages[0].packageName}</span>
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
                                    <span >Content   &emsp;&emsp;:&emsp; {order.Packages[0].content.map((pack) => {

                                        return (
                                            <div>

                                                <p>{pack.Item_name}</p>
                                            </div>
                                        )

                                    })} </span>
                                     <br />
                                    <span >{`Item name : ${order.Packages[0].packageName}`}</span>
                                    <br />
                                    <br />
                                    <span >{`Quantity : ${order.OQuantity}`}</span>
                                    <br />
                                    <br />
                                    <span >{`Price : ${parseFloat(order.Packages[0].price * order.OQuantity).toFixed(2)}`}</span>
                                </div>

                            </div>

                        </div>

                    </div>
                )

            })

            }

        </div>
    )




}