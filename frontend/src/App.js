import "./App.css";
import "./Css/slide.css";
import "./Css/Side_bar_styles.css";
import "./Js/sidebar_script.js";
import React from "react";
// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
// import Header from './Components/Header';
// import AddStudent from './Components/AddStudent';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import AllStudents from './Components/AllStudents';
// import UpdateStudent from './Components/UpdateStudent';
// import Login from './Components/Login';
import Side_bar from "./Components/Side_bar";
import Add_items from "./Components/Add_items";
import Update_Items from "./Components/Update_Items";
import Seller_items from "./Components/Seller_items";
// import customer_wishlist from './Components/customer_wishlist';
// import SideBarAdmin from './Components/SideBarAdmin';
// import AView_all_the_items from './Components/AView_all_the_Items';
// import Counts from './Components/count';
// import MainHeader from './Components/MainHeader';
import Side_bar_Customer from './Components/Side_Bar_Customer';
import Footer_customer from "./Components/Footer_customer";
import All_the_items_customer from "./Components/All_the_items_customer";
import AView_all_the_items from "./Components/AView_all_the_Items";
import Customer_wishlist from "./Components/customer_wishlist";
import MainHeader from "./Components/MainHeader";
import Home_Customer from "./Components/Home_Customer";
import ShoppingCart from "./Components/ShoppingCart";
// import Home_Customer from './Components/Home_Customer';
// import SellerProfile from './Components/SellerProfile';
// import EmailTest from './Components/EmailTest';
// import All_the_items_customer from './Components/All_the_items_customer';

function App() {
  // ReactSession.setStoreType("localStorage");
  return (
    <Router>
      <div>
        <Side_bar_Customer/>
        <MainHeader />
        <ShoppingCart />
        <Footer_customer/>
      </div>
    </Router>
  );
}

export default App;
