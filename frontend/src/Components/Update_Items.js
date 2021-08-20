import React, { useState,useEffect } from "react";
import axios from "axios";




export default function Update_Items(props){

  // const [students,setStudents] = useState([]);
  const [data,setData] = useState({
    name : "",
    Item_name : "",
    Brand : "",
    Quantity : "",
    Model : "",
    Price : "",
    Stock_keeping_unit : "",
    Description : "",
    Specification : "",
    WHT : "",
    Warrenty : "",
    Color_family : "",
    Other_colors : "",
    Images : "",
    Category : ""
  });
//learn  .......
  useEffect(() =>{
      function getItem(){
        // const objectId = props.match.params.id; 
        // console.log(objectId);
        const objectId = "611f847bbb5f1c52a8d0dcd2";

          axios.get("http://localhost:8070/items/get/" + objectId).then((res) =>
          {
              //setStudents(res.data);
             setData(res.data);

              console.log(res.data);
              
              warrentyCheck();
              Color_family();
              categoryCheck();

          }).catch((err) =>{
              alert(err);
          })
      }
     
      getItem();
      // displayStudentdetails();
     
  }, []);



  function warrentyCheck(){
      if(data.Warrenty == true){
            document.getElementById("txt1").innerHTML = "Warrenty Available For this Item";
            document.getElementById("txt1").style.color = "#A4DE02";
      }else{
        document.getElementById("txt1").innerHTML = "Warrenty Not Available For this Item";
        document.getElementById("txt1").style.color = "#FF0000";
      }
  }
  
  function Color_family(){
    let txt = "Checked Colors ";   
    for(let i = 0; i < data.Color_family.length; i++){
          txt += data.Color_family[i] + '  ';
      }

      document.getElementById("txt2").innerHTML = txt;
  }

  function categoryCheck(){
      let txt = "Item is Category under ";
        if(data.Category == "Mobile Phones"){
            txt += 'Mobile Phones';
        }else if(data.Category == "Tablet / iPad / iPod"){
            txt += 'Tablet / iPad / iPod';
        }else if(data.Category == "Gaming"){
            txt += 'Gaming';
        }else{
            txt += 'Others';
        }

        document.getElementById("txt3").innerHTML = txt;
  }
  function sendData(e){
//  still didn't created it yet.....
    // const objectId = props.match.params.id; 
    //console.log(objectId);
   const objectId = "611f847bbb5f1c52a8d0dcd2";
   
    e.preventDefault();

    console.log(data);
    // axios.put("http://localhost:8070/items/update/" + objectId,data).then(()=>{
    //   //alert("Student Updated");
    // //  document.getElementById("txt").innerHTML = "Student Updated Successfully!";
      

    // }).catch((err) =>{
    //   alert(err)
    // })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }


 return(
 
    <div>
    <div class="height-100 bg-light">
    
    <br/><br/><br/>
    <h1 className = "headerName" id = "headerName">EDIT YOUR ITEM</h1>
    <h3 className = "headerName" id = "Submitstatus"></h3>
    <h4>ITEM INFORMATION</h4>
    <br/>
    {/* <center>

    <h4>ITEM IMAGES</h4>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src = {require('../images/'+ data.Images[0]).default} alt="First slide"/>
    </div>
    <div class="carousel-item">
 
      <img class="d-block w-100" src = {require('../images/'+data.Images[1]).default} alt="Second slide"/>
    </div>
    <div class="carousel-item">


      <img class="d-block w-100" src = {require('../images/'+data.Images[2]).default} alt="Third slide"/>
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

</center> */}
    <div class="card">
        <div class="card-body">
            <form id = "form1" onSubmit = {sendData}>

                    <br/><br/>

                <div class="row">
                  <div class="col">
                      <label for="item_name">ITEM NAME</label>
                    <input type="text" id = "item_name" Value = {data.Item_name} class="form-control" placeholder="Name of the item"
                     onChange= {
                        (e)=>handle(e)}/>
                  </div>
                  <div class="col">
                    <label for="quantity">QUANTITY</label>
                    <input type="text" id = "quantity" Value = {data.Quantity} class="form-control" placeholder="Quantity"
                     onChange= {
                        (e)=>handle(e)}/>
                  </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col">
                        <label for="brand">BRAND</label>
                      <input type="text" id = "brand"  Value = {data.Brand} class="form-control" placeholder="Item brand"
                      onChange= {
                        (e)=>handle(e)}/>
                    </div>
                    <div class="col">
                      <label for="model">MODEL</label>
                      <input type="text" id = "model" Value = {data.Model} class="form-control" placeholder="Item model"
                   onChange= {
                    (e)=>handle(e)}/>
                    </div>
               </div>
               <br/>
                  <div class="row">
                    <div class="col">
                        <label for="price">PRICE</label>
                      <input type="text" id = "price" Value = {data.Price} class="form-control" placeholder="Price of the item"
                    onChange= {
                        (e)=>handle(e)}/>
                    </div>
                    <div class="col">
                        <label for="SKU">SKU (STOCK KEEPING UNIT)</label>
                        <input type="text" id = "Stock_keeping_unit" Value = {data.Stock_keeping_unit} class="form-control" placeholder="SKU"
                       onChange= {
                        (e)=>handle(e)}/>
                      </div>
                  </div>  
                  
                <br/>
                <div class="row">
                    <div class="col">
                        <label for="item_des">DESCRIPTION</label>
                        <textarea class="form-control" id = "description" Value = {data.Description} rows="5" placeholder="Description about the item" 
                         onChange= {
                            (e)=>handle(e)}></textarea>
                    </div>
                    <div class="col">
                        <label for="item_specification">SPECIFICATION</label>
                        <textarea class="form-control" id = "specifications" Value = {data.Specification} rows="5" placeholder="Item specifications" 
                      onChange= {
                        (e)=>handle(e)}></textarea>
                      </div> 
                  <br/>
                  <div class="col">
                    <label for="WHT">WHAT IS IN THE BOX ? </label>
                    <textarea class="form-control" rows="5" id = "wht" Value = {data.WHT} placeholder="Tell what inside the package ?"  
                    onChange= {
                        (e)=>handle(e)}></textarea>
                  </div>
                </div>

              <div class="row">
                <div class="col">
                    <label for="warrenty">WARRENTY</label>
                    <div class="container">
                        <div class="custom-control custom-radio">
                            <input type="radio" checked id="customRadio1" name="customRadio" class="custom-control-input" value = "1" />
                            <label class="custom-control-label" for="customRadio1">Warrenty available</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value = "0"/>
                            <label class="custom-control-label" for="customRadio2">Warrenty unavailable</label>
                          </div>
                          <h5 id = "txt1"></h5>
                    </div>   
                </div>

                <div class="col">
                    
                    <label for="warrenty">COLOR FAMILY</label>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" value = "Black"/>
                        <label class="custom-control-label" for="customCheck1">Black</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck2" value = "White"/>
                        <label class="custom-control-label" for="customCheck2">White</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck3" value = "Red"/>
                        <label class="custom-control-label" for="customCheck3">Red</label>
                      </div>
                      <h5 id = "txt2" ></h5>
                </div>
                <div class="col">
                    <label for="warrenty">MORE COLORS</label>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck4" value = "Gold"/>
                        <label class="custom-control-label" for="customCheck4">Gold</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck5" value = "Silver"/>
                        <label class="custom-control-label" for="customCheck5">Silver</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck6" value = "Yellow"/>
                        <label class="custom-control-label" for="customCheck6">Yellow</label>
                      </div>
                </div>
              </div>
                <br/>
              <div class=" row">
                  <div class="col">
                    <label for="SKU">OTHER COLORS</label>
                    <input type="text" Value = {data.Other_colors} class="form-control" placeholder="Any other colors"
                   onChange= {
                    (e)=>handle(e)}/>
                </div>
              
              <div class="col">
                <label for="SKU">IMAGES</label>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" multiple/>
                    <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
              </div>

              <div class="col">
                <label for="SKU">CATEGORY</label>
                <select class="custom-select" id = "selectCategory">
                   
                    <option value="1" selected>Mobile phones</option>
                    <option value="2">Tablet / iPad / iPod</option>
                    <option value="3">Gaming</option>
                    <option value="4">Other</option>
                  </select>
                  <h5 id = "txt3" ></h5>
              </div>
            </div>
            <br/><br/>
            <center>
                    <button type="submit" class="btn btn-primary" style = {{marginright: "10px"}}>UPDATE</button>
                    <button type="button" class="btn btn-danger">DELETE</button>
            </center>
            <br/><br/><br/>
            </form> </div></div></div>
               </div>        
 )

}

// export default AddStudent;
