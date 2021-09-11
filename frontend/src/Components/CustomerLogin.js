import axios from "axios";
import React, {useState} from "react";





export default function CustomerLogin(){

    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    let [errorMsg,setErrorMsg] = useState("");
   

    function loginUser(e){

        e.preventDefault();

        const loginCredentials = {
            username,
            password,
          }

          axios.post("http://localhost:8070/Customer/loginCustomer", loginCredentials).then((res)=>{

           // setCustomer(res.data.customerLogin);
          localStorage.setItem('CustomerID', res.data.customerLogin._id);

             // sessionStorage.setItem('userID',"sss");

            alert("Customer loggin Successfully!");
            console.log("logging success");
            console.log(res.data);
            setErrorMsg("");


          }).catch((err) =>{

            //alert(err);
          console.log(err.response.data);
          alert(err.response.data.error);
          setErrorMsg(err.response.data.error);
        

        })
    }


    return(

        <div className = "CustomerLogin">
        <div className="container">
        <div className="myCard">
            <div className="row">
                <div className="col-md-6">
                    <div className="myLeftCtn"> 
                        <form className="myForm" onSubmit = {loginUser}>
                            <header>Sign In</header>
                            
							<div className="form-group">
                                <h2>{errorMsg}</h2>
							<label htmlFor="username"><b>Username</b></label><br/>
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="text" placeholder="Username" id="username" 
                                
                                onChange= {
                                    (e)=>{
                                      setUsername(e.target.value);
                                    } }
                                
                                    required/> 
                            </div>

    

                            <div className="form-group">
							<label htmlFor="password"><b>Password</b></label><br/>
                                <i className="fas fa-lock"></i>
                                <input className="myInput" type="password" id="password" placeholder="Password" 
                                
                                onChange= {
                                    (e)=>{
                                      setPassword(e.target.value);
                                    } }
                                
                                
                                    required /> 
                            </div>

                            <br/>

                            <input type="submit" className="butt" value="Sign In"/>
							
							<br/><br/>
							
							<div className="form-row">
								<div className="col">
                                <input type="checkbox" id="che_remember" value="Remember me"/>
								<label className="remember"> Remember me </label>
								</div>
						
								<div className="col">
									<p className ="fp"> <a href="">Forgot Password?</a></p>
								</div>
							</div>
							
							
                            
                        </form>
                    </div>
                </div> 
                <div className="col-md-6">
                {/* <img src={img6} alt="" id="LoginI"/> */}
                    <div className="myRightCtn">
                  
                            <div className="box"><header><b>Welcome to login</b></header>
                            
                            <h4 className ="acc" >Don't have an account?</h4><br/>
							
                                <input type="button" className="butt_out" value="Sign Up"/>
                            </div>
                                
                    </div>
                </div>
            </div>
        </div>
</div>
</div>

    )


}