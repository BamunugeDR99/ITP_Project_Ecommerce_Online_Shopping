import React, { useState,useEffect } from "react";
import axios from "axios";




export default function UpdateStudent(props){

  // const [students,setStudents] = useState([]);
  const [data,setData] = useState({
    name : "",
    age : "",
    gender : "",
  });

  useEffect(() =>{
      function getStudents(){
        const objectId = props.match.params.id; 
        console.log(objectId);
          axios.get("http://localhost:8070/student/get/" + objectId).then((res) =>
          {
              //setStudents(res.data);
             setData(res.data);
              console.log(res.data);
              
              
          }).catch((err) =>{
              alert(err);
          })
      }
     
      getStudents();
      // displayStudentdetails();
     
  }, []);



  // let [name,setName] = useState(students.name);
  // let [age,setAge] = useState(students.age);
  // let [gender,setGender] = useState(students.gender);

  

  function sendData(e){
 
    const objectId = props.match.params.id; 
    console.log(objectId);
   
    // alert("d0");
    e.preventDefault();

    // const newStudent = {
    //   name,
    //   age,
    //   gender,
    // }

  
    //console.log(newStudent);
    //document.write("newStudent");
    axios.put("http://localhost:8070/student/update/" + objectId,data).then(()=>{
      //alert("Student Updated");
     document.getElementById("txt").innerHTML = "Student Updated Successfully!";
      

    }).catch((err) =>{
      alert(err)
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }


 return(
   <div className = "container">
     <div className = "container">
       <h1 id = "txt"></h1>
     </div>
<form onSubmit = {sendData}> 
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="name" value = {data.name}
     onChange= {
      (e)=>handle(e)}
      />
  </div>

  <div className="mb-3">
    <label htmlFor="age" className ="form-label">Student Age</label>
    <input type="text" className ="form-control" id="age" Value = {data.age}
    onChange= {
      (e)=>handle(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor ="gender" className ="form-label">Student Gender</label>
    <input type ="text" className ="form-control" id = "gender" Value = {data.gender}
    onChange= {
      (e)=>handle(e)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Update</button>
</form>
   </div>
  

 )

}

// export default AddStudent;
