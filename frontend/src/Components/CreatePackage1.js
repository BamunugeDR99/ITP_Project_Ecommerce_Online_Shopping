import React, { useState, useEffect } from "react";  //useEffect is used to get the array which is returned by the backend to the component
//Decide what content should be displayed when the component is rendered

import axios from "axios"; //To get the data from the DB
import '../Css/AllItems.css';
import go from "./../images/go.jfif";
//import CreatePackage2 from "./CreatePackage2";




export default function CreatePackage1(props) {


    const [items, setItems] = useState([]); //Defines that items is an array
    const [packageName, setPname] = useState("");
    const [ContentN, setContentN] = useState([]);
    const [ButtonCheck, setBtnCheck] = useState(false);
    const [ButtonCheck2, setBtnCheck2] = useState(false);


    //Implementing useEffect() --> accepts 2 parameters -->1) Callback function, 2) Additional options as an array
    useEffect(() => {

        //function to getItems
        function getItems() {
            //call a backend URL using axios
            axios.get("http://localhost:8070/items/getItems").then((res) => {

                setItems(res.data);


                console.log(items);





            }).catch((err) => {
                alert(err.message);
            })

        }





        getItems();



    }, [])




    function add2Pac(item) {


        ContentN.push(item);
        console.log(ContentN);


    };

    function sendData(e) {

        e.preventDefault();
        alert("Insert");

        console.log(packageName);
        console.log(ContentN);
        setBtnCheck(true);
        setBtnCheck2(true);
        sessionStorage.setItem("packageName", packageName);
        sessionStorage.setItem("Content", ContentN);


        props.history.push( {pathname: "/createPackage2",
        state: ContentN });



    }



    return (
        <div className= "OffersnPacks">
            <div className="container">

                <div>
                    <h1>Create a Promo Package</h1> <br />

                    <form >
                        <center>
                            <div class="input-group mb-4" style={{ width: '50rem' }}>

                                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"

                                    onChange={(e) => {
                                        setPname(e.target.value);
                                    }}


                                />
                                <button type="button" class="btn btn-primary ml-2" onClick={sendData}>Create Package</button>
                            </div>
                        </center>
                    </form>

                    <div className="row">
                        {items.map((item) => {
                            return (


                                <div className="col-sm-4">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="container-fluid" style={{ padding: '0px' }}>
                                            <img className="img-responsive center-block header1" src={go} width="286px" height="250px" />
                                            {/* <div className='inner'><label><b>-{item.discountPercentage}%</b></label></div> */}
                                        </div>
                                        <div className="card-body">
                                            <div className="cardText">
                                                <p><b>{item.Item_name}</b></p>
                                                <p><b>{`${item.Model}`}</b></p>
                                                <p  style={{ padding: '0px' }}> Rs.{item.Price}.00</p>
                                                <p>Rating</p>
                                            </div>
                                            <a href="#" className="btn btn-primary" onClick={(e) => { add2Pac(item) }}>Add to Package</a>

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