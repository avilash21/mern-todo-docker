# 📝 To-Do App

A simple full-stack To-Do application to manage your daily tasks easily.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/avilash21/mern-todo-docker.git
```


### 2. Setup Backend

Navigate to the backend folder:

```bash
cd backend
```

#### Configure the Database

- Create a MongoDB database.  
- Follow this tutorial to set up your MongoDB Atlas database and get your connection URI:  
  📚 [Watch Here](https://www.youtube.com/watch?v=O3BUHwfHf84&t=7904s)

- Create a `.env` file inside the `backend` folder and add the following:

```
MONGO_URL=your-mongodb-connection-url
PORT=5000
```

Replace `your-mongodb-connection-url` with the actual connection string from MongoDB.

#### Install Backend Dependencies

```bash
npm install
```

---

### 3. Setup Frontend

Navigate to the frontend folder:

```bash
cd ../frontend
```

#### Install Frontend Dependencies

```bash
npm install
```

#### Run the Frontend

```bash
npm run dev
```

Your app should now be running at:

```
http://localhost:5173
```

---

## 📂 Project Structure (Basic)

```
/backend
    |-- config/
    |   |-- db.js
    |-- models/
    |   |-- product.model.js
    |-- routes/
    |   |-- product.routes.js
    |-- controllers/
    |   |-- product.controller.js
    |-- server.js

/frontend
    |-- src/
    |   |-- components/
    |   |-- App.jsx
    |-- public/
    |-- package.json
    |-- vite.config.js

```

---

## 🛠 Technologies Used

- **Backend:** Node.js, Express.js, MongoDB (Atlas), Mongoose, dotenv
- **Frontend:** React.js, Vite

---

## 📢 Notes

- Ensure MongoDB Atlas is properly set up and connected.
- Backend runs on **http://localhost:5000**.
- Frontend runs on **http://localhost:5173**.
