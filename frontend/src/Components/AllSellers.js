import axios from "axios";
import React, {useState,useEffect} from "react";
//import {ClipLoader} from "react-spinners";


export default function AllRequests(props){
    const [sellers,setsellers] = useState([]);
    const [loads,setLoad] = useState(false);
    const [data,setData] = useState();
    let username = "";
    let password = "";
    
    useEffect(() =>{
        function getsellers(){
            axios.get("http://localhost:8070/seller/get").then((res) =>
            {
                setsellers(res.data);
                console.log(res.data);
                // hello
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getsellers();
       
    }, []);

    function deleteSeller(id){
        axios.delete("http://localhost:8070/seller/delete/" + id).then((res) =>
        {
            document.getElementById("txt").innerHTML = "Seller Deleted Successfully!";
            const afterDeleteSeller = sellers.filter(seller=>seller._id != id);
            setsellers(afterDeleteSeller);
        }).catch((err) =>{
            alert(err);
        })
    }

    async function confirmRequest(id){
        //e.preventDefault();
        let flag = 0;
        axios.get("http://localhost:8070/seller/get/" + id).then((res) =>
        {
           setData(res.data);
           //console.log(res.data);

            password = passwordGenerator(25);
            // console.log(username);
            console.log(password);
// if same usename came
            //  while(flag == 0){
            username = usernameGenerator(data.companyname);
            axios.get("http://localhost:8070/orgseller/getUsername/"+username).then((res) =>
            {
                console.log(res.data);

           
              // what if
            }).catch((err) =>{
              alert(err);
            })

             const newSeller = {
                ownername : data.ownername, 
                mobile : data.mobile,
                companyname : data.companyname,
                address : data.address,
                year : data.year,
                email : data.email,
                description : data.description,
                logo : data.logo,
                username,
                password,
             }

            console.log(newSeller);

            axios.post("http://localhost:8070/orgseller/add",newSeller).then(()=>{
                alert("Added");
            
                // document.getElementById("txt").innerHTML = "Student Added Successfully!";
                
              }).catch((err) =>{
                alert(err)
              })
            
            
        }).catch((err) =>{
            alert(err);
        })
    }
   
    function usernameGenerator(companyName){
        var result           = companyName;
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    function passwordGenerator(length){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }


    return(

        <div className = "container">
            <h1>Seller Requests</h1>
            <h1 id = "txt"></h1>
            <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">COMPANY NAME</th>
                        <th scope="col">OWNER'S NAME</th>
                        <th scope="col">DETAILS</th>
                        <th scope="col"> </th>
                        </tr>
                    </thead>
        {sellers.map((seller,index) =>{

            return (

                // <div>
                   
                    <tbody>
                        <tr>
                        <th>{seller.companyname}</th>
                        <td>{seller.ownername}</td>
                        <td>{seller.year}</td>
                        <td>
                            <button class="btn btn-danger" style = {{marginRight : "10px"}} onClick = {()=> confirmRequest(seller._id)}>ACCEPT</button>
                            <button class="btn btn-primary"onClick = {()=> deleteSeller(seller._id)} style = {{marginRight : "10px"}}>DELETE</button></td>
                        </tr>
                       
                       
                    </tbody>
                // </div>
            )

        })}

        {/* </div> */}
        </table>

        </div>
    )
}