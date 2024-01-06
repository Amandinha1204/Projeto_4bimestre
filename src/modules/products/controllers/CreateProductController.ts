// src/modules/products/controllers/CreateProductController.ts
import { Request, Response } from 'express';
import { ProductMapping } from '../mappings/ProductMapping';
import { ProductService } from '../services/ProductService';
import { CreateProductDTO } from '../dtos/CreateProductDTO';

export class CreateProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async execute(req: Request, res: Response): Promise<void> {
    const createProductDTO: CreateProductDTO = req.body;

    try {
      const product = await this.productService.createProduct(createProductDTO);
      const productDTO = ProductMapping.toDTO(product);
      res.status(201).json(productDTO);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
