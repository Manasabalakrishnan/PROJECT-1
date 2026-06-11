# Mini Job Portal

A Full Stack Job Portal Application built using React, Node.js, Express.js, and MongoDB.

## Features

### Recruiter Features

* Create Job Posting
* View Jobs
* Edit Jobs
* Delete Jobs
* View Applications

### Candidate Features

* Browse Jobs
* View Job Details
* Apply for Jobs

### Search & Filter

* Search by Job Title
* Search by Company Name
* Filter by Job Type
* Full Time
* Part Time
* Contract

### Validation

* Required Fields Validation
* Email Validation
* Salary Validation
* Phone Number Validation

## Tech Stack

### Frontend

* React.js
* React Router DOM
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

```text
MiniJobPortal/

client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── App.css
│   └── index.js

server/
├── models/
├── routes/
├── server.js
├── .env
└── package.json
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/mini-job-portal.git
cd mini-job-portal
```

## Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Run Backend

```bash
npm run dev
```

## Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend URL:

```text
http://localhost:3000
```

Backend URL:

```text
http://localhost:5000
```

## API Endpoints

### Jobs

```http
GET    /api/jobs
POST   /api/jobs
GET    /api/jobs/:id
PUT    /api/jobs/:id
DELETE /api/jobs/:id
```

### Applications

```http
POST /api/jobs/:id/apply
GET  /api/jobs/:id/applications
```

## Future Enhancements

* Authentication
* Recruiter Dashboard
* Candidate Dashboard
* Saved Jobs
* Resume Upload
* Pagination
* Sorting

## Author

Adithya Kolli

Mini Job Portal Full Stack Assignment
React • Node.js • Express.js • MongoDB
