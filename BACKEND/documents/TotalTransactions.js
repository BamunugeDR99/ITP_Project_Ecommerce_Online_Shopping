module.exports = (result) => {

  for (let i = 0; i < result.length; i++) {

    tableData +=
      '<tr> <td data-label="Transaction Time">' +
      result[i].TransTime +
      '</td><td data-label="Payment Method">' +
      result[i].PaymentType +
      "</td>" +
      '<td data-label="Recipt Number">' +
      result[i].RecieptNo +
      "</td>" +
      '<td data-label="Customer name">' +
      Deeghayua  +
      "</td>" +
      '<td data-label="Items">' +
      result[i].ItemList +
      "</td>" +
      '<td data-label="Total">' +
      total +
      "</td>" +
      "</tr>";
  }



  

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
  width: 80%;
  
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.center {
  margin-left: auto;
  margin-right: auto;
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
   
  <!-- your code -->
              <center><h2 >Transaction History</h2>
            </center>
            
            <table class="center">
            <thead class="thead-dark">

            <tr>
              <th Style="width:10%">Transaction Time</th>
              <th Style="width:10%">Payment Method</th>
            <th Style="width:10%">Recipt Number</th>
            <th Style="width:20%">Customer name</th>
              <th Style="width:20%">Items</th>
            <th Style="width:20%">Total</th>
            </tr>

            </thead>
            
            <tbody>
            ${tableData}

            </tbody> 
            </table>


            <table class="center" stylr="background-color:">
            <tr>
              <th >highest Purchases Amount</th>
            <th >Total Purchases</th>
            </tr>
            <tr>
              <th >Lowest Purchases Amount</th>
            <th >Avarage Amount</th>
            </tr>


            </table>
       
   
  </body>
  <footer>
      <hr>
      <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
  </footer>
  </html>
    `;
};
