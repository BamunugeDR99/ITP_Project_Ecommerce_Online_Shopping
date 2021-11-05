import axios from "axios";
import React, {useState} from "react";


export default function LoginSeller(){

    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [errormsg,seterrormsg] = useState("");
   

    function loginUser(e){

        e.preventDefault();

        const loginCredentials = {
            username,
            password,
          }

          axios.post("https://tech-scope-online.herokuapp.com/orgSeller/loginSeller", loginCredentials).then((res)=>{

           // setCustomer(res.data.customerLogin);
        //   localStorage.setItem('sellerID', res.data.loginTest._id);

             // sessionStorage.setItem('userID',"sss");

            alert("Customer loggin Successfully!");
            console.log("logging success");
            console.log(res.data);

          }).catch((err) =>{

            //alert(err);
          console.log(err.response.data);
          alert(err.response.data.error);
          seterrormsg(err.response.data.error);
        

        })
    }


    return(

        <div className = "SellerLogin">
        <div className="container">
        <div className="myCard">
            <div className="row">
                <div className="col-md-6">
                    <div className="myLeftCtn"> 
                        <form className="myForm" onSubmit = {loginUser}>
                            <header>Sign In</header>
                            
							<div className="form-group">
                                <h2>{errormsg}</h2>
							<label htmlFor="username"><b>Username</b></label><br/>
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="text" placeholder="Username" id="username" 
                                
                                onChange= {
                                    (e)=>{
                                      setusername(e.target.value);
                                    } }
                                
                                    required/> 
                            </div>

    

                            <div className="form-group">
							<label htmlFor="password"><b>Password</b></label><br/>
                                <i className="fas fa-lock"></i>
                                <input className="myInput" type="password" id="password" placeholder="Password" 
                                
                                onChange= {
                                    (e)=>{
                                      setpassword(e.target.value);
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

            </div>
        </div>
</div>
</div>

    )


}