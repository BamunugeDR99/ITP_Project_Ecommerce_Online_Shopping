import React from 'react';


export default function CustomerLogin(){

    return(

        <div className="container">
        <div className="myCard">
            <div className="row">
                <div className="col-md-6">
                    <div className="myLeftCtn"> 
                        <form className="myForm">
                            <header>Sign In</header>
                            
							<div className="form-group">
							<label for="username"><b>Username</b></label><br/>
                                <i className="fas fa-user"></i>
                                <input className="myInput" type="text" placeholder="Username" id="username" required/> 
                            </div>

    

                            <div className="form-group">
							<label for="password"><b>Password</b></label><br/>
                                <i className="fas fa-lock"></i>
                                <input className="myInput" type="password" id="password" placeholder="Password" required/> 
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

    )


}