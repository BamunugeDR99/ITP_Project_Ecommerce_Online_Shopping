import axios from "axios";
import React, {useState,useEffect} from "react";

//import {ClipLoader} from "react-spinners";


export default function PaymentHistory(props){

let [Orderdetails, setOrderDetails] = useState([]);
let [CartItems, setCartItems] = useState([]);
let [CartPackages, setCartPackages] = useState([]);
let Allitems = [];
let Allpackages = [];


let ItemID = "";
let Name = "";
let Brand = "";
let Model = "";
let Specification = "";
//let Color = "";
let SKU = "";
let fPrice = "";

let ItemDetails = {

  ItemID,
  Name,
  Brand,
  Model,
  Specification,
  //Color,
  SKU,
  fPrice
};

let packageID = "";
let packageName = "";
let description = "";
let content = [];
let price = [];


let PackageDetails = {

  packageID,
  packageName,
  description,
  content,
  price


}


let AllItemsArr = [];
  let [gItems, setgItems] = useState([]);
  let AllPackagesArr = [];
  let [gPackages, setgPackages] = useState([]);



   
useEffect(()=>{

function getOrder(){

  const OrderId = props.match.params.id;

  axios.get("https://tech-scope-online.herokuapp.com/orderhistory/get/" + OrderId).then((res) =>
  {
      // setpayhistory(res.data);
      setOrderDetails(res.data);
      console.log(res.data);

      
      CartItems = res.data.ItemList;
      CartPackages = res.data.PacakgeID;

      console.log(CartItems)
      console.log(CartPackages)




      
      axios.get("https://tech-scope-online.herokuapp.com/items/getItems").then((res) => {

        console.log(res.data);
        Allitems = res.data;

        console.log(Allitems);

        getItemss(Allitems, CartItems);

      }).catch((err) => {


      })


      axios.get("https://tech-scope-online.herokuapp.com/Packages/getPackages").then((res) => {

        //console.log(res.data);
        Allpackages = res.data;

        console.log(Allpackages);

        getPackagess(Allpackages, CartPackages);


      }).catch((err) => {
        alert(err.message);
      })

      
      function getItemss(allItems, items) {

        let j = 0;
  
        for (let i = 0; i < items.length; i++) {
  
          j = 0;
  
          for (j = 0; j < allItems.length; j++) {
  
            if (items[i] == allItems[j]._id) {
  
  
              ItemDetails = {
  
                ItemID : allItems[j]._id,
                Name: allItems[j].Item_name,
                Brand: allItems[j].Brand,
                Model: allItems[j].Model,
                Specification: allItems[j].Specification,
                //Color = allItems[i].Color_family[1],
                SKU: allItems[j].Stock_keeping_unit,
                fPrice: allItems[j].FinalPrice
  
              };
  
  
             console.log(ItemDetails);

              AllItemsArr.push(ItemDetails);

              console.log(AllItemsArr);
  
            }
          }
        }
  
        setgItems(AllItemsArr);
  
      }


      function getPackagess(allPackages, packages) {

        let j = 0;
    
        for (let i = 0; i < packages.length; i++) {
    
          j = 0;
    
          for (j = 0; j < allPackages.length; j++) {
    
            if (packages[i] == allPackages[j]._id) {
    
              
              PackageDetails = {
    
                packageID : allPackages[j]._id,
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
    













      


      
      })
  .catch((err) =>{
      alert(err);
  });







}









getOrder();

},[])
      
       

console.log(gItems);
console.log(gPackages);


    
function gBack(){

  props.history.push("/Customer/paymentHistory")
}
    
    




    return(

       <div class="container" style = {{width : "500px"}}>
           <div class="card">
  <div class="card-header">
  Recipt Number<p>{Orderdetails.RecieptNo}</p>
  </div>
  <div class="card-body">
    <p class="card-text">{`Transaction Time :  ${Orderdetails.TransTime}`}</p>
    <p class="card-text">{`Payment Type :  ${Orderdetails.PaymentType}`}</p>
    <p class="card-text">{`Total Amount :  ${Orderdetails.Amount}`}</p>
    <a href="#" class="btn btn-primary" onClick={()=>gBack()}>Back</a>
    <h3>Items</h3>

    

  </div>
</div>
       </div>
    );
}