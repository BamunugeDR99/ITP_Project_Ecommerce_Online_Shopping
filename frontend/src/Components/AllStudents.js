import axios from "axios";
import React, {useState,useEffect} from "react";
import {ClipLoader} from "react-spinners";


export default function AllStudents(props){
    const [students,setStudents] = useState([]);
    const [loads,setLoad] = useState(false);
    
    useEffect(() =>{
        function getStudents(){
            axios.get("http://localhost:8070/student/getStudents").then((res) =>
            {
                setStudents(res.data);
                console.log(res.data);
                
                
            }).catch((err) =>{
                alert(err);
            })
        }
       
        getStudents();
        // displayStudentdetails();
       
    }, []);

    

    return(
        

        <div className = "container">
            <h1>Display All Students</h1>
            {/* <!-- Search form --> */}
            {/* <h2 id = "txt">{imagename}</h2> */}
            {/* <h2>{userID}</h2> */}
            {/* <img src = {require('../images/' + imagename).default}  alt = "pic"></img> */}

            <input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange = {(e) => handleSearch(e.target.value) }/>
            <br></br>
            <div>
            <ClipLoader size = {90} color = 'blue' loading = {loads}></ClipLoader>
            </div>
            <h1 id = "txt"></h1>
            
            <div className = "row">
        {students.map((student,index) =>{

            return (
             
                <div class="col-sm-6">
                    <div class="card">
                    {/* <img
                  src = {require('../images/' + imagename).default} 
                  class="card-img-top" style = {{width : "150px",paddingRight : "10px", borderRadius : "0px"}}
                  alt="..."
                /> */}
                        {/* <img
                  src = {require('../images/' + imagename).default} 
                  class="card-img-top" style = {{width : "150px",paddingRight : "10px", borderRadius : "0px"}}
                  alt="..."
                /> */}
                        <div class="card-body">
                            <h5 class="card-title">{student.name}</h5>
                            <p class="card-text">
                                {student.age}
                            </p>
                            <p class="card-text">
                                {student.gender}
                            </p>
                           
                            <button class="btn btn-primary" onClick = {()=>more(student._id)} style = {{marginRight : "10px", backgroundColor : "green", borderColor : "green"}}>Show more</button>
                            <button class="btn btn-primary" onClick = {()=>update(student._id)} style = {{marginRight : "10px"}}>Edit</button>
                            <button class="btn btn-primary" onClick = {()=> deletee(student._id)} style = {{backgroundColor : "red", borderColor : "red"}}>Delete</button>
                          <br></br><br></br>
                            <p id = {student._id} class="card-text">
                                
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>
   
            
            )

        })}

        </div>
        </div>
    )
}



// src = {require('./src/images/imgur_com.jpg')}




              // <div>
                // <div key = {index}>
                //     <h1>{student.name}</h1>
                //     <input type = "text" value = {student.gender}></input> 
                // </div>
                  
            
                // <div key = {index} className="card" style={{width: "18rem"}}>
                // <img className="card-img-top" src = {require('../images/' + imagename).default} alt="Card image cap"/>
                // <div className="card-body">
                // <p className="card-text">{student.name}</p>
                // <p className="card-text">{student.age}</p>
                // <p className="card-text">{student.gender}</p>
                // <button onClick = {()=>update(student._id)}>Update</button>
                // <button onClick = {()=> deletee(student._id)}>Delete</button>
                // </div>
                // </div>