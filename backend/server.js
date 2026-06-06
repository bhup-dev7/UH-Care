const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'UH Care Healthcare Management System API',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Appointments Endpoints
app.get('/api/appointments', (req, res) => {
  res.json({
    message: 'Get all appointments',
    data: [
      {
        id: 1,
        appointmentId: 'APT001',
        patientId: 'PAT001',
        staffId: 'STF001',
        appointmentDate: '2025-05-20T10:00:00Z',
        serviceType: 'Doctor Consultation',
        status: 'Confirmed'
      }
    ]
  });
});

app.post('/api/appointments', (req, res) => {
  res.status(201).json({
    message: 'Appointment created successfully',
    data: req.body
  });
});

// Patients Endpoints
app.get('/api/patients', (req, res) => {
  res.json({
    message: 'Get all patients',
    data: [
      {
        id: 1,
        patientId: 'PAT001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+977-9816582625'
      }
    ]
  });
});

app.post('/api/patients', (req, res) => {
  res.status(201).json({
    message: 'Patient created successfully',
    data: req.body
  });
});

// Pharmacy Endpoints
app.get('/api/pharmacy', (req, res) => {
  res.json({
    message: 'Get all pharmacy orders',
    data: [
      {
        id: 1,
        orderId: 'PHA001',
        patientId: 'PAT001',
        medicationName: 'Paracetamol 500mg',
        quantity: 10,
        status: 'Pending'
      }
    ]
  });
});

app.post('/api/pharmacy', (req, res) => {
  res.status(201).json({
    message: 'Pharmacy order created successfully',
    data: req.body
  });
});

// Lab Endpoints
app.get('/api/lab', (req, res) => {
  res.json({
    message: 'Get all lab requests',
    data: [
      {
        id: 1,
        requestId: 'LAB001',
        patientId: 'PAT001',
        testType: 'Blood Test',
        status: 'Completed'
      }
    ]
  });
});

app.post('/api/lab', (req, res) => {
  res.status(201).json({
    message: 'Lab request created successfully',
    data: req.body
  });
});

// Equipment Endpoints
app.get('/api/equipment', (req, res) => {
  res.json({
    message: 'Get all equipment rentals',
    data: [
      {
        id: 1,
        rentalId: 'EQU001',
        patientId: 'PAT001',
        equipmentName: 'Wheelchair',
        status: 'Available'
      }
    ]
  });
});

// Physiotherapy Endpoints
app.get('/api/physiotherapy', (req, res) => {
  res.json({
    message: 'Get all physiotherapy sessions',
    data: [
      {
        id: 1,
        sessionId: 'PHY001',
        patientId: 'PAT001',
        therapistId: 'STF001',
        status: 'Scheduled'
      }
    ]
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ UH Care Backend Server running on http://localhost:${PORT}`);
  console.log(`📖 API Documentation: http://localhost:${PORT}/api`);
  console.log(`🏥 Healthcare Management System - Ready to serve!`);
});
