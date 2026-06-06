import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [appointments, setAppointments] = useState(25);
  const [careAtHome, setCareAtHome] = useState(12);
  const [pharmacyOrders, setPharmacyOrders] = useState(18);
  const [equipmentRentals, setEquipmentRentals] = useState(10);
  const [labRequests, setLabRequests] = useState(14);
  const [physiotherapy, setPhysiotherapy] = useState(9);

  return (
    <div className="dashboard">
      <h1>Welcome back, Admin User!</h1>
      <p>Here's what's happening at UH Care today.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon appointments">📅</div>
          <div className="stat-content">
            <h3>Appointments</h3>
            <p className="stat-number">{appointments}</p>
            <span className="stat-label">Today</span>
            <span className="stat-change">↑ 12% from yesterday</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon care">🏠</div>
          <div className="stat-content">
            <h3>Care at Home</h3>
            <p className="stat-number">{careAtHome}</p>
            <span className="stat-label">Active Cases</span>
            <span className="stat-change">↑ 8% from yesterday</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon pharmacy">💊</div>
          <div className="stat-content">
            <h3>Pharmacy Orders</h3>
            <p className="stat-number">{pharmacyOrders}</p>
            <span className="stat-label">Pending Orders</span>
            <span className="stat-change">↑ 5% from yesterday</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon equipment">🦽</div>
          <div className="stat-content">
            <h3>Equipment Rentals</h3>
            <p className="stat-number">{equipmentRentals}</p>
            <span className="stat-label">Active Rentals</span>
            <span className="stat-change">↑ 3% from yesterday</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon lab">🧬</div>
          <div className="stat-content">
            <h3>Lab Requests</h3>
            <p className="stat-number">{labRequests}</p>
            <span className="stat-label">Pending Reports</span>
            <span className="stat-change">↑ 7% from yesterday</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon physio">🏃</div>
          <div className="stat-content">
            <h3>Physiotherapy</h3>
            <p className="stat-number">{physiotherapy}</p>
            <span className="stat-label">Today's Sessions</span>
            <span className="stat-change">↑ 4% from yesterday</span>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="appointments-section">
          <h2>📋 Today's Appointments</h2>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient</th>
                <th>Service</th>
                <th>Staff</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00 AM</td>
                <td>John Doe (UH234)</td>
                <td>Doctor Consultation</td>
                <td>Dr. Sarah Khan</td>
                <td>Doctor</td>
                <td><span className="badge confirmed">Confirmed</span></td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>Maryam Ali (UH256)</td>
                <td>Nursing Care</td>
                <td>Nurse Ayesha</td>
                <td>Nurse</td>
                <td><span className="badge confirmed">Confirmed</span></td>
              </tr>
              <tr>
                <td>11:30 AM</td>
                <td>Ahmed Raza (UH261)</td>
                <td>Physiotherapy</td>
                <td>Ali Hamza</td>
                <td>Physio</td>
                <td><span className="badge pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
