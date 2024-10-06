import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import TrainingSessionCard from "../../components/TrainingSessionCard";
import axios from "axios";
const TrainingPage = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [trainings, setTrainings] = useState();
  const fetchTrainings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/allTrainings");
      console.log(response.data.data);
      setTrainings(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);
  return (
    <>
      <div className="container px-4 py-5">
        <div className="mb-4">
          <h1 className="display-5 fw-bold mb-3">Training Sessions</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="position-relative">
                <input
                  type="text"
                  placeholder="Search sessions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control ps-5"
                  style={{ border: "1px solid black" }}
                />
                <SearchIcon
                  className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {trainings?.map((training, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <TrainingSessionCard
                  trainings={training}
                ></TrainingSessionCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrainingPage;
