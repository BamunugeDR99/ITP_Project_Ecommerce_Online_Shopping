import './App.css';

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';


import AllStudents from './Components/AllStudents';
/*import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import ReactSession from 'react-client-session';*/
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import './css/style.css';





function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>

      <Header/>

      
      

      <Route path = "/Home" exact component= {AllStudents}/>
      <Route path = "/add" exact component = {SignUp}/>
      
      {/*<Route path = "/" exact component = {Login}/>
      <Route path = "/Home" exact component= {AllStudents}/>
      <Route path = "/add" exact component = {AddStudent}/>
  <Route path = "/update/:id" exact component = {UpdateStudent}/>*/}



      {/* add default to last <Route path = "/" exact component = {AddStudent}/>*/}
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
