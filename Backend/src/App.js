import express from 'express';
const app=express()
import UserRouter from './routes/Users.Routes.js'
app.use(express.json());
app.use('/api/v1/users',UserRouter)
export default app;