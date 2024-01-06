// src/modules/products/controllers/ReadProductController.ts
import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { ProductMapping } from '../mappings/ProductMapping';

export class ReadProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const productId: string = req.params.id;

    try {
      const product = await this.productService.getProductById(productId);
      if (product) {
        const productDTO = ProductMapping.toDTO(product);
        res.status(200).json(productDTO);
      } else {
        res.status(404).send('Product not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
