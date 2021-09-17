import './App.css';

// import Counter from './Components/Counter';
// import CounterFunction from './Components/CounterFunction';

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
import './css/customerList.css'
import './css/userprofile.css';
import './css/style.css';
import './css/stylelogin.css';
import UpdateProfile from './Components/UpdateProfile';
import './css/update.css';
import ForgotP from './Components/ForgotP';

//import ForgotP from './Components/ForgotP';
// import './css/forgotp.css';



function App() {
  
  return (
<Router>
  
      <div>

        <UpdateProfile/>
      
    </div>
 </Router>
  
  
  );
}

export default App;
