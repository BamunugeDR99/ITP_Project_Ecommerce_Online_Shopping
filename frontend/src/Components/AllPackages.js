import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';
import go from "./../images/go.jfif";


;



export default function AllPackages(props) {

    const [items, setItems] = useState([]); //Defines that items is an array
    let [packSearchAlert, setPSearchAlert] = useState([]);

    const [packages, setPackages] = useState([]); //Defines that items is an array
    let fitems = [];
    const [loads, setLoad] = useState(false);
    //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array

    useEffect(() => {


        function getPackages() {

            //call a backend URL using axios
            axios.get("http://localhost:8070/Packages/getPackages").then((res) => {

                console.log(res.data);
                let seller = localStorage.getItem("SellerID");
                setPackages(res.data.filter((item) =>item.seller === seller));

                console.log(packages);

                console.log("Hello");




            }).catch((err) => {
                alert(err.message);
            })

        }




        getPackages();



    }, [])



    useEffect(() => {
        displayStatus();
       
        
      })



      function displayStatus(){
        for(let i = 0; i < packages.length; i++){
    
          if(packages[i].packageAvailability == true){
            document.getElementById(i+'x').checked = true;
            document.getElementById(i).innerHTML = "Item Available";
            document.getElementById(i).style.color = "#A4DE02";
    
          }else if(packages[i].packageAvailability == false){
            document.getElementById(i+'x').checked = false;
            document.getElementById(i).innerHTML = "Item Out of Stock";
            document.getElementById(i).style.color = "#FF0000";
          }
        }
          
      }
    


      function statusChange(id,index){

        console.log(id);
        console.log(index);
    
        if(document.getElementById(index+'x').checked == false){
    
          axios
          .get("http://localhost:8070/Packages/getPackage/" + id)
          .then((res) => {
            
            
              //let data = res.data;
              res.data.packageAvailability = false;
              console.log(res.data);
          axios
          .put("http://localhost:8070/Packages/updatePackages/" + id, res.data)
          .then(() => {
            
          document.getElementById(index).innerHTML = "Item Out of stock";
          document.getElementById(index).style.color = "#FF0000";
      
      
          })
          .catch((err) => {
            alert(err);
           
          });
      
      
            
          })
          .catch((err) => {
            alert(err);
          });
        }else if(document.getElementById(index+'x').checked == true){
    
          axios
          .get("http://localhost:8070/Packages/getPackage/" + id)
          .then((res) => {
            
            
              //let data = res.data;
              res.data.ItemAvailabilityStatus = true;
              console.log(res.data);
          axios
          .put("http://localhost:8070/Packages/updatePackages/" + id, res.data)
          .then(() => {
            
          document.getElementById(index).innerHTML = "Item Available";
          document.getElementById(index).style.color = "#A4DE02";
      
      
          })
          .catch((err) => {
            alert(err);
           
          });
      
      
            
          })
          .catch((err) => {
            alert(err);
          });
    
        }
      
      }














    function goToupdate(id) {
        console.log(id);
        props.history.push("/Seller/UpdatePackage/" + id);
    };



    //search
    function filterContent(data, userSearch) {

        // setPackages(res.data.filter((item) =>item.seller === seller));


        let result = data.filter((post) =>
            post.packageName.toLowerCase().includes(userSearch.toLowerCase())

        );


        if (result != null) {
            setLoad(false);
            //document.getElementById("txt2").innerHTML = "";
            setPSearchAlert("");
        }

        else if (result.length == 0) {
            //alert("d");
            setLoad(true);
            
            setPSearchAlert("Ooops ! We don't have quite the thing you are looking for...");

            //document.getElementById("txt2").innerHTML = "No Result Found!";
        }

        else{
           
           
        }

        setPackages(result);

    }

    // search
    function handleSearch(e) {
        let userSearch = e;
        console.log(userSearch);


        axios
            .get("http://localhost:8070/Packages/getPackages")
            .then((res) => {


                
                let seller = localStorage.getItem("SellerID");
                let filteredData = res.data.filter((item) =>item.seller === seller) 

                filterContent(filteredData, userSearch);

            })
            .catch((err) => {
                alert(err);
            });
    }







    function goToPackages() {

        props.history.push("/Seller/MyPackages")
    }


    function goToDisItems() {

        props.history.push("/Seller/MyDiscountedItems")
    }












    return (
        <div className="OffersnPacks">

            <br /><br /><br />
            <button type="button" class="btn btn-primary " style={{ float: 'right' }} id="GPackageBtn2" onClick={goToPackages}>Promo Packages</button>
            <button type="button" class="btn btn-primary " style={{ float: 'right' }} id="GDisItemsBtn2" onClick={goToDisItems}>Discounted Items</button>

            <div className="container">
                <div>

                    <h1>All Promotional Packages</h1> <br />

                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search Package By Name"
                        aria-label="Search"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <br></br>


                        
            <p id="PackageSearchAlert" style={{ color: 'red', fontSize: '26px' }}>{packSearchAlert}</p>


                    <div className="row">
                        {packages.map((item ,index) => {
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

                                                <center>
                                                    <h6>Package Availability Status</h6>
                                                    <label class="switch">
                                                        <input type="checkbox" id={index + "x"} onChange={() => statusChange(item._id, index)} />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <h6 id={index}></h6>
                                                </center>


                                            </div>
                                            <a href="#" className="btn btn-primary" onClick={() => goToupdate(item._id)}>Edit Package</a>

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