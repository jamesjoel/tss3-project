const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})
routes.get("/bycategory/:a", async(req, res)=>{
    let result = await Product.find({ category : req.params.a });
    res.send(result);
})
routes.get("/sort/price/:a", async(req, res)=>{
    if(req.params.a == 2){

        let result = await Product.find().sort({ price : 1 });
        res.send(result);
    }
    if(req.params.a == 3){
        
        let result = await Product.find().sort({ price : -1 });
        res.send(result);
    }
})
routes.post("/", async(req, res)=>{
    console.log(req.body);
    await Product.create(req.body);
    res.send({success : true});
})

module.exports = routes;