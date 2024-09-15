import { useState, useRef } from "react";
import "./ParentProfile.css"; // External CSS
import profile from '../../assets/coach_one.jpg';

export default function ParentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [parent, setParent] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: "123 Sports St, Athleticville, SP 12345",
    phone: "+1 (555) 123-4567",
    profilePicture: profile, // Changed to use the imported profile image
  });

  const [appliedEvents, setAppliedEvents] = useState([
    { id: 1, name: "Summer Soccer Camp", status: "Applied" },
    { id: 2, name: "Basketball Tournament", status: "Accepted" },
  ]);

  const [interestedAcademies, setInterestedAcademies] = useState([
    { id: 1, name: "Elite Soccer Academy" },
    { id: 2, name: "Pro Basketball School" },
  ]);

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", parent);
    setIsEditing(false);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setParent((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="./logo.png"
            alt="SportQuest Logo"
            className="logo-image"
          />
          <h2 className="profile-title">Parent Profile</h2>
          <p className="profile-description">Manage your information and view your activities</p>
        </div>
        <div className="profile-body">
          <div className="profile-info">
            <div className="profile-picture-container">
              <img
                src={parent.profilePicture}
                alt={`${parent.firstName} ${parent.lastName}`}
                className="profile-picture"
                onClick={handleImageClick}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="file-input"
              />
              <button
                className="camera-button"
                onClick={handleImageClick}
              >
                <i className="bi bi-camera"></i>
              </button>
            </div>
            <h4 className="profile-name">{parent.firstName} {parent.lastName}</h4>
            <p className="profile-email">{parent.email}</p>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="edit-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={parent.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={parent.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={parent.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={parent.address}
                    onChange={handleInputChange}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={parent.phone}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="save-button">Save Changes</button>
              </form>
            ) : (
              <div className="profile-summary">
                <p><strong>Address:</strong> {parent.address}</p>
                <p><strong>Phone:</strong> {parent.phone}</p>
                <button onClick={() => setIsEditing(true)} className="edit-button">Edit Profile</button>
              </div>
            )}
          </div>
          <div className="profile-tabs">
            <div className="events-section">
              <h3 className="section-title">Applied Events</h3>
              <ul className="list-group">
                {appliedEvents.map(event => (
                  <li key={event.id} className="list-group-item">
                    {event.name}
                    <span className={`badge ${event.status === "Accepted" ? "badge-success" : "badge-secondary"}`}>
                      {event.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="academies-section">
              <h3 className="section-title">Interested Academies</h3>
              <ul className="list-group">
                {interestedAcademies.map(academy => (
                  <li key={academy.id} className="list-group-item">
                    {academy.name}
                    <span className="badge badge-primary">Interested</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
