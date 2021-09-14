import './App.css';

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';
import AddStudent from './Components/AddStudent';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllStudents from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import ContactSeller from  './Components/ContactSeller';
import CustomerMsg from './Components/CustomerMsg';
import Sellermsg from './Components/Sellermsg';
import YourReviews from './Components/YourReviews';

import MyReviews from './Components/MyReviews';
import ReactSession from 'react-client-session';
import CustomerReviews from './Components/CustomerReviews';
import Report from './Components/Report';
import WriteReview from './Components/WriteReview';
import ContactAdmin from './Components/ContactAdmin';
import SellerReview from './Components/SellerReview';
import AdminReport from './Components/AdminReport';
import ItemView from './Components/ItemView';
import test from './Components/test';



import TestFile from './Components/TestFile';
import Forloop from './Components/Forloop';


function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>

      <Header/>
       <Route path = "/contactad" exact component = {ContactAdmin}/>
       <Route path = "/contactsel" exact component = {ContactSeller}/> 
      <Route path = "/cusrev" exact component = {CustomerReviews}/>
      <Route path = "/myrev" exact component = {YourReviews}/>
      
       <Route path = "/rev" exact component = {MyReviews}/> 
       <Route path = "/wrev" exact component = {WriteReview}/> 
       <Route path = "/report" exact component = {Report}/> 
       <Route path = "/adrep" exact component = {AdminReport}/> 
     <Route path = "/selmsg" exact component = {Sellermsg}/> 
       <Route path = "/msg" exact component = {CustomerMsg}/> 
       <Route path = "/itemview" exact component = {ItemView}/> 
       <Route path = "/selrev" exact component = {SellerReview}/> 
       <Route path = "/test" exact component = {test}/> 
       <Route path = "/f" exact component = {Login}/> 
     <Route path = "/Home" exact component= {AllStudents}/>
       <Route path = "/add" exact component = {AddStudent}/> 
       <Route path = "/update/:id" exact component = {UpdateStudent}/> 
       <Route path = "/testing" exact component = {TestFile}/> 
        <Route path = "/" exact component = {Forloop}/>

      {/* add default to last <Route path = "/" exact component = {AddStudent}/>
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
