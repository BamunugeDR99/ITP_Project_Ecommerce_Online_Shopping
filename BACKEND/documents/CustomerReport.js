module.exports = (content) => {

//     let tableData;
//   for(let i = 0 ; i < content.length; i++){
//         tableData += '<tr>'
//  +   }

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
          font-size:10px;
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
     
    <!-- your code -->

	<table class="table">
     <thead class="thead-dark">
     	<tr>
		 <th>Added</th>
     	 <th>First Name</th>
		 <th>Last Name</th>
		 <th>Username</th>
		 <th>Email</th>
     	 <th>Gender</th>
         <th>Phone</th>
		 <th>Address</th>
     	</tr>
     </thead>
     <tbody>
     	  <tr>
			  <td data-label="added">25/10/2021</td>
     	  	  <td data-label="First Name">Naveen</td>
			   <td data-label="Last Name">Anushka</td>
     	  	  <td data-label="Username">NaveenAnushka19</td>
     	  	  <td data-label="Email">naveenanushka99@gmail.com</td>
			  <td data-label="Geder">Male</td>
			  <td data-label="Phone">0765521456</td>
			  <td data-label="Address">No,65/A,Galle Road,Kalutara North</td>
     	  	  
     	  </tr>

     

		 </tbody>  
  </table>
  <br>
  
  <h3>Total New Customers: 10</h3>
  <h3>Active Time Period: 2 Days</h3>
  <h3>Maximum Number of Customers Added Month: January </h3>
  <h3>Percentage: 20%</h3>
         
     
    </body>
    <footer>
        <hr>
        <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
    </footer>
    </html>
      `;
  };
  