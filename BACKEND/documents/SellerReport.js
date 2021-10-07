module.exports = (result) => {

  let tabledata = "";
  let totalSeller = result.pop();
  let newNoSellers = result.length;
  let today = new Date();

  for (let i = 0; i < result.length; i++) {
    let dates = result[i].acceptedDate.substr(0,10);

    tabledata += "<tr>" + "<td>"+dates+"</td>" + "<td>" + result[i].companyname+"</td>"+
    "<td>"+ result[i].ownername+"</td>" +
      "<td>"+ result[i].year+"</td>" +
      "<td>"+result[i].email+"</td>" +
      "<td>"+result[i].mobile+"</td>" +
      "<td>"+ result[i].username+"</td>" +
      "<td>06</td>" +
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
            width: 85%;
          }
          .caltext {
            padding-left : 110px;
          }
          
          th {
            border: 1px solid #000000;
            text-align: center;
            padding: 20px;
            background-color: #ffffff;
          }
          td {
            border: 1px solid #000000;
            text-align: center;
            padding: 15px;
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
     
    <h1 align="center">SELLERS REPORT</h1>
    <h1 align="center">NEWLY ADDED SELLERS FOR THE GIVEN MONTH</h1>
    <h2 align="left">MONTH : </h2>
    <br></br>
    
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
      <th>ACTIVE TIME PERIOD</th>
      </tr>
     </thead>
     <tbody>
      ${tabledata}
    </tbody>
    </table>
    <br/>
    <h3>Total number of sellers accepted on this month : ${newNoSellers}</h3>
    
    <h3>Maximum number of sellers were accepted on : </h3>
         
     
    </body>
    <footer>
        <hr>
        <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
    </footer>
    </html>
      `;
};
