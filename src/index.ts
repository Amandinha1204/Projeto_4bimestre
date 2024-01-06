// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';

import { CreateUserController } from './modules/user/controllers/CreateUserController';
import { ReadUserController } from './modules/user/controllers/ReadUserController';
import { UpdateUserController } from './modules/user/controllers/UpdateUserController';
import { DeleteUserController } from './modules/user/controllers/DeleteUserController';

import { CreateProductController } from './modules/products/controllers/CreateProductController';
import { ReadProductController } from './modules/products/controllers/ReadProductController';
import { UpdateProductController } from './modules/products/controllers/UpdateProductController';
import { DeleteProductController } from './modules/products/controllers/DeleteProductController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// User Routes
const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

// Product Routes
const createProductController = new CreateProductController();
const readProductController = new ReadProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

// User Routes
app.post('/users', (req, res) => createUserController.execute(req, res));
app.get('/users/:id', (req, res) => readUserController.execute(req, res));
app.put('/users/:id', (req, res) => updateUserController.execute(req, res));
app.delete('/users/:id', (req, res) => deleteUserController.execute(req, res));

// Product Routes
app.post('/products', (req, res) => createProductController.execute(req, res));
app.get('/products/:id', (req, res) => readProductController.execute(req, res));
app.put('/products/:id', (req, res) => updateProductController.execute(req, res));
app.delete('/products/:id', (req, res) => deleteProductController.execute(req, res));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
