const express = require("express")
const bodyParser = require("body-parser")
const connectionString = require("./Database/connection")
const User = require("./Database/Model/user")
const Academy = require("./Database/Model/Academy")
const cors = require("cors")
const jwt= require("jsonwebtoken")
const cookieparser = require("cookie-parser")

const app = express();
app.use(cookieparser())
app.use(cors({
    origin:"http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

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
        const token = jwt.sign({id: loginUser._id, usertype: loginUser.usertype},"dbfjhjasfjhjafhjhjFAHKJHJFHSA",{
            expiresIn: "1h"
        })

        res.cookie("token",token,{
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 24*60*60*1000
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
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Token not available"})
    }
    jwt.verify(token,"dbfjhjasfjhjafhjhjFAHKJHJFHSA", (err,decoded)=>{
        if(err){
            return res.status(401).json({message:"Invalid token"})
            }
        if(decoded.usertype == "academy"){
            return res.status(200).json({message:"Academy verified", status:"ok", usertype: decoded.usertype})
        }else{
            return res.status(400).json({message:"Invalid Token"})
        }
    } )
} )

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
})