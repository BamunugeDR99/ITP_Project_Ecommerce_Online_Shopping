const JSJoda = require('js-joda');
const LocalDate = JSJoda.LocalDate;

module.exports = (result) => {

  let tabledata = "";
  let totalSeller = result.pop();
  let newNoSellers = result.length;

  let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear() + "-" + (month) + "-" + (day);


  function getNumberOfDays(start, end) {

    const start_date = new LocalDate.parse(start);
    const end_date = new LocalDate.parse(end);

    return JSJoda.ChronoUnit.DAYS.between(start_date, end_date);
    
}

let percentage = (newNoSellers / totalSeller) * 100;
let per = percentage.toFixed(2);

  for (let i = 0; i < result.length; i++) {
    let dates = result[i].acceptedDate.substr(0,10);

    let days = getNumberOfDays(dates,today);

    tabledata += "<tr>" + "<td>"+dates+"</td>" + "<td>" + result[i].companyname+"</td>"+
    "<td>"+ result[i].ownername+"</td>" +
      "<td>"+ result[i].year+"</td>" +
      "<td>"+result[i].email+"</td>" +
      "<td>"+result[i].mobile+"</td>" +
      "<td>"+ result[i].username+"</td>" +
      "<td>"+ days +"</td>" +
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
            width: 99%;
          }
          .caltext {
            padding-left : 5px;
          }

          .caltext2 {
            padding-right : 10px;
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
            background-color: #80ccff;
          }
          
          tr:nth-child(odd) {
            background-color: #f2f2f2;
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
    <h1 align="center"><u>SELLERS REPORT</u></h1>
    <h3 align="center">NEWLY ACCEPTED SELLERS FOR THE GIVEN MONTH</h3>
    <h3 class = "caltext2" align="right">DATE : ${today}</h3>
    <h3 class = "caltext" align="left">MONTH : </h3>
    
    <br/>
    
    <table align="center">
    <thead>  
    <tr>
        <th>DATE</th>
        <th>COMPANY NAME</th>
        <th>OWNER NAME</th>
        <th>YEAR</th>
        <th>EMAIL</th>
        <th>CONTACT NUMBER</th>
        <th>USERNAME</th>
        <th>ACTIVE DAYS</th>
    </tr>
    </thead>
    <tbody>
      ${tabledata}
    </tbody>
    </table>
    <br/>
    <h3 class = "caltext" >Total number of sellers accepted on this month : ${newNoSellers}</h3>
    <h3 class = "caltext" >Total number of sellers in TechScope : ${totalSeller}</h3>
    <h3 class = "caltext" >Percentage of acceptence for this month  : ${per}%</h3>

         
    
    </body>
    <footer>
        <hr>
        <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
    </footer>
    </html>
      `;
};
