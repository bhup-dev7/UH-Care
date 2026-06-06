# UH Care - Documentation

## Project Overview

UH Care is a comprehensive healthcare management system for United Home Care, designed to streamline patient care, appointments, pharmacy, equipment rentals, laboratory services, and physiotherapy management.

## System Architecture

```
┌─────────────────────────────────────────┐
│       Frontend (React)                   │
│   - Dashboard                           │
│   - Appointments Management             │
│   - Patient Management                  │
│   - Pharmacy Orders                     │
│   - Equipment Rentals                   │
│   - Lab Requests                        │
│   - Physiotherapy Sessions              │
└──────────────┬──────────────────────────┘
               │ HTTP/REST API
┌──────────────┴──────────────────────────┐
│       Backend (Node.js/Express)         │
│   - Authentication & Authorization      │
│   - Business Logic                      │
│   - Database Operations                 │
│   - API Endpoints                       │
└──────────────┬──────────────────────────┘
               │ Database Driver
┌──────────────┴──────────────────────────┐
│       Database (PostgreSQL/MongoDB)     │
│   - Patient Records                     │
│   - Staff Information                   │
│   - Appointments                        │
│   - Orders & Services                   │
└─────────────────────────────────────────┘
```

## Key Features

### 1. Appointments Management
- Schedule and track patient appointments
- Automatic notifications
- Appointment status tracking
- Staff assignment

### 2. Patient Management
- Comprehensive patient profiles
- Medical history tracking
- Contact information management
- Health records storage

### 3. Pharmacy Management
- Medication inventory
- Prescription orders
- Order tracking
- Delivery management

### 4. Equipment Rentals
- Equipment inventory management
- Rental period tracking
- Availability status
- Rental history

### 5. Laboratory Services
- Lab test requests
- Result tracking
- Report generation
- Test history

### 6. Physiotherapy Management
- Session scheduling
- Progress tracking
- Session notes
- Treatment plans

## Data Models

### Patient
```javascript
{
  id: Number,
  patientId: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateOfBirth: Date,
  gender: String,
  bloodType: String,
  address: String,
  city: String,
  state: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment
```javascript
{
  id: Number,
  appointmentId: String,
  patientId: ObjectId,
  staffId: ObjectId,
  appointmentDate: DateTime,
  serviceType: String,
  status: String,
  notes: String,
  createdAt: Date
}
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
All requests require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Development Workflow

1. **Frontend Development**
   - React components development
   - UI/UX design implementation
   - API integration

2. **Backend Development**
   - REST API endpoint development
   - Database schema design
   - Business logic implementation

3. **Database**
   - Schema migrations
   - Data validation
   - Query optimization

## Deployment

### Frontend
- Build: `npm run build`
- Deploy to: Vercel, Netlify, or AWS S3

### Backend
- Deploy to: Heroku, AWS EC2, or DigitalOcean
- Environment variables configuration
- Database setup

## Security Considerations

- JWT-based authentication
- Password encryption with bcrypt
- CORS configuration
- Input validation
- SQL injection prevention
- XSS protection

## Performance Optimization

- Database indexing
- API response caching
- Lazy loading
- Image optimization
- Code splitting
