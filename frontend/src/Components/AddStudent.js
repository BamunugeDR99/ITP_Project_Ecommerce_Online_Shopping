import React, { useState } from "react";
import axios from "axios";

export default function AddStudent(props) {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");

  function sendData(e) {
    // alert("d0");
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    // const newStudent2 = {
    //   name : "s",
    //   age : 23,
    //   gender : "34",
    // }
    console.log(newStudent);
    //document.write("newStudent");
    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        //alert("Student Added");
        setName(" ");
        setAge(" ");
        setGender(" ");
        props.history.push("/Home");
        document.getElementById("txt").innerHTML =
          "Student Added Successfully!";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Student Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Student Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

// export default AddStudent;
