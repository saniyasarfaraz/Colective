# 🌐 Colective – A Team Collaboration Portal

Colective is a web-based team collaboration and project management platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers students, teams, and small organizations to effectively plan, execute, and monitor their projects with integrated features like task assignment, real-time updates, progress tracking, and role-based access control.

Designed for simplicity, scalability, and a seamless user experience, Colective enables users to stay organized, communicate clearly, and meet deadlines — all from a centralized platform.

---

## 🧠 Core Features

- 🔐 **Authentication**

  - Secure login and registration using JWT
  - OTP-based verification through EmailJS

- 🗂 **Project Management**

  - Create, manage, and delete projects
  - Assign roles (Manager, Team Member)
  - Invite members to projects

- ✅ **Task Management**

  - Create, edit, assign, and track tasks
  - Priority labels (High, Medium, Low)
  - Status indicators (Not Started, In Progress, Completed)
  - Task-based comments for contextual discussion

- 📊 **Progress Tracking**

  - Visual dashboards with graphs and pie charts
  - Task completion statistics

- 🔔 **Real-Time Updates**
  - Live notifications for project invitation (using Socket.io)

---

## 🛠 Tech Stack

Frontend - React.js, Tailwind CSS, React Router DOM  
 Backend - Node.js, Express.js  
 Database - MongoDB (MongoDB Atlas for deployment)  
 Authentication - JWT, bcrypt, EmailJS  
 Real-time Communication - Socket.io

---

## 📁 Folder Structure

```
Colective/
├── Colective-Client/      # React frontend with Tailwind CSS
├── Colective-Server/      # Node.js and Express backend
├── LandingPage/           # Separate landing page (TypeScript)
└── README.md              # Project documentation
```

---

## ⚙️ Getting Started

Follow the steps below to run the project on your local machine:

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB Atlas connection string (or local MongoDB instance)
- Environment variables set (`.env` files)

---

### 💻 Step-by-Step Setup

1. **Clone the repository**

```bash
git clone https://github.com/saniyasarfaraz/Colective.git
cd Colective
```

2. **Start the backend server**

```bash
cd Colective-Server
npm install
npm start
```

3. **Start the frontend client**

```bash
cd Colective-Client
npm install
npm run dev
```

4. **Start the Landing Page**

```bash
cd LandingPage
npm install
npm run dev
```

---

## 🔐 Environment Variables

### `Colective-Server/.env`

```env
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### `Colective-Client/.env`

```env
VITE_REACT_APP_API_BASE_URL=http://localhost:3001
```

### `LandingPage/.env`

```env
VITE_Client_URL= http://localhost:5718
```

---

## 🧪 Testing

- Unit testing using Jest and React Testing Library.
- API testing using Postman collections.
- Usability testing conducted with students to optimize user experience.

---

## ☁️ Deployment

- Colective-Server deployed on Render
- Colective-Client deployed on Vercel
- LandingPage deployed on Vercel

### Access the Website

Live Link - [https://colective-landing-page.vercel.app/](https://colective-landing-page.vercel.app/)
