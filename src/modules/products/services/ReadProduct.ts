// src/modules/products/services/ReadProduct.ts
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class ReadProduct {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async execute(productId: string): Promise<Product | undefined> {
    return this.productRepository.getProductById(productId);
  }
}
