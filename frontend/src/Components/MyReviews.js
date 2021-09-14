import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";


export default function MyReviews(props) {
  let [review, setReview] = useState([]);
  let re = [];
  const [itemtest, setItemrtest] = useState([]);
  let [Item, setItem] = useState([]);
  let items = [];
  let itemName = "";
  let itemImage = "";
  let Review = "";
  let [abc, setabc] = useState([]);
  let reviewWithItem = {

    itemName,
    itemImage,
    Review
  
} 

  let reviewWithItems = [];



  useEffect(() => {
    function getReview() {
      axios
        .get("http://localhost:8070/review/get")
        .then((res) => {
          //setReview(res.data);
          const filter = res.data.filter(
            (customerrev) => customerrev.customerid === "6136208b00a06503a0eea457"
          );
         // review = setReview(filter);
          re = filter;
        //   console.log(re.length);


          for (let i = 0; i < re.length; i++) {
            console.log("sdf");
            let itemid = re[i].itemid;
            // console.log(itemid);
      
            axios
              .get("http://localhost:8070/itemtest/get/" + itemid)
              .then((res) => {
                // console.log(res.data);
      
                reviewWithItem = {
                    itemName : res.data.name,
                    itemImage : res.data.cusimage,
                    Review : re[i].description
                }    
      
                // console.log(reviewWithCustomer);
                reviewWithItems.push(reviewWithItem);
                //console.log(reviewWithItems);
                setabc(reviewWithItems);
              
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
      <h1 id="h1"> Customer Reviews</h1>
      <h5 id="h5">what our customers say about us</h5>

      {abc.map((reviewss) => {
        return (
          
          <div class="card" style={{width: "20%", margin:'50px',borderRadius:'15px',marginTop: '30px',height: '290px'}}>
            <div class="card-body">
            <img src={`../images/${reviewss.itemImage}`} style={{width:'80%', alignItems:'center'}}/>
              {/* <img src =  */}
              <h5 class="card-title">{reviewss.itemName}</h5>
              <div className="reviews">
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="far fa-star"></i>
                         </div>
                         <br/>
              <p class="card-text">
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


