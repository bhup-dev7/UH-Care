# UH Care - Database

This directory contains database schemas, migrations, and seeders.

## Setup

### PostgreSQL Setup

```bash
# Create database
createdb uh_care_db

# Run migrations
npm run migrate

# Seed initial data
npm run seed
```

### Schema Files

- `appointments.sql` - Appointments table schema
- `patients.sql` - Patients table schema
- `staff.sql` - Staff members table schema
- `pharmacy.sql` - Pharmacy orders table schema
- `equipment.sql` - Equipment rentals table schema
- `lab.sql` - Lab requests table schema
- `physiotherapy.sql` - Physiotherapy sessions table schema

## Collections (MongoDB)

If using MongoDB, the following collections will be used:

- appointments
- patients
- staff
- pharmacy_orders
- equipment_rentals
- lab_requests
- physiotherapy_sessions
