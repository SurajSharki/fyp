const express = require("express");
const bodyParser = require("body-parser");
const connectionString = require("./Database/connection");
const User = require("./Database/Model/user");
const Academy = require("./Database/Model/Academy");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const multer = require("multer");
const Event = require("./Database/Model/AddEvent");
const AddTraining = require("./Database/Model/AddTraining");
const app = express();
app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./images"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const ext =
      file.originalname.split(".")[file.originalname.split(".").length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
  },
});

const upload = multer({ storage: storage });

app.post("/register", async (req, res) => {
  try {
    const { usertype, email, password } = req.body;
    if (usertype === "student") {
      const user = new User({
        usertype,
        email,
        password,
      });
      const registerUser = await user.save();
    } else {
      const user = new Academy({
        usertype,
        email,
        password,
      });
      const registerUser = await user.save();
    }

    res
      .status(201)
      .json({ message: "User Registered Successfully", status: "ok" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ messge: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let loginUser = await User.findOne({ email, password });
    console.log("Login User in User", loginUser);
    if (!loginUser) {
      loginUser = await Academy.findOne({ email, password });
      console.log("Login User in Academy", loginUser);
    }
    if (!loginUser) {
      return res.status(401).json({ message: "Invalid details" });
    }
    console.log("user Found");
    const token = jwt.sign(
      { id: loginUser._id, usertype: loginUser.usertype },
      "kuchvimatkahovai",
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true, // Ensures cookie is not accessible via JavaScript
      secure: false, // Set to true if using HTTPS
      sameSite: "Lax", // Adjust based on your CORS needs
      maxAge: 3600000, // Cookie expiration time
    });
    console.log(loginUser);
    return res
      .status(200)
      .json({ token, data: loginUser, message: "Logged In", status: "ok" });

    // if(loginUser){
    //    return res.status(200).json({message: "User logged in Successfully", status:"ok"})
    // }
    // const user = await Academy.find({email, password});
    // if(user){
    //     return res.status(200).json({message: "User logged in Successfully", status:"ok"})
    // }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

app.get("/verfifyAcademy", async (req, res) => {
  console.log("comung ");
  const tokenn = req.cookies.token;
  console.log(tokenn);
  if (!tokenn) {
    return res.json({ message: "Token not available", status: "invalid" });
  }
  jwt.verify(tokenn, "kuchvimatkahovai", (err, decoded) => {
    if (err) {
      return res.json({ message: "Invalid token", status: "invalid" });
    }
    if (decoded.usertype == "academy") {
      return res.status(200).json({
        message: "Academy verified",
        status: "ok",
        usertype: decoded.usertype,
      });
    } else {
      return res.status(400).json({ message: "Invalid Token" });
    }
  });
});

app.get("/verifyUser", async (req, res) => {
  console.log("comung ");
  const tokenn = req.cookies.token;
  console.log(tokenn);
  if (!tokenn) {
    return res.json({ message: "Token not available", status: "invalid" });
  }
  jwt.verify(tokenn, "kuchvimatkahovai", (err, decoded) => {
    if (err) {
      return res.json({ message: "Invalid token", status: "invalid" });
    }
    if (decoded.usertype == "student") {
      return res.status(200).json({
        message: "User verified",
        status: "ok",
        usertype: decoded.usertype,
      });
    } else {
      return res.status(400).json({ message: "Invalid Token" });
    }
  });
});

//verifyall

app.get("/verifyAll", async (req, res) => {
  console.log("comung ");
  const tokenn = req.cookies.token;
  console.log(tokenn);
  if (!tokenn) {
    return res.json({ message: "Token not available", status: "invalid" });
  }
  jwt.verify(tokenn, "kuchvimatkahovai", (err, decoded) => {
    if (err) {
      return res.json({ message: "Invalid token", status: "invalid" });
    }
    if (decoded.usertype == "student" || decoded.usertype == "academy") {
      return res.status(200).json({
        message: "User verified",
        status: "ok",
        usertype: decoded.usertype,
        id: decoded.id,
      });
    } else {
      return res.status(400).json({ message: "Invalid Token" });
    }
  });
});

app.put(
  "/addAcademyProfile/:academyId",
  upload.fields([
    {
      name: "profilePicture",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    try {
      console.log(req.params.academyId);
      const profilePicture = req.files.profilePicture
        ? req.files.profilePicture[0]
        : null;
      if (profilePicture) {
        req.body.profilePicture = `http://localhost:8000/${profilePicture.filename}`;
      }
      const updateAcademy = await Academy.findByIdAndUpdate(
        req.params.academyId,
        req.body,
        { new: true }
      );
      return res.status(200).json({ success: true, data: updateAcademy });
    } catch (error) {
      console.log(error.message);
    }
  }
);

app.get("/academyInfo/:academyId", async (req, res) => {
  try {
    const academyId = req.params.academyId;
    const academy = await Academy.findOne({ _id: academyId });
    console.log(academy);
    res.json({ message: "hello", data: academy });
  } catch (error) {}
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

//User Data Update
app.put(
  "/updateUser/:userId",
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      const userId = req.params.userId;
      const profilePicture = req.file
        ? `http://localhost:8000/${req.file.filename}`
        : null;
      const updateUser = await User.findByIdAndUpdate(
        userId,
        {
          ...req.body,
          profilePicture,
        },
        { new: true }
      );
      console.log(updateUser);
      return res.status(200).json({ success: true, data: updateUser });
    } catch (error) {
      console.log(error.message);
    }
  }
);

//get User Data
app.get("/getUser/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId });
    console.log(user);
    res.json({ message: "hello", data: user });
  } catch (error) {
    console.log(error);
  }
});

//add event by academy
app.post("/addEvent/:academyId", upload.single("imgName"), async (req, res) => {
  try {
    const academyId = req.params.academyId;
    addedBy = academyId;
    const imgName = req.file
      ? `http://localhost:8000/${req.file.filename}`
      : null;
    const event = new Event({
      ...req.body,
      imgName,
      addedBy,
    });
    console.log(event);
    const saveEvent = await event.save();
    return res.status(200).json({ success: true, data: saveEvent });
  } catch (error) {
    console.log(error.message);
  }
});

//add trainings
app.post(
  "/addTraining/:academyId",
  upload.single("imgName"),
  async (req, res) => {
    try {
      const academyId = req.params.academyId;
      addedBy = academyId;
      const imgName = req.file
        ? `http://localhost:8000/${req.file.filename}`
        : null;
      const training = new AddTraining({
        ...req.body,
        imgName,
        addedBy,
      });
      console.log(training);
      const saveTraining = await training.save();
      return res.status(200).json({ success: true, data: saveTraining });
    } catch (error) {
      console.log(error.message);
    }
  }
);

//apply for event
app.put("/applyEvent/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    console.log(req.body);
    const userId = req.userId;
    const event = await Event.findOne({ _id: eventId });
    if (event) {
      if (event.registered.includes(userId)) {
        return res
          .status(400)
          .json({ success: false, message: "Already Applied" });
      }
    }
    if (event) {
      event.registered.push(userId);
      await event.save();
      return res
        .status(200)
        .json({ success: true, message: "Applied Successfully" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

//apply Training
app.put("/applyTraining/:trainingId", async (req, res) => {
  try {
    const trainingId = req.params.trainingId;
    console.log(req.body);
    const userId = req.userId;
    const training = await AddTraining.findOne({ _id: trainingId });
    if (training) {
      if (training.registered.includes(userId)) {
        return res
          .status(400)
          .json({ success: false, message: "Already Applied" });
      }
    }
    if (training) {
      training.registered.push(userId);
      await training.save();
      return res
        .status(200)
        .json({ success: true, message: "Applied Successfully" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

// logout all the users
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out", status: "ok" });
});
