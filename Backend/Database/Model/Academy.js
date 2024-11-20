const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  address: {
    type: String,
  },
  about: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  facebookLink:{
    type:String

  },
  instagramLink:{
    type:String
    },
  created: {
    type: Date,
    default: Date.now,
  },
  addedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Academy",
    },
  ],
});

module.exports = mongoose.model("Academy", academySchema);
