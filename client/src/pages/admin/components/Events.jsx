import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      date: '2024-04-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Campus Hall',
      attendees: 156,
      type: 'Career Fair'
    },
    {
      id: 2,
      title: 'Alumni Networking Night',
      date: '2024-04-20',
      time: '6:00 PM - 9:00 PM',
      location: 'City Conference Center',
      attendees: 89,
      type: 'Networking'
    }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Events Management</h1>
        <button className="button button-primary">Create New Event</button>
      </div>

      <div className="event-tabs">
        <button className="tab active">Upcoming Events</button>
        <button className="tab">Past Events</button>
        <button className="tab">Draft Events</button>
      </div>

      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-header">
              <h3>{event.title}</h3>
              <span className="event-type">{event.type}</span>
            </div>
            
            <div className="event-details">
              <div className="detail-item">
                <Calendar size={18} />
                <span>{event.date}</span>
              </div>
              <div className="detail-item">
                <Clock size={18} />
                <span>{event.time}</span>
              </div>
              <div className="detail-item">
                <MapPin size={18} />
                <span>{event.location}</span>
              </div>
              <div className="detail-item">
                <Users size={18} />
                <span>{event.attendees} Attendees</span>
              </div>
            </div>

            <div className="event-actions">
              <button className="button button-secondary">View Details</button>
              <button className="button button-primary">Edit Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;