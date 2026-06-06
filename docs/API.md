# UH Care - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Endpoints

### Authentication

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "1",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### Register
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}

Response:
{
  "message": "User registered successfully",
  "userId": "1"
}
```

### Appointments

#### Get All Appointments
```
GET /appointments
Authorization: Bearer <token>

Response:
[
  {
    "id": "1",
    "appointmentId": "APT001",
    "patientId": "PAT001",
    "staffId": "STF001",
    "appointmentDate": "2025-05-20T10:00:00Z",
    "serviceType": "Doctor Consultation",
    "status": "Confirmed",
    "notes": "Annual checkup"
  }
]
```

#### Create Appointment
```
POST /appointments
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "PAT001",
  "staffId": "STF001",
  "appointmentDate": "2025-05-20T10:00:00Z",
  "serviceType": "Doctor Consultation",
  "notes": "Annual checkup"
}

Response:
{
  "id": "1",
  "appointmentId": "APT001",
  "message": "Appointment created successfully"
}
```

#### Get Appointment by ID
```
GET /appointments/:id
Authorization: Bearer <token>

Response:
{
  "id": "1",
  "appointmentId": "APT001",
  "patientId": "PAT001",
  "staffId": "STF001",
  "appointmentDate": "2025-05-20T10:00:00Z",
  "serviceType": "Doctor Consultation",
  "status": "Confirmed"
}
```

#### Update Appointment
```
PUT /appointments/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "Completed",
  "notes": "Patient condition improved"
}

Response:
{
  "message": "Appointment updated successfully"
}
```

#### Delete Appointment
```
DELETE /appointments/:id
Authorization: Bearer <token>

Response:
{
  "message": "Appointment deleted successfully"
}
```

### Patients

#### Get All Patients
```
GET /patients
Authorization: Bearer <token>

Response:
[
  {
    "id": "1",
    "patientId": "PAT001",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+977-9816582625",
    "dateOfBirth": "1990-05-15",
    "gender": "Male",
    "bloodType": "O+",
    "address": "123 Main St"
  }
]
```

#### Create Patient
```
POST /patients
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+977-9816582625",
  "dateOfBirth": "1992-03-20",
  "gender": "Female",
  "bloodType": "A+",
  "address": "456 Oak Ave"
}

Response:
{
  "id": "2",
  "patientId": "PAT002",
  "message": "Patient created successfully"
}
```

### Pharmacy

#### Get Pharmacy Orders
```
GET /pharmacy
Authorization: Bearer <token>

Response:
[
  {
    "id": "1",
    "orderId": "PHA001",
    "patientId": "PAT001",
    "medicationName": "Paracetamol 500mg",
    "quantity": 10,
    "dosage": "1 tablet twice daily",
    "status": "Pending",
    "orderDate": "2025-05-20T10:00:00Z"
  }
]
```

#### Create Pharmacy Order
```
POST /pharmacy
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "PAT001",
  "medicationName": "Amoxicillin 250mg",
  "quantity": 20,
  "dosage": "1 capsule three times daily"
}

Response:
{
  "id": "2",
  "orderId": "PHA002",
  "message": "Pharmacy order created successfully"
}
```

### Lab Requests

#### Get Lab Requests
```
GET /lab
Authorization: Bearer <token>

Response:
[
  {
    "id": "1",
    "requestId": "LAB001",
    "patientId": "PAT001",
    "testType": "Blood Test",
    "status": "Completed",
    "requestDate": "2025-05-18T10:00:00Z",
    "resultDate": "2025-05-20T14:00:00Z",
    "result": "Normal"
  }
]
```

#### Create Lab Request
```
POST /lab
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "PAT001",
  "testType": "COVID-19 Test"
}

Response:
{
  "id": "2",
  "requestId": "LAB002",
  "message": "Lab request created successfully"
}
```

### Error Responses

```
400 Bad Request
{
  "error": "Invalid request parameters"
}

401 Unauthorized
{
  "error": "Authentication token required"
}

403 Forbidden
{
  "error": "Access denied"
}

404 Not Found
{
  "error": "Resource not found"
}

500 Internal Server Error
{
  "error": "An error occurred on the server"
}
```

## Status Codes

- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request
- `401 Unauthorized` - Missing or invalid authentication
- `403 Forbidden` - Access denied
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error
