// import Link from "next/link";
import { Trophy } from "lucide-react";
import "./SportsEventsList.css";

export default function SportEventsList() {
  const events = [
    { id: 1, name: "City Marathon", location: "Downtown", fee: 50, attendees: 1000 },
    { id: 2, name: "Regional Tennis Tournament", location: "Tennis Center", fee: 75, attendees: 128 },
    { id: 3, name: "Charity Golf Open", location: "Greenview Golf Club", fee: 100, attendees: 72 },
  ];

  return (
    <div className="container p-5 min-vh-100 bg-light">
      <h1 className="display-4 text-center text-warning mb-5 d-flex align-items-center justify-content-center">
        <Trophy className="me-2" />
        Sports Events List
      </h1>
      <div className="d-flex justify-content-end mb-4">
        <button className="btn btn-primary">Add Sports Event</button>
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
          {events.map((event, index) => (
            <tr key={event.id}>
              <th scope="row">{index + 1}</th>
              <td>{event.name}</td>
              <td>
                <button className="btn btn-outline-secondary btn-sm">View</button>
              </td>
              <td>{event.location}</td>
              <td>${event.fee}</td>
              <td>{event.attendees}</td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
