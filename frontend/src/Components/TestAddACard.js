import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";
import Swal from 'sweetalert2';

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  newpaymentdetails = {
    cardtype: "",
    cardowner: "",
    cardnumber: "",
    carddate: "",
    cardcvv: "",
    ownerID: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  checkCardType = (e) => {

      if(this.state.number[0] == 3){
       this.newpaymentdetails.cardtype = "AMERICAN EXPRESS";
      }else if(this.state.number[0] == 4){
        this.newpaymentdetails.cardtype = "VISA";
      }else if(this.state.number[0] == 6){
        this.newpaymentdetails.cardtype = "DISCOVER CARD";
      }else if(this.state.number[0] == 5){
        this.newpaymentdetails.cardtype = "MASTER";
    }
  }
  saveCard = (e) => {
    e.preventDefault();
    this.checkCardType();
    this.newpaymentdetails.cardowner = this.state.name;
    this.newpaymentdetails.cardnumber = this.state.number;
    this.newpaymentdetails.carddate = this.state.expiry;
    this.newpaymentdetails.cardcvv = this.state.cvc;
    this.newpaymentdetails.ownerID = localStorage.getItem("CustomerID");

    axios.post("https://tech-scope-online.herokuapp.com/paymentdetails/add",this.newpaymentdetails).then(()=>{

		
		Swal.fire("Success", "New Payment Method Added Successfully", "success");
		this.props.history.push("/Customer/MyWallet");
		
	
	  }).catch((err) =>{
		alert(err)
	  }) 

  };

  render() {
    return (
      <div>
        <br />
        <br />

        <div class="card shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <form onSubmit={this.saveCard}>
              <div id="PaymentForm">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                      />
                    </div>
                    <div class="col-sm">
                      <input
                        type="tel"
                        name="name"
                        class="form-control"
                        placeholder="Card Holder's name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                      <br />
                      <input
                        type="tel"
                        name="number"
                        class="form-control"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                      <br />
                      <div class="row">
                        <div class="col">
                          <input
                            type="tel"
                            name="expiry"
                            class="form-control"
                            placeholder="Exipry Month / Year"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                          />
                        </div>
                        <div class="col">
                          <input
                            type="tel"
                            name="cvc"
                            class="form-control"
                            placeholder="CVC"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="d-flex justify-content-center">
                  {" "}
                  <button
                    type="submit"
                    class="btn"
                    style={{
                      backgroundColor: "#76BA1B",
                      color: "white",
                      marginRight: "10px",
                    }}
                  >
                    save my card
                  </button>
                  <button
                    type="reset"
                    class="btn btn-warning"
                    onClick={() => {
                      this.setState({ ["name"]: "" });
                      this.setState({ ["number"]: "" });
                      this.setState({ ["cvc"]: "" });
                      this.setState({ ["expiry"]: "" });
                      this.setState({ ["focus"]: "" });
                    }}
                  >
                    reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
