import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShoppingCart(props) {


  let [cart, setCart] = useState([]);
  let [CartItems, setCartItems] = useState([]);
  let [CartPackages, setCartPackages] = useState([]);
  let Allitems = [];
  let Allpackages = [];
  const [ItemArr, setItemArr] = useState([]);


  let Name = "";
  let Brand = "";
  let Model = "";
  let Specification = "";
  //let Color = "";
  let SKU = "";
  let fPrice = "";

  let ItemDetails = {

    Name,
    Brand,
    Model,
    Specification,
    //Color,
    SKU,
    fPrice
  };


  let packageName = "";
  let description = "";
  let content = [];
  let price = [];


  let PackageDetails = {

    packageName,
    description,
    content,
    price


  }


  let AllItemsArr = [];
  let [gItems, setgItems] = useState([]);
  let AllPackagesArr = [];
  let [gPackages, setgPackages] = useState([]);

  useEffect(() => {

    function getCart() {

      const customerID = "6144a56b88cbe1257c8a887b";
      console.log(customerID);

      axios.get("http://localhost:8070/ShoppingCart/getOneCart/" + customerID).then((res) => {

        console.log(res.data);

        cart = res.data;

        CartItems = res.data.ItemIDs;
        CartPackages = res.data.PackageIDs;


        axios.get("http://localhost:8070/items/getItems").then((res) => {

          console.log(res.data);
          Allitems = res.data;

          getItemss(Allitems, CartItems);

        }).catch((err) => {


        })


        axios.get("http://localhost:8070/Packages/getPackages").then((res) => {

          console.log(res.data);
          Allpackages = res.data;

          getPackagess(Allpackages, CartPackages);


        }).catch((err) => {
          alert(err.message);
        })


      })



    }



    function getItemss(allItems, items) {

      let j = 0;

      for (let i = 0; i < items.length; i++) {

        j = 0;

        for (j = 0; j < allItems.length; j++) {

          if (items[i] == allItems[j]._id) {


            ItemDetails = {

              Name: allItems[j].Item_name,
              Brand: allItems[j].Brand,
              Model: allItems[j].Model,
              Specification: allItems[j].Specification,
              //Color = allItems[i].Color_family[1],
              SKU: allItems[j].Stock_keeping_unit,
              fPrice: allItems[j].FinalPrice

            };

            AllItemsArr.push(ItemDetails);

          }
        }
      }

      setgItems(AllItemsArr);

    }

    getCart();



  }, [])


  function getPackagess(allPackages, packages) {

    let j = 0;

    for (let i = 0; i < packages.length; i++) {

      j = 0;

      for (j = 0; j < allPackages.length; j++) {

        if (packages[i] == allPackages[j]._id) {

          
          PackageDetails = {

            packageName: allPackages[j].packageName,
            description: allPackages[j].description,
            content: allPackages[j].content,
            price: allPackages[j].price

          };

          AllPackagesArr.push(PackageDetails);

        }
      }
    }

    setgPackages(AllPackagesArr);





  }













  console.log(gItems);

  console.log(gPackages);










  let itemPrice = 1300;
  let [newItemPrice, setNewItemPrice] = useState(itemPrice);
  // let itemPrice;

  function increment(index) {
    let qunatity = document.getElementById("number" + index).value;
    qunatity++;
    setNewItemPrice(itemPrice * qunatity);
    document.getElementById("number" + index).value = qunatity;
  }

  function decrement(index) {

    let qunatity = document.getElementById("number" + index).value;
    if (qunatity == 1) {
      alert("can't");
    } else {
      qunatity--;

    }

    setNewItemPrice(itemPrice * qunatity);
    document.getElementById("number" + index).value = qunatity;
  }


  // function removeItems(id){

  //   const remainingItems = CartItems.filter(
  //     (pack) => pack != id
  //   );

  //   console.log(remainingPacks);

  //   setC(remainingPacks);

  // }

  return (
    <div>
      <section>

        <div class="row">

          <div class="col-lg-8">

            <div class="mb-3">
              <div class="pt-4 wish-list">

                <h5 class="mb-4">Cart (<span>2</span> items)</h5>



                <h5>{cart.customerID}</h5>

                {gItems.map((item, index) => {

                  return (
                    <div>
                      
                      <div class="row mb-4">
                  <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img class="img-fluid w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                      <a href="#!">
                        <div class="mask">
                          <img class="img-fluid w-100"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
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
                          <p class="mb-3 text-muted text-uppercase small">{`Specifications : ${item.Specification}`}</p>
                          <p class="mb-2 text-muted text-uppercase small">Color: selected color</p>
                          <p class="mb-3 text-muted text-uppercase small">{`SKU : ${item.SKU}`}</p>
                        </div>
                        <div>
                          <div class="def-number-input number-input safari_only mb-0 w-100">
                            <button type="button" id="plus" class="btn btn-success" onClick={() => increment(index)} ><i class="fa fa-plus"></i></button><span> </span>
                            <input class="quantity" min="0" defaultValue="1" name="quantity" id="number1" type="text" style={{ width: "45px" }} readOnly /><span> </span>
                            <button type="button" id="minus1" onClick={() => decrement(1)} class="btn btn-danger"><i class="fa fa-minus"></i></button><span> </span><span> </span>
                          </div>
                          <small id="passwordHelpBlock" class="form-text text-muted text-center">
                            (Note, 1 piece)
                          </small>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3 link-danger"><i
                            class="fas fa-trash-alt mr-1"></i> Remove item </a>
                        </div>
                        <p class="mb-0"><span><strong id="summary"><h3>LKR {item.fPrice}</h3></strong></span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                  
                    </div>
                    
                  )

                })



                }


                
{gPackages.map((item, index) => {

return (
  <div>
    
    <div class="row mb-4">
<div class="col-md-5 col-lg-3 col-xl-3">
  <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
    <img class="img-fluid w-100"
      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
    <a href="#!">
      <div class="mask">
        <img class="img-fluid w-100"
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
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
        <p class="mb-3 text-muted text-uppercase small">Content</p>
        {item.content.map((con) => {

          return(
            <div>
          <p>{con.Item_name}</p>
          </div>
          )

        })

        }
      </div>
      <div>
        <div class="def-number-input number-input safari_only mb-0 w-100">
          <button type="button" id="plus" class="btn btn-success" onClick={() => increment(index)} ><i class="fa fa-plus"></i></button><span> </span>
          <input class="quantity" min="0" defaultValue="1" name="quantity" id="number1" type="text" style={{ width: "45px" }} readOnly /><span> </span>
          <button type="button" id="minus1" onClick={() => decrement(1)} class="btn btn-danger"><i class="fa fa-minus"></i></button><span> </span><span> </span>
        </div>
        <small id="passwordHelpBlock" class="form-text text-muted text-center">
          (Note, 1 piece)
        </small>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3 link-danger"><i
          class="fas fa-trash-alt mr-1"></i> Remove item </a>
      </div>
      <p class="mb-0"><span><strong id="summary"><h3>LKR {item.price}</h3></strong></span></p>
    </div>
  </div>
</div>
</div>
<br/>

  </div>
  
)

})



}






































                <hr class="mb-4" />

                <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                  items to your cart does not mean booking them.</p>

              </div>
            </div>


            <div class="mb-3">
              <div class="pt-4">

                <h5 class="mb-4">We accept</h5>

                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
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
                    <span>LKR 23049.00</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Discount
                    <span>LKR 2333.00</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The Total Amount of</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>LKR 50000.00</strong></span>
                  </li>
                </ul>

                <button type="button" class="btn btn-primary btn-block">Go to Checkout</button>

              </div>
            </div>


          </div>

        </div>


      </section>
    </div>
  );
}

