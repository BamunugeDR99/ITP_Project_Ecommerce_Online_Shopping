import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios";

export default function TestOrderMerge(props){

    let [OrderFragments, SetOrderFragments] = useState([]);
    let [FilteredOrderFragments, setFilteredOrderFragments] = useState([]);
    let [FilteredCusOrders, setFilteredCusOrders] = useState([]);
    let SpecificOrder = [];
    let BigOrders = [];
    let CustomerIDs = [];


    useEffect(()=> {


        const CustomerID = "61547689d8939819e488efa9";


            axios.get("http://localhost:8070/Orders/getOrders").then((res) => {

                console.log(res.data);

                FilteredOrderFragments = res.data.filter((order) => order.CustomerID == CustomerID);

                console.log("Filtered Order Fragments");
                console.log(FilteredOrderFragments);


                axios.get("http://localhost:8070/customerOrders/getCusOrder").then((res) => {

                    console.log(res.data);
                    FilteredCusOrders = res.data.filter((order) => order.CustomerID == CustomerID);

                    console.log(FilteredCusOrders);
                    console.log(FilteredCusOrders[0].Orders.length);
                    console.log(FilteredOrderFragments.length);

                    let j = 0;

                    for(let i = 0 ; i < FilteredCusOrders[0].Orders.length; i++){

                        j = 0;

                        for(j=0 ; j < FilteredOrderFragments.length; j++){

                            if(FilteredCusOrders[0].Orders[i] == FilteredOrderFragments[j].OrderID){

                                console.log(FilteredCusOrders[0].Orders[i]);
                                console.log(FilteredOrderFragments[j].OrderID);
                                console.log(FilteredOrderFragments[j]);
                                SpecificOrder.push(FilteredOrderFragments[j]);
                                // console.log(`Specific Orders : ${ SpecificOrder}`);
                            }

                           

                        }

                        BigOrders.push(SpecificOrder);

                        // console.log(BigOrders);


                    }

                    console.log(BigOrders);



                }).catch((err)=> {

                    console.log(err);
                })

                
               



    }).catch((err)=> {

        console.log(err);
    })

    },[])


    return(
        <div>
            <h1>Hallo</h1>
        </div>
    )

}