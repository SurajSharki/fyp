import { Trophy, MapPin, Users } from "lucide-react";

export default function SportsAcademyCard({ academies }) {
  return (
    <div className="card w-100 shadow-sm overflow-hidden transition-all">
      <div className="position-relative">
        <img
          src={academies?.profilePicture}
          alt="Academy Image"
          className="card-img-top img-fluid transition-transform"
        />
        <div className="card-img-overlay bg-gradient">
          <div className="position-absolute bottom-0 start-0 p-3 text-black">
            <h3 className="h5">{academies?.name}</h3>
            <p className="d-flex align-items-center">
              <MapPin className="me-1" />
              {academies?.address}
            </p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title d-flex align-items-center">
          <Trophy className="me-2" />
          {academies?.contactNumber}
        </h5>
        <p className="card-text">{academies?.ownerName}</p>
        {/* <div className="d-flex flex-wrap gap-2 mb-3">
          {sports.map((sport, index) => (
            <span key={index} className="badge bg-primary text-light">
              {sport}
            </span>
          ))}
        </div>
        <div className="d-flex align-items-center">
          <Users className="me-2" />
          {athletesCount} athletes trained
        </div> */}
      </div>
      <div className="card-footer">
        <button className="btn btn-primary w-100">View Academy</button>
      </div>
    </div>
  );
}
