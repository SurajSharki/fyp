import React from "react";
import "./HomeTwo.css"; // Link to external CSS file
import { Link } from "react-router-dom";
import axios from "axios"
import {useEffect, useState} from "react"
import EventCard from "../cards/EventCard";
import TrainingSessionCard from "../../components/TrainingSessionCard";

export default function HomeTwo() {
  const [latestEvents, setLatestEvents] = useState([])
  const [upcomingTrainings, setUpcomingTrainings] = useState([])

  const getLatestEvents = async ()=>{
    try {
      const response = await axios.get("http://localhost:8000/latestevents")
      setLatestEvents(response.data.data)
    } catch (error) {
      alert(error)
    }
  }


  const getUpcomingTrainings = async ()=>{
    try {
      const response = await axios.get("http://localhost:8000/latestTrainings")
      setUpcomingTrainings(response.data.data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(()=>{
    getLatestEvents()
    getUpcomingTrainings()
  })
  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <section className="position-relative vh-100 text-center bg-dark text-white">
        <div
          className="hero-img position-absolute w-100 h-100 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="overlay position-absolute w-100 h-100 bg-dark opacity-50"></div>
        <div className="position-relative d-flex h-100 justify-content-center align-items-center text-center">
          <div>
            <h1 className="display-3 mb-4 font-weight-bold">SportQuest</h1>
            <p className="lead mb-4">Unleash Your Potential, Achieve Greatness</p>
            <p className="lead mb-4">Find the best Academy, for your children's better career and improvements</p>
            <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-5 text-center">
        <div className="container-fluid">
          <h2 className="mb-4 display-5 font-weight-bold">About Our Academy</h2>
          <p className="lead mx-auto">
            Elite Sports Training Academy is dedicated to nurturing young athletes and helping them reach their full potential.
            We provide a comprehensive training experience across various sports disciplines.
          </p>
        </div>
      </section >
            {/* Coaches and Parents Section */}
            <section className="position-relative py-5 text-center text-white">
        <div
          className="bg-cover position-absolute w-100 h-100"
          style={{height:"100px",width:"100px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80')",
          }}
        />
        <div className="overlay position-absolute w-100 h-100 bg-dark opacity-75"></div>
        <div className="container-fluid position-relative">
          <h2 className="mb-4 display-5 font-weight-bold text-white">Get Started</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-white text-dark rounded shadow-sm">
                <h3 className="font-weight-bold">For Coaches & Academy</h3>
                <p className="mb-4">
                  Join our team of expert coaches and be part of shaping the future of sports.
                  We offer continuous professional development and a supportive environment.
                </p>
                <Link to="/signup" className="btn btn-outline-primary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-white text-dark rounded shadow-sm">
                <h3 className="font-weight-bold">For Parents</h3>
                <p className="mb-4">
                  Give your child the best opportunity to excel in sports.
                  Our programs develop not just athletic skills, but also character, discipline, and teamwork.
                </p>
                <Link to="/signup" className="btn btn-outline-primary">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Sports Academies */}
      <section className="bg-white py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-5 font-weight-bold">Available Sports Academies</h2>
          <div className="row">
            {[{
              name: "Football",
              image:
                "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
            },
            {
              name: "Basketball",
              image:
                "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
            },
            {
              name: "Tennis",
              image:
                "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            },
            {
              name: "Swimming",
              image:
                "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            },].map((sport, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={sport.image}
                    className="card-img-top"
                    style={{ height: "300px", width: "100%", objectFit: "cover" }}
                    alt={`${sport.name} Academy`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold">{sport.name} Academy</h5>
                    <p className="card-text">Expert coaching and comprehensive training programs for all skill levels.</p>
                    <a href="#learn-more" className="btn btn-outline-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 font-weight-bold">Upcoming Events</h2>
          <p className="text-center mb-4">
            Discover exciting upcoming sports events near you. Don’t miss the chance to be part of thrilling activities!
          </p>
          <div className="row">
           {
            latestEvents?.slice(0,3).map((event, index)=> {
              return (<div className="col-lg-4 col-md-6 col-12" key={index}>{
                <EventCard event={event}></EventCard>
              } </div>)
            })
           }
          </div>
          <div className="text-center">
            <Link to="/events" className="btn btn-outline-primary">
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
     

      {/* Training Sessions Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 font-weight-bold">Training Sessions</h2>
          <p className="text-center mb-4">
            Join our specialized training sessions to hone your skills and take your performance to the next level.
          </p>
          <div className="row">
           {
            upcomingTrainings?.slice(0,3).map((training, index)=> {
              return (<div className="col-lg-4 col-md-6 col-12" key={index}>{
               <TrainingSessionCard trainings={training}></TrainingSessionCard>
              } </div>)
            })
           }
          </div>
          <div className="text-center">
            <Link to="/trainings" className="btn btn-outline-primary">
              Join Training Sessions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
