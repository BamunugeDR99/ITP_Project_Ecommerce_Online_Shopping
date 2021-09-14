const router = require("express").Router();
let ItemWishList = require("../modules/ItemWishList");

//Insert
router.route("/addItems").post((req, res) => {

  const CustomerID = req.body.CustomerID;
  const Items = req.body.Items;


  const newWishlistItem = new ItemWishList({
    CustomerID,
    Items
   
  });

  newWishlistItem
    .save()
    .then(() => {
      res.json({
        newWishlistItem: {
          _id: newWishlistItem._id,
          CustomerID: newWishlistItem.CustomerID,
          Items: newWishlistItem.Items,
  
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
  Item.find()
    .then((itemss) => {
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/update/:id").put(async (req, res) => {
  let wishListItemID = req.params.id;
  const {
    CustomerID,
    Items
  
  } = req.body;

  const updateItem = {
    CustomerID,
    Items

  };

  const update = await ItemWishList.findByIdAndUpdate(wishListItemID, updateItem)
    .then(() => {
      res.status(200).send({ status: "wishlist Item updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// // delete
router.route("/delete/:id").delete(async (req, res) => {
  let wishListItemID = req.params.id;

  await ItemWishList.findByIdAndDelete(wishListItemID)
    .then(() => {
      res.status(200).send({ status: "Item Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete", error: err.message });
    });
});

// // get one student details (Specific)
router.route("/get/:id").get(async (req, res) => {
  let wishListItemID = req.params.id;
  const itemss = await ItemWishList.findById(itemID)
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


router.post("/getByCustomerID/:id", (req, res) => {
  // const { CustomerID } = req.body;
  let CustomerIDG = req.params.id;
  const {CustomerIDGG} = CustomerIDG;
// when there are two equals inputs in the database the first document will be retireved from the database 

  ItemWishList.findOne({ CustomerIDGG }).then((wishlistss) => {
  
    res.json({
      wishlistss: {
        _id: wishlistss._id,
        CustomerID: wishlistss.CustomerID,
        Items: wishlistss.Items,
      }
    });
  });
});


module.exports = router;
