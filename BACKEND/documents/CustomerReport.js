const JSJoda = require('js-joda');
const LocalDate = JSJoda.LocalDate;

module.exports = (result) => {
  let tableData;
  let totalCustomers = result.pop();
  let newNoCustomers = result.length;
  // let date1 = new Date().toISOString().slice(0, 10);

    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear() + "-" + (month) + "-" + (day);

  function getNumberOfDays(start, end) {

    const start_date = new LocalDate.parse(start);
    const end_date = new LocalDate.parse(end);

    return JSJoda.ChronoUnit.DAYS.between(start_date, end_date);
    
}

  let percentage = (newNoCustomers / totalCustomers) * 100 ;
  let percentage2 = percentage.toFixed(2);

   
  for (let i = 0; i < result.length; i++) {

    let dates = result[i].newlyAddeddate.substr(0,10);
    
    let days = getNumberOfDays(dates,today);


    tableData +=
      '<tr> <td data-label="Added">' +
      dates +
      '</td><td data-label="First Name">' +
      result[i].firstName +
      "</td>" +
      '<td data-label="Last Name">' +
      result[i].lastName +
      "</td>" +
      '<td data-label="Username">' +
      result[i].username +
      "</td>" +
      '<td data-label="Email">' +
      result[i].email +
      "</td>" +
      '<td data-label="Geder">' +
      result[i].gender +
      "</td>" +
      '<td data-label="Phone">' +
      result[i].phoneNumber +
      "</td>" +
      ' <td data-label="Address">' +
      result[i].address +
      "</td>" +
      ' <td data-label="Active Time Period">' +
       days +
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

         
      
        .table{
            width: 100%;
            border-collapse: collapse;
            font-family: sans-serif;
            box-sizing: border-box;
        }
        
        .table td,.table th{
          padding:12px 15px;
          border:none;
          text-align: center;
          font-size:9px;
        }
        
        .table th{
            background-color: darkblue;
            color:#ffffff;
        }
        
        .table tbody tr:nth-child(even){
            background-color: #f5f5f5;
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

      <h1>Monthly Customers Report</h1>
      <table class="table">

      <thead>
      <tr>
 
      <th>Added</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Active Time Period(days)</th>
 
        </tr>
     
 
      </thead>
 
      <tbody>
      ${tableData}
      </tbody> 
     
       
   </table>
   <br/>
   
   <h3>Total New Customers: ${newNoCustomers}</h3>
   <h3>Maximum Number of Customers Added Month: January </h3>
   <h3>Percentage: ${percentage2} %</h3>
     
         
     
    </body>
    <footer>
        <hr>
        <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
    </footer>
    </html>
      `;
};
