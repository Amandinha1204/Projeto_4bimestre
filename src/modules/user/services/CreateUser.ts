// src/modules/user/services/CreateUser.ts
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class CreateUser {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user: User = {
      id: String(Date.now()),
      username: createUserDTO.username,
      password: createUserDTO.password,
    };

    return this.userRepository.createUser(user);
  }
}
