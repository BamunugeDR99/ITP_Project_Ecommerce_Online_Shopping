import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';
import go from "./../images/go.jfif";
;



export default function AllDiscountedItems(props) {


    const [items, setItems] = useState([]); //Defines that items is an array
    let fitems = [];
    const [loads, setLoad] = useState(false);
    //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
    useEffect(() => {

        //function to getItems
        function getItems() {
            //call a backend URL using axios
            axios.get("http://localhost:8070/items/getItems").then((res) => {

                console.log(res.data);
                setItems(res.data.filter((item) => item.DiscountStatus === true));

                fitems = items;
                console.log(fitems);






            }).catch((err) => {
                alert(err.message);
            })

        }


        console.log("Hello3");

        getItems();



    }, [])












    function update(id) {
        console.log(id);
        props.history.push("/updateDiscount/" + id);
    };



    //search
    function filterContent(data, userSearch) {

        let result = data.filter((post) =>
            post.Item_name.toLowerCase().includes(userSearch.toLowerCase()) && post.DiscountStatus === true

        );

        console.log(result);

        setItems(result);

        if (result != null) {
            setLoad(false);
            //document.getElementById("txt2").innerHTML = "";
        }

        if (result.length == 0) {
            //alert("d");
            setLoad(true);
            //document.getElementById("txt2").innerHTML = "No Result Found!";
        }
    }

    // search
    function handleSearch(e) {
        let userSearch = e;
        console.log(userSearch);


        axios
            .get("http://localhost:8070/items/getItems")
            .then((res) => {

                filterContent(res.data, userSearch);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }



















    return (

        <div className="OffersnPacks">
            <div className="container">
                <div>

                    <h1>All Discounted Items</h1> <br />

                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search Item By Name"
                        aria-label="Search"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <br></br>


                    <div className="row">
                        {items.map((item) => {
                            return (


                                <div className="col-sm-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="container-fluid" style={{ padding: '0px' }}>
                                            <img className="img-responsive center-block header1" src={go} width="286px" height="250px" />
                                            <div className="innertag" id = "disPercentage" ><label className="innertag" id = "disPercentage" ><b >-{item.DiscountPrecentage}%</b></label></div>
                                        </div>
                                        <div className="card-body">
                                            <div className="cardText">
                                                <p><b>{item.Item_name}</b></p>
                                                <p><b>Rs.</b>{item.FinalPrice}.00</p>
                                                <p className="iPrice" style={{ padding: '0px' }}> Rs.{item.Price}.00</p>
                                                <p>Rating</p>
                                            </div>
                                            <a href="#" className="btn btn-primary" onClick={() => update(item._id)}>Update Discount</a>

                                        </div>
                                    </div>
                                    <br></br>
                                </div>




                            )




                        })}

                    </div>
                </div>

            </div>
        </div>
            )
}