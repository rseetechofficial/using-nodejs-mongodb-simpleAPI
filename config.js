
module.exports = {
    port : 3002
}


var mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost:27017/blog", function(err,res){

        if(err){
            console.log("Error is ", err);
        } else{
            console.log("Database is connected");
        }
})