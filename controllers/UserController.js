const routes = require("express").Router();
const User = require("../models/User");

routes.get("/", async(req, res)=>{
    
    let result = await User.find();
    res.send(result);
})
routes.get("/changestatus/:a/:b", async(req, res)=>{
    let id = req.params.a;
    let st = req.params.b;
    if(st==1)
        await User.updateMany({_id : id}, {status : 0});
    if(st==0)
        await User.updateMany({_id : id}, {status : 1});
    res.send({ success : true });
})


module.exports = routes;