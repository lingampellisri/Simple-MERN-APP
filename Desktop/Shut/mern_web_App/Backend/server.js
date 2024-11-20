const express=require('express');
const mongoose=require("mongoose");
const cors=require("cors");
// const Student=require('./model/sample');
const Student=require("./model/sample")




mongoose.connect("mongodb+srv://lingampellisrinivas3036:yrfhjhkjh@mytrial.3k90eb2.mongodb.net/Neurologist?retryWrites=true&w=majority&appName=Mytrial", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error while connecting to MongoDB", error);
    });

    const app=express();
    app.use(cors());
    app.use(express.json());

app.post("/Add",async(req,res)=>
{
    const {email,name,task}=req.body;
    try{
    const newuser=new Student({email,name,task})
    const inserted= await newuser.save();
    if(inserted)
    {
        res.status(200).json({message:"Data inserted",
            inserted
        });

        console.log(`Data Inserted : ${inserted}`);
    }
    else{
        res.status(404).json({message:"Error while inserting the Data"})
    }
        }
    catch(err)
    {
        res.status(500).json({message:"Error while post data",
            error:err
        });
    }

});



    app.listen(5050,()=>
    {
    console.log("server running at 5050");
    });