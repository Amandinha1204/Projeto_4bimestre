// src/index.ts
import express from 'express';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});