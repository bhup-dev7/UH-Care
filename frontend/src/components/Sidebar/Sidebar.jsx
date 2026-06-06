import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', href: '#/' },
    { icon: '📅', label: 'Appointments', href: '#/appointments' },
    { icon: '🏠', label: 'Care at Home', href: '#/care-at-home' },
    { icon: '💊', label: 'Pharmacy', href: '#/pharmacy' },
    { icon: '🦽', label: 'Rental Equipment', href: '#/equipment' },
    { icon: '🧬', label: 'Lab', href: '#/lab' },
    { icon: '🏃', label: 'Physiotherapy', href: '#/physiotherapy' },
    { icon: '👥', label: 'Patients', href: '#/patients' },
    { icon: '👨‍⚕️', label: 'Staff', href: '#/staff' },
    { icon: '📊', label: 'Reports', href: '#/reports' },
    { icon: '💬', label: 'Messages', href: '#/messages' },
    { icon: '⚙️', label: 'Settings', href: '#/settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <div className="sidebar-promo">
          <h3>Compassionate Care at Your Doorstep</h3>
          <p>UH Care - United Home Care</p>
          <img src="https://via.placeholder.com/150" alt="Promo" />
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="menu-item">
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a href="#/logout" className="logout-btn">🚪 Logout</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
