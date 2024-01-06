// ProductService.ts
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';
import { CreateProductDTO } from '../dtos/CreateProductDTO';

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const product = await this.productRepository.createProduct(createProductDTO);
    return product;
  }

  async getProductById(productId: string): Promise<Product | undefined> {
    return this.productRepository.getProductById(productId);
  }

  async updateProduct(productId: string, updatedProduct: CreateProductDTO): Promise<Product | undefined> {
    // Aqui você pode implementar a lógica de atualização no repositório
    // Certifique-se de tratar os casos em que o produto não existe
    const existingProduct = await this.productRepository.getProductById(productId);

    if (!existingProduct) {
      return undefined; // Produto não encontrado
    }

    // Atualize as propriedades do produto existente com os valores do DTO
    const updatedProductInstance: Product = {
      id: existingProduct.id,
      name: updatedProduct.name,
      price: updatedProduct.price,
      description: updatedProduct.description,
    };

    // Atualize no repositório
    return await this.productRepository.updateProduct(productId, updatedProductInstance);
  }

  async deleteProduct(productId: string): Promise<void> {
    await this.productRepository.deleteProduct(productId);
  }

  // Outros métodos do serviço, se houver
}
