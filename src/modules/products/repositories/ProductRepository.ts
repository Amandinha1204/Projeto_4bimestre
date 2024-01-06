// src/modules/products/repositories/ProductRepository.ts
import { Product } from '../entities/Product';
import { CreateProductDTO } from '../dtos/CreateProductDTO';

export class ProductRepository {
  private products: Product[] = [];

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct: Product = {
      id: 'generatedId', // Substitua por uma lógica real de geração de ID
      ...createProductDTO,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async getProductById(productId: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id === productId);
  }

  async updateProduct(productId: string, updatedProduct: Product): Promise<Product | undefined> {
    const index = this.products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }

    return undefined;
  }

  async deleteProduct(productId: string): Promise<void> {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
