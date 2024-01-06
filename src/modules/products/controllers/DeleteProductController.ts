// src/modules/products/controllers/DeleteProductController.ts
import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export class DeleteProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const productId: string = req.params.id;

    try {
      await this.productService.deleteProduct(productId);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
