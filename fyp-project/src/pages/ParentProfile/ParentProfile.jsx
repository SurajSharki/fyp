import { useState, useEffect, useContext } from "react";
import "./ParentProfile.css"; // External CSS
import axios from "axios";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../Context";

export default function ParentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [parent, setParent] = useState({});
  const [userData, setUserData] = useState();
  const [appliedEvents, setAppliedEvents] = useState()
  const[appliedTraining, setAppliedTraning] = useState();
  const { userId } = useParams();

  const { getUserInfo } = useContext(ApiContext);

  



  const getAppliedEvents = async()=>{
    try {
      const resp = await axios.get(`http://localhost:8000/appliedEvent/${userId}`)
      setAppliedEvents(resp.data.data)
    } catch (error) {
      console.error(error)
      
    }
  }
  
  const getAppliedTraining = async ()=>{
    try {
      const resp = await axios.get(`http://localhost:8000/appliedTraining/${userId}`)
      setAppliedTraning(resp.data.data)
    } catch (error) {
      
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in parent) {
        if (parent[key] !== null && parent[key] !== "") {
          formData.append(key, parent[key]);
        }
      }
      const resp = axios.put(
        `http://localhost:8000/updateUser/${userId}`,
        formData
      );

      console.log(resp);
      getUserData();
    } catch (error) {
      console.log(error);
    }
    setIsEditing(false);
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getUser/${userId}`
      );
      console.log(response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/verfifyUser", {
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
    verifyUser();
    getUserData();
    getUserInfo();
    getAppliedEvents()
    getAppliedTraining()
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={userData?.profilePicture}
            alt="SportQuest Logo"
            className="logo-image"
          />
          <h2 className="profile-title">User Profile</h2>
          <p className="profile-description">
            Manage your information and activities
          </p>
        </div>
        <div className="profile-body">
          <div className="profile-info">
            <h4 className="profile-name">
              {userData?.firstName} {userData?.lastName}
            </h4>
            <p className="profile-email">{userData?.email}</p>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="edit-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue={userData?.firstName}
                    onChange={(e) => {
                      setParent({ ...parent, firstName: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    defaultValue={userData?.lastName}
                    onChange={(e) => {
                      setParent({ ...parent, lastName: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    disabled
                    defaultValue={userData?.email}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={userData?.address}
                    onChange={(e) => {
                      setParent({ ...parent, address: e.target.value });
                    }}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => {
                      setParent({ ...parent, phone: e.target.value });
                    }}
                    defaultValue={userData?.phone}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profilePicture">Profile Picture</label>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    onChange={(e) => {
                      setParent({
                        ...parent,
                        profilePicture: e.target.files[0],
                      });
                    }}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="save-button">
                  Save Changes
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className="profile-summary">
                <p>
                  <strong>Address:</strong> {userData?.address}
                </p>
                <p>
                  <strong>Phone:</strong> {userData?.phone}
                </p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="edit-button"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
          <div className="profile-tabs">
            <div className="events-section">
              <h3 className="section-title">Applied Events</h3>
              <ul className="list-group">
                {
                  appliedEvents?.length > 0 ? appliedEvents?.map((event) => (
                    <li key={event?._id} className="list-group-item">
                      {event?.eventName}
                      <span
                        className={`badge ${
                          event?.eventName &&
                            "badge-success"
                           
                        }`}
                      >
                        {event?.eventName}
                      </span>
                    </li>
                  )): <p>There is no events</p>
                }
                {/* {appliedEvents?.map((event) => (
                  <li key={event._id} className="list-group-item">
                    {event.eventName}
                    <span
                      className={`badge ${
                        event.eventName &&
                          "badge-success"
                         
                      }`}
                    >
                      {event?.eventName}
                    </span>
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="academies-section">
              <h3 className="section-title">Interested Academies</h3>
              <ul className="list-group">
              {
                  appliedTraining?.length > 0 ? appliedTraining?.map((event) => (
                    <li key={event?._id} className="list-group-item">
                      {event?.sessionName}
                      <span
                        className={`badge ${
                          event?.sessionName &&
                            "badge-success"
                           
                        }`}
                      >
                        {event?.sessionName}
                      </span>
                    </li>
                  )): <p>There is no training</p>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
