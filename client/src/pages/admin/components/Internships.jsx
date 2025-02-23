import React, { useState } from 'react';
import { Briefcase, Building2, MapPin } from 'lucide-react';

function Internships() {
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: 'Software Developer Intern',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      type: 'Summer Internship',
      positions: 3,
      applications: 45,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Marketing Coordinator Intern',
      company: 'Global Marketing Group',
      location: 'New York, NY',
      type: 'Fall Internship',
      positions: 2,
      applications: 28,
      status: 'Upcoming'
    }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Internship Opportunities</h1>
        <button className="button button-primary">Post New Internship</button>
      </div>

      <div className="internship-filters">
        <select className="filter-select">
          <option value="all">All Types</option>
          <option value="summer">Summer Internships</option>
          <option value="fall">Fall Internships</option>
          <option value="spring">Spring Internships</option>
        </select>
        <select className="filter-select">
          <option value="all">All Locations</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div className="internships-grid">
        {internships.map(internship => (
          <div key={internship.id} className="internship-card">
            <div className="internship-header">
              <h3>{internship.title}</h3>
              <span className={`status-badge ${internship.status.toLowerCase()}`}>
                {internship.status}
              </span>
            </div>
            
            <div className="company-info">
              <div className="info-item">
                <Building2 size={18} />
                <span>{internship.company}</span>
              </div>
              <div className="info-item">
                <MapPin size={18} />
                <span>{internship.location}</span>
              </div>
              <div className="info-item">
                <Briefcase size={18} />
                <span>{internship.type}</span>
              </div>
            </div>

            <div className="internship-stats">
              <div className="stat">
                <label>Positions:</label>
                <span>{internship.positions}</span>
              </div>
              <div className="stat">
                <label>Applications:</label>
                <span>{internship.applications}</span>
              </div>
            </div>

            <div className="internship-actions">
              <button className="button button-secondary">View Applications</button>
              <button className="button button-primary">Edit Posting</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;