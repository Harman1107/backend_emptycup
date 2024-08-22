const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    designerName:{
        type:String,
        required:[true, "please enter designer Name"]
    },
    designerRating : {
        type:Number,
        default:0
    },
    shortlisted:{
        type:Boolean,
        default:false
    },
    designerDescription:{
        type:String,
        required:[true, "please enter designer Description"]
    },
    projects:{
        type:Number,
        required:[true, "please enter No. of Projects"]
    },
    experience:{
        type:Number,
        required:[true, "please enter Designer Experience"]
    },
    price:{
        type:Number,
        required:[true, "please enter Designer Price"]
    },
    contacts:{
        type:Array,
        required:[true, "please enter contacts"]
    }
})

module.exports = mongoose.model("User", userSchema);