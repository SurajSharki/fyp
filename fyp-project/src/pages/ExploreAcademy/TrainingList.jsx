// import Link from "next/link";
import { Dumbbell } from "lucide-react";
import "./SportsTrainingList.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TrainingList() {
  const { academyId } = useParams();
  console.log("AcademyId", academyId)
  const [trainings, setTrainingList] = useState();
  const navigator = useNavigate();

  const handleDelete = async (trainingId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteTraining/${trainingId}`
      );
      console.log(response);
      getTrainingList();
    } catch (error) {
      console.log(error);
    }
  };

  const getTrainingList = async () => {
    try {
      const req = await axios.get(
        `http://localhost:8000/getAcademyTrainings/${academyId}`
      );
      console.log(req.data.data);
      setTrainingList(req.data.data);
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
    getTrainingList();
  }, []);

  return (
    <div className="container p-5 min-vh-100 bg-light">
      <h1 className="display-4 text-center text-primary mb-5 d-flex align-items-center justify-content-center">
        <Dumbbell className="me-2" />
        Sports Training List
      </h1>
      <div className="d-flex justify-content-end mb-4">
        <Link className="btn btn-success" to={`/addtraining/${academyId}`}>
          Add Sports Training
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Training Name</th>
            <th scope="col">View</th>
            <th scope="col">Location</th>
            <th scope="col">Register Fee</th>
            <th scope="col">Registered Athletes</th>
            <th scope="col">Fee</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {trainings?.map((training, index) => (
            <tr key={training._id}>
              <th scope="row">{index + 1}</th>
              <td>{training?.sessionName}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">View</button>
              </td>
              <td>{training?.location}</td>
              <td>{training?.coachName}</td>
              <td>{training?.experience}</td>
              <td>{training?.cost}</td>
              <td className="d-flex justify-content-between">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(training._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => navigator(`/updatetraining/${training._id}`)}
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
