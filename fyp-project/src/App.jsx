
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomeTwo from "./pages/Home/HomeTwo.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/login/Signup.jsx";
import AcademyProfile from "./pages/AcademyProfile/AcademyProfile.jsx";
import ParentProfile from "./pages/ParentProfile/ParentProfile.jsx";
import AddTraining from "./pages/AcademyProfile/AddTraining.jsx";
import AddEvent from "./pages/AcademyProfile/AddEvent.jsx";
import UpdateEvent from "./pages/AcademyProfile/UpdateEvent.jsx";
import TrainingPage from "./pages/Sessions/TrainingPage.jsx";
import Footer from "./components/Footers/Footer.jsx";
import AboutUs from "./pages/About/AboutUs.jsx";
import TrainingList from "./pages/ExploreAcademy/TrainingList.jsx";
import SportEventsList from "./pages/ExploreAcademy/SportEventList.jsx";
import AcademyList from "./pages/AcademyLists/AcademyList.jsx";
import EventsPage from "./pages/Sessions/EventsPage.jsx";
import UpdateTraining from "./pages/AcademyProfile/UpdateTraining.jsx";
import SportsAcademyDetailPage from "./pages/AcademyDetailsPage/SportsAcademyDetailPage.jsx";

import TrainingDetail from "./pages/Home/TrainingDetail.jsx";
import EventApplicant from "./pages/ExploreAcademy/EventApplicant.jsx";
import TrainingApplicant from "./pages/ExploreAcademy/TrainingApplicant.jsx";
import EventDetail from "./pages/EventsDetailsPage/EventDetail.jsx";
import GroupChat from "./pages/ParentProfile/GroupChat.jsx";

// import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/events/:eventId" element={<EventDetail></EventDetail>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/academyprofile/:academyId"
          element={<AcademyProfile></AcademyProfile>}
        />
        <Route
          path="/parentprofile/:userId"
          element={<ParentProfile></ParentProfile>}
        ></Route>
        <Route
          path="/addtraining/:academyId"
          element={<AddTraining></AddTraining>}
        ></Route>
        <Route
          path="/addevent/:academyId"
          element={<AddEvent></AddEvent>}
        ></Route>
        <Route
          path="/updateevent/:eventId"
          element={<UpdateEvent></UpdateEvent>}
        ></Route>
        <Route
          path="/trainings"
          element={<TrainingPage></TrainingPage>}
        ></Route>
        <Route path="/About" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/traininglist/:academyId"
          element={<TrainingList></TrainingList>}
        ></Route>
        <Route
          path="/eventlist/:academyId"
          element={<SportEventsList></SportEventsList>}
        ></Route>
        <Route
          path="/Sportevent"
          element={<SportEventsList></SportEventsList>}
        ></Route>
        <Route
          path="/academylist"
          element={<AcademyList></AcademyList>}
        ></Route>
        <Route
          path="/updatetraining/:trainingId"
          element={<UpdateTraining></UpdateTraining>}
        ></Route>
        <Route
          path="/trainingpage"
          element={<TrainingPage></TrainingPage>}
        ></Route>
        <Route path ="/Academydetailpage/:academyId" element={<SportsAcademyDetailPage></SportsAcademyDetailPage>}></Route>
        
        <Route path="/events" element={<EventsPage></EventsPage>}></Route>
        <Route path="/training/:trainingId" element= {<TrainingDetail></TrainingDetail>}></Route>
        <Route path="/eventapplicants/:eventId" element={<EventApplicant></EventApplicant>}></Route>
        <Route path="/trainingapplicants/:trainingId" element={<TrainingApplicant></TrainingApplicant>}></Route>
        <Route path="/chat" element={<GroupChat></GroupChat>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
