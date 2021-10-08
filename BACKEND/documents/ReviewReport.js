module.exports = (result) => {
    let itemdetails = result.pop();
  let tableData = "";

//   let a = result[i].Ratings;
//   if (a=5){
    
//   }
let totalNoRatings = 0;
let totalNoReviews = 0;
let average = 0;
let starCount = 0;
let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let rate=0;


  for (let i = 0; i < result.length; i++) {
      let dates = result[i].Date.substr(0,10);
        let rate =  parseInt(result[i].Ratings);
    tableData +=
      '<tr><td data-label="Customer Name">' +
      result[i].customerName +
      '</td>' +
      '<td data-label="Review">' +
      result[i].Review +
      '</td>' +
      '<td data-label="Ratings">' +
      result[i].Ratings +
      '</td>' +
      '<td data-label="Date">' +
      dates +
      '</td></tr>';
      rate =  parseInt(result[i].Ratings);
      totalNoRatings++;
      totalNoReviews++;
      starCount=starCount + parseInt(result[i].Ratings);


    
        if(parseInt(result[i].Ratings)==5){
            a++;
        }else if(parseInt(result[i].Ratings)==4){
            b++;
        }else if(parseInt(result[i].Ratings)==3){
            c++;
        }else if(parseInt(result[i].Ratings)==2){
            d++;
        }else if(parseInt(result[i].Ratings)==1){
            e++;
        }else{
                f++;
            }
    
  }
  average=starCount/totalNoRatings;

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
      

         ${tableData}


            </tbody>  
        </table>

    <div style="width: 230px; float:left; font-size:14px; padding-left:20px; padding-top:20px; height:180px; background:#C3D8EE ;border-radius:15px; margin-left:50px; margin-top:50px">
        <div>
            <span style="font-size:18px;color:black;">Item Name &nbsp:&nbsp ${itemdetails.Item_name}</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Brand &nbsp:&nbsp ${itemdetails.Brand}</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Model &nbsp:&nbsp ${itemdetails.Model}</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Quantity &nbsp:&nbsp ${itemdetails.Quantity}</span>
        </div>
        <br>
        <div>
            <span style="font-size:18px;color:black;">Item Price &nbsp:&nbsp ${itemdetails.Price}</span>
        </div>
    </div> 

        <div style="width: 30%; float:left; height:250px; background:white;color: orange; margin-left:100px; margin-top:50px">

        <span style="font-size:130%;color:black; font-style:bold">Ratings of the item</span>
        <br>
        <span style="font-size:120%;color:black;">${a}&nbsp</span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">${b}&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">${c}&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">${d}&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
        <br>
        <span style="font-size:120%;color:black;">${e}&nbsp </span>
        <span style="font-size:200%;color:yellow;" class="fa fa-star checked"></span>
    
    </div>
    
    <div style="width: 200px; float:left; height:250px; background:white; margin-left:10px; margin-top:50px">
        <div class="square">
            <span>${totalNoReviews} Reviews</span>
        </div>
        <br>
        <div class="square">
            <span>${starCount}&nbspRatings</span>
        </div>
        <br>
        <div class="square">
            <span> ${average}&nbspAverage Ratings</span>
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
