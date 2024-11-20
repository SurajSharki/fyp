import { Trophy, MapPin, Users } from "lucide-react";
import {Link} from "react-router-dom"


export default function SportsAcademyCard({ academies }) {
  return (
    <div className="card w-100 shadow-sm overflow-hidden transition-all">
      <div className="position-relative">
        <img
          src={academies?.profilePicture}
          alt="Academy Image"
          className="card-img-top img-fluid transition-transform"
          style={{height:"400px", objectFit:"fill"}}
        />
        {/* <div className="card-img-overlay bg-gradient">
          <div className=" p-3 text-black">
            <h3 className="h5">{academies?.name}</h3>
            <p className="d-flex align-items-center">
              <MapPin className="me-1" />
              {academies?.address}
            </p>
          </div>
        </div> */}
      </div>
      <div className="card-body">
      <h3 className="h5">Academy Name: {academies?.name}</h3>
            <p className="d-flex align-items-center fw-bold fs-4">
              <MapPin className="me-1" />
              Location: {academies?.address}
            </p>
        <h5 className="card-title d-flex align-items-center">
          <Trophy className="me-2" />
          {academies?.contactNumber}
        </h5>
        <p className="fw-bold fs-4">Owner: {academies?.ownerName}</p>
       
      </div>
      <div className="card-footer">
        <Link to={`/Academydetailpage/${academies?._id}`} className="btn btn-primary w-100">View Academy</Link>
      </div>
    </div>
  );
}
