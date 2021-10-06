const router = require("express").Router();
let CustomerOrder = require("../modules/CustomerOrders");

//Insert
router.route("/addCusOrder").post((req, res) => {

  const CustomerID = req.body.CustomerID;
  const Orders = req.body.Orders;


  const newCustomerOrder = new CustomerOrder({
    CustomerID,
    Orders
   
  });

  newCustomerOrder
    .save()
    .then(() => {
     
        res.json("Order Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// retrive

// route("/") this can use for fetching all the data from the DB
router.route("/getCusOrder").get((reg, res) => {
    CustomerOrder.find()
    .then((itemss) => {
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/updateCusOrder/:id").put(async (req, res) => {
  let CusOrderID = req.params.id;
  const {
    CustomerID,
    Orders
  
  } = req.body;

  const updateItem = {
    CustomerID,
    Orders

  };

  const update = await CustomerOrder.findByIdAndUpdate( CusOrderID, updateItem)
    .then(() => {
      res.status(200).send({ status: "Customer Order updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .send({ status: "Error with updating data", error: err.message });
    });
});

// // delete
router.route("/deleteOrder/:id").delete(async (req, res) => {
    let CusOrderID = req.params.id;

  await CustomerOrder.findByIdAndDelete(CusOrderID)
    .then(() => {
      res.status(200).send({ status: "CustomerOrder Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// // get one student details (Specific)
router.route("/getOneOrder/:id").get(async (req, res) => {
    let CusOrderID = req.params.id;



  const itemss = await CustomerOrder.findById(itemID)
    .then((itemss) => {
      // res.status(200).send({status:"User fetched"});
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err.message);
    
    });
});




module.exports = router;
