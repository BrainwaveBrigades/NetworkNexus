import React, { useState } from 'react';
import { Users, UserCheck, MessageSquare } from 'lucide-react';

function Mentorship() {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      title: 'Tech Leadership Program',
      mentors: 12,
      mentees: 36,
      duration: '6 months',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Career Guidance 2024',
      mentors: 8,
      mentees: 24,
      duration: '3 months',
      status: 'Upcoming'
    }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Mentorship Programs</h1>
        <button className="button button-primary">Create New Program</button>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-title">Active Programs</div>
            <div className="stat-value">5</div>
          </div>
          <Users size={20} />
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-title">Total Mentors</div>
            <div className="stat-value">45</div>
          </div>
          <UserCheck size={20} />
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <div className="stat-title">Active Mentees</div>
            <div className="stat-value">135</div>
          </div>
          <MessageSquare size={20} />
        </div>
      </div>

      <div className="programs-grid">
        {programs.map(program => (
          <div key={program.id} className="program-card">
            <div className="program-header">
              <h3>{program.title}</h3>
              <span className={`status-badge ${program.status.toLowerCase()}`}>
                {program.status}
              </span>
            </div>
            
            <div className="program-stats">
              <div className="stat">
                <label>Mentors:</label>
                <span>{program.mentors}</span>
              </div>
              <div className="stat">
                <label>Mentees:</label>
                <span>{program.mentees}</span>
              </div>
              <div className="stat">
                <label>Duration:</label>
                <span>{program.duration}</span>
              </div>
            </div>

            <div className="program-actions">
              <button className="button button-secondary">View Details</button>
              <button className="button button-primary">Manage Program</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentorship;