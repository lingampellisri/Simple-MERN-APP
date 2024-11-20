const mongoose=require("mongoose");

const Students=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    task:{type:String,
        require:true
    }


})


const Student=mongoose.model("Users",Students);
module.exports=Student;