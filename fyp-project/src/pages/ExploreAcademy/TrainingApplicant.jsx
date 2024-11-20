import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TrainingApplicant = () => {
  const [applicantList, setApplicantList] = useState([]);
  const { trainingId } = useParams();

  const getApplicants = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/appliedTUsers/${trainingId}`);
      console.log("API Response:", response.data);
      setApplicantList(response.data.data || []); // Ensure an empty array as fallback
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <div className="container mt-4" style={{height: "80vh"}}>
      <h2>Event Applicants</h2>
      {applicantList.length > 0 ? (
        <table className="table table-responsive table-striped">
          <thead>
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
            {applicantList.map((applicant, index) => (
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
                      alt="Profile"
                      className="img-fluid"
                      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    />
                  ) : (
                    "No Photo"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applicants registered for this training yet.</p>
      )}
    </div>
  );
};

export default TrainingApplicant;
