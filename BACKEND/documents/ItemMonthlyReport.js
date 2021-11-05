module.exports = (result) => {
    let otherDetials = result.pop();
    //let SellerDetails = result.pop();
    let grandTotal = 0;
    let now = new Date();

    let day = ("0" + now.getDate()).slice(-2);

    let month = ("0" + (now.getMonth() + 1)).slice(-2);

    let today = now.getFullYear() + "-" + (month) + "-" + (day);
   
    let tableData = "";
    for(let i = 0; i < result.length; i++){

        tableData += '<tr><td>' +(i+1)+ '</td><td>'+result[i].OrderDate+ '</td>'+
        '<td>' + result[i].OrderID+ '</td><td>' + result[i].ItemName + '</td><td>' + result[i].Brand+ '</td>'+
        '<td>' + result[i].SKU+ '</td><td>' + result[i].Quantity + '</td><td>LKR ' + result[i].UnitPrice + '</td>'+
        '<td>LKR '+result[i].TotalPrice+ '</td></tr>';

        grandTotal += parseFloat(result[i].TotalPrice)
    }
grandTotal += '.00';
    return `
     
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
           .header{
               font-family: Comic Sans MS, Comic Sans, cursive;
               font-size: 40px;
               margin-top: -20px;
           }
      
           .headerCard{
               text-align: center;
               margin-top: -30px;
           }
           .header2{
              font-family: Comic Sans MS, Comic Sans, cursive;
              margin-top: -20px;
              font-size: 20px;
              
           }
      
           .mainFooter{
              text-align: right;
           }
  
           table {
              font-family: arial, sans-serif;
              border-collapse: collapse;
              width: 99%;
            }
            .caltext {
              padding-left : 5px;
            }
            
            th {
              border: 1px solid #000000;
              text-align: center;
              padding-bottom: 20px;
              padding-top: 20px;
              font-size : 12px;
              background-color: #ffffff;
            }
            td {
              border: 1px solid #000000;
              text-align: center;
              font-size : 15px;
              padding-bottom: 10px;
              padding-top: 10px;
            }
            
            tr:nth-child(even) {
              background-color: #7AD7F0;
            }
            
            tr:nth-child(odd) {
              background-color: #FFFFFF;
            }
           
      
          </style>
      </head>
      <header>
          <div class = "headerCard">
              <img src="https://cloud9.gg/wp-content/uploads/2020/07/Blue_Valorant_144.png"  class = "logo" alt="TechScope logo">
              <h1 class="header">TechScope</h1></img>
              <h3 class = "header2">See what's selling best</h3>
          </div>
        </header>
      <body>
      <hr>
      <br/>
      <h1 align="center"><u>MONTHLY SALES REPORT</u></h1>
      <h3 align="center">FOR ITEMS</h3>
      
      
  
      <br/>
      <div>
      <h4>Report Generated Date : ${today}</h4>
      <h4>Company Name : ${otherDetials.CompanyName} </h4> <h4>Owner Name : ${otherDetials.OwnerName}</h4>
      <h4>Address : ${otherDetials.Address} Email : ${otherDetials.Email}</h4><h4> Phone Number : ${otherDetials.pNo}</h4>
      </div>
      <table align="center">
      <thead>  
      <tr>
          <th>No</th>
          <th>Order Date</th>
          <th>OrderID</th>
          <th>Item Name</th>
          <th>Brand</th>
          <th>SKU</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
      </tr>
      </thead>
      <tbody>

            ${tableData}
   
      </tbody>
      </table>
      <br/>
  
      <h4 class = "caltext" >Total Orders : ${otherDetials.TotalOrders} Total Items : ${otherDetials.TotalItems} </h4><h4>Total Stock Sold  : ${otherDetials.TotalStockSold}</h4>
      <h4 class = "caltext" >Total Income : LKR ${otherDetials.TotalIncome} Total Outgoings : LKR ${otherDetials.TotalOutgoings} </h4><h4>Total Profit : LKR ${otherDetials.TotalProfit}</h4>
      <h4 style = "float : right" class = "caltext" >GRAND TOTAL : LKR ${grandTotal}</h4>     
      
      <br/><br/><br/><br/>
      </body>
      <footer>
          <hr>
          <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
      </footer>
      </html>
  
        `;
  };
  