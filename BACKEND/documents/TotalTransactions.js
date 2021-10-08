module.exports = (result) => {
  let tableData ="";
  let Total=0;
  let Avg=0;
  let min=0;
  let max=0;
  let count=0;
  for (let i = 0; i < result.length; i++) {
    let dates = result[i].TransTime.substr(0, 10);

    tableData +=
      '<tr><td>' +
      dates +
      '</td><td>' +
      result[i].PaymentType +
      "</td>" +
      '<td>' +
      result[i].RecieptNo +
      "</td>" +
      '<td>' +
      "Deeghayua" +
      "</td>" +
      '<td>' +
      result[i].Amount +
      "</td>" +
      "</tr>";

      if(parseFloat(result[i].Amount)>max)
          {max=parseFloat(result[i].Amount).toFixed(2)}
      else
          {max=max}

      min=parseFloat(result[i].Amount).toFixed(2);
       if(parseFloat(result[i].Amount).toFixed(2) <min)
          {min=parseFloat(result[i].Amount).toFixed(2)}
      else
          {min=min}

      count++;
      Total =Total+ parseFloat(result[i].Amount);

      
  }

// let min2 = min.toFixed(2);

  let Tot = Total.toFixed(2);

      Avg=Total/count;

     let Avg2 = Avg.toFixed(2);

  

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
   
              <center><h2 >Transaction History</h2>
            </center>
            
            <table class="center">
            <thead>

            <tr>
              <th Style="width:10%">Transaction Time</th>
              <th Style="width:10%">Payment Method</th>
            <th Style="width:10%">Recipt Number</th>
            <th Style="width:20%">Customer name</th>
            <th Style="width:20%">Total</th>
            </tr>

            </thead>
            
            <tbody>
            ${tableData}

            </tbody> 
            </table>


            <table class="center" stylr="background-color:">
            <tr>
              <th >highest Purchases Amount: Rs.${max}</th>
            <th >Total Purchases : Rs.${Tot}</th>
            </tr>
            <tr>
              <th >Lowest Purchases Amount : Rs.${min}</th>
            <th >Avarage Amount : Rs.${Avg2}</th>
            </tr>
            <tr>
              <th >Total Transactions : ${count}</th>
            
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
