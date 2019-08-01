var express = require('express');
var app = express();

var config = require("./config");
var router = express.Router();

var User = require("./User.model");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/users",function(req,res){
    console.log("Hi this is user get router");

    User.find({}, function(err, users){

        if(err){
            res.json({
                status : false,
                message : err
            })
        }else{
            res.json({
                status : true,
                message : users
            })
        }
    })
})

 router.post("/users",function(req,res){
    //console.log('Hello in post method');

    console.log("the body", req.body);

    var user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    
    user.save();

    res.json({
        status : true,
        message : "Dtat inserted"
    })

}) 

router.put("/users/:id", function(req,res){
    console.log("Inside the put /update method");

    var id = req.params.id;

    User.update({_id : id }, {$set : {name : req.body.name, age : req.body.age }}, function(err,result){
        if(err){
            res.json({
                status : false,
                message : err
            })
        } else {
            res.json({
                status : true,
                message : "User updated"
            })
        }
    })

})

router.delete("/users/:id", function(req,res){
    console.log("Hi its delete");

    var id = req.params.id;

    User.remove({_id : id}, function(err, result){
        if(err){
            res.json({
                status : false,
                message : err
            })
        } else {
            res.json({
                status : true,
                message : "User deleted"
            })
        }
    })
})

app.use("/api",router);
app.listen(config.port, function(){
    console.log("Hello test connect");
})