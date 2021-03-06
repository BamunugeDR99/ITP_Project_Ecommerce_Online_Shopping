const router = require("express").Router();
const pdf = require('html-pdf');
const pdfTemplate = require("../documents/studentReport");
const pdftem = require("../documents/TotalTransactions");
let OrderHistory = require("../modules/OrderHistory");

//Insert
router.route("/addItems").post((req, res) => {

  const RecieptNo = req.body.RecieptNo;
  const PacakgeID = req.body.PacakgeID;
  const PaymentType = req.body.PaymentType;
  const ItemList = req.body.ItemList;
  const Amount = req.body.Amount;
  const CustomerID = req.body.CustomerID;

  const newOrderHistory = new OrderHistory({
    RecieptNo,
    PacakgeID,
    PaymentType,
    ItemList,
    CustomerID,
    Amount
   
  });

  newOrderHistory
    .save()
    .then(() => {
      res.json({
        newOrderHistory: {
            RecieptNo: newOrderHistory.RecieptNo,
            PacakgeID: newOrderHistory.PacakgeID,
            PaymentType: newOrderHistory.PaymentType,
            ItemList: newOrderHistory.ItemList,
            CustomerID:newOrderHistory.CustomerID,
            Amount: newOrderHistory.Amount,


  
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// retrive

// route("/") this can use for fetching all the data from the DB
router.route("/getItems").get((reg, res) => {
  OrderHistory.find()
    .then((itemss) => {
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err);
    });
});

// // update
// router.route("/update/:id").put(async (req, res) => {
//   let wishListItemID = req.params.id;
//   const {
//     CustomerID,
//     Items
  
//   } = req.body;

//   const updateItem = {
//     CustomerID,
//     Items

//   };

//   const update = await ItemWishList.findByIdAndUpdate(wishListItemID, updateItem)
//     .then(() => {
//       res.status(200).send({ status: "wishlist ItemWishList updated" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ status: "Error with updating data", error: err.message });
//     });
// });

// // // delete
// router.route("/delete/:id").delete(async (req, res) => {
//   let wishListItemID = req.params.id;

//   await ItemWishList.findByIdAndDelete(wishListItemID)
//     .then(() => {
//       res.status(200).send({ status: "ItemWishList Deleted" });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res.status(500).send({ status: "Error with delete", error: err.message });
//     });
// });

// // get one student details (Specific)
router.route("/get/:id").get(async (req, res) => {
  let orderhistoryID = req.params.id;
  const itemss = await OrderHistory.findById(orderhistoryID)
    .then((itemss) => {
      // res.status(200).send({status:"User fetched"});
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});


// router.post("/getByCustomerID/:id", (req, res) => {
//   // const { CustomerID } = req.body;
//   let CustomerIDG = req.params.id;
//   const {CustomerIDGG} = CustomerIDG;
// // when there are two equals inputs in the database the first document will be retireved from the database 

//   ItemWishList.findOne({ CustomerIDGG }).then((wishlistss) => {
  
//     res.json({
//       wishlistss: {
//         _id: wishlistss._id,
//         CustomerID: wishlistss.CustomerID,
//         Items: wishlistss.Items,
//       }
//     });
//   });
// });


// post PDF

router.post('/create-pdf',(req,res) => {
  pdf.create(pdftem(req.body),{}).toFile('./routes/result.pdf',(err) =>{
    if(err){
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

// get PDF
router.get('/fetch-pdf',(req,res)=>{
  res.sendFile(`${__dirname}/result.pdf`)
            // absolute directory
})



module.exports = router;
