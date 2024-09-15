// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import{ Route, Routes} from 'react-router-dom'
// import Academy from './pages/Academy/AcademyProfile.jsx';
import HomeTwo from './pages/Home/HomeTwo.jsx';
// import Blog from './pages/Blog/Blog.jsx';
// import Contact from './pages/Contact/Contact.jsx';
// import Events from './pages/Event/Events.jsx';
// import AcademyProfile from './pages/Academy/AcademyProfile.jsx';
import Login from "./pages/login/Login.jsx"
import Signup from './pages/login/Signup.jsx';
import AcademyProfile from './pages/AcademyProfile/AcademyProfile.jsx';
import ParentProfile from './pages/ParentProfile/ParentProfile.jsx';
import AddTraining from './pages/AcademyProfile/AddTraining.jsx';
import AddEvent from './pages/AcademyProfile/AddEvent.jsx';
import UpdateEvent from './pages/AcademyProfile/UpdateEvent.jsx';
import TrainingPage from './pages/Sessions/TrainingPage.jsx';
import Footer from './components/Footers/Footer.jsx';
// import PlaceAcademy from "./pages/PlaceAcademy/"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<HomeTwo/>}/>
        {/* <Route path='/academy' element={<Academy/>}/> */}
        {/* <Route path='/AcademyProfile' element={<AcademyProfile/>}/> */}
        {/* <Route path='/blog' element={<Blog/>}/> */}
        {/* <Route path='/events' element={<Events/>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='/academyprofile' element={<AcademyProfile></AcademyProfile>}/>
        <Route path='/parentprofile' element={<ParentProfile></ParentProfile>}></Route>
        <Route path="/addtraining" element={<AddTraining></AddTraining>}></Route>
        <Route path="/addevent" element={<AddEvent></AddEvent>}></Route>
        <Route path="/updatevent" element={<UpdateEvent></UpdateEvent>}></Route>
        <Route path="/trainings" element={<TrainingPage></TrainingPage>}></Route>
      
        {/* <Route path ='/palceAcademy' element={<PlaceAcademy/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
