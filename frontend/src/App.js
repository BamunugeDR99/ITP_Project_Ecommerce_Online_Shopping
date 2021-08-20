import './App.css';

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';
import AddStudent from './Components/AddStudent';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllStudents from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import Side_bar from './Components/Side_bar';
import Add_items from './Components/Add_items';
import Update_Items from './Components/Update_Items';




function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>
        <Side_bar/>
        <Route path = "/addItem" exact component = {Add_items}/>
        <Route path = "/updateItem" exact component = {Update_Items}/>
        {/* <Add_items/> */}





      {/* <Header/>

      <Route path = "/" exact component = {Login}/>
      <Route path = "/Home" exact component= {AllStudents}/>
      <Route path = "/add" exact component = {AddStudent}/>
      <Route path = "/update/:id" exact component = {UpdateStudent}/> */}


      {/* add default to last <Route path = "/" exact component = {AddStudent}/>*/}
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
