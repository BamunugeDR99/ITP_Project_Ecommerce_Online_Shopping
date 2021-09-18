import './App.css';

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';
import AddStudent from './Components/AddStudent';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllStudents from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import ReactSession from 'react-client-session';
import AddpaymentMethod from './Components/AddpaymentMethod';
import PaymentHistory from './Components/PaymentHistory';
import AdminViewHistory from './Components/AdminViewHistory';
import SelectPaymentMethod from './Components/SelectPaymentMethod';
import ViewCardDetails from './Components/ViewCardDetails';
import ConfirmPayment from './Components/ConfirmPayment';
// import new1 from './Components/new1';
import AddCard from './Components/AddCard';
import EditCardDetails from './Components/EditCardDetails';




function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>

      <Header/>
      <EditCardDetails/>
      {/* <Route path = "/" exact component = {Login}/>
      <Route path = "/Home" exact component= {AllStudents}/>
      <Route path = "/add" exact component = {AddStudent}/>
      <Route path = "/update/:id" exact component = {UpdateStudent}/>
      <Route path = "/addpay" exact component = {AddpaymentMethod}/>
      <Route path = "/payhis" exact component = {PaymentHistory}/>
      <Route path = "/Adhis" exact component = {AdminViewHistory}/>
      <Route path = "/sepay" exact component = {SelectPaymentMethod}/>
      <Route path = "/view" exact component = {ViewCardDetails}/>
      <Route path = "/confpay" exact component = {ConfirmPayment}/>
      {/* <Route path = "/new" exact component = {new1}/> 
      <Route path = "/card" exact component = {AddCard}/> */}
      

      {/* add default to last <Route path = "/" exact component = {AddStudent}/>*/}
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
