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
import Seller_items from './Components/Seller_items';
import customer_wishlist from './Components/customer_wishlist';



function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>
      <Header/>
      <Route path = "/" exact component = {customer_wishlist}/>
        {/* <Side_bar/> */}
        <Route path = "/addItem" exact component = {Add_items}/>
        <Route path = "/updateItem/:id" exact component = {Update_Items}/>
        <Route path = "/allItems" exact component = {Seller_items}/>
        {/* <Add_items/> */}





      {/* <Header/>

        <Route path = "/add" exact component = {AddStudent}/>
      <Route path = "/" exact component = {Login}/>
      <Route path = "/Home" exact component= {AllStudents}/>
     
      <Route path = "/update/:id" exact component = {UpdateStudent}/> */}


      {/* add default to last <Route path = "/" exact component = {AddStudent}/>*/}
{/* <AddStudent/> */}
    </div>
  </Router>
  
  
  );
}

export default App;
