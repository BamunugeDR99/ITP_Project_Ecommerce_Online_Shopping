import React, { useState ,radix} from "react";
import axios from "axios";
import Swal from 'sweetalert2'

// apple

export default function Add_items(props) {
  let [succMsg,setSuccMsg] = useState("");
  let [Error2Msg,setError2Msg] = useState("");
  let [Err3Msg,setErr3Msg] = useState("");
  let [ModelMsg,setModelMsg] = useState("");
  let [Item_name, setItemName] = useState("");
  let [Quantity, setQuantity] = useState("");
  let [Brand, setBrand] = useState("");
  let [Model, setModel] = useState("");
  let [Price, setPrice] = useState("");
  let [Stock_keeping_unit, setSKU] = useState("");
  let [Description, setDescription] = useState("");
  let [Specification, setSpecification] = useState("");
  let [WHT, setWHT] = useState("");
  let Warrenty = 1;
  let Color_family = [];
  let [Other_colors, setOtherColors] = useState("");
  let Images = [];
  let [Category, setSelectCategory] = useState("Mobile Phones");
  const [erorMsg,setErrorMsg] = useState("");
  // const [button,setButton] = useState(false)
  let flag = 0;

  let SellerID = localStorage.getItem("SellerID");
  //check this again
  function warrentyCheck() {
    if (document.getElementById("customRadio2").checked) {
      Warrenty = parseInt(document.getElementById("customRadio2").value,radix);
    } else if (document.getElementById("customRadio1").checked) {
      Warrenty = parseInt(document.getElementById("customRadio1").value,radix);
    }
  }
  // Clear all after submit

  function displayImage(){
    let images = document.getElementById("customFile").files;
    let name = "";
    for (let i = 0; i < images.length; i++) {

      name += images[i].name + '<br/>';
    }
    document.getElementById("GG").innerHTML = name;

  }

  function colors() {
    for (let i = 1; i <= 6; i++) {
      let checkBoxId = "customCheck" + i;
      // console.log(checkBoxId);
      if (document.getElementById(checkBoxId).checked) {
        Color_family.push(document.getElementById(checkBoxId).value);
      }
    }
  }

  function addImages() {
    let images = document.getElementById("customFile").files;

    for (let i = 0; i < images.length; i++) {
      Images.push(images[i].name);
    }

    console.log(Images);
    //ffff
  }

  function ItemCategorySelection() {
    let valueof = parseInt(document.getElementById("selectCategory").value,radix);
    if (valueof === 1) {
      Category = "Mobile Phones";
      //alert("111");
    } else if (valueof === 2) {
      // setSelectCategory("Tablet / iPad / iPod");
      Category = "Tablet / iPad / iPod";
    } else if (valueof === 3) {
      //setSelectCategory("Gaming");
      Category = "Gaming";
    } else if (valueof === 4) {
      //setSelectCategory("Other");
      Category = "Wearable";
    }else if(valueof === 5){
      Category = "Other";
    }
  }
  function sendData(e) {
    e.preventDefault();
    // document.getElementById("headerName").innerHTML = "apple";
    warrentyCheck();
    colors();
    addImages();
    ItemCategorySelection();
    const newItem = {
      Item_name,
      Brand,
      Quantity,
      Model,
      Price,
      Stock_keeping_unit,
      Description,
      Specification,
      WHT,
      Warrenty,
      Color_family,
      Other_colors,
      Images,
      Category,
      SellerID
    };
    console.log(newItem); // remove after checking


//if(flag == 1){
    axios
      .post("http://localhost:8070/items/addItems", newItem)
      .then(() => {
        //custome message to the user
       // document.getElementById("Submitstatus").innerHTML =
         // "Item Added SuccessFully!";
       // document.getElementById("Submitstatus").style.color = "#A4DE02";

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Item has been saved',
          showConfirmButton: false,
          timer: 1500
        })

         props.history.push("/Seller/Home");
        // document.getElementById("txt").innerHTML = "Student Added Successfully!";
      })
      .catch((err) => {
        alert(err);
       // document.getElementById("Submitstatus").innerHTML =
         // "Process UnsuccessFull Please try again!";
        //document.getElementById("Submitstatus").style.color = "#FF0000";

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Please try again!'
        })
        props.history.push("/Seller/Home");

      });

    Color_family = [];
   /* }else if(flag == 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete All the Validations',
        footer: 'Please try again!'
      })
    }*/

  }
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="headerName" id="headerName">
          ADD YOUR ITEM
        </h1>
        <h3 className="headerName" id="Submitstatus"></h3>
        <h4>ITEM INFORMATION</h4>
        <br />
        <div class="card">
          <div class="card-body">
          
            <form onSubmit={sendData}>
              <div class="row">
                <div class="col">
                  <label for="item_name">ITEM NAME</label>
                  <input
                    type="text"
                    id="item_name"
            
                    class="form-control"
                    placeholder="Name of the item" required
                    onChange={(e) => {
                      setItemName(e.target.value);
                    }}
                  />
                </div>
                <div class="col">
                  <label for="quantity">QUANTITY   <h6  style={{ textAlign: "center", color: "#FF0000" }}>{erorMsg}</h6></label>
                  <input
                    type="number"
                    id="quantity"
                    class="form-control"
                    pattern="[0-9]"
                    Min = "0"
                    placeholder="Quantity (Quantity cannot exceed 200)" required
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      if(e.target.value > 100){
                        setErrorMsg("Quantity cannot be more than 100");
                        setSuccMsg("")
                        flag = 0;
                      }else if(e.target.value <= 0){
                        setErrorMsg("Quantity cannot be Zero or less");
                        setSuccMsg("")
                        flag = 0;
                      }else if((e.target.value).length === 0){

                      }else if((e.target.value) > 0 && (e.target.value) < 200){
                      
                          setSuccMsg("All Set!")
                          setErrorMsg("");
                          flag = 1
                        }else{
                        setErrorMsg("");
                        flag = 1;
                      }
                    }}
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <label for="brand">BRAND</label>
                  <input
                    type="text"
                    id="brand"
                    class="form-control"
                    placeholder="Item brand" required
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  />
                </div>
                <div class="col">
                  <label for="model">MODEL  <h6  style={{ textAlign: "center", color: "#00FF00" }}>{ModelMsg}</h6><h6  style={{ textAlign: "center", color: "#FF0000" }}>{Err3Msg}</h6></label>
                  <input
                    type="text"
                    id="model"
                    class="form-control"
                    placeholder="Model Starts with(M:New N:Replacement F:Refurbished P:Personalized)" required
                    onChange={(e) => {
                      setModel(e.target.value);

                      if((e.target.value).startsWith("M")){
                        setModelMsg("New")
                        setErr3Msg("")
                        flag = 1
                      }else if((e.target.value).startsWith("N")){
                        setModelMsg("Replacement")
                        setErr3Msg("")
                        flag = 1 
                      }else if((e.target.value).startsWith("F")){
                        setModelMsg("Refurbished")
                        setErr3Msg("")
                        flag = 1
                      }else if((e.target.value).startsWith("P")){
                        setModelMsg("Personalized")
                        setErr3Msg("")
                        flag = 1
                      }else{
                        setErr3Msg("Invalid")
                        setModelMsg("")
                        flag = 0
                      }
                    }}
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <label for="price">PRICE  <h6  style={{ textAlign: "center", color: "#FF0000" }}>{Error2Msg}</h6></label>
                  <input
                    type="number"
                    id="price"
                    class="form-control"
                    pattern="[0-9]+(\\.[0-9][0-9]?)?"
                    placeholder="Price of the item (Price cannot exceed 1 Million)" required
                    onChange={(e) => {
                      setPrice(e.target.value);
                      if(e.target.value > 1000000){
                        setError2Msg("Price cannot exceed 1 Million");
                        flag = 0;
                      }else if(e.target.value <= 0){
                        setError2Msg("Price cannot be Zero or less");
                        flag = 0;
                      }else{
                        setError2Msg("");
                        flag = 1;
                      }
                    }}
                  />
                </div>
                <div class="col">
                  <label for="SKU">SKU (STOCK KEEPING UNIT)</label>
                  <input
                    type="text"
                    id="SKU"
                    class="form-control" required
                    placeholder="SKU"
                    onChange={(e) => {
                      setSKU(e.target.value);
                      axios
                      .get("http://localhost:8070/items/getItems")
                      .then((res) => {
                        
                     let items = res.data;
                      for(let i = 0; i < items.length; i++ ){
                        if(items[i].Stock_keeping_unit === e.target.value){
                          
                          Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'This Stock keeping unit is Already in use!',
                            
                          })
                          flag = 0
                          break;
                        }else{
                          flag = 1
                        }
                      }
                        
                      })
                      .catch((err) => {
                        alert(err);
                      });

                    }}
                  />
                </div>
              </div>

              <br />
              <div class="row">
                <div class="col">
                  <label for="item_des">DESCRIPTION</label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="5"
                    placeholder="Description about the item" required
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div class="col">
                  <label for="item_specification">SPECIFICATION</label>
                  <textarea
                    class="form-control"
                    id="specifications"
                    rows="5"
                    placeholder="Item specifications" required
                    onChange={(e) => {
                      setSpecification(e.target.value);
                    }}
                  ></textarea>
                </div>
                <br />
                <div class="col">
                  <label for="WHT">WHAT IS IN THE BOX ? </label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="wht"
                    placeholder="Tell what inside the package ?"
                    onChange={(e) => {
                      setWHT(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label for="warrenty">WARRENTY</label>
                  <div class="container">
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        checked
                        id="customRadio1"
                        name="customRadio"
                        class="custom-control-input"
                        value="1"
                      />
                      <label class="custom-control-label" for="customRadio1">
                        Warrenty available
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        class="custom-control-input"
                        value="0"
                      />
                      <label class="custom-control-label" for="customRadio2">
                        Warrenty unavailable
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <label for="warrenty">COLOR FAMILY</label>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      value="Black"
                    />
                    <label class="custom-control-label" for="customCheck1">
                      Black
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck2"
                      value="White"
                    />
                    <label class="custom-control-label" for="customCheck2">
                      White
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck3"
                      value="Red"
                    />
                    <label class="custom-control-label" for="customCheck3">
                      Red
                    </label>
                  </div>
                </div>
                <div class="col">
                  <label for="warrenty">MORE COLORS</label>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck4"
                      value="Gold"
                    />
                    <label class="custom-control-label" for="customCheck4">
                      Gold
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck5"
                      value="Silver"
                    />
                    <label class="custom-control-label" for="customCheck5">
                      Silver
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck6"
                      value="Yellow"
                    />
                    <label class="custom-control-label" for="customCheck6">
                      Yellow
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div class=" row">
                <div class="col">
                  <label for="SKU">OTHER COLORS</label>
                  <input
                    type="text"
                    class="form-control"
                    id=" Other_colors"
                    placeholder="Any other colors"
                    onChange={(e) => {
                      setOtherColors(e.target.value);
                    }}
                  />
                </div>

                <div class="col">
                  <label for="SKU">IMAGES</label>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      multiple

                      onChange = {() => displayImage()}
                    />
                    <label class="custom-file-label" for="customFile">
                      Choose file
                    </label>
                  </div>
                </div>

                <div class="col">
                  <label for="SKU">CATEGORY</label>
                  <select class="custom-select" id="selectCategory" required>
                    <option value="1" selected>
                      Mobile phones
                    </option>
                    <option value="2">Tablet / iPad / iPod</option>
                    <option value="3">Gaming</option>
                    <option value = "4">Wearable</option>
                    <option value="5">Other</option>
                    
                  </select>
                </div>
              </div>
              <br />
            
              <center>
              <div id = "GG">
              {/* <img  src={"/Images/avatar.png"} style = {{width : "90px", marginRight : "10px"}}/>  */}
              {/* <img  src={"/Images/avatar.png"} style = {{width : "90px"}}/>  */}

              </div>
              </center>
              <br/>
              <center>
                <button type="submit" class="btn btn-success">
                  ADD
                </button>
              </center>
              <br />
              <br />
              <br />
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
