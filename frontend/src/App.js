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
import YourReviews from './Components/YourReviews';
import ReactSession from 'react-client-session';
import CustomerReviews from './Components/CustomerReviews';
import Report from './Components/Report';
import WriteReview from './Components/WriteReview';
import ContactAdmin from './Components/ContactAdmin';
import SellerReview from './Components/SellerReview';
import AdminReport from './Components/AdminReport';
import ItemView from './Components/ItemView';
import test from './Components/test';




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
      <Route path = "/wrev" exact component = {WriteReview}/>
      <Route path = "/adrep" exact component = {AdminReport}/>
      <Route path = "/msg" exact component = {CustomerMsg}/>
      <Route path = "/report" exact component = {Report}/>
      <Route path = "/itemview" exact component = {ItemView}/>
      <Route path = "/selrev" exact component = {SellerReview}/>
      <Route path = "/test" exact component = {test}/>
      <Route path = "/" exact component = {Login}/>
      <Route path = "/Home" exact component= {AllStudents}/>
      <Route path = "/add" exact component = {AddStudent}/>
      <Route path = "/update/:id" exact component = {UpdateStudent}/>


      {/* add default to last <Route path = "/" exact component = {AddStudent}/>*/}
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
