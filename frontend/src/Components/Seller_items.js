import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Seller_items(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getItems() {
      axios
        .get("http://localhost:8070/items/getItems")
        .then((res) => {
          setItems(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }

    getItems();
    // displayStudentdetails();
  }, []);

  function filterContent(data, userSearch) {
    let result = data.filter(
      (post) =>
        post.Item_name.toLowerCase().includes(userSearch) ||
        post.Brand.toLowerCase().includes(userSearch) ||
        post.Model.toLowerCase().includes(userSearch)
    );

    setItems(result);
    if (result.length != 0) {
      document.getElementById("itemsTxt").innerHTML = "";
    } else if (result.length == 0) {
      document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }

    if (result != null) {
      // setLoad(false);
      //document.getElementById("txt2").innerHTML = "";
    }

    if (result.length == 0) {
      //alert("d");
      // setLoad(true);
      //document.getElementById("txt2").innerHTML = "No Result Found!";
    }
  }

  // search
  function handleSearch(e) {
    let userSearch = e;
    //document.getElementsByTagName("CircleLoader").loading = '{true}';
    document.getElementById("itemsTxt").innerHTML = "";

    axios
      .get("http://localhost:8070/items/getItems")
      .then((res) => {
        //setStudents(res.data);
        //console.log(res.data);
        filterContent(res.data, userSearch);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function deletee(id) {
    axios
      .delete("http://localhost:8070/items/delete/" + id)
      .then((res) => {
        //document.getElementById("txt").innerHTML = "Item Deleted Successfully!";
        const afterDeleteItems = items.filter((items) => items._id != id);
        setItems(afterDeleteItems);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function update(id) {
    props.history.push("/updateItem/" + id);
  }

  function filterByCategory(categoryType) {
    document.getElementById("itemsTxt").innerHTML = "";
    axios
      .get("http://localhost:8070/items/getItems")
      .then((res) => {
        //setStudents(res.data);
        // console.log(res.data);

        // filterContentForCatrgory(res.data,categoryType);
        let item = res.data;
        const afterFilterItems = item.filter(
          (item) => item.Category == categoryType
        );
        setItems(afterFilterItems);

        if (afterFilterItems.length == 0) {
          document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function filterByPrice(btnid) {
    document.getElementById("itemsTxt").innerHTML = "";
    let price2;
    let price1;
    if (btnid == 1) {
      price1 = parseFloat(0);
      price2 = parseFloat(10000);
    } else if (btnid == 2) {
      price1 = parseFloat(10000);
      price2 = parseFloat(20000);
    } else if (btnid == 3) {
      price1 = parseFloat(20000);
      price2 = parseFloat(30000);
    } else if (btnid == 4) {
      price1 = parseFloat(30000);
      price2 = parseFloat(40000);
    } else if (btnid == 5) {
      price2 = parseFloat(40001);
    }

    axios
      .get("http://localhost:8070/items/getItems")
      .then((res) => {
        let item = res.data;
        let afterFilterItems = [];
        if (btnid == 5) {
          const afterFilterItems = item.filter(
            (item) => parseFloat(item.Price) >= price2
          );
          setItems(afterFilterItems);
        } else {
          afterFilterItems = item.filter(
            (post) => post.Price >= price1 && post.Price <= price2
          );

          setItems(afterFilterItems);
        }

        if (afterFilterItems.length == 0) {
          document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div class="height-100 bg-light">
        <br />
        <br />
        <br />
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search Items by Name , Brand or Model ..."
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              style={{ color: "#4CAF50" }}
            >
              SEARCH
            </button>
          </div>
        </div>
        <br />

        <div class="row">
          <div class="col-sm">
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action active"
                aria-current="true"
                disabled
              >
                CATEGORIES
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByCategory("Mobile Phones")}
              >
                Mobile phones
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByCategory("Tablet / iPad / iPod")}
              >
                Tablet / iPad / iPod
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByCategory("Wearable")}
              >
                Wearable
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByCategory("Gaming")}
              >
                Gaming
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByCategory("Other")}
              >
                Others
              </button>
            </div>
          </div>
          <div class="col-sm">
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action active"
                aria-current="true"
                disabled
              >
                FILTER BY PRICE
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByPrice(1)}
              >
                Under LKR 10000
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByPrice(2)}
              >
                LKR 10000 - 20000
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByPrice(3)}
              >
                LKR 20000 - 30000
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByPrice(4)}
              >
                LKR 30000 - 40000
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
                onClick={() => filterByPrice(5)}
              >
                LKR 40000 and Above
              </button>
            </div>
          </div>

          <div class="col-sm">
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action active"
                aria-current="true"
                disabled
              >
                FILTER BY RATINGS
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span></span> 1.0 / 5.0
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span></span> 2.0 / 5.0
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span></span> 3.0 / 5.0
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span></span> 4.0 / 5.0
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span></span> 5.0 / 5.0
              </button>
            </div>
          </div>
        </div>

        <br />

        <h1
          id="itemsTxt"
          style={{ textAlign: "center", color: "#FF0000" }}
        ></h1>

        <div class="row">
          {items.map((items, index) => {
            return (
              <div class="col-sm">
                <div class="card" style={{ width: "20rem" }}>
                  <img
                    src={require("../images/" + items.Images[0]).default}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">
                        {items.Brand} {items.Item_name}
                      </h5>
                      <p class="card-text">ratings</p>
                      <p class="card-text">LKR {items.Price}</p>
                      <button
                        class="btn btn-primary"
                        onClick={() => update(items._id)}
                      >
                        Edit
                      </button>
                      <span> </span>
                      <button
                        class="btn btn-danger"
                        onClick={() => deletee(items._id)}
                      >
                        Delete
                      </button>
                      <span> </span>
                      <button class="btn btn-success">Show more</button>
                    </center>
                    <br />
                    <center>
                      <h6>Item Availability Status</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </center>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// export default AddStudent;
