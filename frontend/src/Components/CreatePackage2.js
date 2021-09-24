import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Css/AddDiscount.css';
import swal from "sweetalert2";


export default function CreatePackage2(props) {


    //console.log(props.location.state);
    let seller = localStorage.getItem("SellerID");
    let content = props.location.state;
    //console.log(content);
    // content.map((item) => {

    //     console.log(item);
    // })
    let packageName = sessionStorage.getItem("packageName");

    let [pricevalidation, setPval] = useState("");
    let [startDatevalidation, setstartDateVal] = useState("");
    let [endDatevalidation, setendDateVal] = useState("");
    let [descriptionValidation,setDesVal ] = useState("");
    let [imagesValidation,setImgVal ] = useState("");



    const [price, setPrice] = useState("");
    let description = "";
    let startDate = "";
    let endDate = "";
    let image = "";

    function getsDetails() {
        startDate = document.getElementById("sDate").value;
        endDate = document.getElementById("eDate").value;
        image = document.getElementById("img").value.substring(12);
        description = document.getElementById("des").value;

    }


    function submitData() {
        getsDetails();
        // console.log(packageName);
        // console.log(price);
        // console.log(description);
        // console.log(seller);
        // console.log(startDate);
        // console.log(endDate);
        // console.log(userImage);
        // console.log(content);

        let packageAvailability = true;

        const newPackage = {

            packageName,
            seller,
            description,
            price,
            startDate,
            endDate,
            image,
            content,
            packageAvailability

        }


        console.log(description.length);

        if(description.length === 0){

            setDesVal("Description is required !");
        }

        else if(price.length === 0){

            setPval("Price is required !!!");
        }

        else if(Number(price) <= 0 || Number(price) > 2000000 ){
            setPval("Invalid Price !!!")
        }

        else if(startDate.length === 0){

            setstartDateVal("Start Date Required !");
        }

        
        else if(endDate.length === 0){

            setendDateVal("End Date Required !");
        }

        else if(image.length === 0){

            setImgVal("Image Required!");
        }


        else{


            console.log(newPackage);

            axios.post("http://localhost:8070/Packages/addPackage", newPackage).then(() => {
    
    
                swal.fire("Success", "Package Added Successfully", "success");
                //alert("Package Added");
    
                sessionStorage.clear();
    
                props.history.push("/Seller/MyPackages")
            }).catch((err) => {
    
                alert(err);
            })

        }

       

       
    }


    return (


        <div className="OffersnPacks2">
            <div class="container rounded bg-white mt-5 mb-5 cont">
                <br/>
                <center><h4>Just One More Step...</h4></center>


                <form>
                    <div class="row">


                        <div class="col-md-6 border-right ">

                            <div class="p-3 py-5 ml-2">

                                <div class="row mt-2">
                                    <div ><label class="labels" style={{ fontSize: '20px' }}>Package Detalis</label></div>


                                </div>
                                <div class="row mt-2">
                                    <div ><label class="labels">Name</label>
                                        <p> {packageName} </p></div>

                                </div>
                                <div class="row mt-2">
                                    <label class="labels">Content</label><table class="table table-bordered table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">Item Model</th>
                                                <th scope="col">Item Name</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                content.map((item) => {

                                                    //console.log(item);


                                                    return (




                                                        <tr>

                                                            <td>{item.Model}</td>
                                                            <td>{item.Item_name}</td>

                                                        </tr>


                                                    )



                                                })}



                                        </tbody>
                                    </table>



                                </div>

                                <div class="row mt-2"><label class="labels">Special Price</label><input type="number" class="form-control" placeholder=""    required

                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                        if(e.target.value.length > 0){

                                            setPval("");
                                        }

                                    }} /></div>

                                <label id = "PriceWarning" style={{ color: 'red', fontSize:'20px' }}>{pricevalidation}</label><br/>     
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="p-3 py-5">
                                <br /><br />
                                <div class="col-md-12"><label class="labels">Description</label><textarea class="form-control" aria-label="With textarea" id="des"    required
                                
                                onChange={(e) => {
                                     
                                    if(e.target.value.length > 0){

                                        setDesVal("");
                                    }}}
                                
                                ></textarea></div> <br />
                                <label id = "descriptionWarning" style={{ color: 'red', fontSize:'20px' }}>{descriptionValidation}</label><br/>   

                                <div class="row mt-2 ml-3"><label class="labels">Duration</label></div>
                                <div class="row mt-2 ml-3">
                                    <div class="col-md-6"><label class="labels">Start Date</label>
                                        <input type="date" class="form-control" placeholder="" id="sDate"    required
                                        
                                        
                                        onChange={(e) => {
                                     
                                            if(e.target.value.length > 0){
        
                                                setstartDateVal("");
                                            }}}
                                        
                                        
                                        
                                        
                                        
                                        /></div>
                                        <label id = "StartDateValidation" style={{ color: 'red', fontSize:'20px' }}>{startDatevalidation}</label><br/>   
                                    <div class="col-md-6"><label class="labels">End Date</label>
                                        <input type="date" class="form-control" placeholder="" id="eDate"    required
                                        
                                        onChange={(e) => {
                                     
                                            if(e.target.value.length > 0){
        
                                                setendDateVal("");
                                            }}}
                                        
                                        
                                        /></div><br />
                                        <label id = "EndDateValidation" style={{ color: 'red', fontSize:'20px' }}>{endDatevalidation}</label><br/>   
                                </div>
                                <div class="row mt-2 ml-3"><label class="labels">Images</label><input type="file" class="form-control" placeholder="" id="img"    required 
                                
                                
                                 
                                onChange={(e) => {
                                     
                                    if(e.target.value.length > 0){

                                        setImgVal("");
                                    }}}
                                
                                
                                /></div>
                                <label id = "ImageWarning" style={{ color: 'red', fontSize:'20px' }}>{imagesValidation}</label><br/>   
                                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={submitData}>Create Package</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >


        </div>

            )
}