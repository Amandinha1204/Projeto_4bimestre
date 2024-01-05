// src/routes/auth.ts
import { Router } from 'express';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      username,
      password,
    },
  });

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router;
