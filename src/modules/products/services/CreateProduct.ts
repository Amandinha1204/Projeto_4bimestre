// src/modules/products/services/CreateProduct.ts
import { CreateProductDTO } from '../dtos/CreateProductDTO';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class CreateProduct {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async execute(createProductDTO: CreateProductDTO): Promise<Product> {
    const product: Product = {
      id: String(Date.now()),
      name: createProductDTO.name,
      price: createProductDTO.price,
      description: createProductDTO.description,
    };

    return this.productRepository.createProduct(product);
  }
}
