import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';


;



export default function AllDiscountedItems(props) {


    const [items, setItems] = useState([]); //Defines that items is an array
    let fitems = [];
    const [ratings, setRatings] = useState([]);
    //const [loads, setLoad] = useState(false);
    //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
    useEffect(() => {

        //function to getItems
        function getItems() {

          let seller = localStorage.getItem("SellerID");

            
            //call a backend URL using axios
            axios.get("https://tech-scope-online.herokuapp.com/items/getItems").then((res) => {

                console.log(res.data);
                setItems(res.data.filter((item) => item.DiscountStatus === true && item.SellerID === seller));

                fitems = items;
                console.log(fitems);






            }).catch((err) => {
                alert(err.message);
            })

        }


        function displayRating(){
            axios
            .get("https://tech-scope-online.herokuapp.com/review/get")
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
        displayStatus();
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
      

      function displayStatus(){
        for(let i = 0; i < items.length; i++){
    
          if(items[i].ItemAvailabilityStatus === true){
            document.getElementById(i+'x').checked = true;
            document.getElementById(i).innerHTML = "Item Available";
            document.getElementById(i).style.color = "#A4DE02";
    
          }else if(items[i].ItemAvailabilityStatus === false){
            document.getElementById(i+'x').checked = false;
            document.getElementById(i).innerHTML = "Item Out of Stock";
            document.getElementById(i).style.color = "#FF0000";
          }
        }
          
      }
    


      function statusChange(id,index){

        console.log(id);
        console.log(index);
    
        if(document.getElementById(index+'x').checked === false){
    
          axios
          .get("https://tech-scope-online.herokuapp.com/items/get/" + id)
          .then((res) => {
            
            
              //let data = res.data;
              res.data.ItemAvailabilityStatus = false;
              console.log(res.data);
          axios
          .put("https://tech-scope-online.herokuapp.com/items/update/" + id, res.data)
          .then(() => {
            
          document.getElementById(index).innerHTML = "Item Out of stock";
          document.getElementById(index).style.color = "#FF0000";
      
      
          })
          .catch((err) => {
            alert(err);
           
          });
      
      
            
          })
          .catch((err) => {
            alert(err);
          });
        }else if(document.getElementById(index+'x').checked === true){
    
          axios
          .get("https://tech-scope-online.herokuapp.com/items/get/" + id)
          .then((res) => {
            
            
              //let data = res.data;
              res.data.ItemAvailabilityStatus = true;
              console.log(res.data);
          axios
          .put("https://tech-scope-online.herokuapp.com/items/update/" + id, res.data)
          .then(() => {
            
          document.getElementById(index).innerHTML = "Item Available";
          document.getElementById(index).style.color = "#A4DE02";
      
      
          })
          .catch((err) => {
            alert(err);
           
          });
      
      
            
          })
          .catch((err) => {
            alert(err);
          });
    
        }
      
      }








    function update(id) {
        console.log(id);
        props.history.push("/Seller/UpdateDiscount/" + id);
    };



    //search
    function filterContent(data, userSearch) {

        let result = data.filter((post) =>
            post.Item_name.toLowerCase().includes(userSearch.toLowerCase()) && post.DiscountStatus === true

        );

        console.log(result);

        setItems(result);

        if (result !== null) {
            //setLoad(false);
            //document.getElementById("txt2").innerHTML = "";
        }

        if (result.length === 0) {
            //alert("d");
            //setLoad(true);
            //document.getElementById("txt2").innerHTML = "No Result Found!";
        }
    }

    // search
    function handleSearch(e) {
        let userSearch = e;
        console.log(userSearch);


        axios
            .get("https://tech-scope-online.herokuapp.com/items/getItems")
            .then((res) => {

              let seller = localStorage.getItem("SellerID");

            let filteredData = res.data.filter((item) => item.DiscountStatus === true && item.SellerID === seller)

                filterContent(filteredData, userSearch);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }




    function goToPackages(){

      props.history.push("/Seller/MyPackages")
    }

    
    function goToDisItems(){

      props.history.push("/Seller/MyDiscountedItems")
    }





    








    return (

        <div className="OffersnPacks">
          <br/><br/><br/>
          <button type="button" class="btn btn-primary " style={{float:'right'} } id="GPackageBtn" onClick={goToPackages}>Promo Packages</button>
          <button type="button" class="btn btn-primary " style={{float:'right'}}id="GDisItemsBtn" onClick={goToDisItems}>Discounted Items</button>
            <center>
           <h1 style={{color:'black', justifyContent:'center', marginLeft:'18rem'}}>All Discounted Items</h1> <br />
           </center>
            <div className="container">
                <div>

               

                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search Item By Name"
                        aria-label="Search"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <br></br>

                   

                    <div className="row">
                        {items.map((item, index) => {
                            return (


                                <div className="col-sm-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="container-fluid" style={{ padding: '0px' }}>
                                            <img className="img-responsive center-block header1" src={"/Images/" + item.Images[0]} width="286px" height="250px" alt="gg"/>
                                            <div className="innertag" id = "disPercentage" ><label className="innertag" id = "disPercentage" ><b >-{item.DiscountPrecentage}%</b></label></div>
                                        </div>
                                        <div className="card-body">
                                            <div className="cardText">

                                                <p><b>{item.Item_name}</b></p>
                                                <div id = {index +'stars'} class="card-text">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span><span> </span> <span id = {index +'review'}>4.0 / 5.0</span>
                      </div>




                                                <p><b>Rs.</b>{item.FinalPrice}.00</p>
                                                <p className="iPrice" style={{ padding: '0px' }}> Rs.{item.Price}.00</p>
                                               
                                            </div>


                                            <center>
                      <h6>Item Availability Status</h6>
                      <label class="switch">
                        <input type="checkbox" id ={index + "x"}  onChange = {() => statusChange(item._id,index)}/>
                        <span class="slider round"></span>
                      </label>
                      <h6 id ={index}></h6>
                    </center>





                                            <a href="#" className="btn btn-primary" onClick={() => update(item._id)}>Edit Discount</a>

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