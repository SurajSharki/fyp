import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SportsAcademyDetailPage = () => {
  const { academyId } = useParams();
  const [academyData, setAcademyData] = useState(null);

  useEffect(() => {
    const fetchAcademyDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/academyInfo/${academyId}`
        );
        setAcademyData(response.data.data);
      } catch (error) {
        console.error("Error fetching academy details:", error);
      }
    };

    fetchAcademyDetails();
  }, [academyId]);

  if (!academyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={academyData?.profilePicture}
            alt={`${academyData?.name} Profile`}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5">{academyData?.name}</h1>
          <p>
            <strong>Owner:</strong> {academyData?.ownerName}
          </p>
          <p>
            <strong>Address:</strong> {academyData?.address}
          </p>
          <p>
            <strong>Contact:</strong> {academyData?.contactNumber}
          </p>
          <p>
            <strong>About:</strong> {academyData?.about}
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {new Date(academyData.created).toLocaleDateString()}
          </p>
          <p>
            <strong>Facebook Link:</strong>
            <a href={academyData?.facebookLink}>{academyData?.facebookLink || "NA"}</a>
          </p>
          <p>
            <strong>Instagram Link:</strong>
            <a href={academyData?.instagramLink}>{academyData?.instagramLink || "NA"}</a>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default SportsAcademyDetailPage;
