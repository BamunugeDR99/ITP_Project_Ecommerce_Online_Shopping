import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllAdmins(props){

const [admins, setAdmins] = useState([]);

useEffect(()=> {

    function getAdmins(){

        axios.get("https://tech-scope-online.herokuapp.com/Admin/getAllAdmins").then((res) => {

            
          console.log(res.data);
          setAdmins(res.data);


        }).catch((err) => {
            alert(err.message);
        })



    }


    getAdmins();

},[])


function filterContent(data, userSearch) {

    // setPackages(res.data.filter((item) =>item.seller === seller));


    let result = data.filter((post) =>
        post.firstName.toLowerCase().includes(userSearch.toLowerCase()) || post.lastName.toLowerCase().includes(userSearch.toLowerCase())

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

    setAdmins(result);

}

// search
function handleSearch(e) {
    let userSearch = e;
    console.log(userSearch);


    axios
        .get("https://tech-scope-online.herokuapp.com/Admin/getAllAdmins")
        .then((res) => {


            filterContent(res.data, userSearch);

        })
        .catch((err) => {
            alert(err);
        });
}

return(

    <div className ="container">

<br /><br />
<button style = {{float: "right"}}type="button" class="btn btn-success"onClick = {() => {props.history.push("/Admin/AddAdmin")}}>create an admin</button><br/><br/>

            <input
                class="form-control"
                type="text"
                placeholder="Search Admin By Name"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <br />




            <div className="d-flex justify-content-center mt-3">

                <table class="table table-bordered" style={{ width: '80rem' }}>
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admins, index) => {


                            return (



                                <tr>

                                    <td>{admins.firstName}</td>
                                    <td>{admins.lastName}</td>
                                    <td>{admins.username}</td>
                                    <td>{admins.email}</td>
                                   
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
