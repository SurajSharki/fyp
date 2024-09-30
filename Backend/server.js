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
    const userId = req.body.userId;
    console.log(userId);
    const event = await Event.findOne({ _id: eventId });

    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    // Filter out any null values from the registered array
    event.registered = event.registered.filter((id) => id !== null);

    if (event.registered.includes(userId)) {
      return res
        .status(400)
        .json({ success: false, message: "Already Applied" });
    }

    event.registered.push(userId);
    console.log(event);
    await event.save();

    return res
      .status(200)
      .json({ success: true, message: "Applied Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

//apply Training
app.put("/applyTraining/:trainingId", async (req, res) => {
  try {
    const trainingId = req.params.trainingId;
    console.log(req.body);
    const userId = req.body.userId;
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

app.get("/getEvent/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await Event.findOne({ _id: eventId });
    console.log(event);
    res.json({ message: "hello", data: event });
  } catch (error) {
    console.log(error);
  }
});

app.get("/getTraining/:trainingId", async (req, res) => {
  try {
    const trainingId = req.params.trainingId;
    const training = await AddTraining.findOne({ _id: trainingId });
    console.log(training);
    res.json({ message: "hello", data: training });
  } catch (error) {
    console.log(error);
  }
});

app.put("/updateEvent/:eventId", upload.single("imgName"), async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const event = await Event.findById(eventId);
    const imgName = req.file
      ? `http://localhost:8000/${req.file.filename}`
      : event.imgName;
    const updateEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        ...req.body,
        imgName,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: updateEvent,
      message: "Event Updated Successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.put(
  "/updateTraining/:trainingId",
  upload.single("imgName"),
  async (req, res) => {
    try {
      const trainingId = req.params.trainingId;

      const training = await AddTraining.findById(trainingId);
      const imgName = req.file
        ? `http://localhost:8000/${req.file.filename}`
        : training.imgName;
      const updateTraining = await AddTraining.findByIdAndUpdate(
        trainingId,
        {
          ...req.body,
          imgName,
        },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        data: updateTraining,
        message: "Training Updated Successfully",
      });
    } catch (error) {
      console.log(error.message);
    }
  }
);

app.delete("/deleteEvent/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await Event.findByIdAndDelete(eventId);
    console.log(event);
    return res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/deleteTraining/:trainingId", async (req, res) => {
  try {
    const trainingId = req.params.trainingId;
    const training = await AddTraining.findByIdAndDelete(trainingId);
    console.log(training);
    return res.status(200).json({
      success: true,
      message: "Training Deleted Successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
});

//get events added by specific academy
app.get("/getAcademyEvents/:academyId", async (req, res) => {
  try {
    const academyId = req.params.academyId;
    const events = await Event.find({ addedBy: academyId });
    res.json({ message: "hello", data: events });
  } catch (error) {
    console.log(error.message);
  }
});

//get trainings added by specific academy
app.get("/getAcademyTrainings/:academyId", async (req, res) => {
  try {
    const academyId = req.params.academyId;
    const trainings = await AddTraining.find({ addedBy: academyId });
    res.json({ message: "hello", data: trainings });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/appliedEvent/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const events = await Event.find({ registered: userId });
    res.json({ message: "hello", data: events });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/appliedTraining/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const trainings = await AddTraining.find({ registered: userId });
    res.json({ message: "hello", data: trainings });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/allEvents", async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ message: "hello", data: events });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/eventdetails/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await Event.findById(eventId);
    res.json({ message: "hello", data: event });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/allTrainings", async (req, res) => {
  try {
    const trainings = await AddTraining.find();
    res.json({ message: "hello", data: trainings });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/trainingdetails/:trainingId", async (req, res) => {
  try {
    const trainingId = req.params.trainingId;
    const training = await AddTraining.findById(trainingId);
    res.json({ message: "hello", data: training });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/allAcademies", async (req, res) => {
  try {
    const academies = await Academy.find();
    res.json({ message: "hello", data: academies });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/academydetails/:academyId", async (req, res) => {
  try {
    const academyId = req.params.academyId;
    const academy = await Academy.findById(academyId);
    res.json({ message: "hello", data: academy });
  } catch (error) {
    console.log(error.message);
  }
});

//list of users applied in specific event
app.get("/appliedUsers/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const users = await Event.findById(eventId).populate("registered");
    console.log(users);
    res.json({ message: "hello", data: users });
  } catch (error) {
    console.log(error.message);
  }
});

//list of users applied in specific training
app.get("/appliedUsers/:trainingId", async (req, res) => {
  try {
    const trainingId = req.params.trainingId;
    const users = await AddTraining.findById(trainingId).populate("registered");
    console.log(users);
    res.json({ message: "hello", data: users });
  } catch (error) {
    console.log(error.message);
  }
});

// logout all the users
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out", status: "ok" });
});
