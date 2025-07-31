import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      {/* Add this new div for the card */}
      <div className='dashboard-card'>
        <h1>Login Successful! ✅</h1>
        <p>Welcome to your dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;