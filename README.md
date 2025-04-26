
# 🐳 To-Do App — Docker Setup

This guide explains how to quickly set up the To-Do App using **Docker containers**, either locally or on an EC2 instance.

---

## 🚀 Getting Started with Docker

You can set up the project easily in two ways:

---

### Option 1: Using Docker Compose

1. Clone the `compose` branch of the repository:

```bash
git clone --single-branch --branch compose https://github.com/avilash21/mern-todo-docker.git
```

2. Navigate to the project directory:

```bash
cd mern-todo-docker
```

3. Start the containers:

```bash
docker compose up -d
```

That's it! 🚀 Your containers will be up and running in detached mode.

---

### Option 2: Pull Images Directly

If you prefer pulling prebuilt images manually:

1. Pull the frontend image:

```bash
docker pull avilash21/todo-frontend:latest
```

2. Pull the backend image:

```bash
docker pull avilash21/todo-backend:latest
```

You can then create and run containers manually using `docker run` commands.

---

## ☁️ Deploying on AWS EC2

Want to deploy the app on a cloud server like AWS? Easy!

1. **Provision an EC2 Instance** (preferably Ubuntu).
2. **Install Docker and Docker Compose** on your EC2 instance.
3. **Clone the repository** and **follow the same setup procedure** mentioned above (either `docker compose up` or pull images).
4. **Enable the Security Group**:
   - Open necessary ports (e.g., **5173** for frontend, **5000** for backend, and **27017** for MongoDB if needed).
   - Allow inbound traffic from anywhere (`0.0.0.0/0`) or restrict it as needed.
5. **Done!** 🎉  
   Your application will now be accessible via your EC2 public IP address.

---

## 📢 Notes

- Make sure Docker and Docker Compose are properly installed and running.
- Default ports:
  - Frontend: `http://localhost:5173`
  - Backend: `http://localhost:5000`
- MongoDB service is containerized when using Docker Compose.

---

## 🛠 Technologies Used

- Docker
- Docker Compose
- Node.js / Express.js (Backend)
- React.js / Vite (Frontend)
- MongoDB (Containerized)
