const express=require("express");
const axios = require('axios');
const mongoose=require("mongoose");
require("./Database/conn");
const userSchema =require("./Database/model");


const app= express();
app.use(express.json());

// HTTP requests   

app.get("/user",async (req,res)=>{
    const t= await userSchema.find()
    console.log("data get using Get");
    res.send(t);
})
app.get("/user/:id",async (req,res)=>{
try{
    const _id=req.params.id;
    const tp= await userSchema.findById(_id);
    console.log(tp);
    res.send(tp);
}
catch(e){
    res.status(400).send(e);
}
})


// here we ADD user?


app.post("/user",(req,res)=>{
    const resn=new userSchema(req.body);
    resn.save().then(()=>{
        console.log(resn);
        res.send("Hello form POST");
    }).catch((err)=>{
        res.send(err);
    })
})



// here we delete user 


app.delete("/user/:id",async (req,res)=>{
    try{
      const sss= await userSchema.findByIdAndDelete(req.params.id,{
          new:true
      });
       res.send(sss);
    }
    catch(e){
        res.send(e);
    }
})

// Here we update users to the database

app.patch("/user-details/:id",async (req,res)=>{
    try{ const _id=req.params.id;
     const query= {"_id":_id};
     const pushVal={ $set: { 
        "Name": req.body.name,
        "Gender":req.body.gender,
        "Phone":req.body.phone}
    };        
    
    await userSchema.findOneAndUpdate(query,pushVal,{
     new: true,
     runValidators: true,
     useFindAndModify: false,  
   })
    res.send("appended the array");
    }
    catch(err){
        res.send(err)
    }
 } ) 



//  here we add books to the database
app.patch("/addBooks/:id",async (req,res)=>{
    try{ const _id=req.params.id;
        const query= {"_id":_id};
        const pushVal={ $push: { "Books": req.body}};        
        
      const x= await userSchema.findOneAndUpdate(query,pushVal,{
        new: true,
        runValidators: true,
        useFindAndModify: false,  
      });
       res.send("appended the array");
       }
       catch(err){
           res.send(err)
       }
} ) 


// books delete 

app.delete("/addBooks/:id",async (req,res)=>{
    try{
      const sss= await userSchema.findByIdAndDelete(req.params.id,{
          new:true
      });
       res.send(sss);
    }
    catch(e){
        res.send(e);
    }
})

app.listen(4000,()=>{ 
    console.log("server is created at port no 4000");  
});   

