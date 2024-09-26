// import Link from "next/link";
import { Dumbbell } from "lucide-react";
import "./SportsTrainingList.css";

export default function TrainingList() {
  const trainings = [
    { id: 1, name: "Advanced Basketball Techniques", location: "Main Gym", fee: 75, students: 20 },
    { id: 2, name: "Soccer Skills Workshop", location: "Field A", fee: 60, students: 25 },
    { id: 3, name: "Swimming Masterclass", location: "Olympic Pool", fee: 90, students: 15 },
  ];

  return (
    <div className="container p-5 min-vh-100 bg-light">
      <h1 className="display-4 text-center text-primary mb-5 d-flex align-items-center justify-content-center">
        <Dumbbell className="me-2" />
        Sports Training List
      </h1>
      <div className="d-flex justify-content-end mb-4">
        <button className="btn btn-success">Add Sports Training</button>
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((training, index) => (
            <tr key={training.id}>
              <th scope="row">{index + 1}</th>
              <td>{training.name}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">View</button>
              </td>
              <td>{training.location}</td>
              <td>${training.fee}</td>
              <td>{training.students}</td>
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
