// src/modules/user/services/UpdateUser.ts
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UpdateUser {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userId: string, updatedUser: User): Promise<User | undefined> {
    return this.userRepository.updateUser(userId, updatedUser);
  }
}
