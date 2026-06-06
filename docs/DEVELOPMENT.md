# UH Care Development Guide

## Getting Started

### Prerequisites
- Node.js v14+
- npm or yarn
- Git
- PostgreSQL or MongoDB
- Code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository**
```bash
git clone https://github.com/bhup-dev7/UH-Care.git
cd UH-Care
```

2. **Install all dependencies**
```bash
npm run install-all
```

3. **Configure environment variables**

Backend:
```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your settings
```

Frontend:
```bash
# Create frontend/.env file
REACT_APP_API_URL=http://localhost:5000/api
```

4. **Setup Database**
```bash
# PostgreSQL
psql -U postgres -f database/schema.sql

# Or MongoDB (use MongoDB Compass or command line)
mongorestore --uri "mongodb://localhost:27017/uh_care_db"
```

5. **Run the development server**
```bash
npm run dev
```

## Project Structure

```
UH-Care/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── README.md
├── database/
│   ├── schema.sql
│   ├── migrations/
│   └── README.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT.md
│   └── API.md
├── package.json
└── README.md
```

## Development Workflow

### Frontend Development

1. **Create React Components**
```bash
# Create new component
mkdir src/components/NewFeature
touch src/components/NewFeature/NewFeature.jsx
touch src/components/NewFeature/NewFeature.css
```

2. **Add Styling**
- Use CSS modules or inline styles
- Follow existing design patterns
- Maintain responsive design

3. **API Integration**
```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}/appointments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
  }
};
```

### Backend Development

1. **Create API Route**
```javascript
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.getAllAppointments);
router.post('/', appointmentController.createAppointment);
router.get('/:id', appointmentController.getAppointmentById);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
```

2. **Create Controller**
```javascript
const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
```

## Coding Standards

### JavaScript/React
- Use ES6+ syntax
- Follow ESLint rules
- Use meaningful variable names
- Add comments for complex logic

### CSS
- Use BEM naming convention
- Mobile-first approach
- Avoid inline styles (when possible)
- Use CSS variables for colors

### Database
- Use consistent naming conventions
- Add indexes for frequently queried fields
- Document schema changes
- Use migrations for schema updates

## Testing

```bash
# Run tests
npm test

# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## Debugging

### Frontend
- Use React Developer Tools
- Chrome DevTools
- Console logging

### Backend
- Use Node debugger
- VS Code debugger
- Console logging

## Common Issues & Solutions

### Port Already in Use
```bash
# Find process using port
lsof -i :5000
# Kill process
kill -9 <PID>
```

### Database Connection Issues
- Verify connection string in .env
- Check database service is running
- Verify user credentials

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [RESTful API Best Practices](https://restfulapi.net)
