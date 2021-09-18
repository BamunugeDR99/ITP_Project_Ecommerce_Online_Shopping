import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Css/AddDiscount.css';
import go from "./../images/go.jfif";
import swal from "sweetalert2";

function AddDiscount(props) {


    const [DiscountPrecentage, setDiscount] = useState("");
    const [FinalPrice, setFinalPrice] = useState("");

    const [disalert, setAlert] = useState("");

    const [item, setItem] = useState([]);

    const [image, setImage] = useState("");

    useEffect(() => {

        async function getOne() {
            try {
                const ItemId = props.match.params.id;
                const result = await (await (axios.get("http://localhost:8070/items/get/" + ItemId))).data;
                console.log(result);
                console.log(result.image);

                setItem(result);
                console.log(item);

            } catch (err) {
                console.error(err)
            }
        }

        getOne();
    }, [])


    // const img = require("../Images/" + item.image);
    // console.log(img);

    //Function to send data to backend
    function sendData(e) {

        e.preventDefault();


        if (DiscountPrecentage <= 0 || DiscountPrecentage >= 80) {


            //setAlert("Discount should be with in a range of minimum 1% & maximum 80%") ;
            swal.fire("Alert", "Discount should be with in a range of minimum 1% & maximum 80%", "warning");

        }

        else {

            let DiscountStatus = true;

            const itemID = props.match.params.id;
            //Creating a js object
            const newDiscountedItem = {

                DiscountStatus,
                FinalPrice,
                DiscountPrecentage

            }

            console.log(newDiscountedItem);
            console.log(itemID);

            //Use axios to send the newDiscountedItem to the backend //.post() -->1st para --> Backend URL
            axios.put("http://localhost:8070/items/updateDiscount/" + itemID, newDiscountedItem).then(() => {

                // alert("! Added Discount to the Item");

                swal.fire("Success", "Added Discount to the Item", "success");

                props.history.push("/alldiscounteditems");
            }).catch((err) => {

                alert(err);
            })

        }
    }


    function CalcDiscount(e) {

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


    return (

        <div className="OffersnPacks2">


            <h1>Add Discount Form</h1>


            <form onSubmit={sendData}>

                <div className="container rounded bg-white mt-5 mb-5 cont">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="img-rounded mt-5" src={go} width="250px" height="250px" /><span className="font-weight-bold">{item.Item_name}</span><span className="text-black-50">ItemId : {item._id}</span><span> </span></div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="text-right">Add Discounts to your products</h3>
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
                                <div className="d-flex flex-row  align-items-left experience  mt-3"><span className="label1">Add Discount</span></div><br />
                                <div className=" col-md-12"><label className="labels">Current Price</label><p>Rs.{item.Price}.00</p></div>

                                <div className="col-md-12"><label className="labels">Discount Percentage</label><input type="number" name="discountPercentage" id="discountPercentage" className="form-control" placeholder=""

                                    onChange={CalcDiscount}


                                    required={true} /> </div>

                                <p id="discountValidation" style={{ color: 'red' }}>{disalert}</p>
                                <br />

                                <div className="col-md-12"><label className="labels" style={{ textAlign: 'left' }}>New Price</label><input type="text" name="newPrice" id="newPrice" className="form-control" placeholder="" readOnly={true} />

                                </div>


                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Add Discount</button></div>


                            </div>
                        </div>
                    </div>


                </div>
            </form>
        </div>





    );


}

export default AddDiscount;