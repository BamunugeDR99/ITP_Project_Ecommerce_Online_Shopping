import React, { useState, useEffect, radix } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function Seller_items(props) {
  const [items, setItems] = useState([]);
  const [ratings, setRatings] = useState([]);
  let itemID = "";
  let averageRating = "";
  let itemWithRatings = {
    itemID,
    averageRating,
  };
  let itemsWithRatings = [];
  let objectID = localStorage.getItem("SellerID");

  useEffect(() => {
    async function getItems() {
      axios
        .get("https://tech-scope-online.herokuapp.com/items/getItems")
        .then((res) => {
          let result = res.data.filter((post) => post.SellerID === objectID);
          setItems(result);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }

    function displayRating() {
      axios
        .get("https://tech-scope-online.herokuapp.com/review/get")
        .then((res) => {
          setRatings(res.data);
          //console.log(ratings[0].itemid)
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }
    displayRating();
    getItems();
  }, []);

  useEffect(() => {
    displayStatus();
    calculateStarRating(1);
  });

  useEffect(() => {
    //displayStarRating();
  });

  function calculateStarRating(id) {
    let totalNoRatings = 0;
    let totalstarforRatingCount = 0;
    let starCount = 0;
    let average = 0;

    for (let i = 0; i < items.length; i++) {
      totalNoRatings = 0;
      totalstarforRatingCount = 0;
      starCount = 0;
      average = 0;

      for (let j = 0; j < ratings.length; j++) {
        if (items[i]._id === ratings[j].itemid) {
          totalNoRatings++;
        }

        if (items[i]._id === ratings[j].itemid) {
          starCount += parseInt(ratings[j].noofstars, radix);
        }
      }

      totalstarforRatingCount = totalNoRatings * 5;
      average = parseInt((starCount / totalstarforRatingCount) * 5, radix);
      console.log(average);
      if (id === 1) {
        displayStarRating(i, average);
      }
      itemWithRatings = {
        itemID: items[i]._id,
        averageRating: average,
      };
      itemsWithRatings.push(itemWithRatings);
      console.log(itemsWithRatings);
    }
  }

  function displayStarRating(id, totalAverage) {
    let txt = "";
    if (isNaN(totalAverage)) {
      txt = "No Ratings yet!";
      document.getElementById(id + "stars").innerHTML = txt;
      //document.getElementById(id +'stars').style.color = "#FF0000";
    } else {
      for (let j = 0; j < totalAverage; j++) {
        txt += '<span class="fa fa-star checked"></span>';
      }
      for (let j = 0; j < 5 - totalAverage; j++) {
        txt += '<span class="fa fa-star"></span>';
      }

      document.getElementById(id + "stars").innerHTML =
        txt + "  " + totalAverage + ".0 / 5.0";
    }
  }

  function filterContent(data, userSearch) {
    let result = data.filter(
      (post) =>
        post.Item_name.toLowerCase().includes(userSearch) ||
        post.Brand.toLowerCase().includes(userSearch) ||
        post.Model.toLowerCase().includes(userSearch)
    );

    setItems(result);
    if (result.length !== 0) {
      document.getElementById("itemsTxt").innerHTML = "";
    } else if (result.length === 0) {
      document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    }

    if (result !== null) {
      // setLoad(false);
      //document.getElementById("txt2").innerHTML = "";
    }

    if (result.length === 0) {
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
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {
        //setStudents(res.data);
        //console.log(res.data);
        let results = res.data.filter((post) => post.SellerID === objectID);
        filterContent(results, userSearch);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function deletee(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your item has been deleted.",
            "success",
            axios
              .delete("https://tech-scope-online.herokuapp.com/items/delete/" + id)
              .then((res) => {
                //document.getElementById("txt").innerHTML = "Item Deleted Successfully!";
                const afterDeleteItems = items.filter(
                  (items) => items._id !== id
                );
                setItems(afterDeleteItems);
              })
              .catch((err) => {
                alert(err);
              })
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your item is safe :)",
            "error"
          );
        }
      });
  }

  function update(id) {
    props.history.push("/Seller/UpdateItem/" + id);
  }

  function filterByCategory(categoryType) {
    document.getElementById("itemsTxt").innerHTML = "";
    axios
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {
        //setStudents(res.data);
        // console.log(res.data);
        let item = res.data.filter((post) => post.SellerID === objectID);
        // filterContentForCatrgory(res.data,categoryType);
        //let item = res.data;
        const afterFilterItems = item.filter(
          (item) => item.Category === categoryType
        );
        setItems(afterFilterItems);

        if (afterFilterItems.length === 0) {
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
    if (btnid === 1) {
      price1 = parseFloat(0);
      price2 = parseFloat(10000);
    } else if (btnid === 2) {
      price1 = parseFloat(10000);
      price2 = parseFloat(20000);
    } else if (btnid === 3) {
      price1 = parseFloat(20000);
      price2 = parseFloat(30000);
    } else if (btnid === 4) {
      price1 = parseFloat(30000);
      price2 = parseFloat(40000);
    } else if (btnid === 5) {
      price2 = parseFloat(40001);
    }

    axios
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {
        let item = res.data.filter((post) => post.SellerID === objectID);

        // let item = res.data;
        let afterFilterItems = [];
        if (btnid === 5) {
          afterFilterItems = item.filter(
            (item) => parseFloat(item.Price) >= price2
          );
          setItems(afterFilterItems);
        } else {
          afterFilterItems = item.filter(
            (post) => post.Price >= price1 && post.Price <= price2
          );

          setItems(afterFilterItems);
        }

        if (afterFilterItems.length === 0) {
          document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function displayStatus() {
    for (let i = 0; i < items.length; i++) {
      if (items[i].ItemAvailabilityStatus === true) {
        document.getElementById(i + "x").checked = true;
        document.getElementById(i).innerHTML = "Item Available";
        document.getElementById(i).style.color = "#A4DE02";
      } else if (items[i].ItemAvailabilityStatus === false) {
        document.getElementById(i + "x").checked = false;
        document.getElementById(i).innerHTML = "Item Out of Stock";
        document.getElementById(i).style.color = "#FF0000";
      }
    }
  }

  function statusChange(id, index) {
    if (document.getElementById(index + "x").checked === false) {
      axios
        .get("https://tech-scope-online.herokuapp.com/items/get/" + id)
        .then((res) => {
          res.data.ItemAvailabilityStatus = false;
          axios
            .put("https://tech-scope-online.herokuapp.com/items/update/" + id, res.data)
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
    } else if (document.getElementById(index + "x").checked === true) {
      axios
        .get("https://tech-scope-online.herokuapp.com/items/get/" + id)
        .then((res) => {
          res.data.ItemAvailabilityStatus = true;
          axios
            .put("https://tech-scope-online.herokuapp.com/items/update/" + id, res.data)
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

  function filterByRatings(btnId) {
    let filterdItemsWithRatings = [];
    //let itemsWithRatings = calculateStarRatingdd(0);
    console.log(itemsWithRatings);
    for (let i = 0; i < itemsWithRatings.length; i++) {
      if (itemsWithRatings[i].averageRating === btnId) {
        filterdItemsWithRatings.push(itemsWithRatings[i].itemID);
      }
    }

    console.log(filterdItemsWithRatings);

    axios
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {
        let result = res.data.filter((post) => post.SellerID === objectID);
        let item = result;
        // console.log(item[2]._id);
        // console.log(filterdItemsWithRatings);
        let afterFilterItemss = [];
        for (let i = 0; i < filterdItemsWithRatings.length; i++) {
          for (let j = 0; j < item.length; j++) {
            if (filterdItemsWithRatings[i] === item[j]._id) {
              afterFilterItemss.push(item[j]);
            }
          }
        }

        setItems(afterFilterItemss);
        console.log(afterFilterItemss);

        if (afterFilterItemss.length === 0) {
          document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function clearFilter() {
    axios
      .get("https://tech-scope-online.herokuapp.com/items/getItems")
      .then((res) => {
        let result = res.data.filter((post) => post.SellerID === objectID);
        setItems(result);
        if (res.data.length === 0) {
          document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        } else {
          document.getElementById("itemsTxt").innerHTML = "";
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function showwMore(id) {
    //alert("a");
    props.history.push("/Seller/ItemReviews/" + id);
  }
  return (
    <div>
      <div>
        <br />
        <div class="float-right">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => clearFilter()}
          >
            Clear Filter
          </button>
        </div>
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
          <div class="input-group-append"></div>
          <br />
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
                onClick={() => filterByRatings(1)}
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
                onClick={() => filterByRatings(2)}
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
                onClick={() => filterByRatings(3)}
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
                onClick={() => filterByRatings(4)}
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
                onClick={() => filterByRatings(5)}
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
                    src={"/Images/" + items.Images[0]}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">
                        {items.Brand} {items.Item_name}
                      </h5>
                      <div id={index + "stars"} class="card-text">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span> </span>{" "}
                        <span id={index + "review"}>4.0 / 5.0</span>
                      </div>
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
                      <span> </span> <br />
                      <br />
                      <button
                        class="btn btn-success"
                        onClick={() => showwMore(items._id)}
                      >
                        Show more
                      </button>
                    </center>
                    <br />
                    <center>
                      <h6>Item Availability Status</h6>
                      <label class="switch">
                        <input
                          type="checkbox"
                          id={index + "x"}
                          onChange={() => statusChange(items._id, index)}
                        />
                        <span class="slider round"></span>
                      </label>
                      <h6 id={index}></h6>
                    </center>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// export default AddStudent;
