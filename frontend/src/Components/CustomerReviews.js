import React, { useState, useEffect } from "react";
import axios from "axios";

import "../CSS/cusreview.css";

export default function CustomerReviews(props){

    let [review,setReview] = useState([]);
	const [customertest,setCustomertest] = useState([]);
    // const [loads,setLoad] = useState(false);
    let [customer , setCustomer]= useState([]);
    let customers = [];
// 11
// h ,j
  useEffect(() =>{
    function getReview(){
        axios.get("http://localhost:8070/review/get").then((res) =>
        {
            setReview(res.data);
            const filter=res.data.filter((itemrev)=> itemrev.itemid ==="611f4784c259414e3c405a34"
            );
            review=filter
            console.log(review)
            for(let i = 0; i < review.length; i++){
                let customerid = review[i].customerid
                console.log(customerid);

                axios.get("http://localhost:8070/customertest/get/"+customerid).then((res) =>{
                    console.log(res.data);
                    customer=(res.data);
                    customers.push(customer);
                    console.log(customers);
                })
            .catch((err) =>{
                alert(err);
            })
                // axios.get(customerid)
                // setCustomer(res.data);
                // customers.push(customer);
        }


            // console.log(res.data);
            
            
        }).catch((err) =>{
            alert(err);
        })
    }
   
    getReview();

    
   
}, []);
customers.map((c)=>{
    console.log(c.name)
})

 return(

 <div class="rev">
    <h1 id="h1"> Customer Reviews</h1>
    <h5 id="h5">what our customers say about us</h5>

    <div className="row" style={{ padding: '80px' }}>

	{review.map((review,index) =>{

    <h1 id = "txt"></h1>
        return( 

        <div className="col-sm-3" >
            <div  className="card" style={{width: '18rem'}}>
                <div>

                {customers.map((pack)=> {
                    return(
                        <div>
                        <div>
                            <img src={`../images/${pack.cusimage}`} className="card-img-top"/>
                        </div>
                        <div>
                        
                        <h5>dfb{pack.name}</h5>
     
                    </div>
                    </div>
                    )
                    })
                    }
                            




                    <br/>
                    <div className="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{review.description}</p>
                </div>
            </div>
        </div>

        )
        })}	

    </div>
</div> 


 )

}


