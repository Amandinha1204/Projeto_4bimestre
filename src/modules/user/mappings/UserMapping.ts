// src/modules/user/mappings/UserMapping.ts

import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';

export class UserMapping {
  static toEntity(createUserDTO: CreateUserDTO): User {
    return {
      id: 'generatedId', // Substitua por uma lógica real de geração de ID
      username: createUserDTO.username,
      password: createUserDTO.password,
    };
  }

  static toDTO(user: User): CreateUserDTO {
    return {
      username: user.username,
      password: user.password,
    };
  }
}
