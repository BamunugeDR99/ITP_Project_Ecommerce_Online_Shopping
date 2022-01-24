import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function AllStudents(props) {
  const [students, setStudents] = useState([]);
  const [loads, setLoad] = useState(false);

  useEffect(() => {
    function getStudents() {
      axios
        .get("https://tech-scope-online.herokuapp.com/student/getStudents")
        .then((res) => {
          setStudents(res.data);
          // console.log(res);
          
        })
        .catch((err) => {
          alert(err);
        });
    }

    getStudents();
    // displayStudentdetails();
  }, []);

// console.log(students[0].name);

  function update(id) {
    console.log(id);
    props.history.push("/update/" + id);
  }

  function deletee(id) {
    axios
      .delete("https://tech-scope-online.herokuapp.com/student/delete/" + id) 
      .then((res) => {
        document.getElementById("txt").innerHTML =
          "Student Deleted Successfully!";


        const afterDeleteStudent = students.filter(
          (student) => student._id != id
        );


        setStudents(afterDeleteStudent);
      })
      .catch((err) => {
        alert(err);
      });
  }
  //search
  function filterContent(data, userSearch) {
    let result = data.filter(
      (post) =>
        post.name.toLowerCase().includes(userSearch) ||
        post.gender.toLowerCase() === userSearch
    );
    setStudents(result);

    if (result != null) {
      setLoad(false);
      //document.getElementById("txt2").innerHTML = "";
    }

    if (result.length == 0) {
      //alert("d");
      setLoad(true);
      //document.getElementById("txt2").innerHTML = "No Result Found!";
    }
  }

  // search
  function handleSearch(e) {
    let userSearch = e;
    //document.getElementsByTagName("CircleLoader").loading = '{true}';

    axios
      .get("https://tech-scope-online.herokuapp.com/student/getStudents")
      .then((res) => {
        //setStudents(res.data);
        //console.log(res.data);
        filterContent(res.data, userSearch);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function more(num) {
    if (document.getElementById(num).innerHTML == "") {
      document.getElementById(num).innerHTML =
        "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.";
    } else {
      document.getElementById(num).innerHTML = "";
    }
  }

  let countxx = 0;
  let userID = localStorage.getItem("userID");
  let imagename = "imgur_com.jpg";

  return (
    <div className="container">
      <h1>Display All Students</h1>
      {/* <!-- Search form --> */}
      {/* <h2 id = "txt">{imagename}</h2> */}
      {/* <h2>{userID}</h2> */}
      {/* <img src = {require('../images/' + imagename).default}  alt = "pic"></img> */}

      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <br></br>
      <div>
        <ClipLoader size={90} color="blue" loading={loads}></ClipLoader>
      </div>
      <h1 id="txt2"></h1>

      <div className="row">

        
        {students.map((student) => {
          return (
            <div class="col-sm-6">
              <div class="card">

  
                <div class="card-body">
                  <h5 class="card-title">   {student.name} </h5>
                  <p class="card-text">{student.age}</p>
                  <p class="card-text">{student.gender}</p>

                  <button
                    class="btn btn-primary"
                    onClick={() => more(student._id)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "green",
                      borderColor: "green",
                    }}
                  >
                    Show more
                  </button>
                  <button
                    class="btn btn-primary"
                    onClick={() => update(student._id)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-primary"
                    onClick={() => deletee(student._id)}
                    style={{ backgroundColor: "red", borderColor: "red" }}
                  >
                    Delete
                  </button>
                  <br></br>
                  <br></br>
                  <p id={student._id} class="card-text"></p>
                </div>
              </div>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
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
