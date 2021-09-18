import React, {useState,useEffect} from "react";
import axios from "axios";

export default function Counts(props) {
let [msg,setMsg] = useState("");

useEffect(() => {
  function getStudents() {
    console.log("Hello");
  }

  getStudents();
  // displayStudentdetails();
}, []);

    function submit(){
        let msg = document.getElementById("in").value;
        document.getElementById("txt").innerHTML = msg;
    }


    //function
    // let num = function add(num1,num2){
    //     return num1 + num2;
    // }
    // // arrow function
    // let num = (num1,num2) => {
    //     return num1 + num2;
    // }

  return (
    <div>
        <input type = "text" id ="in"
         onChange={(eff) => {
          setMsg(eff.target.value);
          document.getElementById("txt").innerHTML = msg;
        }}
        
        
        />
        <h1 id = "txt">fff</h1>
        {/* <button onClick = {() => submit()}>submit</button> */}
    </div>
  );
}

// export default AddStudent;
