const router = require("express").Router();
let Item = require("../modules/Item");

//Insert
router.route("/addItems").post((req, res) => {
  const Item_name = req.body.Item_name;
  const Brand = req.body.Brand;
  const Quantity = parseInt(req.body.Quantity);
  const Model = req.body.Model;
  const Price = req.body.Price;
  const Stock_keeping_unit = req.body.Stock_keeping_unit;
  const Description = req.body.Description;
  const Specification = req.body.Specification;
  const WHT = req.body.WHT;
  const Warrenty = req.body.Warrenty;
  const Color_family = req.body.Color_family;
  const Other_colors = req.body.Other_colors;
  const Images = req.body.Images;
  const Category = req.body.Category;
  const ItemAvailabilityStatus = req.body.ItemAvailabilityStatus;
  const DiscountStatus = req.body.DiscountStatus;
  const FinalPrice = req.body.Price;
  const DiscountPrecentage = req.body.DiscountPrecentage;
  const SellerID = req.body.SellerID;

  const newItem = new Item({
    Item_name,
    Brand,
    Quantity,
    Model,
    Price,
    Stock_keeping_unit,
    Description,
    Specification,
    WHT,
    Warrenty,
    Color_family,
    Other_colors,
    Images,
    Category,
    ItemAvailabilityStatus,
    DiscountStatus,
    FinalPrice,
    DiscountPrecentage,
    SellerID
  });

  newItem
    .save()
    .then(() => {
      res.json({
        newItem: {
          _id: newItem._id,
          Item_name: newItem.Item_name,
          Brand: newItem.Brand,
          Quantity: newItem.Quantity,
          Model: newItem.Model,
          Price: newItem.Price,
          Stock_keeping_unit: newItem.Stock_keeping_unit,
          Description: newItem.Description,
          Specification: newItem.Specification,
          WHT: newItem.WHT,
          Warrenty: newItem.Warrenty,
          Color_family: newItem.Color_family,
          Other_colors: newItem.Other_colors,
          Images: newItem.Images,
          Category: newItem.Category,
          ItemAvailabilityStatus : newItem.ItemAvailabilityStatus,
          DiscountStatus : newItem.DiscountStatus,
          FinalPrice : newItem.FinalPrice,
          DiscountPrecentage : newItem.DiscountPrecentage,
          SellerID : newItem.SellerID
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
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/update/:id").put(async (req, res) => {
  let itemID = req.params.id;
  const {
    Item_name,
    Brand,
    Quantity,
    Model,
    Price,
    Stock_keeping_unit,
    Description,
    Specification,
    WHT,
    Warrenty,
    Color_family,
    Other_colors,
    Images,
    Category,
    ItemAvailabilityStatus,
    DiscountStatus,
    FinalPrice,
    DiscountPrecentage,
    SellerID
  } = req.body;

  const updateItem = {
    Item_name,
    Brand,
    Quantity,
    Model,
    Price,
    Stock_keeping_unit,
    Description,
    Specification,
    WHT,
    Warrenty,
    Color_family,
    Other_colors,
    Images,
    Category,
    ItemAvailabilityStatus,
    DiscountStatus,
    FinalPrice : Price,
    DiscountPrecentage,
    SellerID
  };

  const update = await Item.findByIdAndUpdate(itemID, updateItem)
    .then(() => {
      res.status(200).send({ status: "Item updated" });
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
  let itemID = req.params.id;

  await Item.findByIdAndDelete(itemID)
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
  let itemID = req.params.id;
  const items = await Item.findById(itemID)
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



//Update Discount
router.route("/updateDiscount/:id").put(async (req, res) => {
  let itemID = req.params.id;
  const{
        DiscountStatus,
        DiscountPrecentage,
        FinalPrice
       } = req.body;

  const DiscountedItem  = {
    DiscountStatus,
    DiscountPrecentage,
    FinalPrice
  }

  const update = await Item.updateOne(

    {_id : itemID},
    {$set : {DiscountStatus :DiscountStatus , DiscountPrecentage: DiscountPrecentage, FinalPrice : FinalPrice}},


  ).then(() => {

    res.status(200).send({ status: "Item updated" });
  })
  .catch((err) => {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with updating data", error: err.message });
  });


  })





module.exports = router;
