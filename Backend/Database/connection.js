const mongoose = require("mongoose");

const connectionString = mongoose.connect("mongodb+srv://sb2171539:Qa5KL0RDyFCtZ5wW@cluster0.zxqqx.mongodb.net/").then(()=>console.log("connection established to mongodb")).catch((err)=>console.log(err))

module.exports = connectionString;