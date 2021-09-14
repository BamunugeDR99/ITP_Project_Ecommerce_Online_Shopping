import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AView_all_the_items(props) {
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
      // document.getElementById("itemsTxt").innerHTML = "";
    } else if (result.length == 0) {
      // document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }
  }
  let im = "ippp.jpeg";
  // search
  function handleSearch(e) {
    let userSearch = e;
    //document.getElementsByTagName("CircleLoader").loading = '{true}';
    // document.getElementById("itemsTxt").innerHTML = "";

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

  function showMore(id) {
    if (document.getElementById(id).innerHTML == "") {
      document.getElementById(id).innerHTML =
        "<tr><td>   <img" +
        'src={require("../images/' +
        im +
        ").default}" +
        'style={{ width: "80px" }}' +
        'alt="pic"' +
        "></img></td></tr>";
    } else {
      document.getElementById(id).innerHTML = "";
    }
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
      <div class="height-100 bg-light" style={{ backgroundColor: "white" }}>
        <br />
        <br />
        <br />
        <h2>All the Items</h2>
        <h2>Dashboard</h2>
        <br />
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Search an Item"
            aria-label="Search"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <br />
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ITEM NAME</th>
              <th scope="col">ITEM NO</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">PRICE</th>
              <th scope="col" style={{ color: "#212529" }}>
                pricessdfds
              </th>
            </tr>
          </thead>
        </table>
        {items.map((item, index) => {
          return (
            <div>
              <div class="card">
                <div class="card-body">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                        <img
                          src={require("../images/iphone-x-.jpg").default}
                          style={{ width: "90px" }}
                          alt="pic"
                        />
                        <br />
                        One of three columns
                      </div>
                      <div class="col-sm">One of three columns</div>
                      <div class="col-sm">One of three columns</div>
                      <div class="col-sm">One of three columns </div>
                      <div class="col-sm">
                        <button type="button" class="btn btn-success">
                          More
                        </button>
                        <span> </span>
                        <button type="button" class="btn btn-danger">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div>
                      <div class="row">
                        <div class="col-sm">
                          <img
                            src={require("../images/iphone-x-.jpg").default}
                            style={{ width: "90px" }}
                            alt="pic"
                          />
                          <br />
                          One of three columns
                        </div>
                        <div class="col-sm">
                          <img
                            src={require("../images/iphone-x-.jpg").default}
                            style={{ width: "90px" }}
                            alt="pic"
                          />
                                 <img
                            src={require("../images/iphone-x-.jpg").default}
                            style={{ width: "90px" }}
                            alt="pic"
                          />
                          <br />
                          One of three columns
                        </div>
                        <div class="col-sm">One of three columns</div>
                        <div class="col-sm">One of three columns </div>
                        <div className = "col-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export default AddStudent;
