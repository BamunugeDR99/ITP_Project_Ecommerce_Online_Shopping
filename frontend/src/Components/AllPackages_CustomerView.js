import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';
import go from "./../images/go.jfif";


;



export default function AllPackages(props) {


    const [packages, setPackages] = useState([]); //Defines that items is an array
    let fitems = [];
    const [loads, setLoad] = useState(false);
    //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
   
    useEffect(() => {


        function getPackages() {

            //call a backend URL using axios
            axios.get("http://localhost:8070/Packages/getPackages").then((res) => {

                console.log(res.data);
                setPackages(res.data.filter((item) =>  item.packageAvailability== true));

                console.log(packages);

                console.log("Hello");




            }).catch((err) => {
                alert(err.message);
            })

        }


     

        getPackages();



    }, [])














    //search
    function filterContent(data, userSearch) {

        let result = data.filter((post) =>
            post.packageName.toLowerCase().includes(userSearch.toLowerCase())

        );

     

        setPackages(result);

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
            .get("http://localhost:8070/Packages/getPackages")
            .then((res) => {

                let filteredData = res.data.filter((item) =>  item.packageAvailability== true)
                filterContent(filteredData, userSearch);
               
            })
            .catch((err) => {
                alert(err);
            });
    }







    function goToPackages(){

        props.history.push("/Customer/Packages")
      }
  
      
      function goToDisItems(){
  
        props.history.push("/Customer/DiscountedItems")
      }
  




      






    return (
        <div className = "OffersnPacks">

        <br/><br/><br/>
          <button type="button" class="btn btn-primary " style={{float:'right'} } id="GPackageBtn2" onClick={goToPackages}>Promo Packages</button>
          <button type="button" class="btn btn-primary " style={{float:'right'}}id="GDisItemsBtn2" onClick={goToDisItems}>Discounted Items</button>
         
            <div className="container">
                <div>
                    <center>
                    <h1>All Promotional Packages</h1> <br />
                    </center>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search Package By Name"
                        aria-label="Search"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <br></br>


                    <div className="row">
                        {packages.map((item) => {
                            return (


                                <div className="col-sm-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="container-fluid" style={{ padding: '0px' }}>
                                            <img className="img-responsive center-block header1 rounded-top" src={"/Images/" + item.image} width="286px" height="250px" />

                                        </div>
                                        <div className="card-body">
                                            <div className="cardText">
                                                <p><b>{item.packageName}</b></p>
                                                {item.content.map((pack) => {

                                                    return (
                                                        <div>
                                                            <p>{pack.Item_name}</p>
                                                        </div>
                                                    )

                                                })

                                                }
                                                <p><b>Rs.</b>{item.price}.00</p>

                                                
                                            </div>
                                            <a href="#" className="btn btn-primary" >Add to Cart</a>

                                        </div>
                                    </div>
                                    <br></br>


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