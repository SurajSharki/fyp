import { useState } from "react";
import "./Login.css"; // External CSS
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8000/login",{
        email,
        password,
      },{
        withCredentials: true
      });
      
      if (resp.data.status === "ok") {
        if (resp.data.data.usertype === "student") {
          navigate(`/parentprofile/${resp.data.data._id}`);
        } else if (resp.data.data.usertype === "academy") {
          navigate(`/academyprofile/${resp.data.data._id}`);
        } else {
          alert("An error occurred.");
        }
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card">
        <div className="login-header text-center">
          <h2 className="login-title">Login to SportsQuest</h2>
          <p className="login-subtitle">Access your academy listings</p>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="your-email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
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
            <button type="submit" className="btn btn-login">
              Sign In
            </button>
          </form>
        </div>
        <div className="login-footer text-center">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
