import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateEvent.css";

const UpdateEvent = () => {
  const [eventInfo, setEvent] = useState();
  const [updateValue, setUpdateValue] = useState();

  const { eventId } = useParams();

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
        `http://localhost:8000/updateEvent/${eventId}`,
        formData
      );
      alert(response.data.message)
      if (response.data.success === true) {
        alert("Event Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getEvent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getEvent/${eventId}`
      );
      console.log(response.data.data);
      setEvent(response.data.data);
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
    getEvent();
  }, []);

  return (
    <>
      <div className="event-container mt-3">
        <div className="event-row">
          <div className="event-col mx-auto">
            <div className="event-card">
              <h3 className="event-card-title text-center">Update Event</h3>
              <div className="event-card-body">
                <form onSubmit={handleSubmit}>
                  <div className="event-form-group">
                    <label className="event-form-label">Event Name</label>
                    <input
                      type="text"
                      className="event-form-control"
                      defaultValue={eventInfo?.eventName}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          eventName: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div className="event-form-group">
                    <label className="event-form-label">Organized By</label>
                    <input
                      type="text"
                      className="event-form-control"
                      defaultValue={eventInfo?.organized}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          organized: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div className="event-form-group">
                    <label className="event-form-label">Age Category</label>
                    <input
                      type="text"
                      className="event-form-control"
                      defaultValue={eventInfo?.ageCategory}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          ageCategory: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div className="event-form-group">
                    <label className="event-form-label">
                      Event Description
                    </label>
                    <textarea
                      type="text"
                      className="event-form-control"
                      defaultValue={eventInfo?.eventDesc}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          eventDesc: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>

                  <div className="event-form-group">
                    <label className="event-form-label">Game Category</label>
                    <select
                      className="event-form-select"
                      defaultValue={eventInfo?.games}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          games: e.target.value,
                        });
                      }}
                    >
                      <option value="cricket">Cricket</option>
                      <option value="football">Football</option>
                      <option value="basketball">Basketball</option>
                      <option value="hockey">Hockey</option>
                    </select>
                  </div>

                  <div className="event-form-group">
                    <label className="event-form-label">Poster Image</label>
                    <input
                      type="file"
                      className="event-form-control"
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          imgName: e.target.files[0],
                        });
                      }}
                    ></input>
                  </div>

                  <div className="event-form-group">
                    <label className="event-form-label">Registration Fee</label>
                    <input
                      type="text"
                      className="event-form-control"
                      defaultValue={eventInfo?.registrationFee}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          registrationFee: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div className="event-form-group mb-3">
                    <label className="event-form-label">Location</label>
                    <input
                      type="text"
                      className="event-form-control"
                      defaultValue={eventInfo?.location}
                      onChange={(e) => {
                        setUpdateValue({
                          ...updateValue,
                          location: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div className="event-form-group d-flex justify-content-between">
                    <button
                      className="event-btn event-btn-success"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button className="event-btn event-btn-danger" type="reset">
                      Reset
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

export default UpdateEvent;
