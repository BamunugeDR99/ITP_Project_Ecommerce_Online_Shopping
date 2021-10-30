import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered
import swal from "sweetalert2";
import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';

//import CreatePackage2 from "./CreatePackage2";




export default function CreatePackage1(props) {


    const [items, setItems] = useState([]); //Defines that items is an array
    const [packageName, setPname] = useState("");
    let ContentN = [];
    const [ratings, setRatings] = useState([]);
    let [packageNameValidation, setPnameVal] = useState("");
    

    //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
    useEffect(() => {

        //function to getItems
        function getItems() {
            //call a backend URL using axios
            sessionStorage.clear();

            axios.get("http://localhost:8070/items/getItems").then((res) => {

                let seller = localStorage.getItem("SellerID");

                setItems(res.data.filter((item) =>item.SellerID === seller));


                console.log(items);





            }).catch((err) => {
                alert(err.message);
            })

        }


        function displayRating(){
            axios
            .get("http://localhost:8070/review/get")
            .then((res) => {
              setRatings(res.data);
              //console.log(ratings[0].itemid)
              console.log(res.data);
            })
            .catch((err) => {
              alert(err);
            });
          }


        
          displayRating();




        getItems();



    }, [])



    
    useEffect(() => {
    
        calculateStarRating();
        
      })



      function calculateStarRating(){
        let totalNoRatings = 0;
        let totalstarforRatingCount = 0;
        let starCount = 0;
        let average = 0; 
        for(let i = 0; i < items.length; i++){
          
          totalNoRatings = 0;
          totalstarforRatingCount = 0;
          starCount = 0;
          average = 0;
        
          for(let j = 0; j < ratings.length; j++){
              if(items[i]._id === ratings[j].itemid){
                totalNoRatings++;
              }
      
              if(items[i]._id === ratings[j].itemid){
                starCount += parseInt(ratings[j].noofstars);  
              }
      
          }
      
          totalstarforRatingCount = totalNoRatings * 5;
          average = parseInt((starCount / totalstarforRatingCount) * 5);
          console.log(average);
          displayStarRating(i,average);
      
        }
      
      }
      
      
      function displayStarRating(id,totalAverage){
        let txt = "";
          if(isNaN(totalAverage)){
            txt = "No Ratings yet!";
            document.getElementById(id +'stars').innerHTML = txt;
            document.getElementById(id +'stars').style.color = "#FF0000";
          }else{
          
          for(let j = 0; j < totalAverage; j++){
            txt += '<span class="fa fa-star checked"></span>';
          }
          for(let j = 0; j < (5 - totalAverage); j++){
            txt += '<span class="fa fa-star"></span>';
          }
         
      
          document.getElementById(id +'stars').innerHTML = txt +'  '+ totalAverage + '.0 / 5.0';
         }
      }
      




    function add2Pac( item) {


        console.log(ContentN)
        console.log(item);
        ContentN.push(item);
        console.log(ContentN);


    };

    function sendData(e) {

        e.preventDefault();


        
        console.log(ContentN);

        let packName = document.getElementById("packname").value;
        console.log(packName);
        
        if(ContentN.length === 0){

            swal.fire("Alert", "Cannot Create a Package Without Items", "warning");
            //alert("Cannot Create a package Without Items");
            //window.location.reload(true);

        }

        else if(packName.length === 0){

            //setPnameVal("Cannot create a Package without a Name!!")
            swal.fire("Alert", "Cannot Create a Package Without a Name", "warning");

        }

        else{

         setPnameVal("");   
        sessionStorage.setItem("packageName", packName);
        sessionStorage.setItem("Content", ContentN);


        props.history.push( {pathname: "/Seller/CreatePackageForm",
        state: ContentN });
        }



    }


    console.log(items);

    return (
        <div className= "OffersnPacks">
            <br/>
            <div className="container">

                <div>
                    <h1>Create a Promo Package</h1> <br />

                    <form >
                        <center>
                            <div class="input-group mb-4" style={{ width: '50rem' }}>

                                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required pattern = "^[a-zA-Z_.-]*$" id= "packname"

                                    onChange={(e) => {

                                        e.preventDefault();
                                        // setPname(e.target.value);

                                        // if(e.target.value.length === 0){

                                        //     setPnameVal("Cannot create a Package without a Name!!");

                                        // }

                                        // else{

                                        //     setPnameVal("");
                                        // }


                                    }}

                                 
                                />
                               
                                <button type="button" class="btn btn-primary ml-2" onClick={sendData}>Create Package</button>
                            </div>
                            <label id = "PackageNameWarning" style={{ color: 'red', fontSize:'20px' }}>{packageNameValidation}</label><br/> <br/>
                        </center>
                        
                               
                    </form>

                    <div className="row">
                        {items.map((item, index) => {
                            return (


                                <div className="col-sm-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="container-fluid" style={{ padding: '0px' }}>
                                            <img className="img-responsive center-block header1" src={"/Images/" + item.Images[0]} width="286px" height="250px" alt="gg"/>
                                            {/* <div className='inner'><label><b>-{item.discountPercentage}%</b></label></div> */}
                                        </div>
                                        <div className="card-body">
                                            <div className="cardText">
                                                <p><b>{item.Item_name}</b></p>
                                                <p><b>{`${item.Model}`}</b></p>
                                                <p  style={{ padding: '0px' }}> Rs.{item.Price}.00</p>
                                               

                                                <div id = {index +'stars'} class="card-text">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span><span> </span> <span id = {index +'review'}>4.0 / 5.0</span>
                      </div>

                                            </div>
                                            <button type= "button" className="btn btn-primary" onClick={(e) => { add2Pac(item) }}>Add to Package</button>

                                        </div>
                                    </div>
                                    <br></br>
                                </div>




                            )




                        })}

                    </div>
                </div>
               

            </div>
        </div>

            )
}