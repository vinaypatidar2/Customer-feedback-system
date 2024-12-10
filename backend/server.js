import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import './config/db.js';
import authRoutes from './routes/authRoute.js';
import feedbackRoutes from './routes/feedbackRoute.js';
import cors from 'cors';
dotenv.config();
// connectDB();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//     res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//     next();
// });

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/feedback', feedbackRoutes);
app.get('/', (req, res)=>{
    res.send("<h1> WELOME </h1>")
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
