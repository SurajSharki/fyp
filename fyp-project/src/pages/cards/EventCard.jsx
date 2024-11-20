import { Calendar, Clock, MapPin, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="card w-100 shadow-sm bg-light">
      <div className="card-header d-flex align-items-center">
        <Trophy className="me-2 text-primary" />
        <h5 className="card-title text-primary">{event?.eventName}</h5>
      </div>
      <div className="card-body">
        <p className="card-text text-muted">
          {event?.eventDesc.slice(0, 100) + "..."}
        </p>
        <ul className="list-unstyled mb-3">
          <li className="d-flex align-items-center mb-2">
            <Calendar className="me-2 text-primary" />
            <span className="text-muted">{}</span>
          </li>
          <li className="d-flex align-items-center mb-2">
            <Clock className="me-2 text-primary" />
            <span className="text-muted">{event?.organized}</span>
          </li>
          <li className="d-flex align-items-center mb-2">
            <MapPin className="me-2 text-primary" />
            <span className="text-muted">{event?.location}</span>
          </li>
          <li className="d-flex align-items-center mb-2">
            <Users className="me-2 text-primary" />
            <span className="text-muted">
              {" "}
              Age Category:
              {event?.ageCategory}
            </span>
          </li>
        </ul>
        <span className="badge bg-primary text-light">{event?.game}</span>
      </div>
      <div className="card-footer">
        <Link to={`/events/${event?._id}`} className="btn btn-primary w-100">Register for Event</Link>
      </div>
    </div>
  );
}
