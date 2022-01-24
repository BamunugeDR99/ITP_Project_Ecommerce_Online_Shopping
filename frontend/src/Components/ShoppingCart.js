import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";
import iphone from "./../images/Ip.png";
import Swal from "sweetalert2";
export default function ShoppingCart(props) {
  let [cart, setCart] = useState([]);
  let [CartItems, setCartItems] = useState([]);
  let [CartPackages, setCartPackages] = useState([]);
  let Allitems = [];
  let Allpackages = [];
  // const [ItemArr, setItemArr] = useState([]);

  let [InItemPrice, setInItemPrice] = useState(0);
  let [InPackagePrice, setInPackagePrice] = useState(0);

  let [allItemsTotal, setAllItemsTotal] = useState(0);
  let [allPackagesTotal, setAllPackagesTotal] = useState(0);
  let [GrandTotal, setGrandTotal] = useState(0);


  //Image Variables
  let [image, setImageE] = useState("");

  let [Pimage, setPImageE] = useState("");

  let ItemID = "";
  let Name = "";
  let Brand = "";
  let Model = "";
  let Specification = "";
  //let Color = "";
  let SKU = "";
  let fPrice = "";
  let itemImage = "";
  let itemSeller = "";

  let ItemDetails = {
    ItemID,
    Name,
    Brand,
    Model,
    Specification,
    //Color,
    SKU,
    fPrice,
    itemImage,
    itemSeller,
  };

  let packageID = "";
  let packageName = "";
  let description = "";
  let content = [];
  let price = [];
  let packageImage = "";
  let packageSeller = "";

  let PackageDetails = {
    packageID,
    packageName,
    description,
    content,
    price,
    packageImage,
    packageSeller,
  };

  let AllItemsArr = [];
  let [gItems, setgItems] = useState([]);
  let AllPackagesArr = [];
  let [gPackages, setgPackages] = useState([]);

  useEffect(() => {
    function getCart() {
      const customerID = localStorage.getItem("CustomerID");
      console.log(customerID);

      axios
        .get("https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/" + customerID)
        .then((res) => {
          console.log(res.data);

          cart = res.data;

          CartItems = res.data.ItemIDs;
          CartPackages = res.data.PackageIDs;

          axios
            .get("https://tech-scope-online.herokuapp.com/items/getItems")
            .then((res) => {
              console.log(res.data);
              Allitems = res.data;

              getItemss(Allitems, CartItems);
            })
            .catch((err) => {});

          axios
            .get("https://tech-scope-online.herokuapp.com/Packages/getPackages")
            .then((res) => {
              //console.log(res.data);
              Allpackages = res.data;

              getPackagess(Allpackages, CartPackages);
            })
            .catch((err) => {
              alert(err.message);
            });
        });
    }

    getCart();
  }, []);

  function getItemss(allItems, items) {
    let j = 0;

    for (let i = 0; i < items.length; i++) {
      j = 0;

      for (j = 0; j < allItems.length; j++) {
        if (items[i] === allItems[j]._id) {
          ItemDetails = {
            ItemID: allItems[j]._id,
            Name: allItems[j].Item_name,
            Brand: allItems[j].Brand,
            Model: allItems[j].Model,
            Specification: allItems[j].Specification,
            //Color = allItems[i].Color_family[1],
            SKU: allItems[j].Stock_keeping_unit,
            fPrice: allItems[j].FinalPrice,
            itemImage: allItems[j].Images[0],
            itemSeller: allItems[j].SellerID,
          };

          // console.log(allItemsTotal);
          setAllItemsTotal(
            Number(allItemsTotal) + Number(allItems[j].FinalPrice)
          );
          allItemsTotal =
            Number(allItemsTotal) + Number(allItems[j].FinalPrice);
          AllItemsArr.push(ItemDetails);
        }
      }
    }

    //console.log(AllItemsArr[0].itemImage);
    setgItems(AllItemsArr);
    // setImageE(AllItemsArr[0].itemImage);
  }

  function getPackagess(allPackages, packages) {
    let j = 0;

    for (let i = 0; i < packages.length; i++) {
      j = 0;

      for (j = 0; j < allPackages.length; j++) {
        if (packages[i] === allPackages[j]._id) {
          PackageDetails = {
            packageID: allPackages[j]._id,
            packageName: allPackages[j].packageName,
            description: allPackages[j].description,
            content: allPackages[j].content,
            price: allPackages[j].price,
            packageImage: allPackages[j].image,
            packageSeller: allPackages[j].seller,
          };

          setAllPackagesTotal(
            Number(allPackagesTotal) + Number(allPackages[j].price)
          );
          allPackagesTotal =
            Number(allPackagesTotal) + Number(allPackages[j].price);
          AllPackagesArr.push(PackageDetails);
        }
      }
    }

    setgPackages(AllPackagesArr);
    // setPImageE(AllPackagesArr[0].packageImage);
  }

  // console.log(gItems);

  // console.log(gPackages);

  // let itemPrice;

  function increment(index) {
    let quantity = document.getElementById(index + "quantity").value;
    quantity++;

    let itemPrice = document.getElementById(index + "ItemPrice").value;

    InItemPrice = document.getElementById(index + "SinglePrice").value;

    let newItemPrice = InItemPrice * quantity;

    document.getElementById(index + "quantity").value = quantity;
    document.getElementById(index + "ItemPrice").value = newItemPrice;

    //Total
    let total = document.getElementById("GrandTotal").value;

    let newTotal = Number(total) + Number(InItemPrice);

    document.getElementById("GrandTotal").value = newTotal;
    document.getElementById("GrandTotal2").value = newTotal + 100;
  }

  function decrement(index) {
    let quantity = document.getElementById(index + "quantity").value;
    quantity--;

    if (quantity == 0) {
      swal.fire("Alert", "Item Quantity Cannot be reduced to zero", "warning");
      quantity = 1;
    } else {
      document.getElementById(index + "quantity").value = quantity;
      InItemPrice = document.getElementById(index + "SinglePrice").value;

      let newItemPrice = InItemPrice * quantity;

      document.getElementById(index + "quantity").value = quantity;
      document.getElementById(index + "ItemPrice").value = newItemPrice;

      //Total
      let total = document.getElementById("GrandTotal").value;

      let newTotal = Number(total) - Number(InItemPrice);

      document.getElementById("GrandTotal").value = newTotal;
      document.getElementById("GrandTotal2").value = newTotal + 100;
    }
  }

  function incrementPackages(index) {
    let quantity = document.getElementById(index + "Packagequantity").value;
    quantity++;

    InPackagePrice = document.getElementById(
      index + "SinglePackagePrice"
    ).value;

    let newPackagePrice = InPackagePrice * quantity;

    document.getElementById(index + "Packagequantity").value = quantity;
    document.getElementById(index + "PackagePrice").value = newPackagePrice;

    //Total
    let total = document.getElementById("GrandTotal").value;

    let newTotal = Number(total) + Number(InPackagePrice);

    document.getElementById("GrandTotal").value = newTotal;
    document.getElementById("GrandTotal2").value = newTotal + 100;
  }

  function decrementPackages(index) {
    let quantity = document.getElementById(index + "Packagequantity").value;
    quantity--;

    InPackagePrice = document.getElementById(
      index + "SinglePackagePrice"
    ).value;

    if (quantity === 0) {
      swal.fire(
        "Alert",
        "Package Quantity Cannot be reduced to zero",
        "warning"
      );
      quantity = 1;
    } else {
      let newPackagePrice = InPackagePrice * quantity;

      document.getElementById(index + "Packagequantity").value = quantity;
      document.getElementById(index + "PackagePrice").value = newPackagePrice;

      //Total
      let total = document.getElementById("GrandTotal").value;

      let newTotal = Number(total) - Number(InPackagePrice);

      document.getElementById("GrandTotal").value = newTotal;
      document.getElementById("GrandTotal2").value = newTotal + 100;
    }
  }

  GrandTotal = allItemsTotal + allPackagesTotal;

  //Remove Items From the Cart

  function removeItems(id, index, price) {
    let Citems = [];
    const customerID = localStorage.getItem("CustomerID");
    axios
      .get("https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/" + customerID)
      .then((res) => {
        Citems = res.data.ItemIDs;
        let CartID = res.data._id;
        let PackageIDs = res.data.PackageIDs;
        const remainingItems = Citems.filter((pack) => pack !== id);
        let ItemIDs = remainingItems;
        const updatedCart = {
          customerID,
          ItemIDs,
          PackageIDs,
        };
        axios
          .put(
            "https://tech-scope-online.herokuapp.com/ShoppingCart/updateSItem/" + CartID,
            updatedCart
          )
          .then((res) => {
            Swal.fire("Success", "Item Removed From The Cart", "success");
          })
          .catch((err) => {
            console.log(err);
          });
        axios
          .get("https://tech-scope-online.herokuapp.com/items/getItems")
          .then((res) => {
            Allitems = res.data;
            GrandTotal = document.getElementById("GrandTotal").value - price;
            getItemss(Allitems, remainingItems);
            document.getElementById("GrandTotal").value = GrandTotal;
            document.getElementById("GrandTotal2").value = GrandTotal + 100;
          })
          .catch((err) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Remove Packages
  function removePackages(id, index, price) {
    console.log(index);

    console.log(`Price : ${price}`);
    console.log(`Package ID : ${id}`);
    let Citems = [];

    const customerID = localStorage.getItem("CustomerID");
    console.log(customerID);
    axios
      .get("https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/" + customerID)
      .then((res) => {
        console.log(res.data);
        Citems = res.data.PackageIDs;
        console.log(`Package IDs : ${Citems}`);

        let CartID = res.data._id;

        let ItemIDs = res.data.ItemIDs;

        const remainingItems = Citems.filter((pack) => pack !== id);

        let PackageIDs = remainingItems;

        console.log(`Cart ID : ${CartID}`);
        // console.log("Item IDs " );
        // console.log(ItemIDs );
        // console.log("Package IDs " );
        // console.log(PackageIDs);
        // console.log("Customer ID " );
        // console.log(customerID);

        const updatedCart = {
          customerID,
          ItemIDs,
          PackageIDs,
        };

        console.log(updatedCart);
        //Update the Items Array
        axios
          .put(
            "https://tech-scope-online.herokuapp.com/ShoppingCart/updateSItem/" + CartID,
            updatedCart
          )
          .then((res) => {
            Swal.fire("Success", "Package Removed From The Cart", "success");
          })
          .catch((err) => {
            console.log(err);
          });

        axios
          .get("https://tech-scope-online.herokuapp.com/Packages/getPackages")
          .then((res) => {
            //console.log(res.data);
            Allpackages = res.data;

            GrandTotal = document.getElementById("GrandTotal").value - price;
            console.log(GrandTotal);

            getPackagess(Allpackages, remainingItems);

            document.getElementById("GrandTotal").value = GrandTotal;
            document.getElementById("GrandTotal2").value = GrandTotal + 100;
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkOut() {
    localStorage.setItem(
      "totalPrice",
      document.getElementById("GrandTotal2").value
    );

    const customerID = localStorage.getItem("CustomerID");

    let ItemIDArr = [];
    let PackageIDArr = [];

    let Items = [];
    let Packages = [];

    let packageID = "";
    let packageQuantity = "";
    let packageSeller = "";

    let PackageDetails = {
      packageID,
      packageQuantity,
      packageSeller,
    };

    let ItemID = "";
    let ItemQuantity = "";
    let ItemSeller = "";

    let ItemDetails = {
      ItemID,
      ItemQuantity,
      ItemSeller,
    };

    axios
      .get("https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/" + customerID)
      .then((res) => {
        ItemIDArr = res.data.ItemIDs;
        PackageIDArr = res.data.PackageIDs;

        for (let i = 0; i < ItemIDArr.length; i++) {
          // console.log(document.getElementById(i +'ItemID').value);
          // console.log(document.getElementById(i +'quantity').value);

          ItemDetails = {
            ItemID: document.getElementById(i + "ItemID").value,
            ItemQuantity: document.getElementById(i + "quantity").value,
            ItemSeller: document.getElementById(i + "ItemSeller").value,
          };

          Items.push(ItemDetails);

          //console.log(ItemDetails);
        }

        for (let i = 0; i < PackageIDArr.length; i++) {
          // console.log(document.getElementById(i +'PackageID').value);
          // console.log(document.getElementById(i +'Packagequantity').value);

          PackageDetails = {
            packageID: document.getElementById(i + "PackageID").value,
            packageQuantity: document.getElementById(i + "Packagequantity")
              .value,
            packageSeller: document.getElementById(i + "PackageSeller").value,
          };

          Packages.push(PackageDetails);

          //console.log(PackageDetails);
        }

        console.log(Items);
        console.log(Packages);

        localStorage.setItem("Items", JSON.stringify(Items));
        localStorage.setItem("Packages", JSON.stringify(Packages));

        //Clear Cart
        let customerID = localStorage.getItem("CustomerID");
        let ItemIDs = [];
        let PackageIDs = [];

        const updatedCart = {
          customerID,
          ItemIDs,
          PackageIDs,
        };
        console.log(updatedCart);

        axios
          .get("https://tech-scope-online.herokuapp.com/ShoppingCart/getOneCart/" + customerID)
          .then((res) => {
            let CartID = res.data._id;

            axios
              .put(
                "https://tech-scope-online.herokuapp.com/ShoppingCart/updateSItem/" + CartID,
                updatedCart
              )
              .then((res) => {
                Swal.fire("Success", "Please Proceed to Checkout", "success");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

   //   props.history.push("/Customer/SelectPayment");
      })
      .catch((err) => {
        console.log(err)
      });

   props.history.push("/Customer/SelectPayment");
  }

  return (
    <div>
      <section>
        <div class="row">
          <div class="col-lg-8">
            <div class="mb-3">
              <div class="pt-4 wish-list">
                <div
                  style={{ alignContent: "center" }}
                  className="d-flex justify-content-center"
                >
                  <h2 class="mb-4" style={{ alignContent: "center" }}>
                    My Shopping Cart
                  </h2>
                </div>

                <h5>{cart.customerID}</h5>

                {gItems.map((item, index) => {
                  return (
                    <div className="shadow p-3 mb-5 bg-white rounded">
                      <div class="row mb-4 border-primary">
                        <div class="col-md-5 col-lg-3 col-xl-3">
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img class="img-fluid w-100"
                        src={"/Images/" + item.itemImage} alt="Sample" />
                      <a href="#!">
                        <div class="mask">
                          <img class="img-fluid w-100"
                         src={"/Images/" + item.itemImage}  alt="Sample"
                            />
                          <div class="mask rgba-black-slight"></div>
                        </div>
                      </a>
                    </div>
                        </div>
                        <div class="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div class="d-flex justify-content-between">
                              <div>
                                <h5>{item.Name}</h5>
                                <p class="mb-3 text-muted text-uppercase small">{`Brand : ${item.Brand}`}</p>
                                <p class="mb-3 text-muted text-uppercase small">{`Model :  ${item.Model}`}</p>
                                {/* <p class="mb-3 text-muted text-uppercase small">{`Specifications : ${item.Specification}`}</p> */}
                                <p class="mb-2 text-muted text-uppercase small">
                                  Color: selected color
                                </p>
                                <p class="mb-3 text-muted text-uppercase small">{`SKU : ${item.SKU}`}</p>
                              </div>
                              <div>
                                <div class="def-number-input number-input safari_only mb-0 w-100">
                                  <button
                                    type="button"
                                    id={index + "plus"}
                                    class="btn btn-success"
                                    onClick={() => increment(index)}
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                  <span> </span>
                                  <input
                                    class="quantity"
                                    min="0"
                                    defaultValue="1"
                                    name="quantity"
                                    id={index + "quantity"}
                                    type="text"
                                    style={{ width: "45px" }}
                                    readOnly
                                  />
                                  <span> </span>
                                  <button
                                    type="button"
                                    id={index + "minus"}
                                    onClick={() => decrement(index)}
                                    class="btn btn-danger"
                                  >
                                    <i class="fa fa-minus"></i>
                                  </button>
                                  <span> </span>
                                  <span> </span>
                                </div>
                                <small
                                  id="passwordHelpBlock"
                                  class="form-text text-muted text-center"
                                >
                                  (Note, 1 piece)
                                </small>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                {/* <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3 link-danger"  ><i
                            class="fas fa-trash-alt mr-1"></i> Remove item </a> */}
                                <button
                                  type="button"
                                  class="btn btn-danger card-link-secondary small text-uppercase mr-3 link-danger"
                                  onClick={() =>
                                    removeItems(
                                      item.ItemID,
                                      index,
                                      document.getElementById(
                                        index + "ItemPrice"
                                      ).value
                                    )
                                  }
                                >
                                  <i class="fas fa-trash-alt mr-1"></i>Remove
                                  item
                                </button>
                              </div>
                              <p class="mb-0">{item.fPrice}</p>

                              <input
                                type="text"
                                id={index + "ItemPrice"}
                                value={item.fPrice}
                                readOnly
                              />
                              <input
                                type="text"
                                id={index + "SinglePrice"}
                                value={item.fPrice}
                                hidden
                              ></input>
                              <input
                                type="text"
                                id={index + "ItemID"}
                                value={item.ItemID}
                                hidden
                              ></input>
                              <input
                                type="text"
                                id={index + "ItemSeller"}
                                value={item.itemSeller}
                                hidden
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                  );
                })}

                {gPackages.map((item, index) => {
                  return (
                    <div class="shadow p-3 mb-5 bg-white rounded">
                      <div class="row mb-4">
                        <div class="col-md-5 col-lg-3 col-xl-3">
                          <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img
                              class="img-fluid w-100"
                              src={"/Images/" + item.packageImage}
                              alt="Sample"
                            />
                            <a href="#!">
                              <div class="mask">
                                <img
                                  class="img-fluid w-100"
                                  src={"/Images/" + item.packageImage}
                                  alt="gg"
                                />
                                <div class="mask rgba-black-slight"></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div class="d-flex justify-content-between">
                              <div>
                                <h5>{item.packageName}</h5>
                                <p class="mb-3 text-muted text-uppercase small">{`Description : ${item.description}`}</p>
                                <p class="mb-3 text-muted text-uppercase small">
                                  Content
                                </p>
                                {item.content.map((con) => {
                                  return (
                                    <div>
                                      <p>{con.Item_name}</p>
                                    </div>
                                  );
                                })}
                              </div>
                              <div>
                                <div class="def-number-input number-input safari_only mb-0 w-100">
                                  <button
                                    type="button"
                                    id={index + "Packageplus"}
                                    class="btn btn-success"
                                    onClick={() => incrementPackages(index)}
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                  <span> </span>
                                  <input
                                    class="quantity"
                                    min="0"
                                    defaultValue="1"
                                    name="quantity"
                                    id={index + "Packagequantity"}
                                    type="text"
                                    style={{ width: "45px" }}
                                    readOnly
                                  />
                                  <span> </span>
                                  <button
                                    type="button"
                                    id={index + "Packageminus"}
                                    onClick={() => decrementPackages(index)}
                                    class="btn btn-danger"
                                  >
                                    <i class="fa fa-minus"></i>
                                  </button>
                                  <span> </span>
                                  <span> </span>
                                </div>
                                <small
                                  id="passwordHelpBlock"
                                  class="form-text text-muted text-center"
                                >
                                  (Note, 1 piece)
                                </small>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                {/* <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3 link-danger"><i
          class="fas fa-trash-alt mr-1"></i> Remove item </a> */}

                                <button
                                  type="button"
                                  class="card-link-secondary small text-uppercase mr-3 link-danger"
                                  onClick={() =>
                                    removePackages(
                                      item.packageID,
                                      index,
                                      document.getElementById(
                                        index + "PackagePrice"
                                      ).value
                                    )
                                  }
                                >
                                  <i class="fas fa-trash-alt mr-1"></i>Remove
                                  item
                                </button>
                              </div>
                              {/* <p class="mb-0"><span><strong ><h3>LKR <span id = "summary">{item.price}</span> </h3></strong></span></p> */}

                              <p class="mb-0">{item.price}</p>
                              <input
                                type="text"
                                id={index + "PackagePrice"}
                                value={item.price}
                                readOnly
                              />
                              <input
                                type="text"
                                id={index + "SinglePackagePrice"}
                                value={item.price}
                                hidden
                              ></input>
                              <input
                                type="text"
                                id={index + "PackageID"}
                                value={item.packageID}
                                hidden
                              ></input>
                              <input
                                type="text"
                                id={index + "PackageSeller"}
                                value={item.packageSeller}
                                hidden
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                  );
                })}

                <hr class="mb-4" />

                <p class="text-primary mb-0">
                  <i class="fas fa-info-circle mr-1"></i> Do not delay the
                  purchase, adding items to your cart does not mean booking
                  them.
                </p>
              </div>
            </div>

            <div class="mb-3">
              <div class="pt-4">
                <h5 class="mb-4">We accept</h5>

                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="mb-3">
              <div class="pt-4">
                <h5 class="mb-3">The Total Amount of</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary Amount
                    <input
                      type="text"
                      id="GrandTotal"
                      value={parseFloat(GrandTotal).toFixed(2)}
                      readOnly
                    />
                  </li>
                  {/* <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Discount
                    <span>LKR 2333.00</span>
                  </li> */}
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The Total Amount of</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <input
                      type="text"
                      id="GrandTotal2"
                      value={parseFloat(GrandTotal + 100).toFixed(2)}
                      readOnly
                    />
                  </li>
                </ul>

                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  onClick={() => checkOut()}
                >
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
