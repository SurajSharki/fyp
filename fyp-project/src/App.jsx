// // src/App.js
// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import{ Route, Routes} from 'react-router-dom'
// import HomeTwo from './pages/Home/HomeTwo.jsx';
// import Login from "./pages/login/Login.jsx"
// import Signup from './pages/login/Signup.jsx';
// import AcademyProfile from './pages/AcademyProfile/AcademyProfile.jsx';
// import ParentProfile from './pages/ParentProfile/ParentProfile.jsx';
// import AddTraining from './pages/AcademyProfile/AddTraining.jsx';
// import AddEvent from './pages/AcademyProfile/AddEvent.jsx';
// import UpdateEvent from './pages/AcademyProfile/UpdateEvent.jsx';
// import TrainingPage from './pages/Sessions/TrainingPage.jsx';
// import Footer from './components/Footers/Footer.jsx';
// import AboutUs from "./pages/About/AboutUs.jsx";
// import TrainingList from './pages/ExploreAcademy/TrainingList.jsx';
// import SportEventsList from './pages/ExploreAcademy/SportEventList.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Routes>
//         <Route path='/' element ={<HomeTwo/>}/>
//         {/* <Route path='/academy' element={<Academy/>}/> */}
//         {/* <Route path='/AcademyProfile' element={<AcademyProfile/>}/> */}
//         {/* <Route path='/blog' element={<Blog/>}/> */}
//         {/* <Route path='/events' element={<Events/>}></Route> */}
//         <Route path="/login" element={<Login></Login>}></Route>
//         <Route path="/signup" element={<Signup></Signup>}></Route>
//         <Route path='/academyprofile/:academyId' element={<AcademyProfile></AcademyProfile>}/>
//         <Route path='/parentprofile/:userId' element={<ParentProfile></ParentProfile>}></Route>
//         <Route path="/addtraining" element={<AddTraining></AddTraining>}></Route>
//         <Route path="/addevent" element={<AddEvent></AddEvent>}></Route>
//         <Route path="/updatevent" element={<UpdateEvent></UpdateEvent>}></Route>
//         <Route path="/trainings" element={<TrainingPage></TrainingPage>}></Route>
//         <Route path='/About' element={<AboutUs></AboutUs>}></Route>
//         <Route path='/Traininglist' element={<TrainingList></TrainingList>}></Route>
//         <Route path='/Sportevent' element={<SportEventsList></SportEventsList>}></Route>

//       </Routes>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

// src/App.js
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

// import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        {/* <Route path='/academy' element={<Academy/>}/> */}
        {/* <Route path='/AcademyProfile' element={<AcademyProfile/>}/> */}
        {/* <Route path='/blog' element={<Blog/>}/> */}
        {/* <Route path='/events' element={<Events/>}></Route> */}
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
          path="/updatevent/:eventId"
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
        <Route path="/eventpage" element={<EventsPage></EventsPage>}></Route>
        {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
