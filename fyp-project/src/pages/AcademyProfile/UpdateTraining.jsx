import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTraining = () => {
  const [trainingInfo, setTrainingSessions] = useState();
  const [updateValue, setUpdateValue] = useState();
  const { trainingId } = useParams();

  const getTrainingInfo  = async()=>{
    try {
      const response = await axios.get(
        `http://localhost:8000/getTraining/${trainingId}`
      );
      console.log(response.data);
      setTrainingSessions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in updateValue) {
        if (updateValue[key] !== null && updateValue[key] !== "") {
          formData.append(key, updateValue[key]);
        }
      }
      const response = await axios.put(
        `http://localhost:8000/updateTraining/${trainingId}`,
        formData
      );
      console.log(response);
      if (response.data.success === true) {
        alert("Training Updated");
      }
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
    getTrainingInfo()
  }, []);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <div className="card">
              <h3 className="card-title text-center">Update Training</h3>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Training Session Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.sessionName}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          sessionName: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.location}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          location: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Poster Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          imgName: e.target.files[0],
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Academy Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.academyName}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          academyName: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Coach Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.coachName}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          coachName: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Coach Training Experience
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setTrainingSessions({
                          ...trainingInfo,
                          experience: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">License From</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.License}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          License: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Achievement</label>
                    <textarea
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.achievements}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          achievements: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Game Category</label>
                    <select
                      className="form-select"
                      defaultValue={trainingInfo?.games}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          games: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    >
                      <option value="cricket">Cricket</option>
                      <option value="cricket">Cricket</option>
                      <option value="cricket">Cricket</option>
                      <option value="cricket">Cricket</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Training Cost</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.cost}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          cost: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Day</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={trainingInfo?.days}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          days: e.target.value,
                        });
                      }}
                      style={{ border: "1px solid black" }}
                    ></input>
                  </div>
                  <div className="form-group ">
                    <button
                      className="btn btn-danger px-5 py-3 w-100"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTraining;
