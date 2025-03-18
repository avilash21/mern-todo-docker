//const express = require('express');  ---- Old Method to invoke/call Express

import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

import ProductRoutes from './routes/product.route.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/products", ProductRoutes);

 

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


//lU0wyL1ec8ZCeQeH