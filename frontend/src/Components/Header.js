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
        
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/contactad" className = "nav-link" >| Contact Admin</Link>
        </li>
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/contactsel" className = "nav-link" >| Contact Seller</Link>
        </li>


        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/cusrev" className = "nav-link" >| Customer Reviews</Link>
        </li>
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/myrev" className = "nav-link" >| Your Reviews</Link>
        </li>


        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/wrev" className = "nav-link" >| Write a Review</Link>
        </li>
        
        
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/adrep" className = "nav-link" >| Seller reports</Link>
        </li>
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/selmsg" className = "nav-link" >| Seller Messages</Link>
        </li>
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/msg" className = "nav-link" >| Customer Messages</Link>
        </li>
        
        <li className="nav-item" style={{fontSize:'14px'}}>
          {/* <a className="nav-link" href="/add" style= {{color : "blue"}}>Add Student</a> */}
          <Link to = "/selrev" className = "nav-link">| Seller Reviews</Link>
        </li>
        <li className="nav-item" style={{fontSize:'14px'}}>
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