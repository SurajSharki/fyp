import { useState } from "react";
import "./Login.css"; // External CSS
import axios from "axios"
import {useNavigate} from "react-router-dom"
// import {jwtdecode} from "jwt-decode"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8000/login",{
        email: email,
        password: password,
       
      })
    console.log("user type",resp.data.data.usertype)
     if(resp.data.status === "ok"){
      if(resp.data.data.usertype==="student"){
        navigator("/student")
      }else if(resp.data.data.usertype ==="academy"){
        navigator(`/academyprofile/${resp.data.data._id}`)

      }else{
        alert("Someerror")
      }
     }

    } catch (error) {
      console.log(error)
      
    }
    // Handle the login logic here
    console.log("Login attempted with:", { email, password });
  };


  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">   
      <div className="card login-card w-100" style={{ maxWidth: "28rem" }}>
        <div className="card-header text-center">
          <h2 className="login-title">Login to SportsQuest</h2>
          <p className="login-description">
            Enter your email and password to access the academy listings
          </p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="card-footer text-center">
          <a href="/forgot-password" className="link-primary">
            Forgot your password?
          </a>
          <p className="mt-3">
            Don't have an account?{" "}
            <a href="/signup" className="link-primary">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
