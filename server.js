import express from "express";
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to Blog API')
})

app.use('/api/blog', blogRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})