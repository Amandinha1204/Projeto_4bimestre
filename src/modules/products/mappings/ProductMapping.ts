// ProductMapping.ts
import { Product } from '../entities/Product';
import { CreateProductDTO } from '../dtos/CreateProductDTO';

export class ProductMapping {
  // Métodos de mapeamento, se necessário

  static toDTO(product: Product): CreateProductDTO {
    return {
      name: product.name,
      price: product.price,
      description: product.description,
      // Outros campos, se houver
    };
  }
}

export default ProductMapping; // Adicione esta linha se necessário
