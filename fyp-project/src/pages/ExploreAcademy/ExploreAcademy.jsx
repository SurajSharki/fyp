import React from 'react';
import './ExploreAcademy.css';

const sportsAcademies = [
  {
    id: 1,
    name: 'Elite Football Academy',
    sport: 'Football',
    location: 'New York City, NY',
    description: 'A premier football academy focused on youth development and professional training.',
  },
  {
    id: 2,
    name: 'Slam Dunk Basketball Academy',
    sport: 'Basketball',
    location: 'Los Angeles, CA',
    description: 'Offering intensive basketball programs for players of all levels.',
  },
  {
    id: 3,
    name: 'Pro Tennis Academy',
    sport: 'Tennis',
    location: 'Miami, FL',
    description: 'Training the next generation of professional tennis players.',
  },
  {
    id: 4,
    name: 'Champions Swimming Academy',
    sport: 'Swimming',
    location: 'Austin, TX',
    description: 'Focused on competitive swimming with experienced coaches and world-class facilities.',
  },
];

const ExploreAcademy = () => {
  return (
    <div className="explore-academy">
      <h1 className="title">Explore Sports Academies</h1>
      <div className="academy-list">
        {sportsAcademies.map(academy => (
          <div className="academy-card" key={academy.id}>
            <h2>{academy.name}</h2>
            <p><strong>Sport:</strong> {academy.sport}</p>
            <p><strong>Location:</strong> {academy.location}</p>
            <p className="description">{academy.description}</p>
            <button className="explore-button">Explore Academy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreAcademy;

