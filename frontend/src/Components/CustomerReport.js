import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

export default function CustomerReport(props) {
 
  function sendData(e) {
    e.preventDefault();
  
    
   

    console.log(objarr);
    // axios
    //   .post("https://tech-scope-online.herokuapp.com/student/create-pdf", objarr)
    //   .then(() =>
    //     axios.get("https://tech-scope-online.herokuapp.com/student/fetch-pdf", {
    //       responseType: "blob",
    //       // A BLOB is a binary large object that can hold a variable amount of data. important
    //     })
    //   )
    //   .then((res) => {
    //     const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    //     saveAs(pdfBlob, "CustomerMonthlyReport.pdf");
    //                       //your file name 
    //   });
  }
  return (
  <div>



  </div>
  );
}

// export default AddStudent;
