import express from 'express';
const app=express()
import cors from 'cors';
import UserRouter from './routes/Users.Routes.js'
import UserDetailsRoutes from './routes/UserDetails.Routes.js'
app.use(cors());

app.use(express.json());

app.use('/api/v1/users',UserRouter)
app.use('/api/v1/',UserDetailsRoutes)

export default app;
