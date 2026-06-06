import React from 'react';
import '../styles/Header.css';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          ☰
        </button>
        <div className="logo">
          <h1>❤️ UH Care</h1>
        </div>
      </div>

      <div className="header-center">
        <div className="search-box">
          <input type="text" placeholder="Search here..." />
          <button>🔍</button>
        </div>
      </div>

      <div className="header-right">
        <div className="notifications">
          <button className="notification-btn">🔔 <span className="badge">3</span></button>
        </div>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="avatar" />
          <div className="user-info">
            <p className="user-name">Admin User</p>
            <p className="user-role">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
