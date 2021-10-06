import React, { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import g1 from "../images/avatar1.png";


import c1 from "../Css/Test2.css";

export default function Test2(props) {
//   const [item, setItem] = useState([]);

//   let item_id = "";
//   let items = [];
//   // let emails = [];
//   let sellers = [];
//   let sellerName = "";
//   let sellerImage = "";
//   let Item = "";
//   let Report = "";
//   let [abc, setabc] = useState([]);
//   let itemWithSeller = {
//     item_id,
//     sellerName,
//     sellerImage,
//     Item,
//     Report,
//   };
//   let filter_item = [];

//   let itemWithSellers = [];

//   useEffect(() => {
//     function getItem() {
//       let seller = localStorage.getItem("SellerID");
//      // let seller = "";


//       axios
//         .get("http://localhost:8070/items/getItems")
//         .then((res) => {
//           items = res.data;
//           // const filter = res.data.filter(

//           filter_item = res.data.filter(
//             (Item) =>
//               Item.SellerID === seller
//           );
//           console.log(filter_item);
//           console.log(seller);
//           // );
//           // ritems = filter;
//           console.log(items);
//           axios
//             .get("http://localhost:8070/Customer/getAll")
//             .then((res) => {
//               sellers = res.data;
//               createItem(filter_item, sellers);
//               console.log(sellers);
//             })
//             .catch((err) => {
//               alert(err);
//             });
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     }

//     getItem();
//   }, []);

// // 	function deletee(id,index){
// //     console.log(id);
// //     console.log(index)
// //       console.log(abc)
// //     const afterDeleteReview = abc.filter(review=>review.review_id != id);

// //     console.log(afterDeleteReview);

// //       setabc(afterDeleteReview);
      
// //     axios.delete("http://localhost:8070/review/delete/" + id).then((res) =>
// //     {
      
// //       alert("Review Deleted!");
// //     }).catch((err) =>{
// //         alert(err);
// //     })
// // }

//   function createItem(items, sellers) {
//     let j = 0;
//     for (let i = 0; i < items.length; i++) {
//       j = 0;
//       for (j = 0; j < sellers.length; j++) {
//         if (items[i].SellerID === sellers[j]._id) {
//           itemWithSeller = {
//             ritem_id:items[i]._id,
//             sellerName: sellers[j].ownername,
//             sellerImage: sellers[j].logo,
//             Item: items[i].description,
//             Report: items[i].reportreason,
//           };

//           itemWithSellers.push(itemWithSeller);
//         }
//       }
//     }
// 	console.log(itemWithSellers)
//     setabc(itemWithSellers);
// 	console.log(abc)
//   }

  return (

    
<div className="test2">
    <table>
        <tr id="header">
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Item No</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>steve </td>
            <td>Doe </td>
            <td><img src={g1} style={{width:'30%'}}/></td>
            <td>USA </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>simo </td>
            <td>Doe </td>
            <td><img src={g1} style={{width:'30%'}}/></td>
            <td>USA </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>karim </td>
            <td>Doe </td>
            <td><img src={g1} style={{width:'30%'}}/></td>
            <td>USA </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>karim </td>
            <td>Doe </td>
            <td><img src={g1} style={{width:'30%'}}/></td>
            <td>USA </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>
            <td>Male </td>

        </tr>
     

    </table>
</div>



    //   <div className="Container">
    // <table style={{position: 'absolute',left:'50%',top: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     borderCollapse: 'collapse',
    //     width: '800px',
    //     height: '200px',
    //     border: '1px solid #bdc3c7',
    //     boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2)'}}>

    //     <tr style={{transition: 'all .2s ease-in',cursor: 'pointer',backgroundColor: '#16a085', color: '#fff',
    //     hoverBackgroundColor: '#f5f5f5', hoverTransfrom:'scale(1.02)',hoverBoxShadow:'2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2)'
    //     // ,transform: 'scale(1.02)',boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2)'"
    // }}>
    //         <th>Order ID</th>
    //         <th>Customer Name</th>
    //         <th>Item Image</th>
    //         <th>Item Name</th>
    //         <th>Item No</th>
    //         <th>Category</th>
    //         <th>Quantity</th>
    //         <th>Price</th>
    //     </tr>
    //     <tr style={{transition: 'all .2s ease-in',cursor: 'pointer',hoverBackgroundColor: '#f5f5f5', hoverTransfrom:'scale(1.02)',hoverBoxShadow:'2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2)'}}>
    //         <td>John </td>
    //         <td>Doe </td>
    //         <td>25 </td>
    //         <td>USA </td>
    //         <td>Male </td>
    //         <td>Male </td>
    //         <td>Male </td>
    //         <td>Male </td>

    //     </tr>
    //     <tr style={{transition: 'all .2s ease-in',cursor: 'pointer'}}>
    //         <td>steve </td>
    //         <td>Doe </td>
    //         <td>28 </td>
    //         <td>USA </td>
    //         <td>Male </td>
    //         <td>Male </td>
    //         <td>Male </td>
    //         <td>Male </td>

    //     </tr>
    //     <tr style={{transition: 'all .2s ease-in',cursor: 'pointer'}}>
    //         <td>simo </td>
    //         <td>Doe </td>
    //         <td>26 </td>
    //         <td>USA </td>
    //         <td>Male </td>
    //         <td>Male </td>
    //         <td>Male </td>
    //         <td>Male </td>
            

    //     </tr>
    

    // </table>
    // </div>

  );
}

{/* <style>




th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}


h1 {
    font-weight: 600;
    text-align: center;
    background-color: #16a085;
    color: #fff;
    padding: 10px 0px;
}

tr:hover {
    background-color: #f5f5f5;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 768px) {
    table {
        width: 90%;
    }
}
</style> */}

