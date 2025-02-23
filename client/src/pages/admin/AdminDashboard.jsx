import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Calendar,
  Activity,
  Settings as SettingsIcon,
  Sun,
  Moon,
  UserPlus,
  Award,
  Briefcase,
  Menu
} from 'lucide-react';
import "./styles/index.css";

// Import components
import User from './components/User';
import Events from './components/Events';
import Mentorship from './components/Mentorship';
import Internships from './components/Internships';
import Settings from './components/Settings';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeNav, setActiveNav] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeNav) {
      case 'users':
        return <User />;
      case 'events':
        return <Events />;
      case 'mentorship':
        return <Mentorship />;
      case 'internships':
        return <Internships />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-info">
                    <div className="stat-title">{stat.title}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                  {stat.icon}
                </div>
              ))}
            </div>

            <div className="content-grid">
              <div className="section-card">
                <div className="section-header">
                  <h2>Pending Approvals</h2>
                  <button className="button button-primary">View All</button>
                </div>
                <ul className="approval-list">
                  {pendingApprovals.map((approval, index) => (
                    <li key={index} className="approval-item">
                      <div>
                        <strong>{approval.name}</strong>
                        <p>{approval.type}</p>
                        <small>{approval.date}</small>
                      </div>
                      <div>
                        <button className="button button-secondary">Approve</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="section-card">
                <div className="section-header">
                  <h2>Recent Activity</h2>
                  <button className="button button-primary">View All</button>
                </div>
                <ul className="approval-list">
                  <li className="approval-item">
                    <div>
                      <strong>New Event Created</strong>
                      <p>Tech Career Fair 2024</p>
                      <small>2 hours ago</small>
                    </div>
                  </li>
                  <li className="approval-item">
                    <div>
                      <strong>Mentorship Program Updated</strong>
                      <p>Summer 2024 Batch</p>
                      <small>5 hours ago</small>
                    </div>
                  </li>
                  <li className="approval-item">
                    <div>
                      <strong>New Internship Posted</strong>
                      <p>Software Developer Intern</p>
                      <small>1 day ago</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
    }
  };

  const stats = [
    { title: 'Total Alumni', value: '2,547', icon: <Users size={20} /> },
    { title: 'Pending Approvals', value: '23', icon: <UserPlus size={20} /> },
    { title: 'Active Events', value: '12', icon: <Calendar size={20} /> },
    { title: 'Mentorship Programs', value: '45', icon: <Award size={20} /> }
  ];

  const pendingApprovals = [
    { name: 'John Smith', type: 'Alumni Registration', date: '2024-03-15' },
    { name: 'Sarah Johnson', type: 'Event Proposal', date: '2024-03-14' },
    { name: 'Mike Brown', type: 'Mentorship Application', date: '2024-03-13' }
  ];

  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="logo">
          <GraduationCap size={24} />
          <span>Alumni Admin</span>
        </div>
        <nav className="nav-items">
          {[
            { id: 'dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
            { id: 'users', icon: <Users size={20} />, label: 'Users' },
            { id: 'events', icon: <Calendar size={20} />, label: 'Events' },
            { id: 'mentorship', icon: <Award size={20} />, label: 'Mentorship' },
            { id: 'internships', icon: <Briefcase size={20} />, label: 'Internships' },
            { id: 'settings', icon: <SettingsIcon size={20} />, label: 'Settings' }
          ].map(item => (
            <li
              key={item.id}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveNav(item.id);
                if (window.innerWidth <= 768) {
                  setSidebarOpen(false);
                }
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="menu-toggle" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <h1>{activeNav.charAt(0).toUpperCase() + activeNav.slice(1)}</h1>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;