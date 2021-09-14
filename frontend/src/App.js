import './App.css';
import './Css/slide.css';
import './Css/Side_bar_styles.css'
import './Js/sidebar_script.js'
// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';
// import Header from './Components/Header';
// import AddStudent from './Components/AddStudent';
// import AllStudents from './Components/AllStudents';
// import UpdateStudent from './Components/UpdateStudent';
// import Login from './Components/Login';
import Side_bar from './Components/Side_bar';
import Add_items from './Components/Add_items';
import Update_Items from './Components/Update_Items';
import Seller_items from './Components/Seller_items';
// import customer_wishlist from './Components/customer_wishlist';
// import SideBarAdmin from './Components/SideBarAdmin';
// import AView_all_the_items from './Components/AView_all_the_Items';
// import Counts from './Components/count';
// import MainHeader from './Components/MainHeader';
// import Side_bar_Customer from './Components/Side_Bar_Customer';
import Footer_customer from './Components/Footer_customer';
// import Home_Customer from './Components/Home_Customer';
// import SellerProfile from './Components/SellerProfile';
// import EmailTest from './Components/EmailTest';
// import All_the_items_customer from './Components/All_the_items_customer';

import AllStudents from './Components/AllStudents';
/*import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';
import ReactSession from 'react-client-session';*/
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import CustomerLogin from './Components/CustomerLogin';
import AllCustomers from './Components/AllCustomers';
import UserProfile from './Components/UserProfile';
import CustomerList from './Components/CustomerList';
import './Css/customerList.css'
import './Css/userprofile.css';
import './Css/style.css';
import './Css/stylelogin.css';
import UpdateProfile from './Components/UpdateProfile';
import './Css/update.css';
import ForgotP from './Components/ForgotP';

//import ForgotP from './Components/ForgotP';
// import './css/forgotp.css';



import ReactSession from 'react-client-session';

import SellerRegistration from './Components/SellerRegistration';
import AllSellers from './Components/AllSellers';
import SellerProfile from './Components/SellerProfile';


import SellerForget from './Components/SellerForget';
import UpdateSeller from './Components/UpdateSeller';

import SellerLogin from './Components/SellerLogin';



function App() {
  // ReactSession.setStoreType("localStorage");
  return (
  <Router>
    <div>
      <Side_bar/>
      <SellerProfile/>
    </div>
  </Router>
  
  );
}

export default App;
