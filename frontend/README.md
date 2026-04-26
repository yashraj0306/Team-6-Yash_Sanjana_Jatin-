# Student Team Members Management Application

## Project Overview
A full stack web application to manage student team members built using React.js for frontend and Node.js, Express.js, MongoDB for backend.

## Technologies Used

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Multer
- CORS

## Folder Structure
```
final/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── uploads/
└── frontend/
    └── src/
        ├── index.js
        ├── App.js
        ├── App.css
        ├── Home.js
        ├── AddMember.js
        ├── ViewMembers.js
        └── MemberDetails.js
```

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- npm

### Backend Setup
```
cd backend
npm install
node server.js
```

### Frontend Setup
```
cd frontend
npm install
npm start
```

## How to Run
1. Start MongoDB
2. Open Terminal 1 and run backend:
```
cd backend
node server.js
```
3. Open Terminal 2 and run frontend:
```
cd frontend
npm start
```
4. Open browser and go to `http://localhost:3000`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/members | Get all members |
| GET | /api/members/:id | Get single member |
| POST | /api/members | Add new member |
| DELETE | /api/members/:id | Delete a member |

## Pages
- **Home** - Welcome page with Add Member and View Members buttons
- **Add Member** - Form to add a new member with image upload
- **View Members** - Shows all members as cards
- **Member Details** - Shows full details of a single member

## Member Fields
- Full Name
- Role
- Email
- Phone
- Register Number
- Year
- Department
- About
- Profile Image

## Ports
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: mongodb://127.0.0.1:27017/teamdb
