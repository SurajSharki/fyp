import React from "react";
import EventCard from "../cards/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";

const EventsPage = () => {
  const [events, setEvent] = useState();

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/allEvents");
      console.log(response.data.data);
      setEvent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <h1>Explore our Events</h1>
      <div className="container">
        <div className="row">
          {events?.map((event) => (
            <div className="col-md-4" key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
