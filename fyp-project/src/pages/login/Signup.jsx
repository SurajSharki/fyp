import { useState } from "react";
import "./Signup.css"; 
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8000/register", {
        email: email,
        password: password,
        usertype: usertype,
      });
      if (resp.data.status === "ok") {
        alert(resp.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Sign-up attempted with:", { email, password, usertype });
  };

  return (
    <div className="signup-wrapper d-flex align-items-center justify-content-center">
      <div className="signup-card">
        <div className="signup-header text-center">
          <h2 className="signup-title">Sign Up to SportsQuest</h2>
          <p className="signup-subtitle">
            Enter your details to access academy listings
          </p>
        </div>
        <div className="signup-body">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">I am a:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="student"
                  value="student"
                  checked={usertype === "student"}
                  onChange={() => setUserType("student")}
                />
                <label className="form-check-label" htmlFor="student">
                  Student
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="academy"
                  value="academy"
                  checked={usertype === "academy"}
                  onChange={() => setUserType("academy")}
                />
                <label className="form-check-label" htmlFor="academy">
                  Academy
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-signup w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
