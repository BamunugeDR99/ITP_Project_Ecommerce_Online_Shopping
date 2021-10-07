module.exports = (objarr) => {

  

    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
          font-size:20px;
        }
        
        .table th{
            background-color: darkblue;
            color:#ffffff;
        }
        
        .table tbody tr:nth-child(even){
            background-color: #f5f5f5;
        }
        
        
    
    
    .square {
      height:20px;
      width: 200px;
      background-color: #53D0E2;
      border-radius:15px;
      font-size:20px;
      padding-top:15px;
      padding-bottom:15px;
      padding-left:30px;
        }	
            
    
    .fa {
      font-size: 25px;
    }
    
    .checked {
      color: orange;
         
    
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

<h2>Review Report</h2>

        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th>Customer Name</th>
                <th>Customer Review</th>
                <th>Ratings</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td data-label="Customer Name">Naveen</td>
                <td data-label="Review">Super</td>
                    <td data-label="Ratings">3.5</td>
                    <td data-label="Date">10/10/2021</td>
                    
            </tr>

            <tr>
            <td data-label="Customer Name">Naveen</td>
        <td data-label="Review">Super</td>
            <td data-label="Ratings">3.5</td>
            <td data-label="Date">10/10/2021</td>
            
    </tr>

    <tr>
    <td data-label="Customer Name">Naveen</td>
<td data-label="Review">Super</td>
    <td data-label="Ratings">3.5</td>
    <td data-label="Date">10/10/2021</td>
    
</tr>

<tr>
<td data-label="Customer Name">Naveen</td>
<td data-label="Review">Super</td>
<td data-label="Ratings">3.5</td>
<td data-label="Date">10/10/2021</td>

</tr>
            </tbody>  
        </table>

    <div style="width: 230px; float:left; font-size:14px; padding-left:20px; padding-top:20px; height:180px; background:#C3D8EE ;border-radius:15px; margin-left:50px; margin-top:50px">
        <div>
            <span style="font-size:18px;color:black;">Item Name &nbsp:&nbsp iPhone X</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Brand &nbsp:&nbsp Apple</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Model &nbsp:&nbsp EACX</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Quantity &nbsp:&nbsp 4</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Price &nbsp:&nbsp 4</span>
        </div>
    </div> 

        <div style="width: 30%; float:left; height:250px; background:white;color: orange; margin-left:100px; margin-top:50px">

        <span style="font-size:130%;color:black; font-style:bold">Ratings of the item</span>
        <br>
        <span style="font-size:120%;color:black;">12&nbsp</span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">19&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">15&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">03&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">04&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
    
    </div>
    
    <div style="width: 200px; float:left; height:250px; background:white; margin-left:10px; margin-top:50px">
        <div class="square">
            <span> 22 Reviews</span>
        </div>
        <br>
        <div class="square">
            <span> 30 Ratings</span>
        </div>
        <br>
        <div class="square">
            <span> 3.5 Average Ratings</span>
        </div>
    </div>  

    <table class="table">
 
    </table>


    </body>
    <footer>
        <hr>
        <h4 class = "mainFooter">2021 &copy;TechScope Ltd.</h4>
    </footer>
    </html>
      `;
  };
  