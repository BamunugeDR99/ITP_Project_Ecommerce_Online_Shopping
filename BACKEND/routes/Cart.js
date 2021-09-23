const router = require("express").Router();
let Cart = require("../modules/ShoppingCart");

router.route("/createrCart").post ((req, res)=>{

    const customerID  = req.body.customerID;
    const ItemIDs     = req.body.ItemIDs;
    const PackageIDs  = req.body.PackageIDs;


    const newCart = new Cart({

        customerID,
        ItemIDs,
        PackageIDs
    })

    //Insert the created object to the DB //.save()->pass the obeject to the mongo DB through the schema in the model
    newCart.save().then(() => {

        res.json("Cart Created"); //Pass to the frontend as response in json format
    }).catch((err) => {

        console.log(err); //Display the error in console
    })


})



router.route("/getAllCarts").get((req, res) => {

    //Variable declared at line 5
    Cart.find().then((carts) => {

        res.json(carts);
    }).catch((err) => {

        console.log(err);
    })


})


//Update ItemIDS
router.route("/updateCartItems/:id").put(async (req, res) => {
    let CartID = req.params.id;
    const{
            ItemIDs
       
         } = req.body;
  
    const UpdatedCart  = {
        ItemIDs
    }
  
 
    const update = await Cart.updateOne(
  
      {_id :CartID },
      {$set : { ItemIDs : ItemIDs}},
  
  
    ).then(() => {
  
      res.status(200).send({ status: "Cart updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
  
  
    })



    //Update Package Ids
    router.route("/updateCartPackages/:id").put(async (req, res) => {
        let CartID = req.params.id;
        const{
            PackageIDs
           
             } = req.body;
      
       
      
     
        const update = await Cart.updateOne(
      
          {_id :CartID },
          {$set : { PackageIDs : PackageIDs}},
      
      
        ).then(() => {
      
          res.status(200).send({ status: "Cart updated" });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .send({ status: "Error with updating data", error: err.message });
        });
      
      
        })


    //Get one Customer's Cart
    router.route("/getOneCart/:id").get((req, res)=> {


        let customerID = req.params.id;

        const getOne = Cart.findOne({customerID:customerID}).exec ((err, post) =>{

            if(err){

                console.log(err);
            }

            else{

                res.send(post);
            }

        })


    })


    //Delete Cart
    router.route("/deleteCart/:id").delete(async (req, res) => {

        let CartID = req.params.id;
    
        await Cart.findByIdAndDelete(CartID)
        .then(() => {
    
            res.status(200).send({status: "Cart deleted"});
     
    
        }).catch((err) => {
    
            console.log(err.message);
            res.status(500).send({status: "Error with delete Item", error : err.message} );
        })
    })
    
    


module.exports = router;
