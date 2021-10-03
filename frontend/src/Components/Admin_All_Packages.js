import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function AdminAllPackages(props) {

    const [packages, setPackages] = useState([]);
   let SellerID;

    useEffect(() => {


        function getPackages() {

            axios.get("http://localhost:8070/Packages/getPackages").then((res) => {

                console.log(res.data);
                //let seller = localStorage.getItem("SellerID");
                SellerID = props.match.params.id;

                setPackages(res.data.filter((item) => item.SellerID === "613a2af6b31f783accd94445"));




            }).catch((err) => {
                alert(err.message);
            })

        }

        getPackages();

    }, [])




    //search
    function filterContent(data, userSearch) {

        // setPackages(res.data.filter((item) =>item.seller === seller));


        let result = data.filter((post) =>
            post.packageName.toLowerCase().includes(userSearch.toLowerCase())

        );


        if (result !== null) {
            //setLoad(false);
            //document.getElementById("txt2").innerHTML = "";

        }

        else if (result.length === 0) {
            //alert("d");
            // setLoad(true);


            //document.getElementById("txt2").innerHTML = "No Result Found!";
        }

        else {


        }

        setPackages(result);

    }

    // search
    function handleSearch(e) {
        let userSearch = e;
        console.log(userSearch);


        axios
            .get("http://localhost:8070/Packages/getPackages")
            .then((res) => {


                SellerID = props.match.params.id;
                let filteredData = res.data.filter((item) => item.seller === SellerID)

                filterContent(filteredData, userSearch);

            })
            .catch((err) => {
                alert(err);
            });
    }


    //Remove package
    function deletePackage(packageId) {


        console.log(packageId);



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                const remainingPacks = packages.filter(
                    (pack) => pack._id !== packageId
                );

                console.log(remainingPacks);

                setPackages(remainingPacks);


                axios
                    .delete("http://localhost:8070/Packages/deletePackage/" + packageId)
                    .then((res) => {

                        //alert("Package Deleted");
                        Swal.fire("Success", "Package Deleted Successfully", "success");
                        //props.history.push("/Seller/MyPackages");

                    }).catch((err) => {

                        console.log(err);
                    })


            }
        })

    }


    function gToShowMore(packageId) {

        props.history.push("/Admin/Packages/" + packageId);
    }





    console.log(packages);

   

    return (
        <div className="container">
            <br /><br />
            <input
                class="form-control"
                type="text"
                placeholder="Search Package By Name"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <br />




            <div className="d-flex justify-content-center mt-3">

                <table class="table table-bordered" style={{ width: '80rem' }}>
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Package Name</th>
                            <th scope="col">Seller ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price </th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packages.map((package1, index) => {


                            return (



                                <tr>

                                    <td>{package1.packageName}</td>
                                    <td>{package1.seller}</td>
                                    <td>{package1.description}</td>
                                    <td>{`Rs.${package1.price} .00`}</td>
                                    <td><button className="btn btn-danger" type="button" onClick={() => deletePackage(package1._id)} >Remove</button>

                                        <button className="btn btn-primary" type="button" style={{ marginLeft: '10px' }} onClick={()=>gToShowMore(package1._id)}>Show More</button>
                                    </td>

                                </tr>
                            )



                        })


                        }
                    </tbody>
                </table>



              
            </div>
            <br/><br/>
        </div>
    )


}