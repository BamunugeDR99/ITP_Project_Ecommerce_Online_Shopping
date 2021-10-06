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
        post.Model.toLowerCase().includes(userSearch) ||
        post.Stock_keeping_unit.toLowerCase().includes(userSearch)
    );

    setItems(result);
    if (result.length !== 0) {
      document.getElementById("itemsTxt").innerHTML = "";
    } else if (result.length === 0) {
      document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }
  }
  //let im = "ippp.jpeg";
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
        const afterDeleteItems = items.filter((items) => items._id !== id);
        setItems(afterDeleteItems);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function viewMore(id) {

        if (document.getElementById(id + "div").hidden === true) {
          document.getElementById(id + "div").hidden = false;
        } else {
          document.getElementById(id + "div").hidden = true;
        }
  }

  // check again

  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
        <br />
        <h2>All the Items</h2>
        <h2>Dashboard</h2>
        <input
          type="search"
          id="form1"
          class="form-control"
          placeholder="Search by Item no, Item name"
          aria-label="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <br />
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ITEM NAME</th>
              <th scope="col">ITEM NO</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">PRICE</th>
              <th scope="col" style={{ color: "#212529" }}>
                pricessdfdsdd
              </th>
            </tr>
          </thead>
        </table>
        <h3 id="itemsTxt" style={{ textAlign: "center", color: "red" }}></h3>
        {items.map((item, index) => {
          return (
            <div>
              <div class="card">
                <div class="card-body">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                        <img
                          src={"/Images/" + item.Images[0]}
                          style={{ width: "90px" }}
                          alt="pic"
                        />
                        <br />
                        {item.Item_name}
                      </div>
                      <div class="col-sm">{item.Stock_keeping_unit}</div>
                      <div class="col-sm">{item.Category}</div>
                      <div class="col-sm">LKR {item.Price}</div>
                      <div class="col-sm">
                        <button
                          type="button"
                          onClick={() => viewMore(item._id)}
                          class="btn btn-success"
                        >
                          More
                        </button>
                        <span> </span>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => deletee(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <br />
                    <div id={item._id + "div"} hidden>
                      <div class="row">
                        <div class="col-sm">
                          <br />
                          Brand : {item.Brand}
                        </div>
                        <div class="col-sm">
                          <img
                            src={"/Images/"+ item.Images[1]}
                            style={{ width: "100px" }}
                            alt="pic"
                          />
                      
                          <img
                            src={"/Images/" + item.Images[2]}
                            style={{ width: "100px" }}
                            alt="pic"
                          />

                          <br />
                          
                        </div>
                        <div class="col-sm">
                          Description : {item.Description}<br />
                          Specification :{item.Specification}
                        </div>
                        <div class="col-sm">
                          Quantity : {item.Quantity}<br/>
                          Model : {item.Model}
                          <br />
                        </div>
                        <div className="col-sm"></div>
                      </div>
                     <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}

// export default AddStudent;
