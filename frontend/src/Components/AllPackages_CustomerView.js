import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';
import Swal from "sweetalert2";




;



export default function AllPackages(props) {


  const [packages, setPackages] = useState([]); //Defines that items is an array

  // const [loads, setLoad] = useState(false);
  //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array

  useEffect(() => {


    function getPackages() {

      //call a backend URL using axios
      axios.get("http://localhost:8070/Packages/getPackages").then((res) => {

        console.log(res.data);
        setPackages(res.data.filter((item) => item.packageAvailability === true));

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

    if (result !== null) {
      document.getElementById("itemsTxt").innerHTML = "";
    }

    if (result.length === 0) {
      document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }
  }

  // search
  function handleSearch(e) {
    document.getElementById("itemsTxt").innerHTML = "";
    let userSearch = e;
    console.log(userSearch);


    axios
      .get("http://localhost:8070/Packages/getPackages")
      .then((res) => {

        let filteredData = res.data.filter((item) => item.packageAvailability === true)
        filterContent(filteredData, userSearch);

      })
      .catch((err) => {
        alert(err);
      });
  }







  function goToPackages() {

    props.history.push("/Customer/Packages")
  }


  function goToDisItems() {

    props.history.push("/Customer/DiscountedItems")
  }



  //Add to Cart
  function addToCart(id) {
    /// complete this
    console.log(id);
    axios
      .get("http://localhost:8070/Packages/getPackage/" + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.packageAvailability === false) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Package is not available Right now!",
          });
        } else {
          let CustomerID = localStorage.getItem("CustomerID");

          console.log("Else Part Running");
          console.log(CustomerID);

          // http://localhost:8070/ShoppingCart/getOneCart/:id
          axios
            .get("http://localhost:8070/ShoppingCart/getOneCart/" + CustomerID)
            .then((res) => {

              console.log(res.data);
              let cartID = res.data._id;
             
              let packages = res.data.PackageIDs;
              let newwItems = res.data.ItemIDs;

              let falgs = 0;
              for (let i = 0; i < packages.length; i++) {
                if (packages[i] === id) {
                  falgs = 1;
                }
              }
              packages.push(id);
              console.log(packages);

              const updatedCart = {
                customerID: CustomerID,
                PackageIDs: packages,
                ItemIDs: newwItems
              }


              if (falgs === 0) {
                axios
                  .put(
                    "http://localhost:8070/ShoppingCart/updateSItem/" +
                    cartID,
                    updatedCart
                  )
                  .then((res) => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Item added to cart Successfully!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  })
                  .catch((err) => {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Please try again!",
                    });
                  });
              } else if (falgs === 1) {
                Swal.fire("Item Already in Your Shopping Cart.");
              }
            })
            .catch((err) => {
              alert(err);
            });




        }
      })
      .catch((err) => {
        alert(err);
      });
  }










  return (
    <div className="OffersnPacks">

      <br /><br /><br />
      <button type="button" class="btn btn-primary " style={{ float: 'right' }} id="GPackageBtn2" onClick={goToPackages}>Promo Packages</button>
      <button type="button" class="btn btn-primary " style={{ float: 'right' }} id="GDisItemsBtn2" onClick={goToDisItems}>Discounted Items</button>

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


          <h3
            id="itemsTxt"
            style={{ textAlign: "center", color: "#FF0000" }}
          ></h3>

          <div className="row">
            {packages.map((item) => {
              return (


                <div className="col-sm-4">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="container-fluid" style={{ padding: '0px' }}>
                      <img className="img-responsive center-block header1 rounded-top" src={"/Images/" + item.image} width="286px" height="250px" alt="gg" />

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
                      <a href="#" className="btn btn-success" onClick={() => addToCart(item._id)}>Add to Cart</a>

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