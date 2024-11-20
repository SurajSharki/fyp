import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventApplicant = () => {
  const [applicantList, setApplicantList] = useState([]);
  const { eventId } = useParams(); // Extract `eventId` from the URL parameters.

  // Function to fetch applicants.
  const getApplicants = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/appliedUsers/${eventId}`);
      console.log(response?.data.data)
      setApplicantList(response?.data.data || []); // Default to empty array if `registered` is undefined.
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Event Applicants</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {applicantList.length > 0 ? (
            applicantList.map((applicant, index) => (
              <tr key={applicant._id}>
                <td>{index + 1}</td>
                <td>{`${applicant.firstName} ${applicant.lastName}`}</td>
                <td>{applicant.email}</td>
                <td>{applicant.phone}</td>
                <td>{applicant.address}</td>
                <td>
                  {applicant.profilePicture ? (
                    <img
                      src={applicant.profilePicture}
                      alt={`${applicant.firstName} ${applicant.lastName}`}
                      className="img-thumbnail"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  ) : (
                    "No Photo"
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No applicants registered yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventApplicant;
