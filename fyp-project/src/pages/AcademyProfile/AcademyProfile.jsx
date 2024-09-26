import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgUrl from "../../assets/img-02_003.jpg";
import "./AcademyProfile.css";

const AcademyProfile = () => {
  const [academyInfo, setAcademyInfo] = useState({});
  const navigator = useNavigate();

  const verifyAcademy = async () => {
    try {
      const response = await axios.get('https://localhost:8000//verfifyAcademy', {
        withCredentails: true
      });
      if (response.data.status !== "ok") {
        navigator("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAcademy();
  }, []);

  return (
    <>
      <div className="academy-container my-4">
        <div className="academy-row">
          <div className="academy-left-col">
            <div className="academy-card">
              <h3>Academy Basic Info</h3>

              <div className="academy-card-body">
                <form>
                  <div className="academy-form-group mb-2">
                    <label className="academy-form-label">Academy Name</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.name}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, name: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Owner Name</label>
                    <input
                      className="academy-form-control"
                      onChange={(e) => {
                        setAcademyInfo({ ...academyInfo, ownerName: e.target.value });
                      }}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Address</label>
                    <input
                      className="academy-form-control"
                      onChange={(e) => {
                        setAcademyInfo({ ...academyInfo, address: e.target.value });
                      }}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">About</label>
                    <textarea
                      className="academy-form-control"
                      rows="3"
                      value={academyInfo.about}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, about: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Contact Number</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.contactNumber}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, contactNumber: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Primary Email</label>
                    <input
                      className="academy-form-control"
                      value={academyInfo.email}
                      onChange={(e) => setAcademyInfo({ ...academyInfo, email: e.target.value })}
                    />
                  </div>
                  <div className="academy-form-group">
                    <label className="academy-form-label">Profile Picture</label>
                    <input
                      className="academy-form-control"
                      type="file"
                      onChange={(e) => setAcademyInfo({ ...academyInfo, profilePicture: e.target.files[0] })}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="academy-right-col">
            <div className="academy-card">
              <div className="academy-card-body">
                <div className="academy-img-container">
                  <img src={imgUrl} className="academy-img" alt="Academy" />
                </div>
                <h3 className="academy-title mt-3">Academy Name: {academyInfo.name}</h3>
                <p className="academy-location fw-bold">Location: {academyInfo.address}</p>
                <h6 className="academy-joined text-center">Joined Date: 2024-04-12</h6>
              </div>
            </div>
            <div className="academy-btn-group">
              <button className="academy-btn-success">Training Sessions</button>
              <button className="academy-btn-primary">Events</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyProfile;
