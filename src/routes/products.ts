// src/routes/products.ts
import { Router } from 'express';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

router.use((req, res, next) => {
  // Implementar middleware de autenticação aqui
  // Verificar se o usuário está autenticado antes de acessar as rotas protegidas
  // Para fins de exemplo, apenas permitimos o acesso sem autenticação
  next();
});

router.get('/', async (_, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
    },
  });
  res.json(newProduct);
});

export default router;
