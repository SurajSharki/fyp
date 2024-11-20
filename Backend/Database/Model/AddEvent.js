const mongoose = require("mongoose");

const addEventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  organized: {
    type: String,
    require: true,
  },
  ageCategory: {
    type: String,
    require: true,
  },
  eventDesc: {
    type: String,
    require: true,
  },
  game: {
    type: String,
    require: true,
  },
  imgName: {
    type: String,
    require: true,
  },
  registrationFee: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  time:{
    type:String,
    require:true
  },
  date:{
    type:String,
    require:true
  },
  capacity:{
    type:Number,
    require:true
  },
  addedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Academy",
    },
  ],
  registered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("AddEvent", addEventSchema);
