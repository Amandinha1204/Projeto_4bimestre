// src/modules/products/services/DeleteProduct.ts
import { ProductRepository } from '../repositories/ProductRepository';

export class DeleteProduct {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async execute(productId: string): Promise<void> {
    return this.productRepository.deleteProduct(productId);
  }
}
