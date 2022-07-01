const mongoose=require("mongoose");
// Schema created

const regisSchema=new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Phone:{
        type: Number,
        required: true
    },
    Books: [{ 
        title:{type:String},
        intro:{type:String},
        ebook:{type:String},
        purchase:{type:String},
        author:{type:String},
        imageLink:{type:String}
        }
    ]
}) ; 


// Now we will create our Collection(i.e Table)

const userSchema=new mongoose.model("UserDetail",regisSchema);
module.exports=userSchema;