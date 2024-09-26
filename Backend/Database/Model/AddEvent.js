const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose")

const addEventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    organized:{
        type:String,
        require:true
    },
    ageCategory:{
        type:String,
        require:true
    },
    eventDesc:{
        type:String,
        require:true 
    },
    game:{
        type:String,
        require:true
    },
    imgName:{
        type:String,
        require:true 
    },
    registrationFee:{
        type:String,
        require:true 
    },
    location:{
        type:String,
        require:true
    },


})



module.exports = mongoose.model("AddEvent",addEventSchema);