import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ApiContext } from '../../Context';
const EventDetail = () => {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams(); // Extract `eventId` from the URL parameters.
  const {userId, userType, loggedIn} = useContext(ApiContext)
  // Function to fetch applicants.
  const getEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/eventdetails/${eventId}`);
      setEvent(response.data.data|| []); // Default to empty array if `registered` is undefined.
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };
  const applyTraining= async ()=>{
    try {
      const resp = await axios.put(`http://localhost:8000/applyEvent/${eventId}`,{
        userId: userId,
        
      })
      alert(resp.data.message)
    } catch (error) {
      console.log(error)
    }
   }
  useEffect(() => {
    getEvent()
  }, []);

  return (
    <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="card shadow-lg">
          <img
            src={`${event?.imgName}`}
            alt={event?.eventName}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{event?.eventName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{event?.organized}</h6>
            <p className="card-text">{event?.eventDesc}</p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Age Category:</strong> {event?.ageCategory}</li>
              <li className="list-group-item"><strong>Game:</strong> {event?.game}</li>
              <li className="list-group-item"><strong>Location:</strong> {event?.location}</li>
              <li className="list-group-item"><strong>Registration Fee:</strong>Rs. {event?.registrationFee}</li>
              <li className="list-group-item"><strong>Time:</strong> {event?.time}</li>
              <li className="list-group-item"><strong>Date:</strong> {event?.date}</li>
              <li className="list-group-item"><strong>Capacity:</strong> {event?.capacity}</li>
            </ul>
          </div>
          <div className="card-footer text-center">
          {
          loggedIn == false ?  <button className="btn btn-primary w-100">Login First</button> : loggedIn == true && userType == "student" ?  <button className="btn btn-primary" onClick={()=>{
            applyTraining()
          }}>Register Now</button> :  <button className="btn btn-primary w-100" disabled>Register Now</button>
        }
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EventDetail;
