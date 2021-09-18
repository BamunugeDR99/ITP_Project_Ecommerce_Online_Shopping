import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactSession from 'react-client-session';

import SellerRegistration from './Components/SellerRegistration';
import AllSellers from './Components/AllSellers';
import SellerProfile from './Components/SellerProfile';


import SellerForget from './Components/SellerForget';
import SellerUpdate from './Components/SellerUpdate';

import SellerLogin from './Components/SellerLogin';
import SellerPassword from './Components/SellerPassword';



function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>
      
      <Route path = "/sellreg" exact component = {SellerRegistration}/>
      <Route path = "/sellreq" exact component = {AllSellers}/>
      <Route path = "/sellpro" exact component = {SellerProfile}/>
      
      <Route path = "/sellfor" exact component = {SellerForget}/>
      <Route path = "/update/:id" exact component = {SellerUpdate}/>

      <Route path = "/seller/login" exact component = {SellerLogin}/>
      <Route path = "/sellpass" exact component = {SellerPassword}/>

      

    </div>
  </Router>
  
  
  );
}

export default App;
