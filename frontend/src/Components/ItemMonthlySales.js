import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

export default function ItemMonthlySales(props) {
  let SellerID = localStorage.getItem("SellerID");
  let SellersOrders = [];
  let SellerOrdersForMonth = [];
  const [result, setResult] = useState([]);
  let ordersWithDetails = [];
  let outgoings = 0;
  let totalStocks = 0;
  let incomes = 0;
  const [totalOrders, setTotalOrders] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [totalStock, setTotalStock] = useState("");
  const [income, setIncome] = useState("");
  const [outgoing, setOutGoing] = useState("");
  const [profit, setProfit] = useState("");
  const [dates, setDates] = useState("");
  const [seller,setSeller] = useState("");
  useEffect(() => {
    function getOrders() {
      // for this month
      let date = new Date();
      date = date.getMonth();
      if (date >= 9) {
        date = date + 1;
      } else {
        date = "0" + (date + 1);
      }
      console.log(date);
      axios
        .get("https://tech-scope-online.herokuapp.com/Orders/getOrders")
        .then((res) => {
          SellersOrders = res.data.filter(
            (order) => order.SellerID == SellerID
          );
          console.log(SellersOrders);
          SellerOrdersForMonth = SellersOrders.filter(
            (post) => post.TransitTime.substr(5, 2) == date
          );

          console.log(SellerOrdersForMonth);
          CreateFinalResult(SellerOrdersForMonth);

          document.getElementById("month").value = date;
        })
        .catch((err) => {
          alert(err);
        });
    }

    getOrders();
  }, []);

  function CreateFinalResult(content) {
    for (let i = 0; i < content.length; i++) {
      let fullMonth = content[i].TransitTime.substr(0, 10);
      let totalPrice = content[i].Items[0].Price * content[i].OQuantity;
      let order = {
        OrderDate: fullMonth,
        OrderID: content[i].OrderID,
        ItemName: content[i].Items[0].Item_name,
        Brand: content[i].Items[0].Brand,
        SKU: content[i].Items[0].Stock_keeping_unit,
        Quantity: content[i].OQuantity,
        UnitPrice: content[i].Items[0].Price + ".00",
        TotalPrice: totalPrice + ".00",
      };

      totalStocks = totalStocks + parseFloat(content[i].OQuantity);
      incomes += parseFloat(totalPrice);
      outgoings += parseFloat(content[i].Items[0].Price * 0.2);
      ordersWithDetails.push(order);
    }
    console.log(ordersWithDetails);
    setResult(ordersWithDetails);
    setTotalOrders(content.length);
    setTotalItems(content.length);
    setIncome("LKR " + parseFloat(incomes).toFixed(2));
    setOutGoing("LKR " + parseFloat(outgoings).toFixed(2));
    setTotalStock(totalStocks);
    setProfit("LKR " + parseFloat(incomes - outgoings).toFixed(2));
    setDates(getFormattedDate());



    axios.get("https://tech-scope-online.herokuapp.com/orgSeller/get/" + SellerID).then((res) =>
    {

       setSeller(res.data);



   

        
    }).catch((err) =>{
        alert(err);
    })

  }

  function getFormattedDate() {
    let date = new Date();
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  }

  function onMonthChange() {
    console.log(document.getElementById("month").value);
    let date = document.getElementById("month").value;
    axios
      .get("https://tech-scope-online.herokuapp.com/Orders/getOrders")
      .then((res) => {
        SellersOrders = res.data.filter((order) => order.SellerID == SellerID);
        console.log(SellersOrders);
        SellerOrdersForMonth = SellersOrders.filter(
          (post) => post.TransitTime.substr(5, 2) == date
        );

        console.log(SellerOrdersForMonth);
        CreateFinalResult(SellerOrdersForMonth);
      })
      .catch((err) => {
        alert(err);
      });
  }


  function generateReport(){
    let date = document.getElementById("month").value;
    axios
    .get("https://tech-scope-online.herokuapp.com/Orders/getOrders")
    .then((res) => {
      SellersOrders = res.data.filter((order) => order.SellerID == SellerID);
      console.log(SellersOrders);
      SellerOrdersForMonth = SellersOrders.filter(
        (post) => post.TransitTime.substr(5, 2) == date
      );

      console.log(SellerOrdersForMonth);
      CreateContentToPDF(SellerOrdersForMonth);
    })
    .catch((err) => {
      alert(err);
    });


    


  }


  function CreateContentToPDF(content){
      let result = [];
    for (let i = 0; i < content.length; i++) {
        let fullMonth = content[i].TransitTime.substr(0, 10);
        let totalPrice = content[i].Items[0].Price * content[i].OQuantity;
        let order = {
          OrderDate: fullMonth,
          OrderID: content[i].OrderID,
          ItemName: content[i].Items[0].Item_name,
          Brand: content[i].Items[0].Brand,
          SKU: content[i].Items[0].Stock_keeping_unit,
          Quantity: content[i].OQuantity,
          UnitPrice: content[i].Items[0].Price + ".00",
          TotalPrice: totalPrice + ".00",
        };
  
        totalStocks = totalStocks + parseFloat(content[i].OQuantity);
        incomes += parseFloat(totalPrice);
        outgoings += parseFloat(content[i].Items[0].Price * 0.2);
        result.push(order);
      }
      //console.log(ordersWithDetails);
     // setResult(ordersWithDetails);

      let orderAmounts = {
          "TotalOrders" : content.length,
          "TotalItems" : content.length,
          "TotalStockSold" : totalStocks,
          "TotalIncome" : parseFloat(incomes).toFixed(2),
          "TotalOutgoings" : parseFloat(outgoings).toFixed(2),
          "TotalProfit" : parseFloat(incomes - outgoings).toFixed(2),
          "Date" : getFormattedDate()
      }
      
      //console.log(orderAmounts)

      //result.push(ordersWithDetails);
     // result.push(orderAmounts);
      console.log(result);

    

        //  setSeller(res.data);
          let OtherDetails = {
            "CompanyName" : seller.companyname,
            "OwnerName" : seller.ownername,
            "Address" : seller.address,
            "Email" : seller.email,
            "pNo" : seller.mobile,
            "TotalOrders" : content.length,
            "TotalItems" : content.length,
            "TotalStockSold" : totalStocks,
            "TotalIncome" : parseFloat(incomes).toFixed(2),
            "TotalOutgoings" : parseFloat(outgoings).toFixed(2),
            "TotalProfit" : parseFloat(incomes - outgoings).toFixed(2),
            "Date" : getFormattedDate()
          }
          result.push(OtherDetails)
          console.log(result)
         // console.log(result.pop())

         //console.log(seller)

     

   

     
      
      axios
      .post("https://tech-scope-online.herokuapp.com/items/create-pdf", result)
      .then(() =>
        axios.get("https://tech-scope-online.herokuapp.com/items/fetch-pdf", {
          responseType: "blob",
          // A BLOB is a binary large object that can hold a variable amount of data. important
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "MonthlySalesReport.pdf");
                          //your file name 
      });
      

  

    
  }
  return (
    <div>
      <br></br>
      <h2 style={{ textAlign: "center" }}>Monthly Sales</h2>
      <br></br>
      Currency Code : LKR
      <br></br>
      <h3 style={{ float: "right" }}> TODAY : {dates}</h3>
      <br></br>
      <br></br>
      <div className=" d-flex justify-content-center">
        <div
          class="card shadow p-3 mb-5 bg-white rounded"
          style={{ width: "900px" }}
        >
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-sm">Total Orders : {totalOrders}</div>
                <div class="col-sm">Total Items : {totalItems}</div>
                <div class="col-sm">Total Stock Sold : {totalStock}</div>
              </div>
              <br></br>
              <div class="row">
                <div class="col-sm">Total Income : {income}</div>
                <div class="col-sm">Total Outgoings : {outgoing}</div>
                <div class="col-sm">Total Profit : {profit}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center><button type="button" class="btn btn-success" onClick = {() => {generateReport()}}>generate report</button></center><br/>
      <div className="row">
        <div className="col-sm">
          <select
            id="month"
            onChange={() => {
              onMonthChange();
            }}
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <br />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Order Date</th>
            <th scope="col">OrderID</th>
            <th scope="col">Item Name</th>
            <th scope="col">Brand</th>
            <th scope="col">SKU</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {result.map((result, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{result.OrderDate}</td>
                <td>{result.OrderID}</td>
                <td>{result.ItemName}</td>
                <td>{result.Brand}</td>
                <td>{result.SKU}</td>
                <td>{result.Quantity}</td>
                <td>LKR {result.UnitPrice}</td>
                <td>LKR {result.TotalPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
