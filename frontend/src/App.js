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
import SellerRegistration from './Components/SellerRegistration';
import AllSellers from './Components/AllSellers';




function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>

      <Header/>
      <Route path = "/" exact component = {Login}/>
      <Route path = "/Home" exact component= {AllStudents}/>
      <Route path = "/add" exact component = {AddStudent}/>
      <Route path = "/update/:id" exact component = {UpdateStudent}/>
      <Route path = "/sellreg" exact component = {SellerRegistration}/>
      <Route path = "/sellreq" exact component = {AllSellers}/>



      {/* add default to last <Route path = "/" exact component = {AddStudent}/>*/}
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
