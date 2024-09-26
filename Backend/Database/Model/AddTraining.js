const mongoose = require("mongoose")


const addTrainingSchema = new mongoose.Schema({
    sessionName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    imgName:{
        type:String,
        require:true 
    },
    academyName:{
        type:String,
        require:true 
    },
    coachName:{
        type:String,
        require:true
    },
    experience:{
        type:String,
        require:true 
    },
    License:{
        type:String,
        require:true
    },
    achievement:{
        type:String,
        require:true
    },
    games:{
        type:String,
        require:true
    },
    cost:{
        type:Number,
        require:true 
    },
    days:{
        type:String,
        require:true 
    },

})

module.expert = mongoose.model("AddTraining", addTrainingSchema)