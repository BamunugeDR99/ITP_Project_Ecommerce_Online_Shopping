import React from 'react';
import {Link} from 'react-router-dom';


function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/contactad" className = "nav-link" >| Contact Admin</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/contactsel" className = "nav-link" >| Contact Seller</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/cusrev" className = "nav-link" >| Customer Reviews</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/myrev" className = "nav-link" >| Your Reviews</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/wrev" className = "nav-link" >| Write a review</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/adrep" className = "nav-link" >| Admin report</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/msg" className = "nav-link" >| Customer Messages</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/report" className = "nav-link">| Report</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/selrev" className = "nav-link">| Seller Reviews</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/itemview" className = "nav-link">| Item View</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header;