import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactSession from 'react-client-session';

import SellerRegistration from './Components/SellerRegistration';
import AllSellers from './Components/AllSellers';
import SellerProfile from './Components/SellerProfile';
import SellerLogin from './Components/SellerLogin';

import SellerForget from './Components/SellerForget';
import UpdateSeller from './Components/UpdateSeller';

import LoginSeller from './Components/LoginSeller';


function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
      <div>
      
      <Route path = "/sellreg" exact component = {SellerRegistration}/>
      <Route path = "/sellreq" exact component = {AllSellers}/>
      <Route path = "/sellpro" exact component = {SellerProfile}/>
      <Route path = "/selllog" exact component = {SellerLogin}/>

      <Route path = "/sellfor" exact component = {SellerForget}/>
      <Route path = "/update/:id" exact component = {UpdateSeller}/>

      <Route path = "/seller/login" exact component = {LoginSeller}/>

    </div>
  </Router>
  
  
  );
}

export default App;
