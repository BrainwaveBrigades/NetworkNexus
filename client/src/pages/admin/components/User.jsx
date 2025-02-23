import React, { useState } from 'react';
import { UserPlus, Search, Filter } from 'lucide-react';

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Smith', type: 'Alumni', graduationYear: 2020, status: 'Active' },
    { id: 2, name: 'Sarah Johnson', type: 'Student', graduationYear: 2024, status: 'Pending' },
    { id: 3, name: 'Mike Brown', type: 'Alumni', graduationYear: 2019, status: 'Active' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredUsers = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(user => filter === 'all' || user.status.toLowerCase() === filter);

  return (
    <div>
      <div className="page-header">
        <h1>Users Management</h1>
        <button className="button button-primary">
          <UserPlus size={20} />
          <span>Add New User</span>
        </button>
      </div>

      <div className="filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-box">
          <Filter size={20} />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="users-grid">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.type}</p>
              <p>Class of {user.graduationYear}</p>
              <span className={`status-badge ${user.status.toLowerCase()}`}>
                {user.status}
              </span>
            </div>
            <div className="user-actions">
              <button className="button button-secondary">View Profile</button>
              <button className="button button-primary">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;