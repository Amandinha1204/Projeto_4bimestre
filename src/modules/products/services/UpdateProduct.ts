// src/modules/products/services/UpdateProduct.ts
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class UpdateProduct {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async execute(productId: string, updatedProduct: Product): Promise<Product | undefined> {
    return this.productRepository.updateProduct(productId, updatedProduct);
  }
}
