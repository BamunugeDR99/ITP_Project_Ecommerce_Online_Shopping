import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Css/AddDiscount.css';


import swal from "sweetalert2";



function UpdateDiscount(props) {

    const [item, setItem] = useState([]);
    let [DiscountPrecentage, setDiscount] = useState("");
    let [FinalPrice, setFinalPrice] = useState("");
    
    let [image, setImageE] = useState("");
    const [disalert, setAlert] = useState("");


    useEffect(() => {

        function getOne() {

            const objectId = props.match.params.id; 
            console.log(objectId);
            axios.get("https://tech-scope-online.herokuapp.com/items/get/" + objectId).then((res) => {

                console.log(res.data);
                setItem(res.data);
                console.log(res.data.Images);
                setImageE(res.data.Images[0]);
                console.log(image);
                setFinalPrice(res.data.FinalPrice);
                setDiscount(res.data.DiscountPrecentage);

            

            }).catch((err) => {
                alert(err.message);
            })
        }

        getOne();
    }, [])




     //const img = require(`../Images/${image}`);
     //console.log(img);

    //Function to send data to backend
    function UpdateData(e) {

        e.preventDefault();


        
        if (DiscountPrecentage <= 0 || DiscountPrecentage >= 80) {


            //setAlert("Discount should be with in a range of minimum 1% & maximum 80%") ;
            swal.fire("Alert", "Discount should be with in a range of minimum 1% & maximum 80%", "warning");

        }

        else{

            let DiscountStatus = true;

            const itemID = props.match.params.id;
            setFinalPrice(FinalPrice);
            //Creating a js object
            const newDiscountedItem = {
    
                DiscountStatus,
                FinalPrice,
                DiscountPrecentage
                
            }
    
            console.log(newDiscountedItem);
            console.log(itemID);
    
            //Use axios to send the newDiscountedItem to the backend //.post() -->1st para --> Backend URL
            axios.put("https://tech-scope-online.herokuapp.com/items/updateDiscount/" + itemID, newDiscountedItem).then(() => {
    
                //alert("Discount Updated");
    
                
                swal.fire("Success", "Discount Updated", "success");
    
                props.history.push("/Seller/MyDiscountedItems");
            }).catch((err) => {
    
                alert(err);
            })


        }
     
       
    }

// calculate discount function

    
    function CalcDiscount(e){

        setDiscount(e.target.value);


        let dis = document.getElementById("discountPercentage").value;

        if (dis <= 0 || dis >= 80) {


            setAlert("Discount should be with in a range of minimum 1% & maximum 80%");

        }

        else {
            setAlert("");
        }
        console.log(dis);
        let finalP = Number(item.Price) - (Number(item.Price) * (Number(dis) / 100));

        console.log(finalP);

        document.getElementById("newPrice").value = finalP;

        setFinalPrice(finalP);


        

    }


    function RevokeDiscount(e) {

        e.preventDefault();
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Revoke the discount!'
        }).then((result) => {
            if (result.isConfirmed) {
                
            
                const itemID = props.match.params.id;
                let DiscountStatus = false;
                setDiscount("0");
                setFinalPrice(item.Price)
        
                FinalPrice = item.Price;
                DiscountPrecentage = "0";
                //Creating a js object
                const revokedDiscountedItem = {
        
                    DiscountStatus,
                    FinalPrice,
                    DiscountPrecentage
                    
                }
        
                console.log(revokedDiscountedItem);
                console.log(itemID);
        
                //Use axios to send the newDiscountedItem to the backend //.post() -->1st para --> Backend URL
                axios.put("https://tech-scope-online.herokuapp.com/items/updateDiscount/" + itemID, revokedDiscountedItem).then(() => {
        
                    //alert(" Discount Revoked");
        
                    swal.fire("Success", "Discount Revoked", "success");
        
                    props.history.push("/Seller/MyDiscountedItems");
                }).catch((err) => {
        
                    alert(err);
                })
        

            }
        })




















        
    }



    
   

    return (

        <div className="OffersnPacks2">


            <h1>Update Discount Form</h1>


            <form>

                <div className="container rounded bg-white mt-5 mb-5 cont">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            {/* <p>{item.Images[0]}</p> */}
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="img-rounded mt-5" src={"/Images/" + image} width="250px" height="250px" alt="gg"/><span className="font-weight-bold">{item.Item_name}</span><span className="text-black-50"> </span></div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="text-right">Update Discounts of products</h3>
                                </div>
                                <div className="row mt-2">
                                    <div className=" col-md-6"><label className="labels">Item Name</label><p> {item.Item_name} </p></div>
                                    <div className="col-md-6"><label className="labels">Model</label><p>{item.Model}  </p></div>

                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels ">Brand </label><p> {item.Brand}</p></div>

                                    <div className="col-md-6"><label className="labels">Category</label><p> {item.Category} </p></div>

                                    <div className="col-md-6"><label className="labels">Description </label><p>{item.Description} </p></div>
                                    <div className="col-md-6"><label className="labels">Specification</label><p>{item.Specification}</p></div>
                                </div>


                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 py-5">
                                <div className="d-flex flex-row  align-items-left experience  mt-3"><span className="label1">Update Discount</span></div><br />
                                <div className=" col-md-12"><label className="labels">Current Price</label><p>Rs.{item.Price}.00</p></div>

                                <div className="col-md-12"><label className="labels">Discount Percentage</label><input type="text" name="discountPercentage" id="discountPercentage" className="form-control" placeholder="" Value= {item.DiscountPrecentage}

                                     onChange={CalcDiscount}


                                /> </div> <br />

                            <p id="discountValidation" style={{ color: 'red' }}>{disalert}</p>

                                <div className="col-md-12"><label className="labels" style = {{textAlign:'left'}}>New Price</label><input type="text" name="newPrice" id="newPrice" className="form-control" placeholder="" Value={item.FinalPrice} readOnly = {true} />

                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick = {UpdateData}>Update Discount</button></div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick = {RevokeDiscount}>Revoke Discount</button></div>

                            </div>
                        </div>
                    </div>


                </div>
            </form>
        </div>





    );


}

export default UpdateDiscount;