const mongoose  = require("mongoose");

const productSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    post_description:{
        type:String,
        required:true,
    },
    post_image:{
        type:String,
        required:true,
    },
    user_profile_image:{
        type:String,
        required:true,
    },
    likes:{
        type:Number,
        default:4.9,
    },
    comments:{
        type:String,
        default:"",
    }
});

module.exports=mongoose.model("post_data",productSchema);