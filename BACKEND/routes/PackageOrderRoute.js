const router = require("express").Router();

//import DiscountedItem model
let PackageOrder = require("../modules/PackageOrders");

//Add Order
router.route("/addOrder").post((req,res)=>{


    const 
    {
        OrderID,
        SellerID,
        CustomerID,
        OQuantity,
        TransitTime,
        Packages

    } = req.body;


    const newOrder = new PackageOrder({

        OrderID,
        SellerID,
        CustomerID,
        OQuantity,
        TransitTime,
        Packages


    })

    newOrder.save().then(()=> {

        res.json("Order Added");

    }).catch((err)=> {

        console.log(err);
    })


})


//Update Order
router.route("/updateOrder/:id").put(async (req, res) => {

    let OrderObjectID = req.params.id;

    
    const 
    {
        OrderID,
        SellerID,
        CustomerID,
        OQuantity,
        TransitTime,
        Packages

    } = req.body;


    const UpdatedOrder = new Order({

        OrderID,
        SellerID,
        CustomerID,
        OQuantity,
        TransitTime,
        Packages


    })


const update = await PackageOrder.findByIdAndUpdate(OrderObjectID, UpdatedOrder).then(() => {

   
        res.json("Order Updated");
}).catch((err) => {

    console.log(err);
   res.status(500).send({ status: "Error with updating data", error: err.message });
})


})




//Get All Orders
router.route("/getOrders").get((req, res) => {

    //Variable declared at line 5
    PackageOrder.find().then((items) => {

        res.json(items);
    }).catch((err) => {

        console.log(err);
    })


})


//Get Specific Order
router.route("/getOrder/:id").get(async (req, res) => {

    let OrderObjectID = req.params.id;

    //can use findOne if searching by another attribute
    const user = await PackageOrder.findById(OrderObjectID).then((item) => {

       //res.status(200).send ({status : "User Fetched" , item});
        res.json(item);
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send ({status : "Error with get Item", error: err.message});
    })
})



//Delete Order
router.route("/deleteOrder/:id").delete(async (req, res) => {

    let OrderObjectID = req.params.id;

    await PackageOrder.findByIdAndDelete(OrderObjectID)
    .then(() => {

        res.status(200).send({status: "Item deleted"});
 

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status: "Error with delete Item", error : err.message} );
    })
})




module.exports = router;