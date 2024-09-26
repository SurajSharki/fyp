const express = require("express")
const bodyParser = require("body-parser")
const connectionString = require("./Database/connection")
const User = require("./Database/Model/user")
const Academy = require("./Database/Model/Academy")
const cors = require("cors")
const jwt= require("jsonwebtoken")
const cookieparser = require("cookie-parser")
const multer = require("multer")

const app = express();
app.use(cookieparser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("./images"))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split(".")[file.originalname.split(".").length -1]
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + "."+ ext)
    }
  })
  
  const upload = multer({ storage: storage })

app.post("/register", async(req, res)=>{
    try {
        const {usertype,email, password} = req.body;
        if(usertype ==="student"){
            const user = new User({
                usertype,
                email,
                password
            });
            const registerUser = await user.save()
        }else{
            const user = new Academy({
                usertype,
                email,
                password
            });
            const registerUser = await user.save()
           
        }
        
        res.status(201).json({message: "User Registered Successfully", status:"ok"})
        
    } catch (error) {
        console.log(error)
        res.status(401).json({messge: error.message})
        
    }

})

app.post("/login",async(req, res)=>{
    try {
        const {email, password}=req.body;
        console.log(req.body)
        let loginUser = await User.findOne({email, password});
        console.log("Login User in User",loginUser)
        if(!loginUser){
            loginUser = await Academy.findOne({email,password})
            console.log("Login User in Academy",loginUser)
        }
        if(!loginUser){
            return res.status(401).json({message:"Invalid details"})
        }
        console.log("user Found")
        const token = jwt.sign({id: loginUser._id, usertype: loginUser.usertype},"kuchvimatkahovai",{
            expiresIn: "1h"
        })

        res.cookie("token",token,{
            httpOnly: true, // Ensures cookie is not accessible via JavaScript
            secure: false,  // Set to true if using HTTPS
            sameSite: "Lax", // Adjust based on your CORS needs
            maxAge: 3600000 // Cookie expiration time
        })
        console.log(loginUser)
        return res.status(200).json({token, data: loginUser, message:"Logged In", status:"ok" })

    

        // if(loginUser){
        //    return res.status(200).json({message: "User logged in Successfully", status:"ok"})
        // }
        // const user = await Academy.find({email, password});
        // if(user){
        //     return res.status(200).json({message: "User logged in Successfully", status:"ok"})
        // }

        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
        
    }
})

app.get("/verfifyAcademy", async(req,res)=>{
    console.log("comung ")
    const tokenn = req.cookies.token;
    console.log(tokenn)
    if(!tokenn){
        return res.json({message:"Token not available", status: "invalid"})
    }
    jwt.verify(tokenn,"kuchvimatkahovai", (err,decoded)=>{
        if(err){
            return res.json({message:"Invalid token", status:"invalid"})
            }
        if(decoded.usertype == "academy"){
            return res.status(200).json({message:"Academy verified", status:"ok", usertype: decoded.usertype})
        }else{
            return res.status(400).json({message:"Invalid Token"})
        }
    } )
} )

app.put("/addAcademyProfile/:academyId", upload.fields([{
    name:"profilePicture",maxCount:1
}]), async(req,res)=>{
    try {
        console.log(req.params.academyId)
        const profilePicture = req.files.profilePicture ? req.files.profilePicture[0] :null;
        if(profilePicture){
            req.body.profilePicture = `http://localhost:8000/${profilePicture.filename}`
        }
        const updateAcademy = await Academy.findByIdAndUpdate(
            req.params.academyId,
            req.body,
            {new: true}
        )
        return res.status(200).json({success: true, data: updateAcademy})
    } catch (error) {
        console.log(error.message)
    }
})


app.get("/academyInfo/:academyId",async(req,res)=>{
    try {
        const academyId = req.params.academyId;
        const academy = await Academy.findOne({_id: academyId})
        console.log(academy)
        res.json({message: "hello", data : academy})
    } catch (error) {
        
    }
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})