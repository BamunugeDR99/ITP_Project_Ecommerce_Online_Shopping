import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import CreatePackage1 from './Components/CreatePackage1';
import CreatePackage2 from './Components/CreatePackage2';
import AllPackages from './Components/AllPackages';
import React from 'react';
import UpdatePackages from './Components/UpdatePackage';
import Side_bar from './Components/Side_bar';
import All_DiscountedItems_Customer from './Components/All_DiscountedItems_Customer';
import AllPackages_CustomerView from './Components/AllPackages_CustomerView';

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';


import AllStudents from './Components/AllStudents';
/*import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import ReactSession from 'react-client-session';*/
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import CustomerLogin from './Components/CustomerLogin';
import AllCustomers from './Components/AllCustomers';
import UserProfile from './Components/UserProfile';
import CustomerList from './Components/CustomerList';
// import './css/customerList.css'
// import './css/userprofile.css';
// import './css/style.css';
// import './css/stylelogin.css';
import UpdateProfile from './Components/UpdateProfile';
import Seller_items from './Components/Seller_items';
// import './css/update.css';
// import Side_bar from './Components/Side_bar';
// import Add_items from './Components/Add_items';
 import Update_Items from './Components/Update_Items';
import AddDiscount from './Components/AddDiscount';
import AllDiscountedItems from './Components/AllDiscountedItems';
import UpdateDiscount from './Components/UpdateDiscount';
// import Seller_items from './Components/Seller_items';
// import customer_wishlist from './Components/customer_wishlist';
// import SideBarAdmin from './Components/SideBarAdmin';
// import AView_all_the_items from './Components/AView_all_the_Items';
// import Counts from './Components/count';
// import MainHeader from './Components/MainHeader';
// import Side_bar_Customer from './Components/Side_Bar_Customer';
// import Footer_customer from './Components/Footer_customer';
// import Home_Customer from './Components/Home_Customer';
// import SellerProfile from './Components/SellerProfile';



function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  
    <Router>
    <div className="App">

      {/* <Header/> */}
    
      <Header/>
    <Side_bar/>
      <Route path= "/createpackage1" exact component = {CreatePackage1}/>
      <Route path= "/createpackage2" exact component = {CreatePackage2}/>
      <Route path= "/allpackages" exact component = {AllPackages}/>
      <Route path= "/updatepackage/:id" exact component = {UpdatePackages}/>
      <Route path= "/selleritems" exact component = {Seller_items}/>
      <Route path= "/updateItem/:id" exact component = {Update_Items}/>
      <Route path= "/addDiscount/:id" exact component = {AddDiscount}/>
     
      <Route path= "/alldiscounteditems" exact component = {AllDiscountedItems}/>
      <Route path= "/updateDiscount/:id" exact component = {UpdateDiscount}/>
   
      <Route path= "/alldiscounteditems_customerView" exact component = {All_DiscountedItems_Customer}/>
      <Route path= "/allpackage_customerView" exact component = {AllPackages_CustomerView}/>


    </div>
  </Router>
  
  
  );
}

export default App;
