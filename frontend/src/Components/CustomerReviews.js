import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";


export default function CustomerReviews(props) {
  let [review, setReview] = useState([]);
  let re = [];
  const [customertest, setCustomertest] = useState([]);
  let [customer, setCustomer] = useState([]);
  let customers = [];
  let customerName = "";
  let customerImage = "";
  let Review = "";
  let [abc, setabc] = useState([]);
  let reviewWithCustomer = {

    customerName,
    customerImage,
    Review
  
} 

  let reviewWithCustomers = [];



  useEffect(() => {
    function getReview() {
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          //setReview(res.data);
          const filter = res.data.filter(
            (itemrev) => itemrev.itemid === "611f4784c259414e3c405a34"
          );
         // review = setReview(filter);
          re = filter;
        //   console.log(re.length);


          for (let i = 0; i < re.length; i++) {
            console.log("sdf");
            let customerid = re[i].customerid;
            // console.log(customerid);
      
            axios
              .get("http://localhost:8070/Customer/get/" + customerid)
              .then((res) => {
                // console.log(res.data);
      
                reviewWithCustomer = {
                    customerName : res.data.firstName,
                    customerImage : res.data.userImage,
                    Review : re[i].description
                }    
      
                // console.log(reviewWithCustomer);
                reviewWithCustomers.push(reviewWithCustomer);
                //console.log(reviewWithCustomers);
                setabc(reviewWithCustomers);
              
              })
              .catch((err) => {
                alert(err);
              });
      
          }

        })
        .catch((err) => {
          alert(err);
        });
    }



    getReview();
    // getCustomer();
  },[]);



  

  return (
    <div style={{padding:'20px 15px 10px 50px'}}> 
    <div class="rev">
      
    <div className="container">
    <div class="shadow-lg p-3 mb-5 bg-white rounded"style={{width:'100%',alignItems:'center', borderRadius:'5px'}}>
      <br/>
      <h1 style={{textAlign: 'center', color: 'black'}}> Customer Reviews</h1>
      <h5 style={{textAlign: 'center', color: 'black'}}>what our customers say about us</h5>

      {abc.map((reviewss) => {
        return (
          
          <div class="card" style={{width: "20%", margin:'50px',borderRadius:'15px',marginTop: '30px',height: '290px'}}>
            <div class="card-body">
            <img src={`../images/${reviewss.customerImage}`} style={{width:'80%', alignItems:'center'}}/>
              {/* <img src =  */}
              <h5 class="card-title">{reviewss.customerName}</h5>
              <div style={{color: "#f9d71c",textAlign:'center'}}>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="far fa-star"></i>
                         </div>
                         <br/>
              <p style={{textAlign:'center', fontSize:'16px'}}>
             {reviewss.Review}
              </p>
              
            </div>
          </div>
        );
      })}
    </div>
    </div>
    </div>
    </div>
    
  );
}

//  return(

//  <div class="rev">
//     <h1 id="h1"> Customer Reviews</h1>
//     <h5 id="h5">what our customers say about us</h5>

//     <div className="row" style={{ padding: '80px' }}>

// 	{review.map((review,index) =>{

//     <h1 id = "txt"></h1>
//         return( 

//         <div className="col-sm-3" >
//             <div  className="card" style={{width: '18rem'}}>
//                 <div>

//                 {customers.map((pack)=> {
//                     return(
//                         <div>
//                         <div>
//                             <img src={`../images/${pack.cusimage}`} className="card-img-top"/>
//                         </div>
//                         <div>
                        
//                         <h5>dfb{pack.name}</h5>
     
//                     </div>
//                     </div>
//                     )
//                     })
//                     }
                            




//                     <br/>
//                     <div className="reviews">
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star"></i>
//                             <i class="fas fa-star"></i>
//                             <i class="far fa-star"></i>
//                         </div>
//                 </div>
//                 <div className="card-body">
//                     <p className="card-text">{review.description}</p>
//                 </div>
//             </div>
//         </div>

//         )
//         })}	

//     </div>
// </div> 


//  )

// }


