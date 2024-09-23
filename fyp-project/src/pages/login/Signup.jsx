import { useState } from "react";
import "./Signup.css"; 
// Importing external CSS
import axios from "axios"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("student");



  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle the sign-up logic here
    try {
      const resp = await axios.post("http://localhost:8000/register",{
        email: email,
        password: password,
        usertype: usertype
      })
     if(resp.data.status === "ok"){
      alert(resp.data.message)
     }

    } catch (error) {
      console.log(error)
      
    }
    console.log("Sign-up attempted with:", { email, password, usertype });
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card signup-card w-100" style={{ maxWidth: "28rem" }}>
        <div className="card-header text-center">
          <h2 className="signup-title">Sign Up to SportsQuest</h2>
          <p className="signup-description">
            Enter your details to access the academy listings
          </p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="m@example.com"
                style={{border:"1px solid black !important"}}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                style={{border:"1px solid black !important"}}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">I am a:</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="student"
                  value="student"
                  checked={usertype === "student"}
                  onChange={() => setUserType("student")}
                />
                <label className="form-check-label" htmlFor="student">Student</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="academy"
                  value="academy"
                  checked={usertype === "academy"}
                  onChange={() => setUserType("academy")}
                />
                <label className="form-check-label" htmlFor="academy">Academy</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
