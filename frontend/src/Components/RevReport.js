import React, {useState, useEffect} from "react";
import axios from "axios";


// import g1 from "../images/avatar1.png";


export default function RevReport(props){

	const [review,setReview] = useState([]);
    const [items,setItems] = useState([]);

	let reviews = [];
	// let emails = [];
	let customers = [];
	let customerName = "";
	let Review = "";
	let Ratings = "";
    let Date = "";
	let [abc, setabc] = useState([]);
	let reviewWithCustomer = {
	  customerName,
	  Review,
	  Ratings,
      Date
	};
  
	let reviewWithCustomers = [];
  
	useEffect(() => {
	  function getReview() {

		const objectID = props.match.params.id;
        console.log(objectID)
		axios
		  .get("http://localhost:8070/review/get")
		  .then((res) => {
			reviews=(res.data);
			const filter = res.data.filter(
			  (rev) => rev.itemid === objectID
			);
			reviews = filter;
            console.log(res.data);
			console.log(reviews);
			axios
			  .get("http://localhost:8070/Customer/getAll")
			  .then((res) => {
				customers = res.data;
				createReview(reviews, customers);
				console.log(customers);
			  })
			  .catch((err) => {
				alert(err);
			  });
		  })
		  .catch((err) => {
			alert(err);
		  });
	  }
  
	  function createReview(reviews, customers) {
		let j = 0;
		for (let i = 0; i < reviews.length; i++) {
		  j = 0;
		  for (j = 0; j < customers.length; j++) {
			if (reviews[i].customerid === customers[j]._id) {
			  reviewWithCustomer = {
				customerName: customers[j].firstName,
				Review: reviews[i].description,
				Ratings: reviews[i].noofstars,
                Date: reviews[i].date,
			  };
  
			  reviewWithCustomers.push(reviewWithCustomer);
			}
		  }
		}
  
		setabc(reviewWithCustomers);
	  }
  
	  getReview();
	}, []);


    useEffect(() => {

        function getItems(){

          const objectId = props.match.params.id;
            axios
            .get("http://localhost:8070/items/get/"+ objectId)
            .then((res) =>
            {
                setItems(res.data);
                console.log(res.data);
                console.log(items);
        
                
            }).catch((err) =>{
                alert(err);
            })
            
        }
       
        getItems();

    }, []);



 return(


 <div className="row" style={{ padding: "20px 15px 10px 50px" }}>
     <div className="col">
	 <br/>
	 <h2 style={{ textAlign: "center", color: "black" }}>
	   {" "}
	   Review Report
	 </h2>
     <br/>

     <table class="table" style={{width:'90%'
    //  width:'90%',tableLayout: 'fixed', fontSize:'16px', textAlign:'center',border:'1px',borderColor:'grey',
    //   fontFamily: 'sans-serif',boxSizing: 'border-box',
    //     borderCollapse: 'collapse',
    //     border: '1px solid #bdc3c7',
    //     boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2)'
        }}>
            
            <thead  class="thead-dark"
            // style={{fontSize:'18px'}}
            >
              <tr>
                <th>Customer Name</th>
                <th>Review</th>
                <th>Ratings</th>
                <th>Date</th>
              </tr>
            </thead>
            {abc.map((reviewss) => {
              return (			
                <tbody>
                  <tr style={{transition: 'all .2s ease-in',cursor: 'pointer', border:'1px'}}>
                    <td>{reviewss.customerName}</td>
                    <td>{reviewss.Review}</td>
                    <td>{reviewss.Ratings}/5</td>
                    <td>{reviewss.Date}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          </div>
          {/* <div className="col-4">
              <br/>
              <br/>
                            <div className="row shadow-lg p-3 mb-5 bg-white rounded" style={{width:'90%',margin: "50px 20px 20px 30px", borderRadius:'15px'}}>
                                
                                <div className="col">
                                    <span>Item Name</span><br/>
                                    <span>Brand</span><br/>
                                    <span>Model</span><br/>
                                    <span>Quantity</span><br/>
                                    <span>Price</span>
                                </div> 
                                <div className="col-1">
                                    
                                    <span> : </span><br/>
                                    <span> :</span><br/>
                                    <span> :  </span><br/>
                                    <span> : </span><br/>
                                    <span> :  </span>
                                </div> 
                                <div className="col">    
                                    <span>{items.Item_name}</span><br/>
                                    <span>{items.Brand} </span><br/>
                                    <span>{items.Model} </span><br/>
                                    <span>{items.Quantity} </span><br/>
                                    <span>{items.Price} </span>
                                </div>

                            </div>

                            </div> */}
</div>

 )

}



	