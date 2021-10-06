import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB

export default function CustomerOrders(props) {
    const [Orders, setOrders] = useState([]);
    let SellerIDs = [];
    let [FilteredOrders, setFilteredOrders] = useState([]);
    let [AllSellers, setAllSellers] = useState([]);

    // let [AllCustomers, setAllCustomers] = [];

    let OrderArr = [];



    const OrderID = "";
    const SellerID = "";
    const SellerLogo = "";
    const SellerName = "";
    const CustomerID = "";
    const OQuantity = "";
    const TransitTime = "";
    const Items = [];




    let FinalOrder = {

        OrderID,
        SellerID,
        SellerLogo,
        SellerName,
        CustomerID,
        OQuantity,
        TransitTime,
        Items


    }












    useEffect(() => {

        function getOrders() {

            const gg = "";




            const CustomerID = "61547689d8939819e488efa9";


            axios.get("http://localhost:8070/Orders/getOrders").then((res) => {

                console.log(res.data);

                FilteredOrders = res.data.filter((order) => order.CustomerID == CustomerID);

                console.log("Filtered Orders")


                //  setOrders(FilteredOrders);

                // for(let i = 0; i < FilteredOrders.length; i++ ){

                //     SellerIDs.push(FilteredOrders[i].SellerID);                        )
                // }


                // console.log(SellerIDs);

                for (let i = 0; i < FilteredOrders.length; i++) {

                    SellerIDs.push(FilteredOrders[i].SellerID);
                }





                axios.get("http://localhost:8070/orgseller/get").then((res) => {

                    console.log(FilteredOrders);
                    console.log(SellerIDs);
                    AllSellers = res.data;
                    console.log(AllSellers);
                    setFinalOrder(FilteredOrders, SellerIDs, AllSellers)

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
                        SellerLogo: AllSellers[j].logo,
                        SellerName: AllSellers[j].companyname,
                        CustomerID: AllOrders[i].CustomerID,
                        OQuantity: AllOrders[i].OQuantity,
                        TransitTime: AllOrders[i].TransitTime,
                        Items: AllOrders[i].Items

                    };


                    OrderArr.push(FinalOrder);

                }
            }
        }

        setOrders(OrderArr);

    }



    return (

        <div>

            {Orders.map((order) => {

                return (

                    <div className="container" style={{ marginTop: '20px' }}>

                        <div className="row shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '90%', padding: '20px 0px 20px 0px', margin: '10px 0px 20px 0px', backgroundColor: 'white', borderRadius: '25px' }}>

                            <div className="col">


                                <img style={{ width: '250px', height: '250px', borderRadius: "10px" }} src={"/Images/" + order.Items[0].Images[0]} />
                                <br /><br /><span style={{ fontSize: "25px", marginLeft: "50px" }}><b>{order.Items[0].Item_name}</b></span>
                            </div>

                            <div className="col">
                                <br />
                                Order ID&emsp;:&emsp; {order.OrderID}
                                <br />
                                <br />
                                Company Name  :&emsp; {order.SellerName}
                                <br />
                                <br />
                                <span>Company Logo &emsp;<img style={{ width: '100px', height: '100px', borderRadius: "50%" }} src={"/Images/" + order.SellerLogo} /></span>
                            </div>

                            <div className="col">
                                <br />
                                <span>Category  &emsp;&emsp;:&emsp; {order.Items[0].Category} </span>
                                <br />
                                <br />
                                <br />
                                <span>Quantity &nbsp;&nbsp;&emsp;&emsp;:&emsp;  {order.OQuantity}</span>
                                <br />
                                <br />
                                <span>Price &emsp;&emsp;&emsp;&emsp;:&emsp; {`Rs.${parseFloat(order.Items[0].FinalPrice * order.OQuantity).toFixed(2)}/=`}</span>
                                <br />
                                <br />
                                <span>Date:&emsp;{order.TransitTime}</span>
                            </div>

                        </div>
                    </div>
                )

            })

            }

        </div>
    )

}