import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Css/AddDiscount.css';

import swal from "sweetalert2";

export default function UpdatePackages(props) {


    const [package1, setPackage] = useState([]);
    const [packageName, setPname] = useState("");
    const [seller, setSeller] = useState("");
    const [price, setPrice] = useState("");
    const [content, setContent] = useState([]);
    const [content2, setContent2] = useState([]);

    const [sdate, setSdate] = useState("");
    const [edate, setEdate] = useState("");
    const [currImage, setCurrImage] = useState("");
  
    let [packageNameValidation, setPnameVal] = useState("");
    let [pricevalidation, setPval] = useState("");
    let [startDatevalidation, setstartDateVal] = useState("");
    let [endDatevalidation, setendDateVal] = useState("");
    let [descriptionValidation,setDesVal ] = useState("");
    let [imagesValidation,setImgVal ] = useState("");



    let [description, setDes] = useState("");
    let startDate = "";
    let endDate = "";
    let image = "";

    useEffect(() => {

        function getOnePackage() {


            const packageId = props.match.params.id;
            console.log(packageId);

            // const packageId = props.match.params.id; 
            // console.log(packageId);

            axios.get("http://localhost:8070/Packages/getPackage/" + packageId).then((res) => {

                console.log(res.data);
                setPackage(res.data);
                setPname(res.data.packageName);
                setSeller(res.data.seller);
                setPrice(res.data.price);
                setContent(res.data.content);
                setContent2(res.data.content);
                setCurrImage(res.data.image);

                startDate = res.data.startDate;
                endDate = res.data.endDate;
                setEdate(String(endDate.substr(0, 10)));
                setSdate(String(startDate.substr(0, 10)));


                image = res.data.image;

                setDes(res.data.description);



            }).catch((err) => {
                console.log(err);
            })

        }

        getOnePackage();

    }, [])


    function deleteRow(id) {

        //document.getElementById("myTable").deleteRow(r);
        // e.preventDefault();
        //console.log(r);
        // alert({r});

        const remainingPacks = content.filter(
            (pack) => pack._id !== id
        );

        console.log(remainingPacks);

        setContent(remainingPacks);
    }

    function deletePackage() {
                swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                        const packageId = props.match.params.id;
                         console.log(packageId);
    
                    axios
                        .delete("http://localhost:8070/Packages/deletePackage/" + packageId)
                        .then((res) => {
    
                          
                            swal.fire("Success", "Package Deleted Successfully", "success");
                            props.history.push("/Seller/MyPackages");
    
                        }).catch((err) => {
    
                            console.log(err);
                        })
    
    
                }
            })



















    }


    function updatePackage() {

        const packageId = props.match.params.id;
        console.log(packageId);


        getsDetails();

        if (content.length === 0) {

            swal.fire("Alert", "Cannot Delete All Items From a Package", "error");
            //alert("Cannot Delete All Items From a Package");
            //window.location.reload(true);
            setContent(content2);
        }

        else {

            const updatedPackage = {

                packageName,
                seller,
                description,
                price,
                startDate,
                endDate,
                image,
                content

            }

        console.log(packageName.length);
        console.log(description.length);
        console.log(price.length);

         if(packageName.length === 0){
                setPnameVal("Package Name is required !");
        }
                
        else if(description.length === 0){

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

            setstartDateVal("End Date Required !");
        }

        else if(image.length === 0){

            setImgVal("Image Required!");
        }

        else{


            console.log(updatedPackage);


            axios.put("http://localhost:8070/Packages/updatePackages/" + packageId, updatedPackage).then(() => {

                //alert("Package Updated");
                swal.fire("Success", "Package Updated Successfully", "success");
                props.history.push("/Seller/MyPackages");
            }).catch((err) => {

                alert(err);
            })



        }

           

        }
    }


    function getsDetails() {
        startDate = document.getElementById("sDate").value;
        endDate = document.getElementById("eDate").value;
        image = document.getElementById("img").value.substring(12);
        description = document.getElementById("des").value;
        if (image.length === 0) {

            console.log("no Image");
            image = currImage;

            console.log(image);
        };


    }


    return (
        <div className="OffersnPacks2">
            <div className="container rounded bg-white mt-5 mb-5 cont ">

                <div>
                    <br/>
                    <center><h4>Edit Package...</h4></center>


                    <form>
                        <div className="row">
                            <div className="col-md-3 border-right">
                              
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="img-rounded mt-5" src={"/Images/" + package1.image} width="250px" height="250px" alt="gg" /><span className="font-weight-bold">{packageName}</span><span className="text-black-50">packageID : {package1._id}</span><span> </span></div>
                            </div>

                            <div className="col-md-4 border-right ">

                                <div className="p-3 py-5 ml-2">

                                    <div className="row mt-2">
                                        <div ><label className="labels" style={{ fontSize: '20px' }}>Package Detalis</label></div>


                                    </div>
                                    <div className="row mt-2">
                                        <label className="labels">Package Name</label>

                                        <input type="text" className="form-control" placeholder="" Value={package1.packageName} required

                                            onChange={(e) => {
                                                setPname(e.target.value);

                                                if(e.target.value.length === 0){

                                                    setPnameVal("Package Name is required !");
                                                }

                                                else{

                                                    setPnameVal("");
                                                }

                                            }} />

                                            <label id = "PackageNameWarning" style={{ color: 'red', fontSize:'20px' }}>{packageNameValidation}</label><br/>

                                    </div>
                                    <div className="row mt-2">
                                        <label className="labels">Content</label><table className="table table-bordered table-dark" id="myTable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Item Model</th>
                                                    <th scope="col">Item Name</th>
                                                    <th scope="col">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    content.map((item, index) => {




                                                        return (




                                                            <tr>

                                                                <td>{item.Model}</td>
                                                                <td>{item.Item_name}</td>
                                                                <td><button className="btn btn-danger" type="button" onClick={() => { deleteRow(item._id) }}>Remove</button></td>

                                                            </tr>


                                                        )



                                                    })}



                                            </tbody>
                                        </table>



                                    </div>

                                    <div className="row mt-2"><label className="labels">Special Price</label><input type="text" className="form-control" placeholder="" Value={price}  required

                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                            if(e.target.value.length > 0){

                                                setPval("");
                                            }
                                        }} /></div>

                                    <label id = "PriceWarning" style={{ color: 'red', fontSize:'20px' }}>{pricevalidation}</label><br/>
                                </div>
                            </div>


                            <div className="col-md-5">
                                <div class="p-3 py-5">
                                    <br /><br />
                                    <div class="col-md-12"><label className="labels">Description</label><textarea className="form-control ml-3" aria-label="With textarea" id="des" defaultValue={description}  required
                                    
                                    onChange={(e) => {
                                     
                                        if(e.target.value.length > 0){

                                            setDesVal("");
                                        }}}
                                    
                                    
                                    ></textarea></div> <br />
                                   
                                    <label id = "descriptionWarning" style={{ color: 'red', fontSize:'20px' }}>{descriptionValidation}</label><br/>
                                    <div className="row mt-2 ml-5"><label className="labels">Duration</label></div>
                                    <div className="row mt-2 ml-3">
                                        <div className="col-md-6"><label className="labels">Start Date</label>
                                            <input type="date" className="form-control" placeholder="" id="sDate" defaultValue={sdate} 
                                            
                                            onChange={(e) => {
                                     
                                                if(e.target.value.length > 0){
            
                                                    setstartDateVal("");
                                                }}}
                                            
                                            /></div>
                                            <label id = "StartDateValidation" style={{ color: 'red', fontSize:'20px' }}>{startDatevalidation}</label><br/>
                                        
                                        <div className="col-md-6"><label className="labels">End Date</label>
                                            <input type="date" className="form-control" placeholder="" id="eDate" defaultValue={edate} 
                                            
                                            onChange={(e) => {
                                     
                                                if(e.target.value.length > 0){
            
                                                    setendDateVal("");
                                                }}}
                    
                                            
                                            /></div><br />
                                            <label id = "EndDateValidation" style={{ color: 'red', fontSize:'20px' }}>{endDatevalidation}</label><br/>   
                                    
                                    </div>
                                    <div className="row mt-2 ml-5"><label className="labels">Images</label><input type="file" className="form-control mr-6" placeholder="" id="img" Value={image} 
                                    
                                    onChange={(e) => {
                                     
                                        if(e.target.value.length > 0){
    
                                            setImgVal("");
                                        }}}
                                    
                                    
                                    
                                    /></div>
                                    <label id = "ImageWarning" style={{ color: 'red', fontSize:'20px' }}>{imagesValidation}</label><br/>   
                                    
                                    
                                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={updatePackage} >Update Package</button><button className="btn btn-primary profile-button ml-3" type="button" onClick={deletePackage}>Delete Package</button></div>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div >

            </div>

        </div>
            )

}