import "./App.css";
import "./Css/slide.css";
import "./Css/Side_bar_styles.css";
import "./Js/sidebar_script.js";
import "./Css/toogle.css";
import "./Css/AdminDashBoard.css";
// import './Css/InitialPage.css';
// import React from 'react';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreatePackage1 from "./Components/CreatePackage1";
import CreatePackage2 from "./Components/CreatePackage2";
import AllPackages from "./Components/AllPackages";
// import React from 'react';
import UpdatePackages from "./Components/UpdatePackage";
//import Side_bar from './Components/Side_bar';
import All_DiscountedItems_Customer from "./Components/All_DiscountedItems_Customer";
import AllPackages_CustomerView from "./Components/AllPackages_CustomerView";

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
// import Header from './Components/Header';
// import AddStudent from './Components/AddStudent';
// import AllStudents from './Components/AllStudents';
// import UpdateStudent from './Components/UpdateStudent';
// import Login from './Components/Login';
// import Side_bar from './Components/Side_bar';
import Add_items from "./Components/Add_items";
// import Update_Items from './Components/Update_Items';
// import Seller_items from './Components/Seller_items';
// import customer_wishlist from './Components/customer_wishlist';
// import SideBarAdmin from './Components/SideBarAdmin';
// import AView_all_the_items from './Components/AView_all_the_Items';
// import Counts from './Components/count';
// import MainHeader from './Components/MainHeader';
import Side_bar_Customer from "./Components/Side_Bar_Customer";
import Footer_customer from "./Components/Footer_customer";
import All_the_items_customer from "./Components/All_the_items_customer";
import AView_all_the_items from "./Components/AView_all_the_Items";
import Customer_wishlist from "./Components/customer_wishlist";
import MainHeader from "./Components/MainHeader";
import Home_Customer from "./Components/Home_Customer";
// import Home_Customer from './Components/Home_Customer';
// import SellerProfile from './Components/SellerProfile';

// import EmailTest from './Components/EmailTest';
// import All_the_items_customer from './Components/All_the_items_customer';

import AllStudents from "./Components/AllStudents";
/*import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import ReactSession from 'react-client-session';*/
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from "./Components/SignUp";
import CustomerLogin from "./Components/CustomerLogin";
import AllCustomers from "./Components/AllCustomers";
import UserProfile from "./Components/UserProfile";
import CustomerList from "./Components/CustomerList";
import "./Css/customerList.css";
import "./Css/userprofile.css";
import "./Css/style.css";
import "./Css/stylelogin.css";
import "./Css/CustomerDetails.css";
import UpdateProfile from "./Components/UpdateProfile";
import "./Css/update.css";
import ForgotP from "./Components/ForgotP";
import CustomerDetails from "./Components/CustomerDetails";

//import ForgotP from './Components/ForgotP';
// import './css/forgotp.css';

import ReactSession from "react-client-session";
import CustomerReviews from "./Components/CustomerReviews";
// import Report from './Components/Report';
import WriteReview from "./Components/WriteReview";
import ContactAdmin from "./Components/ContactAdmin";
import SellerReview from "./Components/SellerReview";
import AdminReport from "./Components/AdminReport";
import ItemView from "./Components/ItemView";
// import test from './Components/test';
import ContactSeller from "./Components/ContactSeller";
import PaymentHistory from "./Components/PaymentHistory";
import PaymentHistoryCard from "./Components/PaymentHistoryCard";

import SellerRegistration from "./Components/SellerRegistration";
import AllSellers from "./Components/AllSellers";
import SellerProfile from "./Components/SellerProfile";
import "./Css/sellerregistration.css";

import SellerForget from "./Components/SellerForget";
import SellerUpdate from "./Components/SellerUpdate";
import SellerPassword from "./Components/SellerPassword";

import SellerLogin from "./Components/SellerLogin";
import InitialPage from "./Components/InitialPage";
import SellerHeader from "./Components/SellerHeader";

import Seller_items from "./Components/Seller_items";
// import './css/update.css';
import Side_bar from "./Components/Side_bar";
// import Add_items from './Components/Add_items';
import Update_Items from "./Components/Update_Items";
import AddDiscount from "./Components/AddDiscount";
import AllDiscountedItems from "./Components/AllDiscountedItems";
import UpdateDiscount from "./Components/UpdateDiscount";
// import InitialPage from './Components/InitialPage';
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

// import TestFile from './Components/TestFile';
import Forloop from "./Components/Forloop";
import YourReviews from "./Components/YourReviews";
import ViewCardDetails from "./Components/ViewCardDetails";
import SellerReviews from "./Components/SellerReview";
import AddpaymentMethod from "./Components/AddpaymentMethod";
import AddCard from "./Components/AddCard";
import Sellermsg from "./Components/Sellermsg";
import ConfirmPayment from "./Components/ConfirmPayment";
import ShoppingCart from "./Components/ShoppingCart";
import EditCardDetails from "./Components/EditCardDetails";
import SellermMsg from "./Components/Sellermsg";
import SelectPaymentMethod from "./Components/SelectPaymentMethod";
import AdminDashBoard from "./Components/AdminDashBoard";
import SideBarAdmin from "./Components/SideBarAdmin";
import AdminHeader from "./Components/AdminHeader";
import AdminLogin from "./Components/AdminLogin";
import AllAdmins from "./Components/AllAdmins";
import AddNewAdmin from "./Components/AddNewAdmin";
import AllRequests from "./Components/AllSellers";
import CustomerMsg from "./Components/CustomerMsg";
import AdminAllPackages from "./Components/Admin_All_Packages";
import SinglePackage_AdminView from "./Components/Admin_single_packageView";
// import AdminReport from './Components/AdminReport';
import SellerView from "./Components/SellerView";
import RegSellers from "./Components/RegSellers";
import ItemsForSpecificSeller from "./Components/ItemsForSpecificSeller";
import AllItemsFiltered from "./Components/AllItemsFiltered";
import RequestView from "./Components/RequestView";
function App() {
  // ReactSession.setStoreType("localStorage");
  return (
    <Router>
      <div>
        <Route path="/" exact component={InitialPage} />
        <Route path="/CustomerLogin" exact component={CustomerLogin} />
        <Route path="/CustomerRegistration" exact component={SignUp} />
        <Route path="/CustomerForgotPassword" exact component={ForgotP} />
        <Route path="/SellerLogin" exact component={SellerLogin} />
        <Route
          path="/SellerRegistration"
          exact
          component={SellerRegistration}
        />
        <Route path="/SellerForgotPassword" exact component={SellerForget} />
        <Route path="/AdminLogin" exact component={AdminLogin} />

        {/* Customer Route */}
        <Route path="/Customer" component={MainHeader} />
        <Route path="/Customer" component={Side_bar_Customer} />
        <Route path="/Customer/Home" exact component={Home_Customer} />
        <Route
          path="/Customer/AllItmes"
          exact
          component={All_the_items_customer}
        />

        <Route path="/Customer/AllItemsFilterBy/:id" exact component = {AllItemsFiltered}/>
        <Route
          path="/Customer/DiscountedItems"
          exact
          component={All_DiscountedItems_Customer}
        />
        <Route
          path="/Customer/Packages"
          exact
          component={AllPackages_CustomerView}
        />
        <Route path="/Customer/MyProfile" exact component={UserProfile} />
        <Route path="/Customer/ContactUs" exact component={ContactAdmin} />
        <Route path="/Customer/addCard" exact component={AddpaymentMethod} />
        <Route
          path="/Customer/editCard/:id"
          exact
          component={EditCardDetails}
        />
        <Route path="/Customer/ContactSeller" exact component={ContactSeller} />
        <Route path="/Customer/MyWallet" exact component={ViewCardDetails} />
        <Route
          path="/Customer/confrimPayment"
          exact
          component={ConfirmPayment}
        />
        <Route path="/Customer/Payhis" exact component={PaymentHistory} />
        {/* <Route path = "/Customer/Payhis" exact component = {}/> */}
        <Route
          path="/Customer/confrimPayment"
          exact
          component={ConfirmPayment}
        />
        <Route path="/Customer/WriteReview/:id" exact component={WriteReview} />

        <Route
          path="/Customer/PaycardID"
          exact
          component={PaymentHistoryCard}
        />

        <Route path="/Customer/ItemDetails/:id" exact component={ItemView} />
        <Route
          path="/Customer/ItemReviews/:id"
          exact
          component={CustomerReviews}
        />
        <Route
          path="/Customer/paymentHistory"
          exact
          component={PaymentHistory}
        />
        <Route
          path="/Customer/SelectPayment"
          excat
          component={SelectPaymentMethod}
        />
        <Route path="/Customer/Confrim/:id" exact component={ConfirmPayment} />
        <Route
          path="/Customer/Mywishlist"
          exact
          component={Customer_wishlist}
        />
        <Route path="/Customer/MyReviews" exact component={YourReviews} />
        <Route path="/Customer/Update/:id" exact component={UpdateProfile} />
        <Route path="/Customer/MyShoppingCart" exact component={ShoppingCart} />
        <Route
          path="/Customer/purchaseHistoryExtended/:id"
          exact
          component={PaymentHistoryCard}
        />
        <Route path="/Customer" component={Footer_customer} />

        {/* Seller Route */}
        {/* header */}
        <Route path="/Seller" component={SellerHeader} />
        <Route path="/Seller" component={Side_bar} />
        <Route path="/Seller/Home" exact component={Seller_items} />
        <Route
          path="/Seller/MyDiscountedItems"
          exact
          component={AllDiscountedItems}
        />
        <Route path="/Seller/MyPackages" exact component={AllPackages} />
        <Route path="/Seller/MyProfile" exact component={SellerProfile} />
        <Route path="/Seller/ItemReviews/:id" exact component={SellerReview} />
        <Route
          path="/Seller/updateProfile/:id"
          exact
          component={SellerUpdate}
        />
        <Route path="/Seller/itemDetails" exact component={SellerReviews} />
        <Route path="/Seller/CreatePackage" exact component={CreatePackage1} />
        <Route
          path="/Seller/CreatePackageForm"
          exact
          component={CreatePackage2}
        />
        <Route
          path="/Seller/UpdatePackage/:id"
          exact
          component={UpdatePackages}
        />
        <Route path="/Seller/UpdateItem/:id" exact component={Update_Items} />
        <Route path="/Seller/AddItem" exact component={Add_items} />
        <Route path="/Seller/AddDiscount/:id" exact component={AddDiscount} />
        <Route
          path="/Seller/UpdateDiscount/:id"
          exact
          component={UpdateDiscount}
        />
        <Route path="/Seller/Contact" exact component={Sellermsg} />
        <Route path="/Seller/Update/:id" exact component={SellerUpdate} />
        <Route path="/Seller/sellerPassword" exact component={SellerPassword} />
        <Route path="/Seller" component={Footer_customer} />

        {/* Admin Route*/}

        {/* <Route path="/CustomerMsg" component={CustomerMsg} /> */}

        <Route path="/Admin" component={AdminHeader} />
        <Route path="/Admin" component={SideBarAdmin} />
        <Route path="/Admin/SelReport" component={AdminReport} />
        <Route path="/Admin/Home" exact component={AdminDashBoard} />
        <Route path="/Admin/Sellers" exact component={RegSellers} />
        <Route path="/Admin/AllSellersRequest" exact component={AllSellers} />
        <Route path="/Admin/Customers" exact component={CustomerList} />
        <Route path="/Admin/Customers/Details/:id" exact component={CustomerDetails} />
        <Route path="/Admin/Admins" exact component={AllAdmins} />
        <Route path="/Admin/AddAdmin" exact component={AddNewAdmin} />
        <Route path="/Admin/Items" exact component={AView_all_the_items} />
        <Route
          path="/Admin/Packagesss/:id"
          exact
          component={SinglePackage_AdminView}
        />
        <Route path="/Admin/Reports" exact component={AdminReport} />
        <Route path="/Admin/packages/:id" exact component={AdminAllPackages} />
        <Route
          path="/Admin/viewSellerProfile/:id"
          exact
          component={SellerView}
        />
             <Route
          path="/Admin/RequestSellerProfile/:id"
          exact
          component={RequestView}
        />
        <Route
          path="/Admin/sellerItems/:id"
          exact
          component={ItemsForSpecificSeller}
        />

        <Route path="/Admin" component={Footer_customer} />
      </div>
    </Router>
  );
}

export default App;
