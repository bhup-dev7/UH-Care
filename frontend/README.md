# UH Care - Frontend Application

This directory contains the React-based frontend for the UH Care Healthcare Management System.

## Getting Started

### Prerequisites
- Node.js v14+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
# Development mode
npm start

# Production build
npm run build

# Run tests
npm test
```

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── Appointments/
│   │   ├── Pharmacy/
│   │   ├── Equipment/
│   │   ├── Lab/
│   │   ├── Physiotherapy/
│   │   ├── PatientManagement/
│   │   ├── StaffManagement/
│   │   ├── Header/
│   │   └── Sidebar/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── patients.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Technologies Used

- React 18+
- React Router
- Axios for API calls
- CSS3 / Tailwind CSS
- Redux (optional state management)
