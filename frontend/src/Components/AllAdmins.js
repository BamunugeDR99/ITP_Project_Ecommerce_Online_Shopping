import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function AllAdmins(props) {
  return (
    <div>
      <br/>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          props.history.push("/Admin/AddAdmin");
        }}
      >
        CREATE ADMIN
      </button>
      <br/><br/>
    </div>
  );
}
