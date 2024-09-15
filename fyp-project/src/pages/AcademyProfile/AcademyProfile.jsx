// import { useState } from "react";
// import { PlusCircle, Trash2, UploadCloud } from "lucide-react";
// import './AcademyProfile.css';

// export default function AcademyProfile() {
//   const [academyInfo, setAcademyInfo] = useState({
//     name: "",
//     address: "",
//     contactNumber: "",
//     sportCategory: "",
//     logo: null,
//   });

//   const [ageCategories, setAgeCategories] = useState([{ age: "", students: 0 }]);

//   const [trainingSessions, setTrainingSessions] = useState([
//     { coach: "", specialization: "", experience: "", venue: "", time: "", days: "", hours: "", sportCategory: "" },
//   ]);

//   const [events, setEvents] = useState([
//     { name: "", date: "", time: "", ageCategory: "", fee: "", prizePool: "", sportCategory: "", contactNumber: "" },
//   ]);

//   const handleLogoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setAcademyInfo({ ...academyInfo, logo: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const addAgeCategory = () => {
//     setAgeCategories([...ageCategories, { age: "", students: 0 }]);
//   };

//   const removeAgeCategory = (index) => {
//     setAgeCategories(ageCategories.filter((_, i) => i !== index));
//   };

//   const addTrainingSession = () => {
//     setTrainingSessions([
//       ...trainingSessions,
//       { coach: "", specialization: "", experience: "", venue: "", time: "", days: "", hours: "", sportCategory: "" },
//     ]);
//   };

//   const removeTrainingSession = (index) => {
//     setTrainingSessions(trainingSessions.filter((_, i) => i !== index));
//   };

//   const addEvent = () => {
//     setEvents([
//       ...events,
//       { name: "", date: "", time: "", ageCategory: "", fee: "", prizePool: "", sportCategory: "", contactNumber: "" },
//     ]);
//   };

//   const removeEvent = (index) => {
//     setEvents(events.filter((_, i) => i !== index));
//   };

//   const totalStudents = ageCategories.reduce((sum, category) => sum + Number(category.students), 0);

//   const saveProfile = () => {
//     alert("Profile Saved!");
//   };

//   const removeProfile = () => {
//     alert("Profile Removed!");
//     setAcademyInfo({ name: "", address: "", contactNumber: "", sportCategory: "", logo: null });
//     setAgeCategories([{ age: "", students: 0 }]);
//     setTrainingSessions([{ coach: "", specialization: "", experience: "", venue: "", time: "", days: "", hours: "", sportCategory: "" }]);
//     setEvents([{ name: "", date: "", time: "", ageCategory: "", fee: "", prizePool: "", sportCategory: "", contactNumber: "" }]);
//   };

//   return (
//     <div className="academy-profile">
//       <div className="profile-card">
//         <div className="profile-card-header">
//           <h1>Academy Profile</h1>
//         </div>
//         <div className="profile-card-content">
//           <div className="profile-sections">
//             <div className="basic-info-section">
//               <h3>Basic Information</h3>
//               <div className="form-group">
//                 <label>Academy Name</label>
//                 <input
//                   value={academyInfo.name}
//                   onChange={(e) => setAcademyInfo({ ...academyInfo, name: e.target.value })}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Address</label>
//                 <textarea
//                   value={academyInfo.address}
//                   onChange={(e) => setAcademyInfo({ ...academyInfo, address: e.target.value })}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Contact Number</label>
//                 <input
//                   value={academyInfo.contactNumber}
//                   onChange={(e) => setAcademyInfo({ ...academyInfo, contactNumber: e.target.value })}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Sport Category</label>
//                 <input
//                   value={academyInfo.sportCategory}
//                   onChange={(e) => setAcademyInfo({ ...academyInfo, sportCategory: e.target.value })}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Academy Logo</label>
//                 <input type="file" onChange={handleLogoChange} />
//                 {academyInfo.logo && <img src={academyInfo.logo} alt="Academy Logo" className="logo-preview" />}
//               </div>
//             </div>

//             <div className="age-categories-section">
//               <h3>Age Categories</h3>
//               {ageCategories.map((category, index) => (
//                 <div key={index} className="age-category">
//                   <div className="form-group">
//                     <label>Age Category</label>
//                     <input
//                       value={category.age}
//                       onChange={(e) => {
//                         const newCategories = [...ageCategories];
//                         newCategories[index].age = e.target.value;
//                         setAgeCategories(newCategories);
//                       }}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Number of Students</label>
//                     <input
//                       type="number"
//                       value={category.students}
//                       onChange={(e) => {
//                         const newCategories = [...ageCategories];
//                         newCategories[index].students = e.target.value;
//                         setAgeCategories(newCategories);
//                       }}
//                     />
//                   </div>
//                   <button onClick={() => removeAgeCategory(index)} className="btn-delete">
//                     <Trash2 />
//                   </button>
//                 </div>
//               ))}
//               <button onClick={addAgeCategory} className="btn-add">
//                 <PlusCircle /> Add Age Category
//               </button>
//               <div className="total-students">Total Students: {totalStudents}</div>
//             </div>
//           </div>

//           {/* Save and Remove Profile Buttons */}
//           <div className="profile-actions ">
//             <button onClick={saveProfile} className="btn-add">
//               Save Profile
//             </button>
//             <button onClick={removeProfile} className="btn-delete">
//               Remove Profile
//             </button>
//           </div>

//           {/* Tabs for Training Sessions and Events */}
//           <TrainingSessions
//             trainingSessions={trainingSessions}
//             setTrainingSessions={setTrainingSessions}
//             addTrainingSession={addTrainingSession}
//             removeTrainingSession={removeTrainingSession}
//           />

//           <Events
//             events={events}
//             setEvents={setEvents}
//             addEvent={addEvent}
//             removeEvent={removeEvent}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// const TrainingSessions = ({ trainingSessions, setTrainingSessions, addTrainingSession, removeTrainingSession }) => {
//   const uploadTrainingSessions = () => {
//     alert("Training Sessions Uploaded!");
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Training Sessions</h3>
//       {trainingSessions.map((session, index) => (
//         <div key={index} className="card p-4 bg-warning bg-opacity-10 mb-4">
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`coach-${index}`} className="form-label">Coach Name</label>
//               <input
//                 id={`coach-${index}`}
//                 value={session.coach}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].coach = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`specialization-${index}`} className="form-label">Specialization</label>
//               <input
//                 id={`specialization-${index}`}
//                 value={session.specialization}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].specialization = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`experience-${index}`} className="form-label">Coaching Experience (years)</label>
//               <input
//                 id={`experience-${index}`}
//                 type="number"
//                 value={session.experience}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].experience = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`venue-${index}`} className="form-label">Training Venue</label>
//               <input
//                 id={`venue-${index}`}
//                 value={session.venue}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].venue = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`time-${index}`} className="form-label">Training Time</label>
//               <input
//                 id={`time-${index}`}
//                 value={session.time}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].time = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`days-${index}`} className="form-label">Days</label>
//               <input
//                 id={`days-${index}`}
//                 value={session.days}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].days = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`hours-${index}`} className="form-label">Number of Hours</label>
//               <input
//                 id={`hours-${index}`}
//                 type="number"
//                 value={session.hours}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].hours = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`sportCategory-${index}`} className="form-label">Sport Category</label>
//               <input
//                 id={`sportCategory-${index}`}
//                 value={session.sportCategory}
//                 onChange={(e) => {
//                   const newSessions = [...trainingSessions];
//                   newSessions[index].sportCategory = e.target.value;
//                   setTrainingSessions(newSessions);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//           </div>
//           <button onClick={() => removeTrainingSession(index)} className="btn btn-danger">
//             <Trash2 />
//           </button>
//         </div>
//       ))}
//       <button onClick={addTrainingSession} className="btn-add btn-primary">
//         <PlusCircle /> Add Training Session
//       </button>

//       <button onClick={uploadTrainingSessions} className="btn btn-success mt-3">
//         <UploadCloud /> Upload Training Sessions
//       </button>
//     </div>
//   );
// };

// const Events = ({ events, setEvents, addEvent, removeEvent }) => {
//   const uploadEvents = () => {
//     alert("Events Uploaded!");
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Events</h3>
//       {events.map((event, index) => (
//         <div key={index} className="card p-4 bg-warning bg-opacity-10 mb-4">
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventName-${index}`} className="form-label">Event Name</label>
//               <input
//                 id={`eventName-${index}`}
//                 value={event.name}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].name = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventDate-${index}`} className="form-label">Date</label>
//               <input
//                 id={`eventDate-${index}`}
//                 value={event.date}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].date = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventTime-${index}`} className="form-label">Time</label>
//               <input
//                 id={`eventTime-${index}`}
//                 value={event.time}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].time = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventAgeCategory-${index}`} className="form-label">Age Category</label>
//               <input
//                 id={`eventAgeCategory-${index}`}
//                 value={event.ageCategory}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].ageCategory = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventFee-${index}`} className="form-label">Entry Fee</label>
//               <input
//                 id={`eventFee-${index}`}
//                 value={event.fee}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].fee = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventPrizePool-${index}`} className="form-label">Prize Pool</label>
//               <input
//                 id={`eventPrizePool-${index}`}
//                 value={event.prizePool}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].prizePool = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventSportCategory-${index}`} className="form-label">Sport Category</label>
//               <input
//                 id={`eventSportCategory-${index}`}
//                 value={event.sportCategory}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].sportCategory = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//             <div className="col-md-6 mb-3">
//               <label htmlFor={`eventContactNumber-${index}`} className="form-label">Contact Number</label>
//               <input
//                 id={`eventContactNumber-${index}`}
//                 value={event.contactNumber}
//                 onChange={(e) => {
//                   const newEvents = [...events];
//                   newEvents[index].contactNumber = e.target.value;
//                   setEvents(newEvents);
//                 }}
//                 className="form-control border-warning"
//               />
//             </div>
//           </div>
//           <button onClick={() => removeEvent(index)} className="btn btn-danger">
//             <Trash2 />
//           </button>
//         </div>
//       ))}
//       <button onClick={addEvent} className="btn btn-primary">
//         <PlusCircle /> Add Event
//       </button>

//       <button onClick={uploadEvents} className="btn btn-success mt-4">
//         <UploadCloud /> Upload Events
//       </button>
//     </div>
//   );
// };
import {useState} from "react";
import imgUrl from "../../assets/img-02_003.jpg"

const AcademyProfile = ()=>{
  const[academyInfo, setAcademyInfo] = useState({});
  // console.log(academyInfo.profilePicture.name)
  return(
    <>
    <div className="container my-4">
    <div className="row">
      <div className="col-md-8 col-12">
        <div className="card">
        <h3>Academy Basic Info</h3>
        <div className="card-body">
         <form>
         <div className="form-group mb-2">
                 <label className="form-label">Academy Name</label>
                 <input
                 className="form-control"
                   value={academyInfo.name}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, name: e.target.value })}
                   style={{border:"1px solid black"}}
                 />
               </div>
               <div className="form-group">
                <label className="form-label">Owner Name</label>
                <input className="form-control"
                style={{border:"1px solid black"}}
                onChange = {(e)=>{
                  setAcademyInfo({...academyInfo, ownerName:e.target.value})
                }}
                >
                </input>
               </div>
               <div className="form-group">
                <label className="form-label">
                  Address
                </label>
                <input
                className="form-control"
                style={{border:"1px solid black"}}
                onChange={(e)=>{
                  setAcademyInfo({...academyInfo, address: e.target.value})
                }}
                >

                </input>

               </div>
               <div className="form-group">
                 <label className="form-label">About</label>
                 <textarea
                 className="form-control"
                 rows= "3"
                   value={academyInfo.address}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, about: e.target.value })}
                   style={{border:"1px solid black"}}
                 />
               </div>
               <div className="form-group">
                 <label className="form-label">Contact Number</label>
                 <input
                 className="form-control"
                   value={academyInfo.contactNumber}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, contactNumber: e.target.value })}
                   style={{border:"1px solid black"}}
                 />
               </div>
               <div className="form-group">
                 <label className="form-label">Primary Email</label>
                 <input
                   value={academyInfo.sportCategory}
                   className="form-control"
                   style={{border:"1px solid black"}}
                   onChange={(e) => setAcademyInfo({ ...academyInfo, email: e.target.value })}
                 />
               </div>
               <div className="form-group">
                <label>Profile Picture</label>
                <input className="form-control"
                type="file"
                style={{border:"1px solid black"}}
                onChange={(e) => setAcademyInfo({ ...academyInfo, profilePicture:e.target.files[0]})}
                >
                </input>
               </div>
         </form>
        </div>
        </div>
      
      </div>
      <div className="col-md-4 col-12">
        <div className="card mb-4">
          <div className="card-body">
            <div className="mx-auto" style={{width:"100%"}}> 
            <img src={imgUrl} className="img-fluid rounded">
            </img>
            </div>
            <h3 className="card-title mt-3">Academy Name: {academyInfo.name}</h3>
            <p className="fs-4 fw-bold">Location: {academyInfo.address}</p>
            <h6 className="card-text text-center">Joined Date: 2024-04-12</h6>
            </div> 

        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success py-3 px-3">Training Sessions</button>
          <button className="btn btn-primary py-3 px-5">Events</button>
        </div>
      </div>

    </div>
    </div>
     </>
  )
}

export default AcademyProfile;