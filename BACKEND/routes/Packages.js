const router = require("express").Router();
const pdf = require('html-pdf');
const pdfTemplate = require("../documents/PackageMonthlyReport");

//import DiscountedItem model
let Package = require("../modules/Package");



//Create routes for the CRUD

//Insert
//URL-->https://tech-scope-online.herokuapp.com/Packages/addPackage--> will execute addDiscount route
router.route("/addPackage").post((req, res) => {

    //Create const variables for variables in the model
    const packageName = req.body.packageName;
    const description   = req.body.description;
    const price    = Number(req.body.price);
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const image = req.body.image;
    const content = req.body.content;
    const seller = req.body.seller; 
    const packageAvailability = req.body.packageAvailability;
  
    //Create a object of the DiscountedItem model
    const newPackage= new Package({
        
        packageName,
        description,
        price,
        startDate,
        endDate,
        image,
        seller,
        content,
        packageAvailability


    })


    //Insert the created object to the DB //.save()->pass the obeject to the mongo DB through the schema in the model
    newPackage.save().then(() => {

        res.json(" Package Added"); //Pass to the frontend as response in json format
    }).catch((err) => {

        console.log(err); //Display the error in console
    })

})



router.route("/getPackages").get((req, res) => {

    //Variable declared at line 5
    Package.find().then((items) => {

        res.json(items);
    }).catch((err) => {

        console.log(err);
    })


})



router.route("/updatePackages/:id").put(async (req, res) => {

    let packageID = req.params.id; //ID comes as a parameter of the URL --> fetch and assign it to itemID

    const packageName = req.body.packageName;
    const description   = req.body.description;
    const price    = Number(req.body.price);
    const startDate = new Date(req.body.startDate).toISOString();
    const endDate = new Date(req.body.endDate).toISOString();
    const image = req.body.image;
    const content = req.body.content;
    const seller = req.body.seller; 
    const packageAvailability = req.body.packageAvailability;
    const _id = packageID;


    const updatedPackage= new Package({
        
        packageName,
        description,
        price,
        startDate,
        endDate,
        image,
        content,
        seller,
        packageAvailability,
        _id

    })

    

    const update = await Package.findByIdAndUpdate(packageID, updatedPackage).then(() => {

   
        res.json("Item Updated");
}).catch((err) => {

    console.log(err);
   res.status(500).send({ status: "Error with updating data", error: err.message });
})


})




router.route("/deletePackage/:id").delete(async (req, res) => {

    let packageID = req.params.id;

    await Package.findByIdAndDelete(packageID)
    .then(() => {

        res.status(200).send({status: "Item deleted"});
 

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status: "Error with delete Item", error : err.message} );
    })
})











  //URL-->https://tech-scope-online.herokuapp.com/Packages/getPackage/5f346790adf679
  router.route("/getPackage/:id").get(async (req, res) => {

    let packageID = req.params.id;

    //can use findOne if searching by another attribute
    const user = await Package.findById(packageID).then((item) => {

       //res.status(200).send ({status : "User Fetched" , item});
        res.json(item);
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send ({status : "Error with get Item", error: err.message});
    })
})



// post PDF

router.post('/create-pdf',(req,res) => {
    pdf.create(pdfTemplate(req.body),{}).toFile('./routes/result.pdf',(err) =>{
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