// import Link from "next/link";
import { Trophy } from "lucide-react";
import "./SportsEventsList.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";

export default function SportEventsList() {
  const navigator = useNavigate();

  const { academyId } = useParams();

  const [events, setEvents] = useState();

  const getEvents = async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/getAcademyEvents/${academyId}`
      );
      console.log(req.data.data);
      setEvents(req.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (eventId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteEvent/${eventId}`
      );
      console.log(response);
      getEvents();
    } catch (error) {
      console.log(error);
    }
  };
  const verifyAcademy = async () => {
    try {
      const response = await axios.get("http://localhost:8000/verfifyAcademy", {
        withCredentials: true,
      });
      console.log(response, "k aricha");
      if (response.data.status !== "ok") {
        navigator("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    verifyAcademy();
    getEvents();
  }, []);

  return (
    <div className="container p-5 min-vh-100 bg-light">
      <h1 className="display-4 text-center text-warning mb-5 d-flex align-items-center justify-content-center">
        <Trophy className="me-2" />
        Sports Events List
      </h1>
      <div className="d-flex justify-content-end mb-4">
        <Link to={`/addevent/${academyId}`} className="btn btn-primary">
          Add Sports Event
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Event Name</th>
            <th scope="col">View</th>
            <th scope="col">Location</th>
            <th scope="col">Register Fee</th>
            <th scope="col">Registered Participants</th>
        
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event, index) => (
            <tr key={event._id}>
              <th scope="row">{index + 1}</th>
              <td>{event?.eventName}</td>
              <td>
                <Link to={`/eventapplicants/${event?._id}`} className="btn btn-outline-secondary btn-sm">
                  View
                </Link>
              </td>
              <td>{event?.location}</td>
              <td>Rs. {event?.registrationFee}</td>
              <td>
                {event?.registered.length > 0 ? event?.registered.length : 0}
              </td>
              <td className="d-flex justify-content-between">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => navigator(`/updateevent/${event._id}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
