import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/mongoConnection';
import userRoutes from '../interfaces/routes/userRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();


app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});