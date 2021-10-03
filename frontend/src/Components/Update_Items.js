import React, { useState, useEffect,radix} from "react";
import axios from "axios";
import Swal from 'sweetalert2'
export default function Update_Items(props) {
  let [succMsg,setSuccMsg] = useState("");
  let [Error2Msg,setError2Msg] = useState("");
  let [Err3Msg,setErr3Msg] = useState("");
  let [ModelMsg,setModelMsg] = useState("");
  let flag = 0;
  const [erorMsg,setErrorMsg] = useState("");
  // const [students,setStudents] = useState([]);
  const [data, setData] = useState({
    Item_name: "",
    Brand: "",
    Quantity: "",
    Model: "",
    Price: "",
    Stock_keeping_unit: "",
    Description: "",
    Specification: "",
    WHT: "",
    Warrenty: "",
    Color_family: "",
    Other_colors: "",
    Images: "",
    Category: "",
  });
  let isFirstRender = true;
  let imageName = "";
  
let slideImages = [];
  const [images, setImages] = useState([]);
  //learn  .......
   useEffect(() => {
    function getItem() {
      // const objectId = props.match.params.id;
      // console.log(objectId);
      const objectId = props.match.params.id;

      axios
        .get("http://localhost:8070/items/get/" + objectId)
        .then((res) => {
          setData(res.data);
          setImages(res.data.Images);

          console.log(images);

   
          
        })
        .catch((err) => {
          alert(err);
        });
    }

    if (isFirstRender.current) {
      isFirstRender.current = false // toggle flag after first render/mounting
      return;
    }

    //check this
    getItem();
    // getItem();
    
    // displayStudentdetails();
  },data);

  useEffect (() => {
    warrentyCheck();
    Color_family();
    console.log(data.Images[0]);
    categoryCheck();
  })

  useEffect (() => {
    
    imageForSilde();
  })

  

  function imageForSilde() {
 
    imageName = 'require("../images/'+ data.Images[0]+'").default';
    slideImages = data.Images;

    console.log(imageName);
  }

  function warrentyChecks() {
    if (document.getElementById("customRadio2").checked) {
      data.Warrenty = parseInt(document.getElementById("customRadio2").value,radix);
    } else if (document.getElementById("customRadio1").checked) {
      data.Warrenty = parseInt(document.getElementById("customRadio1").value,radix);
    }
  }
  // Clear all after submit
  function colors() {
    //data.Color_family = "";
    let newColors = [];
    for (let i = 1; i <= 6; i++) {
      let checkBoxId = "customCheck" + i;
      // console.log(checkBoxId);
      if (document.getElementById(checkBoxId).checked) {
        newColors.push(document.getElementById(checkBoxId).value);
      }
    }
    data.Color_family = newColors;
  }

  function addImages() {

    let newImages = [];
    let imagess = document.getElementById("customFile").files;
    console.log(imagess)
    if(imagess.length !== 0){
      for (let i = 0; i < imagess.length; i++) {
        newImages.push(imagess[i].name);
      }
  
      data.Images = newImages;
      console.log(data.Images)
    }else{
      data.Images = images;
      console.log(data.Images);

    }
    
  }

  function ItemCategorySelection() {

    let valueof = parseInt(document.getElementById("selectCategory").value);
    if (valueof === 1) {
      data.Category = "Mobile Phones";
      // setData()= "MM";
      //alert("111");
    } else if (valueof === 2) {
      // setSelectCategory("Tablet / iPad / iPod");
      data.Category = "Tablet / iPad / iPod";
    } else if (valueof === 3) {
      //setSelectCategory("Gaming");
      data.Category = "Gaming";
    } else if (valueof === 4) {
      //setSelectCategory("Other");
      data.Category = "Other";
    }
  }

  // Check this again ....
  function warrentyCheck() {
    if (data.Warrenty === true) {
      document.getElementById("txt1").innerHTML =
        "Warrenty Available For this Item";
      document.getElementById("txt1").style.color = "#A4DE02";
    } else if (data.Warrenty === false) {
      document.getElementById("txt1").innerHTML =
        "Warrenty Not Available For this Item";
      document.getElementById("txt1").style.color = "#FF0000";
    }
  }

  function Color_family() {
    let txt = "Checked Colors ";
    for (let i = 0; i < data.Color_family.length; i++) {
      txt += data.Color_family[i] + "  ";
    }

    document.getElementById("txt2").innerHTML = txt;
  }

  function categoryCheck() {

    let txt = "Item is Category under ";
    if (data.Category === "Mobile Phones") {
      txt += "Mobile Phones";
    } else if (data.Category === "Tablet / iPad / iPod") {
      txt += "Tablet / iPad / iPod";
    } else if (data.Category === "Gaming") {
      txt += "Gaming";
    } else {
      txt += "Others";
    }

    document.getElementById("txt3").innerHTML = txt;
  }

  function deletee(id) {
    const objectId = id;



    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete("http://localhost:8070/items/delete/" + objectId)
        .then((res) => {
         
          // const afterDeleteStudent = students.filter(student=>student._id != id);
          // setStudents(afterDeleteStudent);

          
      Swal.fire(
        'Deleted!',
        'Your Item has been deleted.',
        'success'
      )

      props.history.push("/Seller/Home");
        })
        .catch((err) => {
          alert(err);
        });
      }
    })


   



  }

  function sendData(e) {
    //  still didn't created it yet.....
    // const objectId = props.match.params.id;
    //console.log(objectId);
    const objectId = props.match.params.id;

    e.preventDefault();

    addImages();
    colors();
    warrentyChecks();
    ItemCategorySelection();
    // data.Category = "apple";
   //console.log(data.Color_family);
  // console.log(data.Category);
    console.log(data);
    axios
      .put("http://localhost:8070/items/update/" + objectId, data)
      .then(() => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Item has been updated',
          showConfirmButton: false,
          timer: 1500
        })

        props.history.push("/Seller/Home");
  
      })
      .catch((err) => {
        alert(err);
   
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);

    if(e.target.id == "Quantity"){
      if(e.target.value > 100){
        setErrorMsg("Quantity cannot be more than 100");
        setSuccMsg("")
        flag = 0;
      }else if(e.target.value <= 0){
        setErrorMsg("Quantity cannot be Zero or less");
        setSuccMsg("")
        flag = 0;
      }else if((e.target.value).length == 0){

      }else if((e.target.value) > 0 && (e.target.value) < 200){
      
          setSuccMsg("All Set!")
          setErrorMsg("");
          flag = 1
        }else{
        setErrorMsg("");
        flag = 1;
      }
      
    } 
    
    if(e.target.id == "Price"){
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
    }
  }

  function gotoAddDiscount(id){

    props.history.push("/Seller/AddDiscount/" + id);
  }
  function displayImage(){
    let images = document.getElementById("customFile").files;
    let name = "";
    for (let i = 0; i < images.length; i++) {

      name += images[i].name + '<br/>';
    }
    document.getElementById("GG").innerHTML = name;

  }

  return (
    
    <div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="headerName" id="headerName">
          EDIT YOUR ITEM
        </h1>
        <h3 className="headerName" id="Submitstatus"></h3>
        <h4>ITEM INFORMATION</h4>
        <br />
       {/* <img src={"/images/homepic1.jpg"}/> */}
        <center>
      <h4>ITEM IMAGES</h4>
      
      <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100"  src={"/Images/"+ data.Images[0]} alt="First slide"/>
      </div>
      <div class="carousel-item">
  
        <img class="d-block w-100"  src={"/Images/"+data.Images[1]} alt="Second slide"/>
      </div>
      <div class="carousel-item">


        <img class="d-block w-100"  src={"/Images/"+data.Images[2]} alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>


 </center>   
<br/><br/>

        <div class="card">
          <div class="card-body">
            <form id="form1" onSubmit={sendData}>
              <br />
              <br />

              <div class="row">
                <div class="col">
                  <label for="item_name">ITEM NAME <h6  style={{ textAlign: "center", color: "#FF0000" }}></h6></label>
                  <input
                    type="text"
                    id="Item_name"
                    Value={data.Item_name}
                    class="form-control"
                    placeholder="Name of the item"
                    onChange={(e) => handle(e)} required
                  />
                </div>
                <div class="col">
                  <label for="quantity">QUANTITY  <h6  style={{ textAlign: "center", color: "#FF0000" }}>{erorMsg}</h6></label>
                  <input
                    type="Number"
                    id="Quantity"
                    Value={data.Quantity}
                    class="form-control"
                    placeholder="Quantity"
                    onChange={(e) => handle(e)
                    } required
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <label for="brand">BRAND</label>
                  <input
                    type="text"
                    id="Brand"
                    Value={data.Brand}
                    class="form-control"
                    placeholder="Item brand"
                    onChange={(e) => handle(e)} required
                  />
                </div>
                <div class="col">
                  <label for="model">MODEL</label>
                  <input
                    type="text"
                    id="Model"
                    Value={data.Model}
                    class="form-control"
                    placeholder="Item model"
                    onChange={(e) => handle(e)} readOnly
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col">
                  <label for="price">PRICE  <h6  style={{ textAlign: "center", color: "#FF0000" }}>{Error2Msg}</h6> </label>
                  <input
                    type="Number" 
                    id="Price"
                    Value={data.Price}
                    class="form-control"
                    placeholder="Price of the item"
                    onChange={(e) => handle(e)} required
                  />
                </div>
                <div class="col">
                  <label for="SKU">SKU (STOCK KEEPING UNIT)</label>
                  <input
                    type="text"
                    id="Stock_keeping_unit"
                    Value={data.Stock_keeping_unit}
                    class="form-control"
                    placeholder="SKU"
                    onChange={(e) => handle(e) }
                    readOnly
                  />
                </div>
              </div>

              <br />
              <div class="row">
                <div class="col">
                  <label for="item_des">DESCRIPTION</label>
                  <textarea
                    class="form-control"
                    id="Description"
                    defaultValue={data.Description}
                    rows="5"
                    placeholder="Description about the item"
                    onChange={(e) => handle(e)} required
                  ></textarea>
                </div>
                <div class="col">
                  <label for="item_specification">SPECIFICATION</label>
                  <textarea
                    class="form-control"
                    id="Specification"
                    defaultValue={data.Specification}
                    rows="5"
                    placeholder="Item specifications"
                    onChange={(e) => handle(e)} required
                  ></textarea>
                </div>
                <br />
                <div class="col">
                  <label for="WHT">WHAT IS IN THE BOX ? </label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="WHT"
                    defaultValue={data.WHT}
                    placeholder="Tell what inside the package ?"
                    onChange={(e) => handle(e)} required
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
                    <h5 id="txt1"></h5>
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
                  <h5 id="txt2"></h5>
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
                    Value={data.Other_colors}
                    id="Other_colors"
                    class="form-control"
                    placeholder="Any other colors"
                    onChange={(e) => handle(e)}
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
                  <select class="custom-select" id="selectCategory">
                    <option value="1" selected>
                      Mobile phones
                    </option>
                    <option value="2">Tablet / iPad / iPod</option>
                    <option value="3">Gaming</option>
                    <option value="4">Other</option>
                  </select>
                  <h5 id="txt3"></h5>
                </div>
              </div>
         
              <center>
                <center><div id = "GG"></div></center>
              <button
                  type = "button"
                  class="btn btn-primary"
                  style={{ marginright: "20px" }}
                  onClick={() => gotoAddDiscount(data._id)}
                >
                  ADD DISCOUNT
                </button><span> </span>
                <button
                  type="submit"
                  class="btn btn-success"
                  style={{ marginright: "20px" }}
                >
                  UPDATE
                </button><span> </span>
                <button
                  type="button"
                  onClick={() => deletee(data._id)}
                  class="btn btn-danger"
                >
                  DELETE
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

// export default AddStudent;
